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
  
  // 메뉴 설정 페이지
  if (currentPage.includes('page-menu-setting')) {
    initMenuSetting();
  }
  
  // 워크스페이스 상세 페이지
  if (currentPage.includes('page-workspace-detail')) {
    initWorkspaceDetail();
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

// 워크스페이스 상세 페이지 초기화
function initWorkspaceDetail() {
  // 상태 스위치 기능
  const statusSwitch = document.querySelector('.status-switch input[type="checkbox"]');
  const statusText = document.querySelector('.status-text');
  
  if (statusSwitch && statusText) {
    statusSwitch.addEventListener('change', function() {
      statusText.textContent = this.checked ? '활성' : '비활성';
      showNotification(`워크스페이스가 ${this.checked ? '활성' : '비활성'} 상태로 변경되었습니다.`, 'info');
    });
  }
  
  // 토글 버튼 기능 (다른 토글 버튼들용)
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const group = this.parentElement;
      const buttons = group.querySelectorAll('.toggle-btn');
      
      buttons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // 이미지 변경 버튼
  const changeImageBtn = document.querySelector('.btn.primary');
  if (changeImageBtn && changeImageBtn.textContent.includes('이미지 변경')) {
    changeImageBtn.addEventListener('click', function() {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/png,image/jpeg,image/jpg';
      input.style.display = 'none';
      
      input.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
            const logoImg = document.querySelector('.workspace-logo');
            if (logoImg) {
              logoImg.src = e.target.result;
              showNotification('로고 이미지가 변경되었습니다.', 'success');
            }
          };
          reader.readAsDataURL(file);
        }
      });
      
      document.body.appendChild(input);
      input.click();
      document.body.removeChild(input);
    });
  }
  
  // 이미지 삭제 버튼
  const deleteImageBtn = document.querySelector('.btn.danger');
  if (deleteImageBtn && deleteImageBtn.textContent.includes('삭제')) {
    deleteImageBtn.addEventListener('click', function() {
      if (confirm('로고 이미지를 삭제하시겠습니까?')) {
        const logoImg = document.querySelector('.workspace-logo');
        if (logoImg) {
          logoImg.src = '../asset/brand-logo.png'; // 기본 이미지로 복원
          showNotification('로고 이미지가 삭제되었습니다.', 'info');
        }
      }
    });
  }
  
  // 워크스페이스 이름 수정 버튼
  const editNameBtn = document.querySelector('.name-row .btn');
  if (editNameBtn) {
    editNameBtn.addEventListener('click', function() {
      const input = document.querySelector('.name-row .form-input');
      
      if (input) {
        const isEditing = this.textContent === '취소';
        
        if (isEditing) {
          // 취소
          input.readOnly = false;
          this.textContent = '수정';
          this.classList.remove('btn-outline');
          input.focus();
        } else {
          // 저장
          input.readOnly = true;
          this.textContent = '수정';
          showNotification('워크스페이스 이름이 변경되었습니다.', 'success');
        }
      }
    });
  }
  
  // 변경사항 저장 버튼
  const saveBtn = document.querySelector('.btn.primary.large');
  if (saveBtn && saveBtn.textContent.includes('저장')) {
    saveBtn.addEventListener('click', function() {
      // 폼 데이터 수집
      const formData = {
        name: document.querySelector('.name-row .form-input').value,
        workspaceId: document.querySelector('input[value="timbel-ws-001"]').value,
        admin: document.querySelector('input[value*="배성진"]').value,
        domain: document.querySelector('input[value="timbel.net"]').value,
        description: document.querySelector('.form-textarea').value,
        status: document.querySelector('.toggle-btn.active').textContent,
        permissions: extractPermissions()
      };
      
      // 저장 로직 (실제로는 서버에 전송)
      console.log('저장할 데이터:', formData);
      
      // 로딩 상태 표시
      this.disabled = true;
      this.textContent = '저장 중...';
      
      // 가짜 저장 딜레이
      setTimeout(() => {
        this.disabled = false;
        this.textContent = '변경사항 저장';
        showNotification('워크스페이스 설정이 저장되었습니다.', 'success');
      }, 1500);
    });
  }
  
  // 취소 버튼
  const cancelBtn = document.querySelector('.btn.outline.large');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', function() {
      if (confirm('변경사항을 취소하시겠습니까? 저장되지 않은 내용은 사라집니다.')) {
        location.reload();
      }
    });
  }
  
  // 권한 체크박스 변경 감지
  const permissionCheckboxes = document.querySelectorAll('.toggle-item input[type="checkbox"]');
  permissionCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const label = this.nextElementSibling.textContent;
      const isChecked = this.checked;
      console.log(`권한 변경: ${label} - ${isChecked ? '허용' : '거부'}`);
    });
  });
  
  // 구성원 관리 기능
  initMemberManagement();
}

