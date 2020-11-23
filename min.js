//multiplication
//generate random numbers
let first_Number = parseInt(Math.random()*10);
let second_Number = parseInt(Math.random()*10);

//get the total
let total_1 = first_Number - second_Number;

//display numbers on the canvas
let main = document.getElementById('main-number');
    main.innerHTML = `<p>${first_Number}</p>`;

let lower = document.getElementById('lower-number');
    lower.innerHTML = `<p>${second_Number}</p>`


//get guess from user
let button = document.getElementById('btn1')

button.addEventListener('click', function(){

let guess_1 = document.getElementById('guess_1').value;
    guess_1 = Number(guess_1);
//check answer
if (guess_1 === total_1){
    alert('Correct');
    window.location.reload()
} else {
    alert('Sorry. Incorrect. The correct answer was ' + total_1 + '.')
    window.location.reload()

}
    });


