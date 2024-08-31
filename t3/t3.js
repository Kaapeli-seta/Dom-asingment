'use strict';

const target = document.querySelector('#target');

const env = new Date();
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const optionsT = {
  hour: '2-digit',
  minute: '2-digit',
};

const platform = navigator.userAgentData.platform;
const browser = navigator.userAgentData.brands[2].brand;
const browserV = navigator.userAgentData.brands[2].version;

console.log(platform);
console.log(browser);
console.log(browserV);

let w = window.innerWidth;
let h = window.innerHeight;
const aw = window.screen.availWidth;
const ah = window.screen.availHeight;
const date = env.toLocaleDateString('fi-FI', options);
const time = env.toLocaleTimeString('fi-FI', optionsT);

console.log(date);
console.log(time);

const html = `
<p>Browser: ${browser} ${browserV}</p>
<p>Platform: ${platform}</p>
<p id="size">Window size: ${w} x ${h}</p>
<p>Available space: ${aw} x ${ah}</p>
<p>Time: ${date}, ${time}</p>`;

target.insertAdjacentHTML('beforeend', html);

window.addEventListener('resize', function () {
  w = window.innerWidth;
  h = window.innerHeight;
  document.querySelector('#size').innerHTML = 'Window size: ' + w + ' x ' + h;
});
