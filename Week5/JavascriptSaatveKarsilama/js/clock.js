let input = String(prompt("Please enter the username."));
let userName = document.querySelector("#myName");

let text;
if(input == null || input =="")
{
    text = "İsim giriniz";
}
else {
    text= input.toUpperCase();
}
userName.innerHTML = text;

function timer(){
    const daysOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const now = new Date();
    const hour = now.getHours(); 
    const time = now.getMinutes(); 
    const day = now.getDay();
    const second = now.getSeconds();
    

    const formatDay=daysOfWeek[day];
    let section =document.querySelector("#myClock");

    section.innerHTML = `${hour}: ${time} : ${second} ${formatDay}`;
    setInterval(timer,1000);

}

timer();















