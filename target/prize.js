"use strict";

var openBtn = document.getElementById('btn-prize-open');
var popup = document.querySelector('#prize-popup');
var closeBtn = document.querySelector('#prize-popup_close');

function popupToggle() {
  popup.classList.toggle('hidden');
}

;

openBtn.onclick = function popupToggle() {
  popup.classList.toggle('hidden');
};

closeBtn.onclick = popupToggle;