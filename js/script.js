function bar(button) {
    if (window.innerWidth <= 768) {
        document.getElementById("sidebar").style.width = "85%";
    }
    else if (window.innerWidth <= 1024) {
        document.getElementById("sidebar").style.width = "65%";
    } else {
        document.getElementById("sidebar").style.width = "250px";
    }
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0"; // chiudi sidebar
}
