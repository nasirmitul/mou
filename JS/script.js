function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}



let tabs = document.querySelectorAll('.tab');
let content = document.querySelectorAll('.content-item');
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => tabClick(i));
}

function tabClick(currentTab) {
    removeActive();
    tabs[currentTab].classList.add('active');
    content[currentTab].classList.add('active');
    console.log(currentTab);
}

function removeActive() {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
        content[i].classList.remove('active');
    }
}