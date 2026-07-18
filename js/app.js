const navigationButtons = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");
const pageTitle = document.querySelector("#page-title");
const pageOpenButtons = document.querySelectorAll("[data-open-page]");

function openPage(pageName) {
    const targetPage = document.querySelector(#${pageName}-page);
    const targetNavigationButton = document.querySelector(
        [data-page="${pageName}"]
    );

    if (!targetPage || !targetNavigationButton) {
        return;
    }

    pages.forEach((page) => {
        page.classList.remove("active");
    });

    navigationButtons.forEach((button) => {
        button.classList.remove("active");
    });

    targetPage.classList.add("active");
    targetNavigationButton.classList.add("active");

    pageTitle.textContent = targetNavigationButton
        .querySelector("span:last-child")
        .textContent;

    window.location.hash = pageName;
}

navigationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        openPage(button.dataset.page);
    });
});

pageOpenButtons.forEach((button) => {
    button.addEventListener("click", () => {
        openPage(button.dataset.openPage);
    });
});

const requestedPage = window.location.hash.replace("#", "");

if (requestedPage) {
    openPage(requestedPage);
}
