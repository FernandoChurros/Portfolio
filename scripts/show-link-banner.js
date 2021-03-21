let bannerWrapper = document.querySelector('.banner_wrapper');
let fernando = document.querySelector('.fernando');
let cowboy = document.querySelector('.cowboy');

bannerWrapper.onpointerover = function aparecer() {
   fernando.style.display = 'block';
   cowboy.style.display = 'none';
}

bannerWrapper.onpointerout = function desaparecer() {
   fernando.style.display = 'none';
   cowboy.style.display = 'block';
}