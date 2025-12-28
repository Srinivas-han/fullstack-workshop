let count=0;
let step=1;

const display=document.getElementById("countDisplay");
const decrementBtn=document.getElementById("decrement");
const resetBtn=document.getElementById("reset");
const incrementBtn=document.getElementById("increment");
const stepButtons = document.querySelectorAll(".step");


//update Display & color

function updateDisplay(){
    display.textContent=count;

    if(count >0){
        display.style.color="green";
    }else if(count<0){
        display.style.color="red";
    }else{
        display.style.color="black";
    }
}

  //Increment

  incrementBtn.addEventListener("click",()=>{
    count +=step;
    updateDisplay();
  });


  //Decrement

  decrementBtn.addEventListener("click",()=>{
    if(count-step>=0){
        count -=step;
    }
    updateDisplay();
  });


  //Reset

  resetBtn.addEventListener("click",()=>{
    count=0;
    updateDisplay();
  });


  // Step Selection

  stepButtons.forEach(button => {
    button.addEventListener("click",()=>{
        step=parseInt(button.dataset.step);
    });
  });