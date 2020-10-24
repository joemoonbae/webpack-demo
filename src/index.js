//CommonJS spec require, export
const _ = require('lodash');
import './style.css';
import './hello.scss';

//es 모듈화의 named import
import {area, circumference} from './js/circle';
//es default import {} 없이 이름을 마음대로 할수 있다

function component() {
  let element = document.createElement('div');


  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack', area(5), circumference(5)], ' ');

  return element;
}

document.body.appendChild(component());