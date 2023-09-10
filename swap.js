const buttons = document.querySelectorAll('.button');
const body =document.querySelector('body');

buttons.forEach((button)=>{
  console.log(button);
  button.addEventListener('click', (e)=>{
console.log(e);
console.log(e.target.id);
   if(e.target.id === 'pink'){
    body.style.backgroundColor=e.target.id;
   }
   if(e.target.id === 'brown'){
    body.style.backgroundColor=e.target.id;
   }
   if(e.target.id === 'orange'){
    body.style.backgroundColor=e.target.id;
   }
   if(e.target.id === 'skyblue'){
    body.style.backgroundColor=e.target.id;
   }
   if(e.target.id === 'red'){
    body.style.backgroundColor=e.target.id;
   }
  });
});