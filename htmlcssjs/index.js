// console.log("Hello, World!");

let name = "John Doe";
// console.log(name);

const pie = 3.14;
// console.log(pie);

// var age = 25;
// console.log(age);

// array
// let arr = [1, 3, 5, 7, 9];
// console.log(arr);

// objects
let student =  {
    name: "John Doe",
    age: 25,
    grade: "A"
};
// console.log(student);

// function
let greet = function() 
{
    console.log("Hello, " + name + "!");
}
// greet();

// promise

// let orderPromise = new Promise ((resolve, reject) => {
//     let orderplaced = false;
//     if(orderplaced) {
//         resolve("Order placed successfully!");
//     }else{
//         reject("Order failed!");
//     }
// });
// orderPromise
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// dom manipulation
let newTitle = document.getElementById("archive-title");

let colorButton = document.getElementById("color");

let colors = ["#D6B36A", "#ac48f9", "#33d6ff", "#33ff57", "#ddff33"];
let currentColorIndex = 0;

colorButton.addEventListener("click", () => {
    newTitle.style.color = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
});


