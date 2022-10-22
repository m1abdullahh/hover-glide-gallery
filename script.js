const gallery = document.getElementById("gallery");

window.onmousemove = (e) => {
    const mouseX = e.clientX,
        mouseY = e.clientY;

    const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;

    const maxX = gallery.offsetWidth - window.innerWidth,
        maxY = gallery.offsetHeight - window.innerHeight;

    const panX = xDecimal * maxX * -1,
        panY = yDecimal * maxY * -1;

    // gallery.style.transform = `translate(${panX}px, ${panY}px)`;
    gallery.animate(
        {
            transform: `translate(${panX}px, ${panY}px)`,
        },
        {
            duration: 4000,
            fill: "forwards",
            easing: "ease",
        }
    );
};
