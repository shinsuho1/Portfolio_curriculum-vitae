const skills = document.querySelectorAll(".skills>div");
const skill_title = document.querySelector(".info>.title");
const skill_text = document.querySelector(".info>span.text");
const skills_info = [
    { info: "스타일작업을 고려한 HTML5기준 웹 표준을 준수한 마크업 가능" }, //HTML5
    { info: "컴포넌트별, 페이지별 스타일과 반응형, Animation, flex, grid, float 등의 빠른 작업 가능 " }, //CSS
    { info: "ES6문법으로 활성화클래스, scroll 이벤트, 탭메뉴, 슬라이드, 데이터레이블, API사용, stylecomponent 등의 기능 및 객체지향 코드 작성 가능 " }, //JavaScript
    { info: "기본 hook사용과 Redux로 전역 상태관리 가능 기존 자바스크립트 문법을 JSX문법으로 적용하여 코딩과 리액트의 특징인 CSR에 대해 이해하며 사용함" }, //React
    { info: "전 처리기인 SASS로 컴포넌트별, 페이지별 스타일과 반응형, Animation, SASS 반복문, 조건문 등의 작업 가능" }, //SASS
    { info: "리액트를 활용하여 이미지와 동영상 등의 자료 캐싱과 전역상태관리 작업 가능 " }, //Redux
    { info: "다양한 API 정보를 불러와 사용하며, fetch와 Axios의 차이점을 활용하여 리액트한에는 사용 가능" }, //Axios
    { info: "Git으로 push/pull을 하여 데이터 공유작업 가능" }, //Github
    { info: "Excel Visual Basic Editor를 사용하며 각 버튼의 역할에대한 이해와, 시트 기능 분리, 사용자정의 폼, 모듈 등의 기능을 사용과 코딩가능 " }, //Visual Basic
    { info: "데이터 입력, 관리, 함수, 배열함수, 매크로, VBA 등의 컴퓨터활용능력1급 이상 수준의  작업가능하며 그중 함수 사용능력이 뛰어남" }, //Excel
    { info: "해당 주제에 대한 내용을 발표자료 제작과 각 기능들에 대해 완벽히 이해함" }, //PowerPoint
    { info: "내용입력/정리, 표, 그래프, 데이터 등의 기능을 워드프로세스 1급 이상의 수준으로 사용할 수 있음" }, //Word
    { info: "Excel의 데이터를 연동시켜 데이터 제어/활용의 유동적인 작업 가능" }, //Access
    { info: "데이터를 직접입력, 수정, Seleted 등의 작업과 외부 자료 연결, 사용 작업 등의 최소한의 작업가능" }, //MySQL Workbench
    { info: "컷편집과 자막, 효과 사용과 자체 영상 제작도 가능" }, //Premiere Pro

]


skills.forEach((el, index) => {
    el.addEventListener("mouseover", () => {
        skill_title.textContent = el.textContent;
        skill_text.textContent = skills_info[index].info;
        document.querySelector(".skills>div.on").classList.remove("on");
        el.classList.add("on");
    });
});