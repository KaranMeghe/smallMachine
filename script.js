'use strict';
const btn = document.querySelector('button');
const text = document.querySelector('p');
const box = document.querySelector('.machine-info');

const updateBtn = () => {
  if (btn.textContent === 'Start Machine') {
    btn.textContent = 'Stop Machine';
    text.textContent = 'The Machine has Started';
    box.style.backgroundColor = 'Green';
  } else {
    btn.textContent = 'Start Machine';
    text.textContent = 'The Machine is Stopped';
    box.style.backgroundColor = 'orangered';
  }
};

btn.addEventListener('click', updateBtn);
