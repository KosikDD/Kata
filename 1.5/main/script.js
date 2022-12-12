let readmore = document.querySelector('.read-more');

readmore.addEventListener('click', function() {

  let hidden = document.querySelectorAll('.hidden');

  for (i of hidden){ 

    if(i.style.display === 'flex') {
      i.style.display = 'none';
      this.textContent = 'Показать все';
    } else {
      i.style.display = 'flex';
      this.textContent = 'Скрыть';
    }
  }
});
