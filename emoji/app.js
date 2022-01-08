const beginningFace = document.querySelector(".beginning");
const reactionFace = document.querySelector(".reaction");

const beginningText = document.querySelector(".beginningT");
const reactionTextFirst = document.querySelector(".reactionT-first");
const reactionTextSecond = document.querySelector(".reactionT-second");


beginningFace.addEventListener('click',()=>{

    if(reactionFace.classList.contains('reaction')){
        reactionFace.classList.add('active');
        beginningFace.classList.remove('active');

        reactionTextFirst.classList.add('active');
        reactionTextSecond.classList.add('active');
        beginningText.classList.remove('active');
        
    }


});

reactionFace.addEventListener('click',()=>{
    if(beginningFace.classList.contains('beginning')){
        beginningFace.classList.add('active');
        reactionFace.classList.remove('active');

        reactionTextFirst.classList.remove('active');
        reactionTextSecond.classList.remove('active');
        beginningText.classList.add('active');
    }
});
