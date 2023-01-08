const input = document.querySelector('input');
const groupOfFruits = [...document.querySelector('article.fruits').children];

function hideElement() {
   for (fruit of groupOfFruits) {
      fruit.classList.add('hidden');
   }
}
function showElement() {
   for (fruit of groupOfFruits) {
      fruit.classList.remove('hidden');
   }
}

input.addEventListener('keyup', ()=>{
   hideElement();
   if (input.value === '') {
      showElement();
   } else {
      for (let fruit of groupOfFruits) {
         if (fruit.innerHTML.toLowerCase().includes(input.value.toLowerCase())) {
            fruit.classList.remove('hidden');
         }
      }
   }
});