// 구성원 관리 기능 초기화
function initMemberManagement() {
  const addMemberBtn = document.querySelector('.btn-add-member');
  const memberModal = document.getElementById('memberModal');
  const memberModalClose = document.getElementById('memberModalClose');
  const memberModalCancel = document.getElementById('memberModalCancel');
  const memberModalAdd = document.getElementById('memberModalAdd');
  
  // 구성원 추가 버튼
  if (addMemberBtn) {
    addMemberBtn.addEventListener('click', function() {
      showMemberModal();
    });
  }
  
  // 모달 닫기
  if (memberModalClose) {
    memberModalClose.addEventListener('click', hideMemberModal);
  }
  
  if (memberModalCancel) {
    memberModalCancel.addEventListener('click', hideMemberModal);
  }
  
  // 모달 외부 클릭 시 닫기
  if (memberModal) {
    memberModal.addEventListener('click', function(e) {
      if (e.target === memberModal) {
        hideMemberModal();
      }
    });
  }
  
  // 구성원 추가 확인
  if (memberModalAdd) {
    memberModalAdd.addEventListener('click', function() {
      addNewMember();
    });
  }
  
  // 기존 구성원들의 이벤트 설정
  setupMemberEvents();
}

// 구성원 모달 표시
function showMemberModal() {
  const modal = document.getElementById('memberModal');
  if (modal) {
    // 폼 초기화
    document.getElementById('memberName').value = '';
    document.getElementById('memberEmail').value = '';
    document.getElementById('memberRole').value = 'user';
    
    modal.style.display = 'flex';
  }
}

