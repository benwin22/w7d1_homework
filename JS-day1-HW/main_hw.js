// NOTES: I know both codes need some work. ex1 loops and shows the matches/no matches in console.log but
// isn't inline...ex2 finds the even index and adds that to each name looped...but isn't a string...
//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
For extra credit, output "Thats a damn cat" 
*/

let dogString = "All dogs are good boys. Dogs named Precious can be annoying but are still good. Dogs named Shadow are usually majestic and cool.\
Sassy is a cat, but Chance is a dog. Can cat people be trusted? I don't know. Also Potato is a great dog name for a lil tiny stubby guy."

let dogNames = ["Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart"]
// findeNames: Precious, Shadow, Sassy, Potato
function findNames(){
    for (let i = 0; i < dogNames.length; i++){
        if (dogString.includes(dogNames[i])){
            console.log("matched")
        }else{
            console.log("no matches")
        }    
    } 
}
findNames()
// console.log(findNames())

function findNames2(){
    for (let i = 0; i < dogNames.length; i++){
        if (dogString.includes(dogNames[i])){
            console.log(dogNames[i])
        }
            
    }
}
findNames2()
// console.log(findNames())

function findNames3(){
    for (let i = 0; i < dogNames.length; i++){
        if (dogString.includes("Sassy")){
            console.log("Thats a damn cat")
        }   
    }
}
console.log(findNames3())
// for (let dogNames of dogString){
//     console.log(dogString)
// }
// let dogList = dogNames
// if (dogList.includes[(dogNames)]){
//     console.log("Matched dog_name")
// } else {
//     console.log("No Matches")
// }
// have for loop run 
//  of for loop
// set flag to false / reset to true
// let text = dogString
// let result = text.match([dogNames])

// console.log(dogNames)

// dogNames == let dogString return "Matched dog_name" else return "No Matches"

// let dogNames = dogString.map((name) =>{
//     if(name == dogNames){
//         return "Matched dog_name"
//     } else {
//         return "no matches"
//     }
// })
// console.log(name)

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index". For bonus points instead of inserting even index
replace each character with their signature move.*/

//          0       1       2           3           4       5
let arr = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]

function even(){
    for (let i = 0; i < arr.length; i++){
        let list = arr[i];
        if (i % 2 === 0){
            console.log(list +  " even index")
        }
    }
}
even()
// console.log(even())



// arr.splice(0,1, "even index")
// console.log(arr)
// arr.splice(2,1, "even index")
// console.log(arr)
// arr.splice(4,1, "even index")
// console.log(arr)
// I looked these moves up. Not sure if that part is correct.
// I am not sure how to do the whole index at once...
//  finding even is something like: element%2
// for loops w/ in and of inDex | ofValues

