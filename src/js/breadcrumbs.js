let url = window.location.href;

let currentUrl = url.split("/");

let breadcrumb = document.querySelector(".breadcrumbs__current");

breadcrumb.textContent = currentUrl[3];