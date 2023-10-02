function number() 
{
    var minNumber = 1;
    var maxNumber = 5;
    var randomNumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); 
    var x = document.getElementsByClassName("randNum");
    x[0].innerHTML = randomNumber;
    x[1].innerHTML = randomNumber;

    return false;
}
window.onload = number;