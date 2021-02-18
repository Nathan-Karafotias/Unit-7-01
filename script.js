// tells the function"random" to run when you click the bottun
document.getElementById('button').addEventListener('click',random)
let randomNumber = 0
let usersguess = 0

// generates random nomber and checks your answor to see if i matches
function random() { 
  usersguess = document.getElementById('input').value
  usersguess = parseInt(usersguess)

  randomNumber = (Math.random() * 6) + 1
  randomNumber = parseInt(randomNumber)

  if (usersguess == randomNumber) {
    document.getElementById('Answer').innerHTML= "Winner!"
  }
}