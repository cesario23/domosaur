const changeSpan = document.querySelector (".mess-with-me");
changeSpan.fontSize = '40 px';

const changeParagraphBackground = document.querySelector ("p.mess-with-me");
changeParagraphBackground.backgroundColor = "green";

const hiddenArea = document. querySelector ('hide-me-area');
hiddenArea.visibility ='hidden';

const firstDinosaur = document.querySelector ('triceratops');
firstDinosaur.style.width = '324 px';

function changeBackgroundToOrange (){
    changeSpan.style.backgroundColor = 'orange';
}
p.messWithMe.addEventListener ('click' changeBackgroundToOrange);


function redBorderToFirstDinosaur (){
firstDinosaur.border = 'red';
}
firstDinosaur.addEventListener ('click', redBorderToFirstDinosaur);

const featheredDinosaur = document.querySelector ('feathers');

function transparencyFeathers (){
    featheredDinosaur.opacity = "100";
}
featheredDinosaur.addEventListener ('click', transparencyFeathers )

const dinosaurRow = document.querySelector ('row')
function switchBackgroundColor (){
dinosaurRow.backgroundColor = "yellow";
}
dinosaurRow.addEventListener ('click', switchBackgroundColor);

const dinosaurBig = document.querySelector ("biggify");
function growImg (){
    dinosaurBig.style.width = "200px"
}
dinosaurBig.addEventListener ('mouseover', growImg);