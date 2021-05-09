const openBtn = document.getElementById('btn-prize-open');
const popup = document.querySelector('#prize-popup');
const closeBtn = document.querySelector('#prize-popup_close');

function popupToggle(){
    popup.classList.toggle('hidden');
};

openBtn.onclick = function popupToggle(){
    popup.classList.toggle('hidden');
};

closeBtn.onclick = popupToggle;




