

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
    } 
        else{
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
    var checkDate=dateFormatVariations(date);
    var check=false;
    for(var i=0;i<checkDate.length;i++){
        if(isPalindrome(checkDate[i])){
            check=true;
            break;
        }
        return check;
    }
    // var dateFormats=dateFormatVariations(dateFormats);
    // var isPalindrome=isPalindrome(dateFormats)
    // return isPalindrome
}
var input={
    day:"21",
    month:"1",
    year:"2021",
};
console.log(checksPalindrome(input))

















// var input=
//  { day: 14,
//      month: 9, 
//      year: 2021
//      };
// console.log(dateNumberToString(input))



//console.log(isPalindrome("racecar"))
//reversing the string in one line
//var str="nuha".split("").reverse().join("")
