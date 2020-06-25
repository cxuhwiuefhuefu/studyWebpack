import '../styles/addImage.css'

let smallImg = document.createElement('img');
smallImg.src = require('../images/ph1.jpeg');
document.body.appendChild(smallImg);

let bigImg = document.createElement('img');
bigImg.src = require('../images/ph2.jpeg')
document.body.appendChild(bigImg);

