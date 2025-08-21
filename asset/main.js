// 메인 JavaScript 파일
// 모든 페이지 공통 스크립트 및 개별 페이지별 스크립트

document.addEventListener('DOMContentLoaded', function () {
  
  // 현재 페이지 식별
  const currentPage = document.body.className || '';
  
  // 그룹 설정 페이지
  if (currentPage.includes('page-group-setting')) {
    initGroupSetting();
  }
  
  // 권한 관리 페이지 (사용자)
  if (currentPage.includes('page-user')) {
    initUserPage();
    initTabs();
  }
  
  // 사용량 통계 페이지
  if (currentPage.includes('stats-usage-page')) {
    initStatsUsage();
  }
  
  // 멤버 등록 페이지
  if (currentPage.includes('page-member-register')) {
    initMemberRegister();
  }
  
  // 비활성 멤버 페이지
  if (currentPage.includes('page-inactive-members')) {
    initInactiveMembers();
  }
  
  // 템플릿 상세 페이지
  if (currentPage.includes('template-detail-page')) {
    initTemplateDetail();
  }
  
  // 다운로드 이력 페이지
  if (currentPage.includes('download-history-page')) {
    initDownloadHistory();
  }
  
  // 워크스페이스 페이지
  if (currentPage.includes('workspace-page')) {
    initWorkspace();
  }
  
  // 일반 페이지
  if (currentPage.includes('general-page')) {
    initGeneral();
  }
  
  // 로그인 이력 페이지
  if (currentPage.includes('login-history-page')) {
    initLoginHistory();
  }
  
  // 사용자별 통계 페이지
  if (currentPage.includes('stats-user-page')) {
    initStatsUser();
  }
  
  // 요약번역 관리 페이지
  if (currentPage.includes('summary-page')) {
    initSummary();
  }
  
  // 캘린더 프롬프트 관리 페이지
  if (currentPage.includes('calendar-page')) {
    initCalendar();
  }
  
  // 동의서 관리 페이지
  if (currentPage.includes('consent-page')) {
    initConsent();
  }
  
  // 회의록 관리 페이지
  if (currentPage.includes('meeting-page')) {
    initMeeting();
  }
  
  // 회의록 템플릿 관리 페이지
  if (currentPage.includes('template-list-page')) {
    initIndex();
  }
  
  // 프롬프트 관리 페이지
  if (currentPage.includes('prompt-page')) {
    initPrompt();
  }
});

// 그룹 설정 페이지 초기화
function initGroupSetting() {
  const toggleTreeBtn = document.getElementById('toggleTreeBtn');
  const treePanel = document.getElementById('treePanel');
  const tableContainer = document.getElementById('tableContainer');
  const layout = document.querySelector('.group-setting-layout');


  if (!toggleTreeBtn || !treePanel || !tableContainer || !layout) return;

  let isTreeVisible = false;

  // 새 그룹 추가 버튼 클릭 시 트리 패널 토글
  toggleTreeBtn.addEventListener('click', function () {
    isTreeVisible = !isTreeVisible;
    
    if (isTreeVisible) {
      // 트리 패널 보이기
      treePanel.style.display = 'block';
      layout.classList.add('tree-visible');
      toggleTreeBtn.textContent = '취소';
    } else {
      // 트리 패널 숨기기
      treePanel.style.display = 'none';
      layout.classList.remove('tree-visible');
      toggleTreeBtn.textContent = '신규';
    }
  });



  // 부모 체크박스 클릭 시 자식들 전체 선택/해제
  document.querySelectorAll('.tree-item > input[type="checkbox"]').forEach(parentCheckbox => {
    parentCheckbox.addEventListener('change', function () {
      const children = this.closest('.tree-item').querySelectorAll('.tree-children input[type="checkbox"]');
      children.forEach(child => {
        child.checked = this.checked;
      });
    });
  });
}

