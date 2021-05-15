const openBtn = document.getElementById('btn-prize-open');
const popup = document.querySelector('#prize-popup');
const closeBtn = document.querySelector('#prize-popup_close');
const nameField = document.querySelector('#prize-popup input[name="name"]').parentNode;
const emailField = document.querySelector('#prize-popup input[name="email"]').parentNode;


function popupToggle(){
    popup.classList.toggle('hidden');
};

function  initializeField(field){
    const input = field.getElementsByTagName('input')[0];
   
    input.value = "";
   
    return {
        getValue() {
            return input.value;
        },
        focus(){
            input.focus() 
        }
     
    };

   }
   
   const nameFieldUtils = initializeField(nameField);
   const emailFieldUtils = initializeField(emailField);

openBtn.addEventListener('click', () => {
    popupToggle();
    nameFieldUtils.focus();
}
)

closeBtn.onclick = popupToggle;

function handleSumbit(event){

    event.preventDefault();

    const data = {
        name: nameFieldUtils.getValue(),
        
        email: emailFieldUtils.getValue(),
    }

    const url = new URL('http://inno-ijl.ru/multystub/stc-21-03/feedback');
    url.search = new URLSearchParams().toString();
    fetch(url.toString());
}





