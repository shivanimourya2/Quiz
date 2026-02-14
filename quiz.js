let name1 =localStorage.getItem("naam");

let playerbox = document.getElementById("playerbox");

let showName=()=>
{
    playerbox.innerText="Player :"+name1;

}
showName();

let a1=[];
let index =0;
let current ;
let score =0;

let questionbox =document.getElementById("question");
let optionbox =document.getElementById("options");

let nxtbtn =document.getElementById("next-btn");
let scoreTag=document.getElementById("score");

let loadArray= async ()=>
{
    a1 =await fetch("./quiz.json");
    a1=await a1.json();
    
    showQuestion();
}
let showQuestion = ()=>
{
    console.log(a1);
    current = a1[index];
    questionbox.innerHTML= current.question;

    current.options.forEach(
        (str,i)=>
        {
            let b1 =document.createElement("button");
            b1.textContent = str;
            b1.classList.add("option-btn");
            b1.addEventListener("click",
                ()=>
                {
                   checkAnswer(i) 
                }
            );
            optionbox.appendChild(b1);
           
        }
    );
}
loadArray();
let nextQuestion = ()=>
{
    index++;
    optionbox.innerHTML="";
    if(index>=a1.length)
    {
        questionbox.innerText="Quiz Completed";
        nxtbtn.style.display ="None";
        return;
    }
    showQuestion();
}

let checkAnswer = (i)=>
{ 
   let buttonsArray=document.querySelectorAll(".option-btn");

   buttonsArray.forEach(
    (button,i)=>
    {
        button.disabled= true;
        if(i=== current.correct)
        {
            button.style.backgroundColor="green";
            return;
        }
        button.style.backgroundColor="red";
    }
   );
   if(i===current.correct)
   {
   score++;
   scoreTag.textContent="Score : "+score;
   }
}
