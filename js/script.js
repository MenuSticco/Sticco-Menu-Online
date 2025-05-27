function bar(button) {
    if (window.innerWidth <= 768) {
        document.getElementById("sidebar").style.width = "85%";
        document.body.classList.add("no-scroll");
    }
    else if (window.innerWidth <= 1024) {
        document.getElementById("sidebar").style.width = "65%";
        document.body.classList.add("no-scroll");
    } else {
        document.getElementById("sidebar").style.width = "250px";
        document.body.classList.add("no-scroll");
    }
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0"; 
    document.body.classList.remove("no-scroll");
}
