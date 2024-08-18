alert("you scored 7/10")

function result() {

var score=0;
if(document.getElementById('a').checked)
     {
        score++;
     }

     if(document.getElementById('b').checked)
        {
        score++;
        }
    if(document.getElementById('c').checked)
        {
           score++;
        }
    if(document.getElementById('d').checked)
        {
            score++;
        }
     alert("your score is:"+score);
    
    
}





