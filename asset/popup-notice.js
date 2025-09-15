// 공지사항 팝업 관리 시스템
class NoticePopupManager {
  constructor() {
    this.storageKey = 'notice_popup_dismiss';
    this.checkInterval = 60000; // 1분마다 체크
    this.init();
  }

  init() {
    // 페이지 로드 시 팝업 체크
    this.checkAndShowPopups();
    
    // 주기적으로 팝업 체크 (새로운 공지사항이나 만료된 dismiss 처리)
    setInterval(() => {
      this.checkAndShowPopups();
    }, this.checkInterval);
  }

  // 팝업 표시 여부 확인
  shouldShowPopup(noticeId) {
    const dismissData = this.getDismissData(noticeId);
    
    if (!dismissData) return true;
    
    const now = new Date().getTime();
    
    // 만료 시간 체크
    if (now > dismissData.expireTime) {
      this.removeDismissData(noticeId);
      return true;
    }
    
    return false;
  }

  // Dismiss 데이터 가져오기
  getDismissData(noticeId) {
    try {
      const data = localStorage.getItem(`${this.storageKey}_${noticeId}`);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error('Dismiss 데이터 로드 오류:', e);
      return null;
    }
  }

  // Dismiss 데이터 저장
  saveDismissData(noticeId, hours) {
    const now = new Date().getTime();
    let expireTime;
    let type;

    if (hours === -1) {
      // 영구히 보지 않기
      expireTime = new Date('2099-12-31').getTime();
      type = 'forever';
    } else {
      expireTime = now + (hours * 60 * 60 * 1000);
      if (hours === 24) type = 'today';
      else if (hours === 72) type = '3days';
      else if (hours === 168) type = 'week';
      else type = 'custom';
    }

    const dismissData = {
      noticeId,
      dismissTime: now,
      expireTime,
      type,
      hours
    };

    try {
      localStorage.setItem(`${this.storageKey}_${noticeId}`, JSON.stringify(dismissData));
      return true;
    } catch (e) {
      console.error('Dismiss 데이터 저장 오류:', e);
      return false;
    }
  }

  // Dismiss 데이터 제거
  removeDismissData(noticeId) {
    localStorage.removeItem(`${this.storageKey}_${noticeId}`);
  }

  // 공지사항 팝업 생성 및 표시
  showNoticePopup(noticeData) {
    if (!this.shouldShowPopup(noticeData.id)) {
      return false;
    }

    const popup = this.createPopupElement(noticeData);
    document.body.appendChild(popup);
    
    // 애니메이션을 위한 약간의 지연
    setTimeout(() => {
      popup.style.display = 'flex';
    }, 10);

    return true;
  }

