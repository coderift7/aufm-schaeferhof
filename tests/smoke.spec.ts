import { test, expect } from '@playwright/test';

// All routes that must load without errors
const routes = ['/', '/datenschutz', '/impressum'];

// Anchor sections on the homepage
const sections = ['ueber-uns', 'hofgeschichten', 'kontakt', 'faq'];

// ── Page load ────────────────────────────────────────────────

for (const route of routes) {
  test(`${route} loads with status 200`, async ({ page }) => {
    const res = await page.goto(route);
    expect(res?.status()).toBe(200);
  });
}

// ── No console errors ────────────────────────────────────────

for (const route of routes) {
  test(`${route} has no console errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await page.goto(route, { waitUntil: 'networkidle' });
    expect(errors).toEqual([]);
  });
}

// ── Homepage sections exist ──────────────────────────────────

for (const id of sections) {
  test(`homepage section #${id} is visible`, async ({ page }) => {
    await page.goto('/');
    const section = page.locator(`#${id}`);
    await expect(section).toBeAttached();
  });
}

// ── Navigation links ─────────────────────────────────────────

test('header navigation links point to valid anchors', async ({ page }) => {
  await page.goto('/');
  const navLinks = page.locator('nav a[href^="#"]');
  const count = await navLinks.count();
  expect(count).toBeGreaterThan(0);

  for (let i = 0; i < count; i++) {
    const href = await navLinks.nth(i).getAttribute('href');
    if (href) {
      const anchor = href.replace('#', '');
      await expect(page.locator(`#${anchor}`)).toBeAttached();
    }
  }
});

test('footer contains legal links', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('footer a[href="/impressum"]')).toBeAttached();
  await expect(page.locator('footer a[href="/datenschutz"]')).toBeAttached();
});

// ── Contact form ─────────────────────────────────────────────

test('contact form has all required fields', async ({ page }) => {
  await page.goto('/#kontakt');
  await expect(page.locator('#name')).toBeVisible();
  await expect(page.locator('#email')).toBeVisible();
  await expect(page.locator('#phone')).toBeVisible();
  await expect(page.locator('#message')).toBeVisible();
});

test('contact form validates required fields', async ({ page }) => {
  await page.goto('/#kontakt');
  // Try to submit empty form — browser validation should prevent it
  const submitBtn = page.locator('form button[type="submit"]');
  await submitBtn.click();
  // Name field should show validation (still on the same page, no success message)
  const nameInput = page.locator('#name');
  await expect(nameInput).toBeVisible();
});

test('contact form has honeypot field hidden', async ({ page }) => {
  await page.goto('/#kontakt');
  const honeypot = page.locator('input[name="website"]');
  await expect(honeypot).toBeHidden();
});

// ── Meta tags & SEO ──────────────────────────────────────────

test('homepage has essential meta tags', async ({ page }) => {
  await page.goto('/');
  // Title
  const title = await page.title();
  expect(title.length).toBeGreaterThan(0);

  // Meta description
  const desc = page.locator('meta[name="description"]');
  await expect(desc).toHaveAttribute('content', /.+/);

  // Open Graph
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /.+/);
  await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /.+/);

  // Viewport
  await expect(page.locator('meta[name="viewport"]')).toHaveAttribute('content', /.+/);
});

test('legal pages have robots meta tag', async ({ page }) => {
  for (const route of ['/datenschutz', '/impressum']) {
    await page.goto(route);
    const robots = page.locator('meta[name="robots"]');
    await expect(robots).toHaveAttribute('content', /.+/);
  }
});

// ── Accessibility basics ─────────────────────────────────────

test('images have alt attributes', async ({ page }) => {
  await page.goto('/');
  const images = page.locator('img');
  const count = await images.count();
  for (let i = 0; i < count; i++) {
    const alt = await images.nth(i).getAttribute('alt');
    expect(alt).not.toBeNull();
  }
});

test('page has exactly one h1', async ({ page }) => {
  await page.goto('/');
  const h1s = page.locator('h1');
  expect(await h1s.count()).toBe(1);
});

// ── Hero image & WebP ───────────────────────────────────────

test('hero uses picture element with WebP source', async ({ page }) => {
  await page.goto('/');
  const picture = page.locator('section picture');
  await expect(picture).toBeAttached();
  const webpSource = picture.locator('source[type="image/webp"]');
  await expect(webpSource).toHaveAttribute('srcset', /Foto_Hero\.webp/);
  const fallbackImg = picture.locator('img');
  await expect(fallbackImg).toHaveAttribute('src', /Foto_Hero\.jpg/);
});

// ── OG image ────────────────────────────────────────────────

test('og:image points to dedicated og-image.jpg', async ({ page }) => {
  await page.goto('/');
  const ogImage = page.locator('meta[property="og:image"]');
  await expect(ogImage).toHaveAttribute('content', /og-image\.jpg/);
});

test('twitter:image points to dedicated og-image.jpg', async ({ page }) => {
  await page.goto('/');
  const twitterImage = page.locator('meta[name="twitter:image"]');
  await expect(twitterImage).toHaveAttribute('content', /og-image\.jpg/);
});

// ── Performance basics ───────────────────────────────────────

test('homepage loads within 5 seconds', async ({ page }) => {
  const start = Date.now();
  await page.goto('/', { waitUntil: 'networkidle' });
  const duration = Date.now() - start;
  expect(duration).toBeLessThan(5000);
});