// 권한 관리 페이지 초기화
function initUserPage() {
  // 전체 선택 체크박스 기능
  const headerCheckbox = document.querySelector('thead input[type="checkbox"]');
  const rowCheckboxes = document.querySelectorAll('tbody input[type="checkbox"]');

  if (headerCheckbox && rowCheckboxes.length > 0) {
    // 헤더 체크박스 클릭 시 전체 선택/해제
    headerCheckbox.addEventListener('change', function() {
      const isChecked = this.checked;
      rowCheckboxes.forEach(checkbox => {
        checkbox.checked = isChecked;
        updateRowBackground(checkbox);
      });
    });

    // 개별 체크박스 클릭 시 헤더 체크박스 상태 업데이트
    rowCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        updateRowBackground(this);
        updateHeaderCheckbox();
      });
    });

    // 행 배경색 업데이트 함수
    function updateRowBackground(checkbox) {
      const row = checkbox.closest('tr');
      if (checkbox.checked) {
        row.classList.add('selected');
      } else {
        row.classList.remove('selected');
      }
    }

    // 헤더 체크박스 상태 업데이트 함수
    function updateHeaderCheckbox() {
      const checkedCount = Array.from(rowCheckboxes).filter(cb => cb.checked).length;
      
      if (checkedCount === 0) {
        headerCheckbox.checked = false;
        headerCheckbox.indeterminate = false;
      } else if (checkedCount === rowCheckboxes.length) {
        headerCheckbox.checked = true;
        headerCheckbox.indeterminate = false;
      } else {
        headerCheckbox.checked = false;
        headerCheckbox.indeterminate = true;
      }
    }
  }

  // 초기화 버튼 클릭 → 모달 오픈 (사용자명/이메일 채움)
  document.querySelectorAll('.btn-reset').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const row = e.target.closest('tr');
      const name = row.querySelector('.user-profile span')?.textContent?.trim() || '';
      const email = row.children[1]?.textContent?.trim() || '';
      document.getElementById('reset-name').textContent = name;
      document.getElementById('reset-email').textContent = email;
      document.getElementById('reset-modal').classList.remove('modal-overlay-hidden');
    });
  });

  // 취소/확인 → 모달 닫기 (추후 실제 로직 연결 가능)
  const resetCancel = document.getElementById('reset-cancel');
  const resetConfirm = document.getElementById('reset-confirm');
  const resetModal = document.getElementById('reset-modal');

  if (resetCancel) {
    resetCancel.addEventListener('click', () => {
      resetModal.classList.add('modal-overlay-hidden');
    });
  }

  if (resetConfirm) {
    resetConfirm.addEventListener('click', () => {
      resetModal.classList.add('modal-overlay-hidden');
    });
  }

  // 오버레이 클릭 닫기
  if (resetModal) {
    resetModal.addEventListener('click', (e) => {
      if (e.target.id === 'reset-modal') {
        e.currentTarget.classList.add('modal-overlay-hidden');
      }
    });
  }
}

// 사용량 통계 페이지 초기화
function initStatsUsage() {
  // 월간/연간 탭 기능
  (function () {
    const monthlyTab = document.querySelector('.period-toggle-active');
    const yearlyTab = document.querySelector('.period-toggle-inactive');
    const toggleWrap = document.querySelector('.period-toggle-wrap');
    const monthSelects = document.querySelectorAll('#su2-m1, #su2-m2');

    if (monthlyTab && yearlyTab && toggleWrap) {
      // 월간 탭 클릭
      monthlyTab.addEventListener('click', () => {
        // 슬라이더 애니메이션을 위해 클래스 제거
        toggleWrap.classList.remove('yearly');

        monthlyTab.classList.add('active', 'period-toggle-active');
        monthlyTab.classList.remove('period-toggle-inactive');
        yearlyTab.classList.remove('active', 'period-toggle-active');
        yearlyTab.classList.add('period-toggle-inactive');

        // 월 선택 필드 보이기
        monthSelects.forEach(select => {
          select.style.display = 'inline-block';
        });

        updateResultText();
      });

      // 연간 탭 클릭
      yearlyTab.addEventListener('click', () => {
        // 슬라이더 애니메이션을 위해 클래스 추가
        toggleWrap.classList.add('yearly');

        yearlyTab.classList.add('active', 'period-toggle-active');
        yearlyTab.classList.remove('period-toggle-inactive');
        monthlyTab.classList.remove('active', 'period-toggle-active');
        monthlyTab.classList.add('period-toggle-inactive');

        // 월 선택 필드 숨기기
        monthSelects.forEach(select => {
          select.style.display = 'none';
        });

        updateResultText();
      });
    }
  })();

  // 사용량 통계 상단 공통영역 동작: 기간 셀렉트 → 텍스트 갱신
  (function () {
    const y1 = document.getElementById('su2-y1');
    const m1 = document.getElementById('su2-m1');
    const y2 = document.getElementById('su2-y2');
    const m2 = document.getElementById('su2-m2');
    const run = document.getElementById('su2-run');
    const resultText = document.getElementById('su2-result-text');
    if (!y1 || !m1 || !y2 || !m2 || !run || !resultText) return;

    function updateResultText() {
      const isYearly = document.querySelector('.period-toggle-active').textContent.trim() === '연간';
      if (isYearly) {
        return `${y1.value} ~ ${y2.value} 통계 결과`;
      } else {
        return `${y1.value} ${m1.value} ~ ${y2.value} ${m2.value} 통계 결과`;
      }
    }

    function text() {
      return updateResultText();
    }

    function normalize() {
      // 연-월 비교하여 시작이 더 크면 스왑
      const sYear = parseInt(y1.value);
      const sMonth = parseInt(m1.value);
      const eYear = parseInt(y2.value);
      const eMonth = parseInt(m2.value);
      if (sYear > eYear || (sYear === eYear && sMonth > eMonth)) {
        const ty = y1.value, tm = m1.value; y1.value = y2.value; m1.value = m2.value; y2.value = ty; m2.value = tm;
      }
    }

    // 전역 함수로 노출
    window.updateResultText = function () {
      resultText.textContent = text();
    };

    run.addEventListener('click', () => { normalize(); resultText.textContent = text(); });
  })();
}

