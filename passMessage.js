let input = document.getElementById('input');
let message = document.querySelector('.message');

function submit(){
    if(input.value == '' || input.value == null){
        message.textContent = 'Enter Something!'; 
        message.style.color = 'red';
        setTimeout(() =>{
          message.textContent = ''; 
        }, 2500)
    }else{
        message.textContent = input.value;
        message.style.color = 'green';
        input.value = '';
        setTimeout(() =>{
            message.textContent = '';
        }, 5000)
    }
}