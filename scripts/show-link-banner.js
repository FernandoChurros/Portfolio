let elmt = [document.querySelector('.banner_wrapper'), document.querySelector('.fernando'), document.querySelector('.cowboy')];

elmt[0].onpointerover = () => {elmt[1].style.display = 'block'; elmt[2].style.display = 'none';}

elmt[0].onpointerout = () => {elmt[1].style.display = 'none'; elmt[2].style.display = 'block';}