// 멤버 등록 페이지 초기화
function initMemberRegister() {
  const eyeClosed = document.getElementById('eye-closed');
  const eyeOpen = document.getElementById('eye-open');
  const passwordInput = document.querySelector('.member-register-password-input');

  if (!eyeClosed || !eyeOpen || !passwordInput) return;

  // 초기 상태: 감은 눈만 보이고, 뜬 눈은 숨김
  let isPasswordVisible = false;
  
  eyeClosed.style.opacity = '1';
  eyeClosed.style.visibility = 'visible';
  
  eyeOpen.style.opacity = '0';
  eyeOpen.style.visibility = 'hidden';

  // 부드러운 전환 함수
  function togglePasswordVisibility() {
    if (!isPasswordVisible) {
      // 비밀번호 보이기: 감은 눈 → 뜬 눈
      passwordInput.type = 'text';
      
      // 감은 눈 페이드아웃
      eyeClosed.style.transition = 'opacity 0.15s ease';
      eyeClosed.style.opacity = '0';
      
      // 뜬 눈 페이드인
      setTimeout(() => {
        eyeOpen.style.visibility = 'visible';
        eyeOpen.style.transition = 'opacity 0.15s ease';
        eyeOpen.style.opacity = '1';
      }, 150);
      
      isPasswordVisible = true;
    } else {
      // 비밀번호 숨기기: 뜬 눈 → 감은 눈
      passwordInput.type = 'password';
      
      // 뜬 눈 페이드아웃
      eyeOpen.style.transition = 'opacity 0.15s ease';
      eyeOpen.style.opacity = '0';
      
      // 감은 눈 페이드인
      setTimeout(() => {
        eyeOpen.style.visibility = 'hidden';
        eyeClosed.style.transition = 'opacity 0.15s ease';
        eyeClosed.style.opacity = '1';
      }, 150);
      
      isPasswordVisible = false;
    }
  }

  // 감은 눈 클릭 시
  eyeClosed.addEventListener('click', togglePasswordVisibility);
  
  // 뜬 눈 클릭 시
  eyeOpen.addEventListener('click', togglePasswordVisibility);
}

// 템플릿 상세 페이지 초기화
function initTemplateDetail() {
  // 편집 드롭다운 토글 (상세 페이지 전용)
  document.addEventListener('click', (e) => {
    if (e.target.closest('.btn-edit')) {
      const wrapper = e.target.closest('.edit-wrapper');
      const menu = wrapper.querySelector('.dropdown-menu');
      const willShow = menu.style.display !== 'block';
      document.querySelectorAll('.dropdown-menu').forEach(m => m.style.display = 'none');
      menu.style.display = willShow ? 'block' : 'none';
      e.stopPropagation();
      return;
    }
    if (!e.target.closest('.dropdown-menu')) {
      document.querySelectorAll('.dropdown-menu').forEach(m => m.style.display = 'none');
    }
    if (e.target.closest('.new-category')) {
      // 편집 모드에서만 새 카테고리 생성 모달 표시
      const editWrapper = e.target.closest('.edit-wrapper');
      if (editWrapper && editWrapper.querySelector('.dropdown-menu').style.display === 'block') {
        document.querySelector('.category-modal-overlay').classList.remove('category-modal-hidden');
        document.querySelectorAll('.dropdown-menu').forEach(m => m.style.display = 'none');
      }
    }
    if (e.target.matches('.category-modal-overlay') || e.target.matches('.category-modal .btn-cancel')) {
      document.querySelector('.category-modal-overlay').classList.add('category-modal-hidden');
    }
  });
}

