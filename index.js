  //Lecture Digital clock Project

  let greetingMsg=document.getElementById("msg")
  let dayEL =document.getElementById("day-el")
  let monthEL =document.getElementById("month-el")
  let yearEl=document.getElementById("year-el")
  let hoursEl=document.getElementById("hours-el")
  let minutesEl=document.getElementById("minutes-el")
  let secondsEl=document.getElementById("seconds-el")
  let meridianEl=document.getElementById("meridian-el")
  let weekEL=document.getElementById("week-el")
  let wholeMonths=document.getElementById("whole-months")
  let startBtn=document.getElementById("start-btn")

  let stopBtn=document.getElementById("stop-btn")
function start()
 {
     let date =new Date();

     let hours =date.getHours() + "";

     let minutes = date.getMinutes() + "";

     let seconds = date.getSeconds() + "";

     let todayDate=date.getDate() + "";

     let day =date.getDay();

    let monthNames=date.getMonth() //index value of array

    let month=date.getMonth()+1;

     let year = date.getFullYear();

     let meridianText= "";

     let greetingText= "";

     const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

     const weekday =["Sun" , "Mon" ,"Tue" , "Wed" ,"Thu" , "Fri" , "Sat"] 

    /*GREETING  */
    if((hours>=5 && hours<=11)&& (minutes<=59)&&(seconds<=59))
    {
       greetingText = "good morning"
    }
    else if((hours>=12&&hours<=15)&& (minutes<=59)&&(seconds<=59))
    {
      greetingText = "good afternoon"
    }
    else if((hours>=16&&hours<=20)&&(minutes<=59)&&(seconds<=59))
    {
      greetingText = "good evening"
    }
    else
    {
       greetingText = "good night"
    }
    /*END OF GREETING */

    /* MERIDIAN  */
    if(hours>=12)
    {
      meridianText="PM"
    }
    else{
      meridianText="AM"
    }
    /*END OF MERIDIAN */


     if(hours.length<2)
     {
         hours="0" + hours;
    }

     if(minutes.length<2)
     {
         minutes ="0" + minutes;
     }

     if(seconds.length<2)
     {
         seconds="0" + seconds
     }

    /*assign the value to the html */
    
    /* (1)Date */
    dayEL.innerHTML=todayDate
    monthEL.innerHTML=month
    yearEl.innerHTML=year

     /*(2) Time */
    hoursEl.innerHTML=hours
    minutesEl.innerHTML=minutes
    secondsEl.innerHTML=seconds

     /*(3) Weekdays & Months */
    weekEL.innerHTML=weekday[day]
    wholeMonths.innerHTML=monthsArray[monthNames]

     /*[4] Greeting  */
     greetingMsg.innerHTML=greetingText

     /*[5]Meridian  */
     meridianEl.innerHTML=meridianText
  }
/* END OF START FUNCTION */
 

  /*Buttons section */

  let stopwatch;
  startBtn.addEventListener("click",function()
  {
    start();
    stopwatch=setInterval(start,1000);
   
    startBtn.style.opacity=".7"
    startBtn.style.boxShadow="0 1px 10px 1px var(--border-color)"
    stopBtn.style.opacity="1"
    stopBtn.style.boxShadow="none"
  })
  stopBtn.addEventListener("click", function()
  {
    clearInterval(stopwatch)
    startBtn.style.backgroundcolor="var(--horizontal-line-color)";
   
    startBtn.style.opacity="1"
    startBtn.style.boxShadow="none"
    stopBtn.style.opacity=".7"
    stopBtn.style.boxShadow="0 1px 10px 1px var(--border-color)"
  })

  /* END OF BUTTON SECTION */