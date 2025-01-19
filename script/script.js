function para_open()
{
    tag= document.getElementById("demo");
    // tag.style.display = "block";
    
    tag.className = "open";
}

function para_close()
{
    
    tag= document.getElementById("demo");
    // tag.style.display = "none";
    
    tag.className = "closed";
}
// Arrays
var fruits = ["Mango", "Grapes", "pear"];
function loadfruits()
{
    document.getElementById("fruits").innerHTML = fruits;
}

function myfunction()
{
    var frot = prompt("What is ur fav fruit : ");

    fruits[fruits.length] = frot;

    document.getElementById("fruits").innerHTML = fruits;
    for(let i = 0; i<10; i++)
    {
        console.log(i)
    }
}


