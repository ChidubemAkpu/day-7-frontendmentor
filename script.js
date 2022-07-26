const openClose = document.querySelectorAll('.open-and-close');
for (let actionButton of openClose){
        actionButton.addEventListener('click',myOpenCloseFunction)
}
function myOpenCloseFunction() {
    document.querySelector('.for-menu-container').classList.toggle('hide');
}

const dropDown1 = document.querySelector('.for-dropdown1');
const dropDown2 = document.querySelector('.for-dropdown2')
dropDown1.addEventListener('click', drop1);
dropDown2.addEventListener('click', drop2);
let imgLink1 = dropDown1.querySelector('img');
let imgLink2 = dropDown2.querySelector('img');

function drop1() {
    document.querySelector('.nav-list1').classList.toggle('hide-drop');
    if(imgLink1.src.includes('images/icon-arrow-down.svg')) {
        imgLink1.src = 'images/icon-arrow-up.svg'
    } else {
        imgLink1.src = 'images/icon-arrow-down.svg'
    }
}


function drop2() {
    document.querySelector('.nav-list2').classList.toggle('hide-drop')
    if(imgLink2.src.includes('images/icon-arrow-down.svg')) {
        imgLink2.src = 'images/icon-arrow-up.svg'
    } else {
        imgLink2.src = 'images/icon-arrow-down.svg'
    }
}





