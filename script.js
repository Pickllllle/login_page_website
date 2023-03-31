var boxs = document.querySelectorAll('.i-more');
console.log(boxs);
[...boxs].forEach((box)=>{
    box.addEventListener( 'click', function() {
    box.parentNode.parentNode.classList.toggle('is-flipped');
  });
});
