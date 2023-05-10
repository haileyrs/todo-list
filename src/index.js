import _ from 'lodash';
import './style.css';
import header from './modules/header';
import sidebar from './modules/sidebar';

// function component() {
//   const element = document.createElement('div');

//  // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

const content = document.querySelector('.content');
content.appendChild(sidebar());
content.appendChild(header());