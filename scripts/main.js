var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/my-cats.jpeg') {
      myImage.setAttribute ('src', 'images/my-cats2.jpeg');
    } else {
      myImage.setAttribute ('src', 'images/my-cats.jpeg');
    }
}
