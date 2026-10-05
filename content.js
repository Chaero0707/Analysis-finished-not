// OGS 알림창에서 "Analysis finished" 텍스트를 찾아 삭제하는 함수
function removeAnalysisAlert() {
    // 1. 팝업(Toast) 알림 제거
    const toasts = document.querySelectorAll('.toast, .notification, [role="alert"]');
    toasts.forEach(toast => {
        if (toast.textContent.includes('Analysis finished')) {
            toast.remove();
        }
    });

    // 2. 종 아이콘(알림 목록) 메뉴 내부의 항목 제거
    const alertItems = document.querySelectorAll('.notification-item, .alert-list-item, li');
    alertItems.forEach(item => {
        if (item.textContent.includes('Analysis finished')) {
            item.remove();
        }
    });
}

// 웹사이트에 새로운 요소가 추가될 때마다 실시간으로 감시 (MutationObserver)
const observer = new MutationObserver((mutations) => {
    removeAnalysisAlert();
});

// 페이지 전체 감시 시작
observer.observe(document.body, {
    childList: true,
    subtree: true
});

// 페이지 로드 직후 1차 실행
removeAnalysisAlert();
