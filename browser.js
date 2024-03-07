let imgBox = document.getElementById("");
let qrImage = document.getElementById("input-btn");
let qrText = document.getElementById("input-field");
let menu = document.getElementById(".nav menu");
let menuContent = document.getElementById("menu-content");

function search(){
    if(qrText.value.length > 0){
        alert('Searching ' + qrText.value + '...');
    }else{
        alert('Please input something...');
    };

}

window.onbeforeunload = function(){
    return "Do not reload, refresh or close this page until you are done with this examination. You would loose your answers and time if your do any of the above";
};

const toggleBtn = document.querySelector('.toggle_btn');
        const toggleBtnIcon = document.querySelector('.toggle_btn i');
        const menucontent = document.querySelector('.menu-content');

        toggleBtn.onclick = function () {
            menucontent.classList.toggle('open')
            const isOpen = menucontent.classList.contains('open')

            toggleBtnIcon.classList = isOpen
            ? 'fas fa-xmark'
            : 'fas fa-bars'
        }
