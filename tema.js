'use strict';

(() => {
  const storageKey = 'sh-esotericos-theme';
  const root = document.documentElement;
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');

  function readPreference() {
    try {
      const stored = localStorage.getItem(storageKey);
      return stored === 'dark' || stored === 'light' ? stored : null;
    } catch {
      return null;
    }
  }

  function storePreference(theme) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch {
      // El tema sigue funcionando durante la sesión aunque el navegador bloquee el almacenamiento.
    }
  }

  function updateControls(theme) {
    const isDark = theme === 'dark';
    const label = isDark
      ? 'Apagar la vela y activar el modo claro'
      : 'Encender la vela y activar el modo oscuro';

    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.setAttribute('aria-pressed', String(isDark));
      button.setAttribute('aria-label', label);
      button.title = label;
    });

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.content = isDark ? '#1e1e1d' : '#f5f5f3';
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    updateControls(theme);
  }

  applyTheme(readPreference() || (systemPreference.matches ? 'dark' : 'light'));

  document.addEventListener('DOMContentLoaded', () => {
    updateControls(root.dataset.theme);

    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.addEventListener('click', () => {
        const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
        storePreference(nextTheme);
      });
    });
  });

  const followSystemPreference = (event) => {
    if (!readPreference()) applyTheme(event.matches ? 'dark' : 'light');
  };

  if (systemPreference.addEventListener) {
    systemPreference.addEventListener('change', followSystemPreference);
  } else {
    systemPreference.addListener(followSystemPreference);
  }

  window.addEventListener('storage', (event) => {
    if (event.key === storageKey && (event.newValue === 'dark' || event.newValue === 'light')) {
      applyTheme(event.newValue);
    }
  });
})();
