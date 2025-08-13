// Sidebar 2-depth submenu persistent toggle
(function () {
  // Mark when menu JS is ready to avoid CSS hidden state
  document.documentElement.classList.add('menu-ready');
  function getKey(liEl) {
    const a = liEl.querySelector(':scope > a');
    if (!a) return null;
    // prefer href if meaningful, fallback to text
    const href = a.getAttribute('href');
    const text = (a.textContent || '').trim();
    return (href && href !== '#') ? `href:${href}` : `text:${text}`;
  }

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem('openSubmenus') || '[]');
    } catch (e) {
      return [];
    }
  }

  function saveState(state) {
    try {
      localStorage.setItem('openSubmenus', JSON.stringify(state));
    } catch (e) {
      // ignore
    }
  }

  function setOpen(liEl, willOpen, state) {
    const key = getKey(liEl);
    if (!key) return;
    if (willOpen) {
      liEl.classList.add('open');
      if (!state.includes(key)) state.push(key);
    } else {
      liEl.classList.remove('open');
      const idx = state.indexOf(key);
      if (idx >= 0) state.splice(idx, 1);
    }
    saveState(state);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;
    const submenuParents = Array.from(sidebar.querySelectorAll('.menu-section > ul > li'))
      .filter(li => li.querySelector(':scope > .submenu'));

    const state = loadState();

    // Initially collapse all
    submenuParents.forEach(li => li.classList.remove('open'));

    // Re-open from state
    submenuParents.forEach(li => {
      const key = getKey(li);
      if (key && state.includes(key)) {
        li.classList.add('open');
      }
    });

    // Also open if current page is active within submenu
    submenuParents.forEach(li => {
      const hasActiveChild = !!li.querySelector(':scope > .submenu a.active');
      if (hasActiveChild) li.classList.add('open');
    });

    // Toggle on click of the 1-depth anchor
    submenuParents.forEach(li => {
      const a = li.querySelector(':scope > a');
      if (!a) return;
      a.addEventListener('click', function (e) {
        const submenu = li.querySelector(':scope > .submenu');
        if (!submenu) return; // safety
        const willOpen = !li.classList.contains('open');
        setOpen(li, willOpen, state);
        // Prevent default only for anchors that are category toggles (href="#" or no href)
        const href = a.getAttribute('href');
        if (!href || href === '#') {
          e.preventDefault();
        }
        // If navigating to another page, state is already saved and will be restored there
      });
    });
  });
})();


