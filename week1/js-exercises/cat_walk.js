
const catImg = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
 
let imgStyle = document.querySelector('style');
imgStyle.innerHTML = 'img{left: 0px};'

function catWalk() {
    imgStyle.innerHTML = 'img{right: 10px};'
}