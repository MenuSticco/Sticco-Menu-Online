// function bar(button) {
//     document.getElementById("sidebar").style.width = "250px";
// }

function bar(button) {
    const isMobile = window.innerWidth <= 768;
    document.getElementById("sidebar").style.width = isMobile ? "85%" : "250px";
}


function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}
