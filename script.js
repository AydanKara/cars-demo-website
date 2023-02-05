function mobileMenuFunc() {

    //! header sidebar start
    const btnOpenMobileMenu = document.querySelector("#btn-menu");
    const mobileMenu = document.querySelector("#mobile-menu");
    const closeMobileMenu = document.querySelector("#btn-close");

    btnOpenMobileMenu.addEventListener("click", function () {
        mobileMenu.style.top = "0";
    });

    closeMobileMenu.addEventListener("click", function () {
        mobileMenu.style.top = "-100%";
    });

    /* click outside start */
    document.addEventListener("click", function (event) {
        if (
            !event.composedPath().includes(mobileMenu) &&
            !event.composedPath().includes(btnOpenMobileMenu)
        ) {
            mobileMenu.style.top = "-100%";
        }
    });
    /* click outside end */


    //! header sidebar end
}

mobileMenuFunc();