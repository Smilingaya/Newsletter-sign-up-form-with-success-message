const work1=document.querySelector('.work1');
const work2=document.querySelector('.work2');
const inpute=document.querySelector('#input');
const errour=document.querySelector('.errour-email');
const btn=document.querySelector('.boot');
const btn1=document.querySelector('.box4');
const result=document.querySelector('.result');

function valid(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (inpute.value.match(mailformat)){
    work1.style.display='none';
    work2.style.display='grid';
    result.textContent=inpute.value;
    
}else{
    inpute.style.backgroundColor="hsl(4, 100%, 90%)";
    inpute.style.color="hsl(4, 100%, 67%)";
    inpute.style.border=" 1px solid hsl(4, 100%, 67%)";
    errour.textContent="Valid email required";
}
}
function GoBack(){
    work1.style.display='grid';
    work2.style.display='none';
}
btn.addEventListener('click',valid);
btn1.addEventListener('click',GoBack);

