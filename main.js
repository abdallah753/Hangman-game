let wrog = 0
let spantrys = document.querySelector('.head .try')
spantrys.textContent = wrog

const letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);
let lettersContainer = document.querySelector(".letters");

lettersArray.forEach(letter => {
    let p = document.createElement("p");
    let theLetter = document.createTextNode(letter);
    p.appendChild(theLetter);
    p.className = 'letter-box';
    lettersContainer.appendChild(p);
});

let words = ["php", "javascript","Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar", "go", "scala", "fortran", "r", "mysql", "python"]

let random = Math.floor(Math.random() * words.length)
let randomword = words[random]

for (let i = 0; i < randomword.length; i++) {
    let p = document.createElement('p')
    let foot = document.querySelector('.foot')
    foot.appendChild(p)
}

let p = document.querySelectorAll('.letters p')
let gussp = document.querySelectorAll('.foot p')

function click(){
    p.forEach((ele) => {
    ele.onclick = (e) => {
        if(!ele.classList.contains('disabled') && wrog !== 7){
            if(randomword.includes(ele.textContent)){
            if(gussp[randomword.indexOf(ele.textContent)].textContent == ele.textContent){
                gussp[randomword.lastIndexOf(ele.textContent)].textContent = ele.textContent
            }else{
                gussp[randomword.indexOf(ele.textContent)].textContent = ele.textContent
            }
        }else{
            ele.classList.add('disabled')
            wrog += 1
            spantrys.textContent = wrog
        }
        if(wrog > 0){
            let man = document.querySelectorAll('.hangman-draw .the-draw div')
            man[wrog - 1].classList.add('block')
        }
        }
        if(wrog === 7){
            document.querySelector('.lose').style.display = 'block'
        }
    }
}) 
}

click()