// 구성원 모달 숨기기
function hideMemberModal() {
  const modal = document.getElementById('memberModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// 새 구성원 추가
function addNewMember() {
  const name = document.getElementById('memberName').value.trim();
  const email = document.getElementById('memberEmail').value.trim();
  const role = document.getElementById('memberRole').value;
  
  // 유효성 검사
  if (!name) {
    showNotification('이름을 입력해주세요.', 'error');
    return;
  }
  
  if (!email) {
    showNotification('이메일을 입력해주세요.', 'error');
    return;
  }
  
  // 이메일 형식 검사
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showNotification('올바른 이메일 형식을 입력해주세요.', 'error');
    return;
  }
  
  // 중복 이름 검사 (배지에서는 이름만 표시하므로)
  const existingNames = Array.from(document.querySelectorAll('.member-name')).map(el => el.textContent);
  if (existingNames.includes(name)) {
    showNotification('이미 등록된 이름입니다.', 'error');
    return;
  }
  
  // 새 구성원 ID 생성
  const memberBadges = document.querySelectorAll('.member-badge');
  const newId = memberBadges.length > 0 ? Math.max(...Array.from(memberBadges).map(badge => parseInt(badge.dataset.memberId))) + 1 : 1;
  
  // 새 구성원 배지 생성
  const newMemberBadge = createMemberBadge(newId, name, role);
  
  // 역할에 따라 적절한 섹션에 추가
  const targetContainer = role === 'admin' ? 
    document.querySelector('.admin-badges') : 
    document.querySelector('.general-badges');
  
  targetContainer.appendChild(newMemberBadge);
  
  // 구성원 수 업데이트
  updateMemberCounts();
  
  // 새 구성원 배지 이벤트 설정
  setupMemberBadgeEvents(newMemberBadge);
  
  // 모달 닫기
  hideMemberModal();
  
  showNotification('새 구성원이 추가되었습니다.', 'success');
}

// 구성원 배지 생성
function createMemberBadge(id, name, role) {
  const memberBadge = document.createElement('div');
  memberBadge.className = 'member-badge';
  memberBadge.setAttribute('data-member-id', id);
  memberBadge.setAttribute('data-role', role);
  
  memberBadge.innerHTML = `
    <span class="member-name">${name}</span>
    <button class="badge-remove-btn" title="구성원 제거">×</button>
  `;
  
  return memberBadge;
}

// 구성원 이벤트 설정
function setupMemberEvents() {
  const memberBadges = document.querySelectorAll('.member-badge');
  memberBadges.forEach(badge => {
    setupMemberBadgeEvents(badge);
  });
}

// 개별 구성원 배지 이벤트 설정
function setupMemberBadgeEvents(memberBadge) {
  const removeBtn = memberBadge.querySelector('.badge-remove-btn');
  
  // 구성원 제거
  if (removeBtn) {
    removeBtn.addEventListener('click', function(e) {
      e.stopPropagation(); // 배지 클릭 이벤트와 구분
      
      const memberName = memberBadge.querySelector('.member-name').textContent;
      
      if (confirm(`${memberName}님을 워크스페이스에서 제거하시겠습니까?`)) {
        memberBadge.remove();
        updateMemberCounts();
        showNotification(`${memberName}님이 워크스페이스에서 제거되었습니다.`, 'info');
      }
    });
  }
  
  // 배지 클릭 시 역할 변경 (옵션)
  memberBadge.addEventListener('click', function(e) {
    if (e.target === removeBtn) return; // 제거 버튼 클릭은 제외
    
    const memberName = this.querySelector('.member-name').textContent;
    const currentRole = this.getAttribute('data-role');
    
    // 역할 순환 변경 (admin -> user -> viewer -> admin)
    const roleSequence = ['admin', 'user', 'viewer'];
    const currentIndex = roleSequence.indexOf(currentRole);
    const nextRole = roleSequence[(currentIndex + 1) % roleSequence.length];
    
    // 역할이 변경되면 적절한 섹션으로 이동
    const oldRole = currentRole;
    this.setAttribute('data-role', nextRole);
    
    // 섹션 이동
    moveMemberToCorrectSection(this, oldRole, nextRole);
    
    const roleText = {
      'admin': '관리자',
      'user': '일반 사용자',
      'viewer': '뷰어'
    };
    
    updateMemberCounts();
    showNotification(`${memberName}님의 역할이 ${roleText[nextRole]}로 변경되었습니다.`, 'info');
  });
}

// 구성원 수 업데이트
function updateMemberCounts() {
  const totalCount = document.querySelectorAll('.member-badge').length;
  const adminCount = document.querySelectorAll('.admin-badges .member-badge').length;
  const generalCount = document.querySelectorAll('.general-badges .member-badge').length;
  
  const totalElement = document.getElementById('memberCount');
  const adminElement = document.getElementById('adminCount');
  const generalElement = document.getElementById('generalCount');
  
  if (totalElement) totalElement.textContent = totalCount;
  if (adminElement) adminElement.textContent = adminCount;
  if (generalElement) generalElement.textContent = generalCount;
}

// 구성원을 올바른 섹션으로 이동
function moveMemberToCorrectSection(memberBadge, oldRole, newRole) {
  // 역할이 변경되지 않았으면 이동하지 않음
  if (oldRole === newRole) return;
  
  let targetContainer;
  
  if (newRole === 'admin') {
    targetContainer = document.querySelector('.admin-badges');
  } else {
    targetContainer = document.querySelector('.general-badges');
  }
  
  // 기존 위치에서 제거하고 새 위치에 추가
  memberBadge.remove();
  targetContainer.appendChild(memberBadge);
}

// 권한 설정 데이터 추출
function extractPermissions() {
  const permissions = {};
  const rows = document.querySelectorAll('.perm-table-narrow tbody tr');
  
  rows.forEach(row => {
    const role = row.cells[0].textContent.trim();
    const downloadPerms = [];
    const usePerms = [];
    const managePerms = [];
    
    // 다운로드 권한
    row.cells[1].querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
      downloadPerms.push(cb.nextElementSibling.textContent);
    });
    
    // 사용 권한
    row.cells[2].querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
      usePerms.push(cb.nextElementSibling.textContent);
    });
    
    // 관리 권한
    if (row.cells[3]) {
      row.cells[3].querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
        managePerms.push(cb.nextElementSibling.textContent);
      });
    }
    
    permissions[role] = {
      download: downloadPerms,
      use: usePerms,
      manage: managePerms
    };
  });
  
  return permissions;
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

