const logo = document.querySelector('.logo');

const makeRed = () => {
    logo.style.color = '#FF0000';
}

const makeDefault = () => {
    logo.style.color = 'black';
}



logo.addEventListener('mouseover', makeRed);
logo.addEventListener('mouseout', makeDefault);