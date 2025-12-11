let age = 31

if(age < 6){
    console.log("Admission is free for children ")
}else if(age < 18){
    console.log("child discount applied")
}else if(age < 26){
    console.log("student discount applied")
}else if(age < 66){
    console.log("Full price")
}else{
    console.log("Senior citizen discount")
}