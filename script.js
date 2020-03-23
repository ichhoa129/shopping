
 var input = document.getElementById('input-field');
 input.addEventListener('change',updateStorage);
 function updateStorage() {
 sessionStorage.setItem('draft', input.value);
 }
 input.value = sessionStorage.getItem('draft');