// 여기에 다른 페이지들의 초기화 함수들을 추가할 예정
// initDownloadHistory, initWorkspace, initGeneral 등...

// 임시로 빈 함수들 추가 (나중에 구현)
function initDownloadHistory() {
  // 다운로드 이력 페이지 스크립트 (복잡해서 별도 처리 예정)
}

function initWorkspace() {
  // 워크스페이스 페이지 스크립트
}

function initGeneral() {
  // 일반 페이지 스크립트
}

function initLoginHistory() {
  // 로그인 이력 페이지 스크립트
}

function initStatsUser() {
  // 사용자별 통계 페이지 스크립트
}

function initSummary() {
  // 요약번역 관리 페이지 스크립트
}

function initCalendar() {
  // 캘린더 프롬프트 관리 페이지 스크립트
}

function initConsent() {
  // 동의서 관리 페이지 스크립트
}

function initMeeting() {
  // 회의록 관리 페이지 스크립트
}

function initIndex() {
  // 회의록 템플릿 관리 페이지 스크립트
}

function initPrompt() {
  // 프롬프트 관리 페이지 스크립트
}

// 비활성 멤버 페이지 초기화
function initInactiveMembers() {
  // 검색 기능
  const searchBtn = document.querySelector('.btn-submit');
  const resetBtn = document.querySelector('.btn-outline');
  
  if (searchBtn) {
    searchBtn.addEventListener('click', function() {
      // 검색 로직 (추후 구현)
      console.log('휴면 회원 검색 실행');
    });
  }
  
  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      // 검색 폼 초기화
      document.querySelectorAll('.condition-select').forEach(select => {
        select.selectedIndex = 0;
      });
      document.querySelectorAll('.combo-input').forEach(input => {
        input.value = '';
      });
      document.querySelectorAll('.date-range').forEach(input => {
        input.value = '';
      });
      console.log('검색 조건 초기화');
    });
  }
  
  // 활성화/탈퇴 버튼 기능
  document.querySelectorAll('.btn-activate').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const row = e.target.closest('tr');
      const name = row.querySelector('.user-profile span')?.textContent?.trim() || '';
      
      if (confirm(`${name} 회원을 활성화하시겠습니까?`)) {
        // 활성화 로직 (추후 구현)
        console.log('회원 활성화:', name);
        
        // 임시로 행 제거 (실제로는 서버 통신 후 처리)
        row.remove();
        
        // 총 개수 업데이트
        updateTotalCount();
      }
    });
  });
  
  document.querySelectorAll('.btn-withdraw').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const row = e.target.closest('tr');
      const name = row.querySelector('.user-profile span')?.textContent?.trim() || '';
      
      if (confirm(`${name} 회원을 탈퇴 처리하시겠습니까?\n이 작업은 되돌릴 수 없습니다.`)) {
        // 탈퇴 로직 (추후 구현)
        console.log('회원 탈퇴:', name);
        
        // 임시로 행 제거 (실제로는 서버 통신 후 처리)
        row.remove();
        
        // 총 개수 업데이트
        updateTotalCount();
      }
    });
  });
  
  // 총 개수 업데이트 함수
  function updateTotalCount() {
    const totalCountEl = document.querySelector('.total-count');
    const rows = document.querySelectorAll('.table-container tbody tr');
    if (totalCountEl) {
      totalCountEl.textContent = `Total ${rows.length.toLocaleString()}`;
    }
  }
}

// 탭 기능 초기화
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      
      // 모든 탭 버튼 비활성화
      tabButtons.forEach(btn => btn.classList.remove('active'));
      // 모든 탭 내용 숨기기
      tabContents.forEach(content => content.classList.remove('active'));
      
      // 클릭된 탭 버튼 활성화
      this.classList.add('active');
      // 해당 탭 내용 표시
      const targetContent = document.getElementById(targetTab + '-tab');
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}
