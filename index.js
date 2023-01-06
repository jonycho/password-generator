const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function getRandomPass(size){
    let pass=""
    for(i=0;i< size;i++){
        pass += characters[Math.floor(Math.random()*characters.length)]
    }
    return pass
}


let passOneEl = document.getElementById("pass-one")
let passTwoEl = document.getElementById("pass-two")

let btn = document.getElementById("btn-pass")

let pOne = document.getElementById("copy-one")
let pTwo = document.getElementById("copy-two")

let imgOne = document.getElementById("img-copy-one")
let imgTwo = document.getElementById("img-copy-two")




function showPassword(pass,passEl, copy, img){
    passEl.textContent = pass
    img.style.cursor= "pointer"
    copy.textContent = ""
    copy.style.display = "none"
    
    img.addEventListener("click",function(){
        copyToClipboard(pass);
        copy.textContent = "Copy to the Clipboard"
        copy.style.display = "block"
        setTimeout(()=>{
            copy.style.display = "none"
        }, 3000)
    })
}


btn.addEventListener("click",function(){
    let inputLength = document.getElementById("input-length")
    if(inputLength.value >=5){
        inputLength.style.boxShadow = "0px 0px 0px red"
        let passOne = getRandomPass(inputLength.value)
        let passTwo = getRandomPass(inputLength.value)
        
        showPassword(passOne,passOneEl,pOne,imgOne)
        showPassword(passTwo,passTwoEl,pTwo, imgTwo)
    }else{
        inputLength.style.boxShadow = "0px 0px 5px red"
    }   
})

