var all = document.getElementById('btn-1');
var teen = document.getElementById('btn_2');
 

 let datacount1 = 0; // Initialisation de la valeur du bouton 1
 let datacount2 = 0; // Initialisation de la valeur du bouton 2

 
 all.addEventListener('click', () => {
     data-count1++; // Augmentation de la valeur du bouton 1
     value1.textContent = count1; 
 });

 
 teen.addEventListener('click', () => {
     data-count2++; // Augmentation de la valeur du bouton 2
     value2.textContent = count2; 
 });


 console.log("data-count1","data-count2");