// 메뉴 설정 페이지 초기화
function initMenuSetting() {
  const menuTree = document.getElementById('menuTree');
  if (!menuTree) return;
  
  let draggedElement = null;
  let draggedData = null;
  
  // 드래그 앤 드롭 이벤트 설정
  const menuItems = menuTree.querySelectorAll('.menu-tree-item[draggable="true"]');
  
  menuItems.forEach(item => {
    // 드래그 시작
    item.addEventListener('dragstart', function(e) {
      draggedElement = this;
      draggedData = {
        id: this.dataset.id,
        level: parseInt(this.dataset.level),
        title: this.querySelector('.menu-title').textContent,
        parentId: getParentId(this)
      };
      
      // 드래그 중 시각적 효과
      this.classList.add('dragging');
      
      // 드래그 이미지 설정
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', this.outerHTML);
    });
    
    // 드래그 종료
    item.addEventListener('dragend', function(e) {
      this.classList.remove('dragging');
      
      // 모든 드롭존 표시 제거
      document.querySelectorAll('.menu-tree-item').forEach(el => {
        el.classList.remove('drag-over', 'drop-allowed', 'drop-not-allowed');
      });
    });
    
    // 드래그 오버
    item.addEventListener('dragover', function(e) {
      if (draggedElement === this) return;
      
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      
      // 드롭 가능 여부 검사
      if (canDrop(draggedData, this)) {
        this.classList.add('drag-over', 'drop-allowed');
        this.classList.remove('drop-not-allowed');
      } else {
        this.classList.add('drag-over', 'drop-not-allowed');
        this.classList.remove('drop-allowed');
      }
    });
    
    // 드래그 리브
    item.addEventListener('dragleave', function(e) {
      // 자식 요소로의 이동이 아닌 경우에만 클래스 제거
      if (!this.contains(e.relatedTarget)) {
        this.classList.remove('drag-over', 'drop-allowed', 'drop-not-allowed');
      }
    });
    
    // 드롭
    item.addEventListener('drop', function(e) {
      e.preventDefault();
      
      if (draggedElement === this) return;
      
      if (canDrop(draggedData, this)) {
        moveMenuItem(draggedElement, this);
        updateMenuForm(draggedElement);
        autoSaveMenuStructure(); // 자동 저장
        showSuccessMessage('메뉴 순서가 변경되었습니다.');
      }
      
      // 드래그 오버 클래스 제거
      this.classList.remove('drag-over', 'drop-allowed', 'drop-not-allowed');
    });
  });
  
  // 메뉴 토글 기능
  const toggleButtons = menuTree.querySelectorAll('.menu-toggle');
  toggleButtons.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      const menuItem = this.closest('.menu-tree-item');
      const children = menuItem.querySelector('.menu-children');
      
      if (children) {
        const isExpanded = this.textContent === '▼';
        this.textContent = isExpanded ? '▶' : '▼';
        children.style.display = isExpanded ? 'none' : 'block';
        menuItem.classList.toggle('collapsed', isExpanded);
      }
    });
  });
  
  // 메뉴 아이템 클릭 시 편집 폼 업데이트
  menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
      if (e.target.classList.contains('menu-toggle')) return;
      
      // 선택된 메뉴 표시
      document.querySelectorAll('.menu-tree-item').forEach(el => {
        el.classList.remove('selected');
      });
      this.classList.add('selected');
      
      updateMenuForm(this);
    });
  });
  
  // 펼치기/접기 버튼
  const expandBtn = document.querySelector('.menu-tree-actions .btn-outline:first-child');
  const collapseBtn = document.querySelector('.menu-tree-actions .btn-outline:nth-child(2)');
  
  if (expandBtn) {
    expandBtn.addEventListener('click', function() {
      expandAllMenus();
    });
  }
  
  if (collapseBtn) {
    collapseBtn.addEventListener('click', function() {
      collapseAllMenus();
    });
  }
  
  // 새 메뉴 버튼
  const newMenuBtn = document.querySelector('.menu-tree-actions .btn-submit');
  if (newMenuBtn) {
    newMenuBtn.addEventListener('click', function() {
      createNewMenu();
    });
  }
  
  // 저장 버튼
  const saveBtn = document.querySelector('.menu-edit-actions .btn-submit');
  if (saveBtn) {
    saveBtn.addEventListener('click', function() {
      saveMenuStructure();
    });
  }
  
  // 취소 버튼
  const cancelBtn = document.querySelector('.menu-edit-actions .btn-outline');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', function() {
      // 선택된 메뉴 해제
      document.querySelectorAll('.menu-tree-item').forEach(item => {
        item.classList.remove('selected');
      });
      
      // 편집 폼 초기화
      resetMenuForm();
      
      showNotification('편집이 취소되었습니다.', 'info');
    });
  }
}

