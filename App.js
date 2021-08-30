
var birthdayInput=document.querySelector("#birthday-input");
var checkButton=document.querySelector("#check-button");
var outputEl=document.querySelector("#output");

function reverseString(str){
var str = str.split("");
var reverseString=str.reverse();
str=reverseString.join("");
return str                          //ahun
}
                    //args is str1 and not str?
function isPalindrome(str1){
   
    var reverseStr=reverseString(str1);   //ahun

    return str1===reverseStr;
}
                            //argument date
function dateToString(date){
  
   var dateToBeStr ={   //we are storing value in dateInStr but date is defaultly know by system
            day:"",
            month:"",
            year:"",
            };
  
   if (date.day<10){
     dateToBeStr.day='0'+ date.day;//no need to specify a string 
    }else{
            dateToBeStr.day=date.day.toString();
        }
    if(date.month<10){
        dateToBeStr.month='0'+date.month;
    } else{
            dateToBeStr.month=date.month.toString();
        }
    dateToBeStr.year=date.year.toString();
   
    return  dateToBeStr
};
function dateFormatVariations(date){
    //, will only print the last var,as you have converted them to string
    //simply concatenate them
    
    var dateInStr=dateToString(date)
    //var brackets were unnecessary
    //date was used not dateInStr
    var ddmmyyyy=dateInStr.day+dateInStr.month+dateInStr.year;
    var mmddyyyy=dateInStr.month+dateInStr.day+dateInStr.year;
    var yyyymmdd=dateInStr.year+dateInStr.month+dateInStr.day;
    var ddmmyy=dateInStr.day+dateInStr.month+dateInStr.year.slice(-2);     //wrong-slice(2,4);
    var mmddyy=dateInStr.month+dateInStr.day+dateInStr.year.slice(-2);
    var yymmdd=dateInStr.year.slice(-2)+dateInStr.month+dateInStr.day;
    var dateFormats=[ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];
    return dateFormats
}
function checksPalindrome(date){
    var allDate=dateFormatVariations(date)
    var check=false;
    for(var i=0;i<allDate.length;i++){
        if(isPalindrome(allDate[i])){
            check=true;
            break;
        }
    }   //maybe I was looping the return check withh for loop
        return check;
};


function leapYear(year){
    if(year%400===0){
        return true;
    }else
        if(year%100===0){
            return false;
        }else{
            if(year%4===0){
                return true;
            }else{
            return false;
        }
    }    
}
function upcomingDate(date){
     var day=date.day+1;
     var month=date.month;
     var year=date.year;

     var daysOfMonth=[31,28,31,30,31,30,31,31,30,31,30,31];

    if(month===2)
       {

         if(leapYear(year))
         {
            if(day>29){
                day=1;
                month++;
            }
        }
          
        else{
           if(day>28)
            {
                day=1;
                month++;
            }
        
        }
    
 } else {
        if(day>daysOfMonth[month-1]){
            day=1;
            month++
        }
    }
    if(month>12){
        month=1;
        year++;
    }
    return {
        day:day,
        month: month,
        year:year,
    };
}

 
function getTheNextPalindrome(date){
    var counter=0;
    var nextDate=upcomingDate(date);
    while(1){
        counter++;
        var palindrome=checksPalindrome(nextDate);
        if(palindrome){
            break;
        }
        nextDate=upcomingDate(nextDate);
    }
    return [counter,nextDate];

}

//by the time I got to clickhandler 
//I already forgot how to build it's logic 
function clickHandler(date){
    var inputBirthday=birthdayInput.value;
    
    if(inputBirthday!==""){
        var dateList=inputBirthday.split("-")
        var date={
            day:Number(dateList[2]),
            month:Number(dateList[1]),
            year:Number(dateList[0])
        };
       var palindrome=checksPalindrome(date);
       if(palindrome){
           outputEl.innerText="Congratulations!!Your birthday date is a shubh palindrome"
       }
       else{
           var[counter,nextDate]=getTheNextPalindrome(date);
           outputEl.innerText=`The next palindrome date is
           ${nextDate.day}-${nextDate.month}-${nextDate.year}.Sorry, you missed
           by ${counter} days`;
           
       }
    }

}
checkButton.addEventListener("click",clickHandler)
// var dateFormats=dateFormatVariations(dateFormats);
    // var isPalindrome=isPalindrome(dateFormats)
    // return isPalindrome

    
    //   var  Input= { day: 5, month: 1, year: 2020 }
      
    //   console.log(getTheNextPalindrome(Input))
    //I did something wrong the programmes is loading each time I try to call function
















// var input=
//  { day: 14,
//      month: 9, 
//      year: 2021
//      };
// console.log(dateNumberToString(input))



//console.log(isPalindrome("racecar"))
//reversing the string in one line
//var str="nuha".split("").reverse().join("")
