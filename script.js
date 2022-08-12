let input = document.getElementById("searchInp");
let startDiv = document.getElementById("startDiv");
let resultDiv = document.getElementById("resultDiv")




function searchCity(){
startDiv.style.display = "none";
resultDiv.removeAttribute("style");
let api = "https://app.ticketmaster.com/discovery/v2/events.json?city=charlotte&apikey=db4iTGExqTBzTMvyBMO63edGOsMUS9EU"

fetch(api)
.then(response => {
    return response.json();;
}).then(function(response){
console.log(response)
})

console.log(input.value)

}