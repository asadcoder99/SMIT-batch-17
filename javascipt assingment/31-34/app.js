//ASSIGNMENT 31 TO 34 

//Q1)WRITE A PROGRAM THAT DISPLAY CURRENT DATE AND TIME 

var date = new Date()
console.log(date)



//Q2) 
//For example December. 


var array = ["jan","Feb","March","April","May","June","July","August","September","October","November","December"]

var currMonth = array[new Date().getMonth()]
console.log(currMonth)


//Q3)
//day, for example if today is Sunday then alert will show 
//Sun. 

var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var currDay = week[new Date().getDay()];
var firstThree = currDay.slice(0, 3);

alert(firstThree);

//Q4) 
//its Saturday or Sunday today.

var week2 = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var currDay2 = week2[new Date().getDay()];

if(currDay2 === currDay2 === "Sunday" || currDay2 === "Saturday"){

    alert("its fun Day");

}else if(currDay2 === "Monday"||currDay2 === "Wednesday"||currDay2 === "Friday"){

    alert(`Today is ${currDay2} go to SMIT at 6:50 PM`)

}else if(currDay2 === "Tuesday" || currDay2 === "Thursday"){
    alert("Assignment submit karou")
}


//Q5)  
//else shows “Last days of the month”.

var today = new Date();
var todayDate = today.getDate();

console.log(todayDate)
if(todayDate < 16){
   alert("First fifteen days of the month")

}else if (todayDate >= 16){
    alert("Last days of the month")
}


//Q6). Write a program that determines the minutes since 
//

var now = new Date();               

var secondSince1970 = now.getTime() / (1000);
var minutesSince1970 = now.getTime() / (1000 * 60); 
var hoursSince1970 = now.getTime() / (1000 * 60 * 60);

console.log(`Current Date ${now}`)
console.log(`Minutes since Jan 1, 1970: ${minutesSince1970}`);
console.log(`Seconds since Jan 1, 1970: ${secondSince1970}`);
console.log(`hours since Jan 1, 1970: ${hoursSince1970}`);


//Q7)
//alert “Its AM” else “its PM”. 
var noww = new Date();              

var am_pm = noww.getHours() +":"+ noww.getMinutes()

console.log(am_pm)

if(am_pm <= 12){
   console.log(`Time is ${am_pm} AM`)
}else if(am_pm > 12){
    console.log(`Time is ${am_pm} PM`)
}

// Q7) Check if it's AM or PM

var noww2 = new Date();
var hours2 = noww.getHours(); 
var minutes2 = noww.getMinutes();

var am_pm2 = hours2 < 12 ? "AM" : "PM";

console.log(`Time is ${hours2}:${minutes2} ${am_pm2}`);
alert(`It's ${am_pm2}`);


//Q8)
// last month of 2020 and assigns it to variable named 
//laterDate.

var later = new Date("DEC 31 2020")

console.log(later)

//Q9)
//and alert the number of days past since 1st Ramadan? 
//Note: 1st Ramadan was on June 18, 2015


var ram24  = new Date("June 18, 2015").getTime();
console.log(ram24)

var ram25  = new Date("Feb 17, 2026").getTime();
console.log(ram25)

var diff = ram24 - ram25;

var min = diff/(1000 * 60 )
var sec = diff/(1000 )

console.log(`the gap b/w ramdan of 2015 and 2026 is in minute is ${min}`)
console.log(`the gap b/w ramdan of 2015 and 2026 is in second is ${second}`)

