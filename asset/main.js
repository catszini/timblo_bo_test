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
  }
  
  // 사용량 통계 페이지
  if (currentPage.includes('stats-usage-page')) {
    initStatsUsage();
  }
  
  // 멤버 등록 페이지
  if (currentPage.includes('page-member-register')) {
    initMemberRegister();
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
  const addGroupBtn = document.querySelector('.group-setting-btn-add-group');
  const modal = document.getElementById('addGroupModal');
  const cancelBtn = document.getElementById('cancelBtn');
  const form = document.getElementById('addGroupForm');

  if (!addGroupBtn || !modal || !cancelBtn || !form) return;

  // 새 그룹 추가 버튼 클릭 시 모달 열기
  addGroupBtn.addEventListener('click', function () {
    modal.classList.add('active');
  });

  // 취소 버튼 클릭 시 모달 닫기
  cancelBtn.addEventListener('click', function () {
    modal.classList.remove('active');
    form.reset();
  });

  // 모달 배경 클릭 시 모달 닫기
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.remove('active');
      form.reset();
    }
  });

  // 폼 제출 처리
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const groupName = document.getElementById('groupName').value;
    const groupType = document.getElementById('groupType').value;

    // 빈 값이어도 제출 가능하도록 수정
    console.log('새 그룹 추가:', { groupName, groupType });

    // 모달 닫기 및 폼 초기화
    modal.classList.remove('active');
    form.reset();

    // 성공 메시지 (선택사항)
    alert('새 그룹이 추가되었습니다.');
  });

  // ESC 키로 모달 닫기
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
      form.reset();
    }
  });
}

// 권한 관리 페이지 초기화
function initUserPage() {
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