// 부모 ID 가져오기
function getParentId(element) {
  const level = parseInt(element.dataset.level);
  if (level === 1) return null;
  
  let current = element.previousElementSibling;
  while (current) {
    if (current.classList.contains('menu-tree-item')) {
      const currentLevel = parseInt(current.dataset.level);
      if (currentLevel < level) {
        return current.dataset.id;
      }
    }
    current = current.previousElementSibling;
  }
  return null;
}

// 드롭 가능 여부 검사
function canDrop(draggedData, dropTarget) {
  const targetLevel = parseInt(dropTarget.dataset.level);
  const targetId = dropTarget.dataset.id;
  
  // 자기 자신에게는 드롭 불가
  if (draggedData.id === targetId) return false;
  
  // 자식 요소에게는 드롭 불가 (순환 참조 방지)
  if (isChildOf(draggedData.id, targetId)) return false;
  
  // 레벨 제한 (최대 3단계)
  if (targetLevel >= 3) return false;
  
  // 시스템 메뉴는 이동 불가
  if (draggedData.id === 'system' || targetId === 'system') return false;
  
  // 폴더 타입이 아닌 메뉴에는 자식 추가 불가
  const targetIcon = dropTarget.querySelector('.menu-icon').textContent;
  if (targetIcon === '📄') return false; // 페이지 타입
  
  // 같은 레벨 내에서만 이동 허용 (선택적)
  // const draggedParentId = draggedData.parentId;
  // const targetParentId = getParentId(dropTarget);
  // if (draggedParentId !== targetParentId) return false;
  
  return true;
}

// 자식 요소 여부 검사
function isChildOf(parentId, childId) {
  const childElement = document.querySelector(`[data-id="${childId}"]`);
  if (!childElement) return false;
  
  let current = childElement.parentElement;
  while (current) {
    if (current.classList && current.classList.contains('menu-tree-item')) {
      if (current.dataset.id === parentId) return true;
    }
    current = current.parentElement;
  }
  return false;
}

// 메뉴 아이템 이동
function moveMenuItem(draggedElement, dropTarget) {
  const targetLevel = parseInt(dropTarget.dataset.level);
  const newLevel = targetLevel + 1;
  
  // 이동 전 상태 저장 (실행 취소용)
  const originalParent = draggedElement.parentElement;
  const originalNextSibling = draggedElement.nextElementSibling;
  
  try {
    // 레벨 업데이트
    updateElementLevel(draggedElement, newLevel);
    
    // DOM에서 이동
    const targetChildren = dropTarget.querySelector('.menu-children');
    if (targetChildren) {
      targetChildren.appendChild(draggedElement);
    } else {
      // 자식 컨테이너가 없으면 생성
      const newChildren = document.createElement('div');
      newChildren.className = 'menu-children';
      newChildren.appendChild(draggedElement);
      dropTarget.appendChild(newChildren);
      
      // 토글 버튼 추가
      const header = dropTarget.querySelector('.menu-item-header');
      if (header && !header.querySelector('.menu-toggle')) {
        const toggle = document.createElement('span');
        toggle.className = 'menu-toggle';
        toggle.textContent = '▼';
        toggle.addEventListener('click', function(e) {
          e.stopPropagation();
          const menuItem = this.closest('.menu-tree-item');
          const children = menuItem.querySelector('.menu-children');
          
          if (children) {
            const isExpanded = this.textContent === '▼';
            this.textContent = isExpanded ? '▶' : '▼';
            children.style.display = isExpanded ? 'none' : 'block';
            menuItem.classList.toggle('collapsed', isExpanded);
          }
        });
        header.insertBefore(toggle, header.firstChild);
      }
      
      // 드롭 타겟의 아이콘을 폴더로 변경
      const targetIcon = dropTarget.querySelector('.menu-icon');
      if (targetIcon && targetIcon.textContent === '📄') {
        targetIcon.textContent = '📁';
      }
    }
    
    // 빈 컨테이너 정리
    if (originalParent && originalParent.classList.contains('menu-children') && originalParent.children.length === 0) {
      const parentMenuItem = originalParent.closest('.menu-tree-item');
      const toggle = parentMenuItem.querySelector('.menu-toggle');
      if (toggle) {
        toggle.remove();
      }
      originalParent.remove();
      
      // 부모 메뉴의 아이콘을 페이지로 변경 (자식이 없으면)
      const parentIcon = parentMenuItem.querySelector('.menu-icon');
      if (parentIcon && parentIcon.textContent === '📁') {
        parentIcon.textContent = '📄';
      }
    }
    
    // 메뉴 구조 유효성 재검사
    validateMenuStructure();
    
  } catch (error) {
    console.error('메뉴 이동 중 오류 발생:', error);
    // 오류 시 원래 위치로 복원
    if (originalNextSibling) {
      originalParent.insertBefore(draggedElement, originalNextSibling);
    } else {
      originalParent.appendChild(draggedElement);
    }
    showErrorMessage('메뉴 이동 중 오류가 발생했습니다.');
  }
}

