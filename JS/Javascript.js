$("#logo").click(function () {
    document.getElementById("cover").scrollIntoView({behavior: "smooth"});
})
$(".info-click").click(function () {
    document.getElementById("info").scrollIntoView({behavior: "smooth"});
})
$(".kjøp-click").click(function () {
    document.getElementById("cover").scrollIntoView({behavior: "smooth"});
})
$(".program-click").click(function () {
    document.getElementById("program").scrollIntoView({behavior: "smooth"});
})

const details = document.querySelectorAll("details");

// Add the onclick listeners.
details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
        // Close all the details that are not targetDetail.
        details.forEach((detail) => {
            if (detail !== targetDetail) {
                detail.removeAttribute("open");
            }
        });
    });
});
