let object=JSON.parse(localStorage.getItem("object"))||{
    p1:0,
    p2:0,
    turn:0,
    displayTurn1:"Your turn",
    displayTurn2:"0",
    temp1:0,
    temp2:0
};
let {p1,p2,turn,displayTurn1,displayTurn2,temp1,temp2}=object;
document.querySelector(".js-player1pos").innerHTML=`Player1 position : ${p1}`;
document.querySelector(".js-player2pos").innerHTML=`Player2 position : ${p2}`;
document.querySelector(".js-player1turn").innerHTML=`Turn : ${displayTurn1}`;
document.querySelector(".js-player2turn").innerHTML=`Turn : ${displayTurn2}`;
function play(){
    document.querySelector(".js-snakeorladder").innerHTML="";
    let dice=Math.floor(Math.random()*5)
    dice+=1;
    t=turn%2;
    if (t===0){
        p1+=dice;
        p1=checkSnake(p1);
        p1=checkLadder(p1);
        if(p1>100){
            p1-=dice;
        }
        if(p1===100){
            p1=0;
            p2=0;
            turn=0;
            setTimeout(()=>{
                document.querySelector(".js-win").innerHTML="";
            },5000)
            document.querySelector(".js-win").innerHTML="player1 is WON";
        }
        
        displayTurn1=""
        displayTurn2="your turn"
        document.querySelector(`.js-player1pos`).innerHTML=`Player1 position : ${p1}`;
        document.querySelector(".js-player2pos").innerHTML=`Player2 position : ${p2}`;
        document.querySelector(".js-player1turn").innerHTML=`Turn : ${displayTurn1}`;
        document.querySelector(".js-player2turn").innerHTML=`Turn : ${displayTurn2}`;
        document.querySelector(".js-dice1").innerHTML=`<img class="dice-size" src="img/dice-${dice}.png" alt="dice">`;
        document.querySelectorAll(".js-board")
        .forEach((positionElement,index)=>{
            if(Number(positionElement.innerHTML)===temp1){
                positionElement.classList.remove("pown1")
                console.log(temp1)
            }
        });
        document.querySelectorAll(".js-board")
        .forEach((positionElement,index)=>{
            if(Number(positionElement.innerHTML)===p1){
                positionElement.classList.add("pown1")
                temp1=p1
                console.log(temp1)
            }
        });

    }
    else if (t===1){
        p2+=dice;
        p2=checkSnake(p2);
        p2=checkLadder(p2);
        if(p2>100){
            p2-=dice;
        }
        if(p2===100){
            p1=0;
            p2=0;
            turn=0;
            setTimeout(()=>{
                document.querySelector(".js-win").innerHTML="";
            },5000)
            document.querySelector(".js-win").innerHTML="player2 is WON";
        }
        displayTurn2=""
        displayTurn1="your turn"
        document.querySelector(".js-player1pos").innerHTML=`Player1 position : ${p1}`;
        document.querySelector(".js-player2pos").innerHTML=`Player2 position : ${p2}`;
        document.querySelector(".js-player1turn").innerHTML=`Turn : ${displayTurn1}`;
        document.querySelector(".js-player2turn").innerHTML=`Turn : ${displayTurn2}`;
        document.querySelector(".js-dice2").innerHTML=`<img class="dice-size" src="img/dice-${dice}.png" alt="dice">`;
        document.querySelectorAll(".js-board")
            .forEach((positionElement,index)=>{
                if(Number(positionElement.innerHTML)===temp2){
                    positionElement.classList.remove("pown2")
                }
            });
        document.querySelectorAll(".js-board")
            .forEach((positionElement,index)=>{
                if(Number(positionElement.innerHTML)===p2){
                    positionElement.classList.add("pown2")
                    temp2=p2
                }
            });
    }
    turn+=1;
    object={
        p1,
        p2,
        turn,
        displayTurn1,
        displayTurn2,
        temp1,
        temp2,

    }
    localStorage.setItem("object",JSON.stringify(object))
}
function checkSnake(pos){
    if(pos===27){
        document.querySelector(".js-snakeorladder").innerHTML="oops!, snake bites you"
        return(5);
        
    }
    else if(pos===40){
        document.querySelector(".js-snakeorladder").innerHTML="oops!, snake bites you"
        return(3);
    }
    else if(pos===43){
        document.querySelector(".js-snakeorladder").innerHTML="oops!, snake bites you"
        return(18);
    }
    else if(pos===54){
        document.querySelector(".js-snakeorladder").innerHTML="oops!, snake bites you"
        return(31);
    }
    else if(pos===66){
        document.querySelector(".js-snakeorladder").innerHTML="oops!, snake bites you"
        return(45);
    }
    else if(pos===89){
        document.querySelector(".js-snakeorladder").innerHTML="oops!, snake bites you"
        return(53);
    }
    else if(pos===95){
        document.querySelector(".js-snakeorladder").innerHTML="oops!, snake bites you"
        return(77);
    }
    else if(pos===99){
        document.querySelector(".js-snakeorladder").innerHTML="oops!, snake bites you"
        return(41);
    }
    else{
        return(pos);
    }
}
function checkLadder(pos){
    if(pos===4){
        document.querySelector(".js-snakeorladder").innerHTML="wow!, you got ladder"
        return(25);
    }
    else if(pos===13){
        document.querySelector(".js-snakeorladder").innerHTML="wow!, you got ladder"

        return(46);
    }
    else if(pos===33){
        document.querySelector(".js-snakeorladder").innerHTML="wow!, you got ladder"

        return(49);
    }
    else if(pos===50){
        document.querySelector(".js-snakeorladder").innerHTML="wow!, you got ladder"
        return(69);
    }
    else if(pos===42){
        document.querySelector(".js-snakeorladder").innerHTML="wow!, you got ladder"
        return(63);
    }
    else if(pos===62){
        document.querySelector(".js-snakeorladder").innerHTML="wow!, you got ladder"
        return(81);
    }
    else if(pos===74){
        document.querySelector(".js-snakeorladder").innerHTML="wow!, you got ladder"
        return(92);
    }
    else{
        return(pos);
    }
}

let dice1Element=document.querySelector(".js-dice1");
dice1Element.addEventListener("click",()=>{
    if(turn%2===0){
        play();
       }
       else{
        alert('this is not your turn')
       } 
    
})
let dice2Element=document.querySelector(".js-dice2");
dice2Element.addEventListener("click",()=>{
    if(turn%2===1){
        play();
       }
    else{
        alert('this is not your turn')
    } 
})

let quitElement=document.querySelector(".js-quit");
quitElement.addEventListener("click",()=>{
    document.querySelector(".js-snakeorladder").innerHTML="";
    document.querySelectorAll(".js-board")
    .forEach((positionElement,index)=>{
        if(Number(positionElement.innerHTML)===temp1){
            positionElement.classList.remove("pown1")
            console.log(temp1)
        }
    });
    document.querySelectorAll(".js-board")
            .forEach((positionElement,index)=>{
                if(Number(positionElement.innerHTML)===temp2){
                    positionElement.classList.remove("pown2")
                }
            });
    p1=0;
    p2=0;
    displayTurn1="Your turn"
    displayTurn2=""
    turn=0


    document.querySelector(".js-player1pos").innerHTML=`Player1 position : ${p1}`;
    document.querySelector(".js-player2pos").innerHTML=`Player2 position : ${p2}`;
    document.querySelector(".js-player1turn").innerHTML=`Turn : ${displayTurn1}`;
    document.querySelector(".js-player2turn").innerHTML=`Turn : ${displayTurn2}`;
    alert(`You quit the game!!!! 
    thanks for playing`)

})