// 요소 레벨 업데이트
function updateElementLevel(element, newLevel) {
  element.dataset.level = newLevel;
  
  // 자식 요소들도 레벨 업데이트
  const children = element.querySelectorAll('.menu-tree-item');
  children.forEach(child => {
    const currentLevel = parseInt(child.dataset.level);
    const levelDiff = newLevel - parseInt(element.dataset.level) + 1;
    child.dataset.level = currentLevel + levelDiff;
  });
}

// 메뉴 편집 폼 업데이트
function updateMenuForm(menuItem) {
  const title = menuItem.querySelector('.menu-title').textContent;
  const level = menuItem.dataset.level;
  const id = menuItem.dataset.id;
  
  // 폼 필드 업데이트
  const menuNameInput = document.querySelector('.menu-edit-form input[type="text"]');
  if (menuNameInput) {
    menuNameInput.value = title;
  }
  
  // 상위 메뉴 선택 업데이트
  const parentSelect = document.querySelector('.form-group select');
  if (parentSelect) {
    const parentId = getParentId(menuItem);
    // 실제로는 서버에서 가져온 데이터로 옵션 설정
    updateParentOptions(parentSelect, parentId);
  }
}

// 상위 메뉴 옵션 업데이트
function updateParentOptions(select, selectedParentId) {
  // 현재는 정적 옵션이지만, 실제로는 메뉴 구조에 따라 동적 생성
  const options = select.querySelectorAll('option');
  options.forEach(option => {
    if (option.value === selectedParentId) {
      option.selected = true;
    }
  });
}

// 모든 메뉴 펼치기
function expandAllMenus() {
  const toggles = document.querySelectorAll('.menu-toggle');
  const children = document.querySelectorAll('.menu-children');
  
  toggles.forEach(toggle => {
    toggle.textContent = '▼';
  });
  
  children.forEach(child => {
    child.style.display = 'block';
  });
  
  document.querySelectorAll('.menu-tree-item').forEach(item => {
    item.classList.remove('collapsed');
  });
}

// 모든 메뉴 접기
function collapseAllMenus() {
  const toggles = document.querySelectorAll('.menu-toggle');
  const children = document.querySelectorAll('.menu-children');
  
  toggles.forEach(toggle => {
    toggle.textContent = '▶';
  });
  
  children.forEach(child => {
    child.style.display = 'none';
  });
  
  document.querySelectorAll('.menu-tree-item').forEach(item => {
    item.classList.add('collapsed');
  });
}

// 새 메뉴 생성
function createNewMenu() {
  const newId = 'new-menu-' + Date.now();
  const newMenuItem = document.createElement('div');
  newMenuItem.className = 'menu-tree-item';
  newMenuItem.setAttribute('data-level', '1');
  newMenuItem.setAttribute('data-id', newId);
  newMenuItem.setAttribute('draggable', 'true');
  
  newMenuItem.innerHTML = `
    <div class="menu-item-header">
      <span class="menu-icon">📄</span>
      <span class="menu-title">새 메뉴</span>
    </div>
  `;
  
  const menuTree = document.getElementById('menuTree');
  menuTree.appendChild(newMenuItem);
  
  // 새로 생성된 메뉴에 이벤트 리스너 추가
  addMenuItemEvents(newMenuItem);
  
  // 편집 폼으로 포커스
  newMenuItem.click();
  
  showSuccessMessage('새 메뉴가 추가되었습니다.');
}

