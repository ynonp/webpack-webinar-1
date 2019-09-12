// main.js
// [twice is taken from utils]
import $ from 'jquery';
import './main.css';

$('body').html(`
<button>click me</button>
`);

$('button').on('click', function() {
  import('./utils').then(m => {
    const { twice } = m;
    this.textContent = twice('hello');
  });
});
