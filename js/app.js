const next = document.querySelector('.next');
const prev = document.querySelector('.prev')
let currentImgIndex = 0;
let previousImgIndex = 0;
 
const images = document.getElementsByClassName('images');

next.addEventListener('click', () => {
  changeImage(1);
})

prev.addEventListener('click', () => {
    //stuff will go here
    changeImage(-1);
})

  function changeImage (nextOrPrev)  {
    console.log(images[previousImgIndex])
    previousImgIndex = currentImgIndex;
    currentImgIndex = currentImgIndex + nextOrPrev
    images[previousImgIndex].style.display = 'none';
    if(currentImgIndex < 0) {
        currentImgIndex = images.length + nextOrPrev;
      }else if (currentImgIndex >= images.length){
        currentImgIndex = 0;
      }
    images[currentImgIndex].style.display = 'block';
  }