// objects - store data in depth
// key : value pair

let airbnb = {
    nameOftheListing : "San Guisto Abbey",
    noOfGuests : 4,
    bedrooms : 1,
    isPrivate : true,
    ammenties : ["poolAccess","laundry","parking space","gym" ],
    price : function sum(){
        console.log("The price of the room is " + 344)
    }
}

console.log(airbnb.nameOftheListing)
console.log(airbnb.ammenties[2])    // Dot Notation
console.log(airbnb["noOfGuests"])   // Bracket Notation

airbnb.price()

// delete airbnb.bedrooms
// console.log(airbnb)