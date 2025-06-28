// ヘッダー，フッターを読み込む
fetch("/component/header.html")
    .then((response) => response.text())
    .then((data) => document.querySelector("#header-placeholder").innerHTML = data);
fetch("/component/footer.html")
    .then((response) => response.text())
    .then((data) => document.querySelector("#footer-placeholder").innerHTML = data);
fetch("/component/floating_menu.html")
    .then((response) => response.text())
    .then((data) => document.querySelector("#floating-menu-placeholder").innerHTML = data);