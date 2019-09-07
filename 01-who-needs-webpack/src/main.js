// main.js
// [twice is taken from utils]
import { twice } from './utils';
import $ from 'jquery';

class MyStuff {
  go() {
    console.log('yay!');
  }
}

const x = new MyStuff();
x.go();

console.log(`2 + 2 = ${twice(2)}`);

$('body').text('hello!!!');
