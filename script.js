// PAGE LOAD ANIMATION

window.addEventListener("load", () => {

    const heroText = document.querySelector(".left-title");
    const rightText = document.querySelector(".right-title");
    const image = document.querySelector(".main-image");
    const card = document.querySelector(".members-card");

    heroText.style.opacity = "0";
    rightText.style.opacity = "0";
    image.style.opacity = "0";
    card.style.opacity = "0";

    heroText.style.transform = "translateX(-80px)";
    rightText.style.transform = "translateX(80px)";
    image.style.transform = "translateX(-50%) translateY(50px)";
    card.style.transform = "translateY(50px)";

    setTimeout(() => {

        heroText.style.transition = "1s";
        heroText.style.opacity = "1";
        heroText.style.transform = "translateX(0)";

    }, 200);

    setTimeout(() => {

        rightText.style.transition = "1s";
        rightText.style.opacity = "1";
        rightText.style.transform = "translateX(0)";

    }, 400);

    setTimeout(() => {

        image.style.transition = "1.2s";
        image.style.opacity = "1";
        image.style.transform = "translateX(-50%) translateY(0)";

    }, 600);

    setTimeout(() => {

        card.style.transition = "1s";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

    }, 800);

});


// FLOATING IMAGE EFFECT

const image = document.querySelector(".main-image");

if(image){

    let pos = 0;
    let direction = 1;

    setInterval(() => {

        pos += direction;

        image.style.marginTop = pos + "px";

        if(pos > 10) direction = -1;
        if(pos < 0) direction = 1;

    }, 80);

}


// MEMBERS CARD HOVER

const card = document.querySelector(".members-card");

if(card){

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";
        card.style.transition = ".4s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

}


// BUTTON EFFECTS

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";
        btn.style.transition = ".3s";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});


// COUNTER ANIMATION

const listenerText = document.querySelector(".members-card h2");

if(listenerText){

    let count = 0;

    const target = 100;

    const timer = setInterval(() => {

        count++;

        listenerText.innerHTML = count + "K+";

        if(count >= target){

            clearInterval(timer);

        }

    }, 20);

}


// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 20){

        nav.style.background = "rgba(42,7,7,.95)";
        nav.style.backdropFilter = "blur(10px)";

    }else{

        nav.style.background = "transparent";

    }

});


// WAVE PARALLAX EFFECT

document.addEventListener("mousemove", (e) => {

    const wave1 = document.querySelector(".wave1");
    const wave2 = document.querySelector(".wave2");
    const wave3 = document.querySelector(".wave3");

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    wave1.style.transform =
    `translate(${x * 20}px, ${y * 20}px)`;

    wave2.style.transform =
    `translate(${x * -15}px, ${y * -15}px)`;

    wave3.style.transform =
    `translate(${x * 10}px, ${y * 10}px)`;

});