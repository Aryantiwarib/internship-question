let player=document.querySelector("#user");
let choices=document.querySelectorAll(".choices");
const len=choices.length;
let p=document.querySelector('#p');
let tie=document.querySelector('#tie');
let comp=document.querySelector('#comp');
let a=document.querySelector('.container');

let user=document.querySelector('#computer');
let user1=document.querySelector('#player1');

let trueO=true;
// let cha=true;
let count=0;
let winPatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]


// FOR TWO PLAYERS ////////////////////////*************//////////////************ */ */

const Twoplayer=()=>{

    choices.forEach((choice)=> {
        choice.addEventListener('click', ()=>{
            if(trueO && choice.innerText==''){
                choice.innerText='O';
                var audio = new Audio('sound3.wav');
                audio.play();
                trueO=false;
            }
            else if(!trueO && choice.innerText==''){
                choice.innerText='X';
                var audio = new Audio('sound3.wav');
                audio.play();
                trueO=true;
            }
            choice.disabled = true;
            count++;
            let isWinner=checkWinner();
            if(isWinner){
                reset();
                count = 0;
            }
            else if(count===9 && !isWinner){
                gameDraw();
                reset();
        }
        });
        
    });

    const  reset=()=>{
        for(let i=0; i<choices.length; i++){
            choices[i].innerText='';
        }
    };



    const gameDraw = ()=>{
        tie.innerText++;
    };

    const showWinner = (winner)=>{
        if(winner=="X"){
            p.innerText++;
        
        }
        else{
            comp.innerText++;
        }
    };

    const checkWinner =()=>{
        for(pattern of winPatterns){
            let val1=choices[pattern[0]].innerText;
            let val2=choices[pattern[1]].innerText;
            let val3=choices[pattern[2]].innerText;
            if( val1!="" && val2!="" && val3!=""){
                if(val1===val2 && val2===val3){
                    showWinner(val1);
                    return true;
                }
            }
        }  
    };

};

Twoplayer();





let person=document.querySelector('#user');
console.log(person.src);

person.addEventListener('click', function(){
    if(person.src=='http://127.0.0.1:5500/Task03/man.png'){
        person.src='twin.png';
        user.innerText='PERSON2(O)';
        user1.innerText='PERSON1(X)';
        // Twoplayer();
        p.innerText=0;
        tie.innerText=0;
        comp.innerText=0;
    }
    else{
        person.src='man.png';
        user.innerText='COMPUTER(O)';
        p.innerText=0;
        tie.innerText=0;
        comp.innerText=0;
        Twoplayer=false;
    }
    
});

