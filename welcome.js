let namebox = document.getElementById("name");

let checkName = (event)=>
{
    event.preventDefault();
    console.log(event);
    let name1 = namebox.value;

    if(name1 === "")
        {
            alert("Name cannot be empty");
            return;

        }
        localStorage.setItem("naam", name1);
        setTimeout(
            ()=>
            {
                window.location.href="./quiz.html";
            } ,2000);
        
}
