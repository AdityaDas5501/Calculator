let currentDisplay = '';
function button_click(val){
    currentDisplay = currentDisplay + val; 
}
function display(){
    document.querySelector('#display').value = currentDisplay || 0;
}