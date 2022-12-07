gsap.registerPlugin(ScrollTrigger);

let panels = gsap.utils.toArray(".panel"),
    scrollTween;


gsap.utils.toArray(".panel").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: false,
        pinSpacing: false
    });
});


ScrollTrigger.create({
    snap: 1 / (panels.length - 1)
});


// ScrollBar - Progress
gsap.to('progress', {
    value: 100,
    ease: 'none',
    scrollTrigger: {
        scrub: 0.3
    }
});