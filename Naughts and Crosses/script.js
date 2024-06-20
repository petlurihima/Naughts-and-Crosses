let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let msgContainer=document.querySelector(".msg-container");
let newbtn=document.getElementById("new-btn");
let msg=document.querySelector("#msg");

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
    [1,4,7],
    [2,5,8]
];

const resetGame=() =>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
let turn0=true;

boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        if(turn0){
            box.innerText="O";
            box.style.color="green";
            turn0=false;
        }
        else {
            box.innerText="X";
            turn0=true; 
        }
        box.disabled=true;
        checkWinner();
    })
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () => {
    for(let pattern of winpatterns){
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;

        if(posval1!="" && posval2!="" && posval3!=""){
            if(posval1 === posval2 && posval2 === posval3){
                showWinner(posval1);
            }
        }
    }
} ;

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);