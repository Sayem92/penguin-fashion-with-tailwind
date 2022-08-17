//---------------------------      q-1      -------------------------------

const paragraph = document.getElementById('head-para');
const paragraphText = paragraph.innerText
console.log(paragraphText)

//---------------------------      q-2     -------------------------------

document.getElementById('btn-buy').addEventListener('click',function(){
    const penguin = document.getElementById('penguin-text');
    const penguinText = penguin.innerText;
    penguin.innerText = 'I am penguin'
    
})