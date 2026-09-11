/* ============================================================
   INFINITY SKILL SURGE REPORT 2030
   ISSR-2030

   Standalone Website Interaction Script

   No external libraries.
   No React.
   No TanStack.
   No Lovable runtime.
   ============================================================ */


/* ============================================================
   01. MOBILE NAVIGATION
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {

    const menuButton =
        document.querySelector(".mobile-menu-button");

    const mobileNavigation =
        document.querySelector(".mobile-navigation");


    if (!menuButton || !mobileNavigation) {
        return;
    }


    /* --------------------------------------------------------
       Open / Close Mobile Menu
    -------------------------------------------------------- */

    menuButton.addEventListener("click", function () {

        const isOpen =
            mobileNavigation.classList.toggle("open");


        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );


        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation"
                : "Open navigation"
        );

    });


    /* --------------------------------------------------------
       Close Menu After Selecting a Section
    -------------------------------------------------------- */

    const mobileLinks =
        mobileNavigation.querySelectorAll("a");


    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileNavigation.classList.remove("open");


            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );


            menuButton.setAttribute(
                "aria-label",
                "Open navigation"
            );

        });

    });


    /* --------------------------------------------------------
       Close Menu With Escape Key
    -------------------------------------------------------- */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                mobileNavigation.classList.contains("open")
            ) {

                mobileNavigation.classList.remove("open");


                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation"
                );


                menuButton.focus();

            }

        }
    );


    /* --------------------------------------------------------
       Smooth Anchor Navigation
    -------------------------------------------------------- */

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchorLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(targetId);


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });


                /*
                 * Update the URL hash without
                 * forcing a page reload.
                 */

                if (
                    history.pushState
                ) {

                    history.pushState(
                        null,
                        "",
                        targetId
                    );

                }

            }
        );

    });


});