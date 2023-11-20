

    let day=new Date();
// console.log(day);

let date=day.getDate();
// console.log(date);

let month=day.getMonth();
month=month+1;
// console.log(month);

let year=day.getFullYear();
// console.log(year);

let id_date=document.getElementById("date");
id_date.innerHTML=date;

let id_month=document.getElementById("month");
id_month.innerHTML=month;

let id_year=document.getElementById("year");
id_year.innerHTML=year;

let hours=day.getHours();

let mins=day.getMinutes();

let seconds=day.getSeconds();

let id_hours=document.getElementById("hours");

let zone1=document.getElementById("zone1");
let zone2=document.getElementById("zone2");

if(hours>12){
    zone2.style.color="red";
    hours=hours-12;
    
}
else if(hours==0){
    hours=12;
}

else{
    hours;
    zone1.style.color="red";
}
id_hours.innerHTML=hours;

let id_mins=document.getElementById("mins");
id_mins.innerHTML=mins;

let id_seconds=document.getElementById("seconds");
id_seconds.innerHTML=seconds;





let days=day.getDay();
// console.log(days);

if(days==0){
    icon1=document.getElementById("icon1");
    icon1.style.color="red";
}

else if(days==1){
    icon2=document.getElementById("icon2");
    icon2.style.color="red";
}

else if(days==2){
    icon3=document.getElementById("icon3");
    icon3.style.color="red";
}

else if(days==3){
    icon4=document.getElementById("icon4");
    icon4.style.color="red";
}

else if(days==4){
    icon5=document.getElementById("icon5");
    icon5.style.color="red";
}

else if(days==5){
    icon6=document.getElementById("icon6");
    icon6.style.color="red";
}

else if(days==6){
    icon7=document.getElementById("icon7");
    icon7.style.color="red";
}