// 1. 클릭할 박스 요소를 가져옵니다.
const box = document.querySelector('.box');

// 2. 박스에 클릭 이벤트 리스너를 등록합니다.
box.addEventListener('click', () => {
  // 현재 탭에서 이동할 때
  window.location.href = 'magicSchoolAdv.html'; 
});