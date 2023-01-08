const input = document.querySelector('input');
const groupOfFruits = [...document.querySelector('article.fruits').children];

function hideElement() {
   for (fruit of groupOfFruits) {
      fruit.classList.add('hidden');
   }
}

input.addEventListener('keyup', ()=>{
   hideElement();
   for (let fruit of groupOfFruits) {
      if (fruit.innerHTML.toLowerCase().includes(input.value.toLowerCase())) {
         fruit.classList.remove('hidden');
      }
   }  
});