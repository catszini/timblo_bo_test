// 사이드바 2단계 서브메뉴 지속 토글
(function () {
  // 메뉴 JS 준비 완료 표시 (CSS 숨김 상태 방지)
  document.documentElement.classList.add('menu-ready');
  
  function getKey(liEl) {
    const a = liEl.querySelector(':scope > a');
    if (!a) return null;
    // href가 의미있으면 우선, 없으면 텍스트로 폴백
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
      // 무시
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

    // 초기에 모든 서브메뉴 닫기
    submenuParents.forEach(li => li.classList.remove('open'));

    // 저장된 상태에서 다시 열기
    submenuParents.forEach(li => {
      const key = getKey(li);
      if (key && state.includes(key)) {
        li.classList.add('open');
      }
    });

    // 현재 페이지가 서브메뉴 내부에 있으면 열기
    submenuParents.forEach(li => {
      const hasActiveChild = !!li.querySelector(':scope > .submenu a.active');
      if (hasActiveChild) {
        li.classList.add('open');
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

    // 메뉴 화살표 클릭 시 서브메뉴 토글
    submenuParents.forEach(li => {
      const a = li.querySelector(':scope > a');
      if (!a) return;
      
      // 전체 링크에 클릭 핸들러 추가
      a.addEventListener('click', function (e) {
        // 클릭된 요소가 화살표 이미지인지 확인
        if (e.target.classList.contains('menu-arrow')) {
          e.preventDefault();
          e.stopPropagation();
          const willOpen = !li.classList.contains('open');
          setOpen(li, willOpen, state);
          return;
        }
        
        // 서브메뉴가 있고 현재 활성 메뉴(현재 페이지)인 경우 네비게이션 방지
        if (a.classList.contains('active') && li.querySelector(':scope > .submenu')) {
          e.preventDefault();
          const willOpen = !li.classList.contains('open');
          setOpen(li, willOpen, state);
          return;
        }
        
        // 그 외의 경우 일반 네비게이션 허용
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
