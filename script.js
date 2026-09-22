// ========================================
// PORTFOLIO AFDIKA AULIYANSYAH
// FULL JAVASCRIPT
// Blue Aurora + Shooting Star
// ========================================

document.addEventListener("DOMContentLoaded", () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer:fine)").matches;

    // ========================================
    // YEAR OTOMATIS
    // ========================================
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // ========================================
    // MOBILE NAVBAR
    // ========================================
    const menuToggle =
        document.querySelector(".menu-toggle");

    const navLinks =
        document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                navLinks.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.innerHTML = isOpen
                ? '<i class="bi bi-x-lg"></i>'
                : '<i class="bi bi-list"></i>';

        });


        navLinks
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        navLinks.classList.remove(
                            "open"
                        );

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                        menuToggle.innerHTML =
                            '<i class="bi bi-list"></i>';

                    }
                );

            });

    }


    // ========================================
    // REVEAL ANIMATION
    // ========================================
    const revealElements =
        document.querySelectorAll(".reveal");


    if (
        !reduceMotion &&
        "IntersectionObserver" in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }

                        entry.target.classList.add(
                            "show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin:
                        "0px 0px -40px 0px"
                }
            );


        revealElements.forEach(element => {

            revealObserver.observe(
                element
            );

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add(
                "show"
            );

        });

    }


    // ========================================
    // HERO PARALLAX
    // ========================================
    const hero =
        document.querySelector(".hero");

    const heroFrame =
        document.querySelector(".hero-frame");


    if (
        !reduceMotion &&
        finePointer &&
        hero &&
        heroFrame
    ) {

        let animationFrame;


        hero.addEventListener(
            "pointermove",
            event => {

                const rect =
                    hero.getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    ) /
                        rect.width -
                    0.5;


                const y =
                    (
                        event.clientY -
                        rect.top
                    ) /
                        rect.height -
                    0.5;


                cancelAnimationFrame(
                    animationFrame
                );


                animationFrame =
                    requestAnimationFrame(
                        () => {

                            heroFrame.style.transform =
                                `
                                    perspective(1000px)
                                    rotateY(${x * 4}deg)
                                    rotateX(${y * -4}deg)
                                    translateY(-3px)
                                `;

                        }
                    );

            }
        );


        hero.addEventListener(
            "pointerleave",
            () => {

                cancelAnimationFrame(
                    animationFrame
                );


                heroFrame.style.transform =
                    `
                        perspective(1000px)
                        rotateY(0deg)
                        rotateX(0deg)
                        translateY(0)
                    `;

            }
        );

    }


    // ========================================
    // HOBBY CARD TILT
    // ========================================
    const hobbyCards =
        document.querySelectorAll(
            ".social-card"
        );


    if (
        !reduceMotion &&
        finePointer
    ) {

        hobbyCards.forEach(card => {

            card.addEventListener(
                "pointermove",
                event => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        (
                            event.clientX -
                            rect.left
                        ) /
                            rect.width -
                        0.5;


                    const y =
                        (
                            event.clientY -
                            rect.top
                        ) /
                            rect.height -
                        0.5;


                    card.style.transform =
                        `
                            perspective(900px)
                            rotateX(${y * -2}deg)
                            rotateY(${x * 2}deg)
                            translateY(-6px)
                        `;

                }
            );


            card.addEventListener(
                "pointerleave",
                () => {

                    card.style.transform = "";

                }
            );

        });

    }


    // ========================================
    // SCROLL PROGRESS BAR
    // ========================================
    const progressBar =
        document.querySelector(
            ".scroll-progress"
        );


    const updateProgress = () => {

        if (!progressBar) {
            return;
        }


        const scrollTop =
            window.scrollY;


        const documentHeight =
            document.documentElement
                .scrollHeight -
            window.innerHeight;


        const progress =
            documentHeight > 0
                ? (
                    scrollTop /
                    documentHeight
                ) * 100
                : 0;


        progressBar.style.width =
            `${progress}%`;

    };


    if (progressBar) {

        window.addEventListener(
            "scroll",
            updateProgress,
            {
                passive: true
            }
        );

        updateProgress();

    }


    // ========================================
    // SMOOTH SCROLL
    // ========================================
    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    let target = null;


                    try {

                        target =
                            document.querySelector(
                                targetId
                            );

                    } catch {

                        return;

                    }


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({

                        behavior:
                            reduceMotion
                                ? "auto"
                                : "smooth",

                        block:
                            "start"

                    });

                }
            );

        });


    // ========================================
    // NAVBAR SAAT SCROLL
    // ========================================
    const navbar =
        document.querySelector(
            ".navbar"
        );


    if (navbar) {

        const updateNavbar = () => {

            navbar.classList.toggle(
                "scrolled",
                window.scrollY > 40
            );

        };


        window.addEventListener(
            "scroll",
            updateNavbar,
            {
                passive: true
            }
        );


        updateNavbar();

    }


    // ========================================
    // ACTIVE NAVIGATION
    // ========================================
    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const navItems =
        document.querySelectorAll(
            ".nav-links a"
        );


    if (
        sections.length &&
        navItems.length &&
        "IntersectionObserver" in window
    ) {

        const sectionObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        navItems.forEach(link => {

                            link.classList.remove(
                                "active"
                            );

                        });


                        const activeLink =
                            document.querySelector(
                                `.nav-links a[href="#${entry.target.id}"]`
                            );


                        if (activeLink) {

                            activeLink.classList.add(
                                "active"
                            );

                        }

                    });

                },
                {
                    threshold:
                        0.45
                }
            );


        sections.forEach(section => {

            sectionObserver.observe(
                section
            );

        });

    }


    // ========================================
    // HOBBY IMAGE HOVER
    // ========================================
    const hobbyImages =
        document.querySelectorAll(
            ".social-card .social-photo img"
        );


    hobbyImages.forEach(image => {

        image.addEventListener(
            "mouseenter",
            () => {

                image.style.transform =
                    "scale(1.06)";

            }
        );


        image.addEventListener(
            "mouseleave",
            () => {

                image.style.transform =
                    "scale(1)";

            }
        );

    });


    // ========================================
    // HEART BUTTON
    // ========================================
    document
        .querySelectorAll(
            ".heart-button"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const icon =
                        button.querySelector(
                            "i"
                        );


                    if (!icon) {
                        return;
                    }


                    const liked =
                        button.classList.toggle(
                            "liked"
                        );


                    icon.classList.toggle(
                        "bi-heart",
                        !liked
                    );


                    icon.classList.toggle(
                        "bi-heart-fill",
                        liked
                    );

                }
            );

        });


    // ========================================
    // BOOKMARK BUTTON
    // ========================================
    document
        .querySelectorAll(
            ".social-actions > button"
        )
        .forEach(button => {

            const icon =
                button.querySelector(
                    "i.bi-bookmark"
                );


            if (!icon) {
                return;
            }


            button.addEventListener(
                "click",
                () => {

                    const saved =
                        button.classList.toggle(
                            "saved"
                        );


                    icon.classList.toggle(
                        "bi-bookmark",
                        !saved
                    );


                    icon.classList.toggle(
                        "bi-bookmark-fill",
                        saved
                    );

                }
            );

        });


    // ========================================
    // BUTTON RIPPLE EFFECT
    // ========================================
    document
        .querySelectorAll(
            ".btn, button"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                function (event) {

                    if (reduceMotion) {
                        return;
                    }


                    const rect =
                        this.getBoundingClientRect();


                    const ripple =
                        document.createElement(
                            "span"
                        );


                    const size =
                        Math.max(
                            rect.width,
                            rect.height
                        );


                    ripple.style.width =
                        `${size}px`;


                    ripple.style.height =
                        `${size}px`;


                    ripple.style.left =
                        `
                            ${event.clientX -
                                rect.left -
                                size / 2}px
                        `;


                    ripple.style.top =
                        `
                            ${event.clientY -
                                rect.top -
                                size / 2}px
                        `;


                    ripple.classList.add(
                        "ripple-effect"
                    );


                    this.appendChild(
                        ripple
                    );


                    setTimeout(
                        () => {

                            ripple.remove();

                        },
                        600
                    );

                }
            );

        });


    // ========================================
    // KONTAK / FORM PESAN
    // ========================================
    const contactForm =
        document.getElementById(
            "contactForm"
        );


    const formStatus =
        document.getElementById(
            "formStatus"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const name =
                    document
                        .getElementById(
                            "name"
                        )
                        ?.value.trim();


                const email =
                    document
                        .getElementById(
                            "email"
                        )
                        ?.value.trim();


                const message =
                    document
                        .getElementById(
                            "message"
                        )
                        ?.value.trim();


                if (
                    !name ||
                    !email ||
                    !message
                ) {

                    if (formStatus) {

                        formStatus.textContent =
                            "Lengkapi semua kolom terlebih dahulu.";

                    }


                    return;

                }


                const subject =
                    encodeURIComponent(
                        `Pesan dari ${name} - Portfolio Afdika`
                    );


                const body =
                    encodeURIComponent(
                        `Halo Afdika,\n\n` +
                        `${message}\n\n` +
                        `Nama: ${name}\n` +
                        `Email: ${email}`
                    );


                const mailto =
                    `mailto:afdika.com90@gmail.com?subject=${subject}&body=${body}`;


                if (formStatus) {

                    formStatus.textContent =
                        "Membuka aplikasi email...";

                }


                window.location.href =
                    mailto;


                setTimeout(
                    () => {

                        contactForm.reset();


                        if (formStatus) {

                            formStatus.textContent =
                                "";

                        }

                    },
                    1000
                );

            }
        );

    }


    // ========================================
    // HOVER ICON SOSMED
    // ========================================
    document
        .querySelectorAll(
            ".social-link"
        )
        .forEach(link => {

            link.addEventListener(
                "mouseenter",
                () => {

                    link.style.transform =
                        "translateY(-4px) scale(1.04)";

                }
            );


            link.addEventListener(
                "mouseleave",
                () => {

                    link.style.transform =
                        "";

                }
            );

        });


    // ========================================
    // SCROLL KE ATAS
    // ========================================
    const backTop =
        document.querySelector(
            ".back-to-top"
        );


    if (backTop) {

        const updateBackTop = () => {

            backTop.classList.toggle(
                "show",
                window.scrollY > 500
            );

        };


        window.addEventListener(
            "scroll",
            updateBackTop,
            {
                passive: true
            }
        );


        updateBackTop();


        backTop.addEventListener(
            "click",
            () => {

                window.scrollTo({

                    top:
                        0,

                    behavior:
                        reduceMotion
                            ? "auto"
                            : "smooth"

                });

            }
        );

    }


    // ========================================
    // HOBBY CARD STAGGER
    // ========================================
    hobbyCards.forEach(
        (card, index) => {

            card.style.transitionDelay =
                `${index * 80}ms`;

        }
    );


    // ========================================
    // CURSOR GLOW
    // ========================================
    const cursorGlow =
        document.querySelector(
            ".cursor-glow"
        );


    if (
        cursorGlow &&
        !reduceMotion &&
        finePointer
    ) {

        window.addEventListener(
            "pointermove",
            event => {

                cursorGlow.style.left =
                    `${event.clientX}px`;


                cursorGlow.style.top =
                    `${event.clientY}px`;

            },
            {
                passive: true
            }
        );

    }


    // ========================================
    // IMAGE LAZY LOAD
    // ========================================
    document
        .querySelectorAll(
            "img"
        )
        .forEach(img => {

            if (
                !img.hasAttribute(
                    "loading"
                )
            ) {

                img.setAttribute(
                    "loading",
                    "lazy"
                );

            }

        });


    // ========================================
    // FORM STATUS OTOMATIS HILANG
    // ========================================
    if (formStatus) {

        setTimeout(
            () => {

                formStatus.textContent =
                    "";

            },
            5000
        );

    }


    console.log(
        "Portfolio Afdika Auliyansyah aktif."
    );


    // ========================================
    // BLUE AURORA + SHOOTING STAR
    // ========================================
    const floatingBg =
        document.querySelector(
            ".floating-bg"
        );


    if (floatingBg) {

        // Hilangkan titik dan garis lama.
        floatingBg
            .querySelectorAll(
                ".float-dot, .float-line"
            )
            .forEach(el => {

                el.remove();

            });


        // ========================================
        // STYLE SHOOTING STAR
        // Aurora utamanya dikontrol CSS.
        // ========================================
        let style =
            document.getElementById(
                "aurora-shooting-style"
            );


        if (!style) {

            style =
                document.createElement(
                    "style"
                );


            style.id =
                "aurora-shooting-style";


            style.textContent = `

                @keyframes shootingStarAurora {

                    0% {

                        opacity: 0;

                        transform:
                            translate3d(
                                0,
                                0,
                                0
                            )
                            rotate(-25deg)
                            scale(.45);

                    }


                    10% {

                        opacity: .9;

                    }


                    28% {

                        opacity: .95;

                    }


                    52% {

                        opacity: .55;

                    }


                    78% {

                        opacity: .12;

                    }


                    100% {

                        opacity: 0;

                        transform:
                            translate3d(
                                var(--shoot-x),
                                var(--shoot-y),
                                0
                            )
                            rotate(-25deg)
                            scale(.9);

                    }

                }


                @keyframes smallAuroraStar {

                    0%,
                    100% {

                        opacity: .2;

                        transform:
                            scale(.72);

                    }


                    50% {

                        opacity: .95;

                        transform:
                            scale(1.12);

                    }

                }


                .shooting-star {

                    position:
                        absolute;

                    pointer-events:
                        none;

                    user-select:
                        none;

                    z-index:
                        2;

                    color:
                        #eafaff;

                    text-shadow:
                        0 0 7px
                        rgba(
                            101,
                            216,
                            255,
                            .90
                        ),

                        0 0 16px
                        rgba(
                            78,
                            192,
                            255,
                            .45
                        );

                    will-change:
                        transform,
                        opacity;

                }

            `;


            document.head.appendChild(
                style
            );

        }


        // ========================================
        // REDUCED MOTION
        // ========================================
        if (!reduceMotion) {

            // ========================================
            // BINTANG KECIL HTML
            // ========================================
            const originalStars =
                floatingBg.querySelectorAll(
                    ".float-star"
                );


            originalStars.forEach(
                (star, index) => {

                    star.style.pointerEvents =
                        "none";


                    star.style.userSelect =
                        "none";


                    star.style.color =
                        "#e8faff";


                    star.style.textShadow =
                        `
                            0 0 8px
                            rgba(
                                101,
                                216,
                                255,
                                .75
                            )
                        `;


                    star.style.animation =
                        `
                            smallAuroraStar
                            ${
                                2.8 +
                                (index % 4) * .7
                            }s
                            ease-in-out
                            infinite
                        `;

                }
            );


            // ========================================
            // WARNA BINTANG
            // BIRU / CYAN SAJA
            // ========================================
            const starColors = [

                "#f1fcff",
                "#dcf7ff",
                "#afefff",
                "#80ddff",
                "#65cff8"

            ];


            // ========================================
            // JUMLAH SHOOTING STAR
            // ========================================
            const shootingStarCount =
                16;


            // ========================================
            // BUAT SHOOTING STAR
            // ========================================
            for (
                let i = 0;
                i < shootingStarCount;
                i++
            ) {

                const star =
                    document.createElement(
                        "span"
                    );


                star.className =
                    "shooting-star";


                star.textContent =
                    i % 2 === 0
                        ? "✦"
                        : "✧";


                // Posisi random
                star.style.left =
                    `${Math.random() * 100}%`;


                star.style.top =
                    `${Math.random() * 88}%`;


                // Ukuran random
                star.style.fontSize =
                    `
                        ${
                            5 +
                            Math.random() * 8
                        }px
                    `;


                // Warna random biru/cyan
                star.style.color =
                    starColors[
                        Math.floor(
                            Math.random() *
                            starColors.length
                        )
                    ];


                // ========================================
                // JARAK GERAK DIAGONAL
                // ========================================
                const shootX =
                    55 +
                    Math.random() * 105;


                const shootY =
                    30 +
                    Math.random() * 80;


                star.style.setProperty(
                    "--shoot-x",
                    `${shootX}px`
                );


                star.style.setProperty(
                    "--shoot-y",
                    `${shootY}px`
                );


                // ========================================
                // DURASI
                // ========================================
                const duration =
                    3.8 +
                    Math.random() * 4.2;


                // ========================================
                // DELAY ACAK
                // ========================================
                const delay =
                    -(Math.random() * 10);


                // ========================================
                // ANIMATION
                // ========================================
                star.style.animation =
                    `
                        shootingStarAurora
                        ${duration}s
                        ease-out
                        ${delay}s
                        infinite
                    `;


                floatingBg.appendChild(
                    star
                );

            }

        }


        // ========================================
        // PARALLAX AURORA + BINTANG
        // ========================================
        if (
            !reduceMotion &&
            finePointer
        ) {

            let mouseX = 0;
            let mouseY = 0;

            let currentX = 0;
            let currentY = 0;


            // ========================================
            // MOUSE POSITION
            // ========================================
            window.addEventListener(
                "pointermove",
                event => {

                    mouseX =
                        (
                            event.clientX /
                            window.innerWidth -
                            0.5
                        ) * 2;


                    mouseY =
                        (
                            event.clientY /
                            window.innerHeight -
                            0.5
                        ) * 2;

                },
                {
                    passive: true
                }
            );


            const stars =
                floatingBg.querySelectorAll(
                    ".float-star, .shooting-star"
                );


            // ========================================
            // AURORA PARALLAX LOOP
            // ========================================
            function animateAurora() {

                currentX +=
                    (
                        mouseX -
                        currentX
                    ) * 0.018;


                currentY +=
                    (
                        mouseY -
                        currentY
                    ) * 0.018;


                // Aurora pertama
                floatingBg.style.setProperty(
                    "--aurora-x",
                    `${currentX * 18}px`
                );


                floatingBg.style.setProperty(
                    "--aurora-y",
                    `${currentY * 12}px`
                );


                // Aurora kedua
                floatingBg.style.setProperty(
                    "--aurora-x2",
                    `${currentX * -24}px`
                );


                floatingBg.style.setProperty(
                    "--aurora-y2",
                    `${currentY * -16}px`
                );


                // Bintang ikut bergerak sedikit
                stars.forEach(
                    (star, index) => {

                        const strength =
                            1.2 +
                            (index % 5) * .8;


                        star.style.marginLeft =
                            `${currentX * strength}px`;


                        star.style.marginTop =
                            `${currentY * strength}px`;

                    }
                );


                requestAnimationFrame(
                    animateAurora
                );

            }


            animateAurora();

        }

    }

});