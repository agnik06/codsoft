var x="";



function swap(y)
{
    x=x+y;
    document.querySelector('input').value=x;
    


}

function ev()
{
    x=eval(x);
    document.querySelector('input').value=x;
}

function clr()
{
    document.querySelector('input').value="";
    x="";
}



