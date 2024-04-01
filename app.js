let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
        levelUp();

    }
});

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    //random btn choose
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    //    console.log(randIdx);
    //    console.log(randColor);
    //    console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}
function checkAns(idx)
{
    // console.log("current level",level);
    // let idx=level-1;
    if(userSeq[idx]===gameSeq[idx])
    {
        // console.log("same value")
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `game over! your score was <b>${level}</b> <br> press anykey to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200)
        reset();
    }
}
function gameFlash(btn) {
    btn.classList.add("flash")
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 500);
}
function userFlash(btn) {
    btn.classList.add("userflash")
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 500);
}

function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    // console.log(userColor);     its tell which color has been user selected
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset()
{
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}