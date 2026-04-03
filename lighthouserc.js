module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npx serve out -l 8080',
      url: [
        'http://localhost:8080/',
        'http://localhost:8080/datenschutz',
        'http://localhost:8080/impressum',
      ],
      numberOfRuns: 1,
      settings: {
        preset: 'desktop',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.8 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.8 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
