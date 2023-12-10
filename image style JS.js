//global variables go here 
var interValid = 0;
let change = 100;


function startMove()
{
    var image = document.getElementById("imgmeme")
    interValid = setInterval(function() {
        
        image.style.left = change + "px";
        //image.style.top = change + "px";
        document.getElementById("msg"). innerHTML = " x = " + image.style.left + " y = " + image.style.top;
        if (image.style.top >500)
        {
            change -=5;
        }
       else
        {
            change +=5;
        }
        //change += 5;// change = change + 5;

    } ,50);

}

function stopMove()
{
    function interValid()
    {clearInterval(interValid)}
}