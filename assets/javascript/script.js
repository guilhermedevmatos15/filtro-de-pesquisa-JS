const input = document.querySelector('input');
const groupOfFruits = [...document.querySelector('article.fruits').children];

input.addEventListener('keyup', ()=>{
   for (fruit of groupOfFruits) {
      fruit.classList.add('hidden');
   }
   
   for (let fruit of groupOfFruits) {
      if (input.value.toLowerCase().includes(fruit.innerHTML.toLowerCase())) {
         fruit.classList.remove('hidden');
      }
   }  
});