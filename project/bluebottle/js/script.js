/* 텍스트 애니메이션션 */
const lenis = new Lenis({
    duration: 2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// section_02
const targets = gsap.utils.toArray(".section_02 .about_bluebottle_01");

targets.forEach(target => {
    let SplitClient = new SplitType(target, {type: "lines, words, chars"});
    let lines = SplitClient.lines;
    let words = SplitClient.words;
    let chars = SplitClient.chars;

    gsap.from(lines, {
        yPercent: 100,
        autoAlpha: 0,
        duration: 0.5,
        ease: "circ.out",
        stagger: {
            amount: 1
        },
        scrollTrigger: {
            trigger: target,
            start: "top bottom",
            end: "+=100",
            toggleActions: "start restart restart restart",
            markers: true
        }
    });
});


// section_03 
const targets2 = gsap.utils.toArray(".section_03 .about_bluebottle_02");

targets2.forEach(target => {
    let SplitClient = new SplitType(target, {type: "lines, words, chars"});
    let lines = SplitClient.lines;
    let words = SplitClient.words;
    let chars = SplitClient.chars;

    gsap.from(lines, {
        yPercent: 100,
        autoAlpha: 0,
        duration: 0.9,
        ease: "circ.out",
        stagger: {
            amount: 1
        },
        scrollTrigger: {
            trigger: target,
            start: "top bottom",
            end: "+=100",
            toggleActions: "start restart restart restart",
            markers: true
        }
    });
});