// 메뉴 아이템에 이벤트 추가
function addMenuItemEvents(item) {
  // 드래그 이벤트들 추가 (위의 initMenuSetting에서 사용한 것과 동일한 로직)
  // 간단히 페이지 새로고침으로 대체 (실제로는 동적으로 이벤트 추가)
  item.addEventListener('click', function(e) {
    if (e.target.classList.contains('menu-toggle')) return;
    
    document.querySelectorAll('.menu-tree-item').forEach(el => {
      el.classList.remove('selected');
    });
    this.classList.add('selected');
    
    updateMenuForm(this);
  });
}

// 성공 메시지 표시
function showSuccessMessage(message) {
  showNotification(message, 'success');
}

// 오류 메시지 표시
function showErrorMessage(message) {
  showNotification(message, 'error');
}

// 경고 메시지 표시
function showWarningMessage(message) {
  showNotification(message, 'warning');
}

// 통합 알림 메시지 표시
function showNotification(message, type = 'info') {
  const colors = {
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6'
  };
  
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${colors[type]};
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    z-index: 10000;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    max-width: 300px;
    word-wrap: break-word;
    animation: slideIn 0.3s ease-out;
  `;
  notification.textContent = message;
  
  // 애니메이션 키프레임 추가
  if (!document.querySelector('#notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  document.body.appendChild(notification);
  
  // 자동 제거
  setTimeout(() => {
    notification.style.animation = 'slideIn 0.3s ease-out reverse';
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
  
  // 클릭으로 제거
  notification.addEventListener('click', () => {
    if (document.body.contains(notification)) {
      document.body.removeChild(notification);
    }
  });
}

// 메뉴 구조 유효성 검사
function validateMenuStructure() {
  const menuTree = document.getElementById('menuTree');
  if (!menuTree) return true;
  
  const issues = [];
  const menuItems = menuTree.querySelectorAll('.menu-tree-item');
  
  menuItems.forEach(item => {
    const level = parseInt(item.dataset.level);
    const id = item.dataset.id;
    const title = item.querySelector('.menu-title').textContent;
    
    // 레벨 검사
    if (level > 3) {
      issues.push(`"${title}" 메뉴의 깊이가 너무 깊습니다. (최대 3단계)`);
    }
    
    // 중복 ID 검사
    const duplicates = Array.from(menuItems).filter(otherItem => 
      otherItem.dataset.id === id && otherItem !== item
    );
    if (duplicates.length > 0) {
      issues.push(`"${title}" 메뉴의 ID가 중복됩니다.`);
    }
    
    // 빈 제목 검사
    if (!title.trim()) {
      issues.push('메뉴 제목이 비어있습니다.');
    }
    
    // 부모-자식 관계 검사
    const children = item.querySelectorAll('.menu-tree-item');
    const hasChildren = children.length > 0;
    const icon = item.querySelector('.menu-icon').textContent;
    
    if (hasChildren && icon === '📄') {
      issues.push(`"${title}" 메뉴는 하위 메뉴가 있으므로 폴더 타입이어야 합니다.`);
    }
  });
  
  if (issues.length > 0) {
    const issueText = issues.join('\n');
    showWarningMessage(`메뉴 구조에 문제가 있습니다:\n${issueText}`);
    return false;
  }
  
  return true;
}

// 메뉴 데이터 저장
function saveMenuStructure() {
  const menuTree = document.getElementById('menuTree');
  if (!menuTree) return;
  
  if (!validateMenuStructure()) {
    showErrorMessage('메뉴 구조를 저장하기 전에 문제를 해결해주세요.');
    return;
  }
  
  const menuData = extractMenuData(menuTree);
  
  try {
    // 로컬 스토리지에 임시 저장
    localStorage.setItem('menuStructure', JSON.stringify(menuData));
    
    // 실제로는 서버에 전송
    // await fetch('/api/menu/save', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(menuData)
    // });
    
    showSuccessMessage('메뉴 구조가 저장되었습니다.');
    
  } catch (error) {
    console.error('메뉴 저장 오류:', error);
    showErrorMessage('메뉴 저장 중 오류가 발생했습니다.');
  }
}

// 메뉴 데이터 추출
function extractMenuData(container) {
  const items = [];
  const topLevelItems = container.querySelectorAll(':scope > .menu-tree-item');
  
  topLevelItems.forEach((item, index) => {
    items.push(extractItemData(item, null, index));
  });
  
  return items;
}

// 개별 메뉴 아이템 데이터 추출
function extractItemData(item, parentId, order) {
  const id = item.dataset.id;
  const level = parseInt(item.dataset.level);
  const title = item.querySelector('.menu-title').textContent;
  const icon = item.querySelector('.menu-icon').textContent;
  const children = [];
  
  const childItems = item.querySelectorAll(':scope > .menu-children > .menu-tree-item');
  childItems.forEach((child, index) => {
    children.push(extractItemData(child, id, index));
  });
  
  return {
    id,
    title,
    icon,
    level,
    parentId,
    order,
    children
  };
}

// 메뉴 편집 폼 초기화
function resetMenuForm() {
  const menuNameInput = document.querySelector('.menu-edit-form input[type="text"]');
  const menuTypeSelect = document.querySelector('.menu-edit-form select');
  const linkUrlInput = document.querySelector('.menu-edit-form input[placeholder*="URL"]');
  const iconSelect = document.querySelectorAll('.menu-edit-form select')[1];
  const parentSelect = document.querySelectorAll('.menu-edit-form select')[2];
  const orderInput = document.querySelector('.menu-edit-form input[type="number"]');
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  
  if (menuNameInput) menuNameInput.value = '';
  if (menuTypeSelect) menuTypeSelect.selectedIndex = 0;
  if (linkUrlInput) linkUrlInput.value = '';
  if (iconSelect) iconSelect.selectedIndex = 0;
  if (parentSelect) parentSelect.selectedIndex = 0;
  if (orderInput) orderInput.value = '1';
  
  // 토글 버튼 초기화 (사용 상태로)
  toggleButtons.forEach((btn, index) => {
    if (index === 0) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// 메뉴 편집 폼 저장
function saveMenuForm() {
  const selectedMenuItem = document.querySelector('.menu-tree-item.selected');
  if (!selectedMenuItem) {
    showWarningMessage('편집할 메뉴를 선택해주세요.');
    return;
  }
  
  const menuNameInput = document.querySelector('.menu-edit-form input[type="text"]');
  const menuTypeSelect = document.querySelector('.menu-edit-form select');
  const linkUrlInput = document.querySelector('.menu-edit-form input[placeholder*="URL"]');
  const iconSelect = document.querySelectorAll('.menu-edit-form select')[1];
  const parentSelect = document.querySelectorAll('.menu-edit-form select')[2];
  const orderInput = document.querySelector('.menu-edit-form input[type="number"]');
  const isEnabled = document.querySelector('.toggle-btn.active').textContent === '사용';
  
  if (!menuNameInput || !menuNameInput.value.trim()) {
    showErrorMessage('메뉴명을 입력해주세요.');
    return;
  }
  
  // 메뉴 정보 업데이트
  const titleElement = selectedMenuItem.querySelector('.menu-title');
  const iconElement = selectedMenuItem.querySelector('.menu-icon');
  
  if (titleElement) titleElement.textContent = menuNameInput.value.trim();
  
  // 아이콘 업데이트 (선택된 값에 따라)
  if (iconSelect && iconElement) {
    const iconMap = {
      'workspace.svg': '🏢',
      'user.svg': '👤',
      'history.svg': '📋',
      'meeting.svg': '📝',
      'dictionary.svg': '📚',
      'stats.svg': '📊',
      'daily.svg': '📅',
      'transfer.svg': '🔄'
    };
    
    const selectedIcon = iconSelect.value;
    iconElement.textContent = iconMap[selectedIcon] || '📄';
  }
  
  // 비활성화 상태 처리
  if (!isEnabled) {
    selectedMenuItem.style.opacity = '0.6';
    selectedMenuItem.setAttribute('draggable', 'false');
  } else {
    selectedMenuItem.style.opacity = '1';
    selectedMenuItem.setAttribute('draggable', 'true');
  }
  
  showSuccessMessage('메뉴 정보가 업데이트되었습니다.');
}

// 자동 저장 기능 (드래그 앤 드롭 시 호출)
function autoSaveMenuStructure() {
  const menuData = extractMenuData(document.getElementById('menuTree'));
  
  try {
    // 로컬 스토리지에 자동 저장
    localStorage.setItem('menuStructureAutoSave', JSON.stringify({
      data: menuData,
      timestamp: Date.now()
    }));
    
    console.log('메뉴 구조가 자동 저장되었습니다.');
    
  } catch (error) {
    console.error('자동 저장 오류:', error);
  }
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
