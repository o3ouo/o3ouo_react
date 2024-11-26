let todo = document.querySelector("#todo");
let list_box = document.querySelector(".list_box");
let remove = document.querySelector(".remove");

// Enter key로 새로운 리스트 추가
todo.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    let text = document.createElement("li"); // li 생성
    let txt = document.createElement("p"); // p 생성
    txt.classList.add("txt");
    let checkbox = document.createElement("input"); // 체크박스 생성
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("check");

    // 리스트 박스에 요소 추가
    list_box.appendChild(text);
    text.appendChild(checkbox);
    txt.textContent = `${todo.value}`;
    text.appendChild(txt);

    // 체크박스 상태에 따라 p에 줄 긋기
    checkbox.addEventListener("change", (e) => {
      if (e.currentTarget.checked) {
        txt.style.textDecoration = "line-through"; // 줄 긋기
      } else {
        txt.style.textDecoration = "none"; // 줄 제거
      }
    });

    // 텍스트 초기화
    todo.value = "";
  }
});

// Remove 버튼 클릭 시 체크된 요소 삭제
remove.addEventListener("click", () => {
  document.querySelectorAll(".list_box li").forEach((li) => {
    let checkbox = li.querySelector(".check");
    if (checkbox && checkbox.checked) {
      li.remove();
    }
  });
});
