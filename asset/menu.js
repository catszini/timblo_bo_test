// 사이드바 2단계 서브메뉴 지속 토글
(function () {
  // 메뉴 JS 준비 완료 표시 (CSS 숨김 상태 방지)
  document.documentElement.classList.add('menu-ready');
  


  function setOpen(liEl, willOpen) {
    if (willOpen) {
      liEl.classList.add('open');
    } else {
      liEl.classList.remove('open');
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;
    
    const submenuParents = Array.from(sidebar.querySelectorAll('.menu-section > ul > li'))
      .filter(li => li.querySelector(':scope > .submenu'));



    // 서브메뉴가 제거되어 더 이상 필요하지 않음
    // 모든 메뉴는 이제 1뎁스로 단순화됨

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

    // 서브메뉴 토글 기능 제거 (모든 메뉴가 1뎁스로 변경됨)
    // 이제 모든 메뉴 링크는 직접 페이지로 이동

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
    
    // 메뉴 토글 기능이 제거되어 더 이상 필요하지 않음
  });
})();
