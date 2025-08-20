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
      if (hasActiveChild) {
        li.classList.add('open');
        console.log('Opening submenu for:', li.querySelector('a').textContent.trim());
      }
    });

    // 활성 메뉴로 스크롤하는 함수
    function scrollToActiveMenu() {
      // 활성 메뉴 찾기 (서브메뉴 내부 또는 메인 메뉴)
      const activeMenu = sidebar.querySelector('a.active');
      if (!activeMenu) return;

      const menuSection = activeMenu.closest('.menu-section');
      if (!menuSection) return;

      // 약간의 지연을 두어 서브메뉴 애니메이션이 완료된 후 스크롤
      setTimeout(() => {
        const sidebarRect = sidebar.getBoundingClientRect();
        const activeRect = activeMenu.getBoundingClientRect();
        const menuSectionRect = menuSection.getBoundingClientRect();
        
        // 사이드바 내에서의 상대적 위치 계산
        const relativeTop = activeRect.top - sidebarRect.top + sidebar.scrollTop;
        
        // 활성 메뉴가 사이드바 중앙에 오도록 스크롤 위치 계산
        const sidebarHeight = sidebar.clientHeight;
        const targetScrollTop = relativeTop - (sidebarHeight / 2) + (activeRect.height / 2);
        
        // 스크롤 범위 제한
        const maxScrollTop = sidebar.scrollHeight - sidebar.clientHeight;
        const finalScrollTop = Math.max(0, Math.min(targetScrollTop, maxScrollTop));
        
        // 부드러운 스크롤
        sidebar.scrollTo({
          top: finalScrollTop,
          behavior: 'smooth'
        });
      }, 300); // 서브메뉴 애니메이션 시간을 고려한 지연
    }

    // 페이지 로드 시 활성 메뉴로 스크롤
    scrollToActiveMenu();

    // Toggle on click of the menu arrow (for submenu toggle)
    submenuParents.forEach(li => {
      const a = li.querySelector(':scope > a');
      if (!a) return;
      
      // Add click handler specifically for the arrow image
      a.addEventListener('click', function (e) {
        // Check if the clicked element is the arrow image
        if (e.target.classList.contains('menu-arrow')) {
          e.preventDefault();
          e.stopPropagation();
          const willOpen = !li.classList.contains('open');
          console.log('Arrow clicked for:', a.textContent.trim(), 'willOpen:', willOpen);
          setOpen(li, willOpen, state);
          console.log('Submenu state after arrow click:', li.classList.contains('open'));
        }
        // If click is on the text area, let the normal navigation happen
      });
    });

    // 사이드바 높이 동적 조정 함수
    function adjustSidebarHeight() {
      const sidebar = document.querySelector('.sidebar');
      const content = document.querySelector('.content');
      
      if (!sidebar || !content) return;
      
      // 콘텐츠와 사이드바의 실제 높이 계산
      const contentHeight = content.scrollHeight;
      const sidebarContentHeight = sidebar.scrollHeight;
      const viewportHeight = window.innerHeight;
      
      // 콘텐츠가 화면보다 길고, 사이드바보다 길 경우
      if (contentHeight > viewportHeight && contentHeight > sidebarContentHeight) {
        sidebar.classList.add('content-height');
        sidebar.classList.remove('auto-height');
      } else {
        sidebar.classList.add('auto-height');
        sidebar.classList.remove('content-height');
      }
    }
    
    // 초기 조정
    adjustSidebarHeight();
    
    // 윈도우 리사이즈 시 재조정
    window.addEventListener('resize', adjustSidebarHeight);
    
    // 메뉴 토글 시 재조정
    submenuParents.forEach(li => {
      const observer = new MutationObserver(adjustSidebarHeight);
      observer.observe(li, { attributes: true, attributeFilter: ['class'] });
    });
  });
})();


