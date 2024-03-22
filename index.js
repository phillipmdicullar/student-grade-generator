let user_input = prompt('Please enter your grades from 0-100: ');
if(user_input > 79 ){
   grade = "A"
}else if ( user_input >= 60 && user_input <= 79){
   grade = "B" 
}
else if (user_input >= 50 && user_input <= 59){
    grade = "C"
}
else if (user_input >= 40 && user_input <= 49){
    grade = "D"
} else {
    grade = "E"
}
   console.log(grade);