  // 팝업 엘리먼트 생성
  createPopupElement(noticeData) {
    const overlay = document.createElement('div');
    overlay.className = 'notice-popup-overlay';
    overlay.id = `popup_${noticeData.id}`;
    
    const dismissButtons = this.createDismissButtons(noticeData);
    
    overlay.innerHTML = `
      <div class="notice-popup">
        <div class="notice-popup-header">
          <h2 class="notice-popup-title">${noticeData.title}</h2>
          <button class="notice-popup-close" onclick="noticePopupManager.closePopup('${noticeData.id}')">&times;</button>
        </div>

        <div class="notice-popup-meta">
          <span class="notice-priority ${noticeData.priority}">${this.getPriorityText(noticeData.priority)}</span>
          <span>${noticeData.author}</span>
          <span>${noticeData.createdAt}</span>
        </div>

        <div class="notice-popup-content">
          ${noticeData.content}
        </div>

        <div class="notice-popup-actions">
          ${dismissButtons}
          <div class="popup-main-actions">
            <button class="popup-btn outline" onclick="noticePopupManager.closePopup('${noticeData.id}')">닫기</button>
            <button class="popup-btn primary" onclick="noticePopupManager.viewDetails('${noticeData.id}')">자세히 보기</button>
          </div>
        </div>
      </div>
    `;

    // 오버레이 클릭 시 닫기
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        this.closePopup(noticeData.id);
      }
    });

    return overlay;
  }

  // Dismiss 버튼들 생성
  createDismissButtons(noticeData) {
    if (!noticeData.dismissOptions || !noticeData.dismissOptions.enabled) {
      return '';
    }

    const options = noticeData.dismissOptions.choices || {};
    let buttons = '<div class="notice-popup-dismiss">';

    if (options.today) {
      buttons += `<button class="dismiss-btn" onclick="noticePopupManager.dismissPopup('${noticeData.id}', 24)">오늘 하루 보지 않기</button>`;
    }
    if (options.threeDays) {
      buttons += `<button class="dismiss-btn" onclick="noticePopupManager.dismissPopup('${noticeData.id}', 72)">3일동안 보지 않기</button>`;
    }
    if (options.week) {
      buttons += `<button class="dismiss-btn" onclick="noticePopupManager.dismissPopup('${noticeData.id}', 168)">일주일 동안 보지 않기</button>`;
    }
    if (options.forever) {
      buttons += `<button class="dismiss-btn primary" onclick="noticePopupManager.dismissPopup('${noticeData.id}', -1)">다시 보지 않기</button>`;
    }

    buttons += '</div>';
    return buttons;
  }

  // 우선순위 텍스트 변환
  getPriorityText(priority) {
    const priorityMap = {
      'high': '높음',
      'medium': '보통',
      'low': '낮음'
    };
    return priorityMap[priority] || '보통';
  }

  // 팝업 닫기
  closePopup(noticeId) {
    const popup = document.getElementById(`popup_${noticeId}`);
    if (popup) {
      popup.style.animation = 'popupSlideOut 0.3s ease-in forwards';
      setTimeout(() => {
        popup.remove();
      }, 300);
    }
  }

  // 다시 보지 않기 처리
  dismissPopup(noticeId, hours) {
    const success = this.saveDismissData(noticeId, hours);
    
    if (success) {
      let message;
      if (hours === -1) {
        message = '이 공지사항을 다시 보지 않습니다.';
      } else if (hours === 24) {
        message = '오늘 하루 이 공지사항을 보지 않습니다.';
      } else if (hours === 72) {
        message = '3일동안 이 공지사항을 보지 않습니다.';
      } else if (hours === 168) {
        message = '일주일 동안 이 공지사항을 보지 않습니다.';
      }
      
      // 간단한 토스트 알림 (선택사항)
      this.showToast(message);
    }
    
    this.closePopup(noticeId);
  }

  // 자세히 보기
  viewDetails(noticeId) {
    window.open(`notice_detail.html?id=${noticeId}`, '_blank');
    this.closePopup(noticeId);
  }

  // 토스트 알림 표시
  showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #292A2B;
      color: white;
      padding: 12px 20px;
      border-radius: 6px;
      font-size: 14px;
      z-index: 10001;
      animation: toastSlideIn 0.3s ease-out;
    `;
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'toastSlideOut 0.3s ease-in forwards';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // 서버에서 팝업 공지사항 목록 가져오기 (예시)
  async checkAndShowPopups() {
    try {
      // 실제로는 서버 API 호출
      const popupNotices = await this.fetchPopupNotices();
      
      popupNotices.forEach(notice => {
        if (this.shouldShowPopup(notice.id)) {
          this.showNoticePopup(notice);
        }
      });
    } catch (error) {
      console.error('팝업 공지사항 로드 오류:', error);
    }
  }

  // 팝업 공지사항 목록 가져오기 (서버 API 호출 예시)
  async fetchPopupNotices() {
    // 실제로는 fetch API 사용
    // const response = await fetch('/api/notices/popup');
    // return await response.json();
    
    // 데모용 데이터
    return [
      {
        id: 'notice_5',
        title: '[긴급] 시스템 점검 안내 (2024.09.20 02:00~06:00)',
        content: '<h3>시스템 점검 안내</h3><p>안녕하세요. Timbel 관리팀입니다.</p><p>시스템 안정성 향상을 위한 정기 점검을 실시합니다.</p><ul><li>점검 일시: 2024년 9월 20일 (금) 02:00 ~ 06:00</li><li>점검 내용: 서버 업그레이드 및 보안 패치</li><li>영향 범위: 전체 서비스 일시 중단</li></ul><p>점검 시간 동안 서비스 이용이 불가하오니 양해 부탁드립니다.</p>',
        priority: 'high',
        author: '관리자',
        createdAt: '2024.09.15 14:30',
        startDate: '2024-09-15T00:00',
        endDate: '2024-09-25T23:59',
        dismissOptions: {
          enabled: true,
          choices: {
            today: true,
            threeDays: true,
            week: true,
            forever: false
          }
        }
      }
    ];
  }

  // 모든 Dismiss 데이터 정리 (관리용)
  cleanupExpiredDismissData() {
    const now = new Date().getTime();
    const keys = Object.keys(localStorage).filter(key => key.startsWith(this.storageKey));
    
    keys.forEach(key => {
      try {
        const data = JSON.parse(localStorage.getItem(key));
        if (data && data.expireTime && now > data.expireTime) {
          localStorage.removeItem(key);
        }
      } catch (e) {
        // 잘못된 데이터는 제거
        localStorage.removeItem(key);
      }
    });
  }

  // 특정 공지사항의 Dismiss 상태 초기화 (관리자용)
  resetDismissStatus(noticeId) {
    this.removeDismissData(noticeId);
    console.log(`공지사항 ${noticeId}의 dismiss 상태가 초기화되었습니다.`);
  }

  // 모든 Dismiss 상태 초기화 (관리자용)
  resetAllDismissStatus() {
    const keys = Object.keys(localStorage).filter(key => key.startsWith(this.storageKey));
    keys.forEach(key => localStorage.removeItem(key));
    console.log('모든 공지사항 dismiss 상태가 초기화되었습니다.');
  }
}

// CSS 애니메이션 추가
const popupStyles = document.createElement('style');
popupStyles.textContent = `
  @keyframes popupSlideOut {
    from {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
    to {
      opacity: 0;
      transform: scale(0.9) translateY(-20px);
    }
  }

  @keyframes toastSlideIn {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes toastSlideOut {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(100%);
    }
  }
`;
document.head.appendChild(popupStyles);

// 전역 인스턴스 생성
const noticePopupManager = new NoticePopupManager();

// ESC 키로 모든 팝업 닫기
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const popups = document.querySelectorAll('.notice-popup-overlay');
    popups.forEach(popup => {
      const noticeId = popup.id.replace('popup_', '');
      noticePopupManager.closePopup(noticeId);
    });
  }
});

// 개발자 도구용 함수들 (콘솔에서 사용)
window.noticePopupDebug = {
  showStatus: () => {
    const keys = Object.keys(localStorage).filter(key => key.startsWith('notice_popup_dismiss'));
    console.log('현재 Dismiss 상태:', keys.map(key => {
      const data = JSON.parse(localStorage.getItem(key));
      const remaining = Math.max(0, data.expireTime - new Date().getTime());
      return {
        key,
        data,
        remainingHours: Math.round(remaining / (1000 * 60 * 60))
      };
    }));
  },
  resetAll: () => noticePopupManager.resetAllDismissStatus(),
  reset: (noticeId) => noticePopupManager.resetDismissStatus(noticeId),
  cleanup: () => noticePopupManager.cleanupExpiredDismissData()
};
