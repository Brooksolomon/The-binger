var x = true
function nightmode()
{

    if (x==false){
        console.log("hello");
        x=true;
        document.querySelector('body').style.backgroundColor = '#121212';
        document.getElementsByClassName('button')[0].innerHTML = 'touch me→ <img src="sun.png" width="40px">';
        document.getElementsByClassName('button')[0].style.backgroundColor = '#182533';
        document.getElementsByClassName('navbar')[0].style.backgroundColor ='#182533';
        
        var titles = document.getElementsByClassName('title')
        for(let i=0;i<titles.length;i++)
        {
            titles[i].style.color='yellow';
        }
        
        var y =document.getElementsByClassName('nav-elt')
        for(let i=0;i<y.length;i++){
        y[i].style.color='#fff';
        }
        var headers = document.getElementsByTagName('h1');
        for(let j=0;j<headers.length;j++){
            headers[j].style.color='#fff';
        }
        var inputs = document.getElementsByTagName('input');
        for(let k=0;k<inputs.length;k++)
        {
            inputs[k].style.backgroundColor='#121212';
        }
        document.getElementsByClassName('login')[0].style.backgroundColor = '#182533';
        document.getElementById('loginbut').style.backgroundColor= '#fff';
        document.getElementById('loginbut').style.color= '#000';

    }
    else{
        console.log("bye");
        x=false;
        document.querySelector('body').style.backgroundColor = '#e4e5f1';
        document.getElementsByClassName('button')[0].innerHTML = 'touch me→ <img src="crescent-moon.png" width="40px">';
        document.getElementsByClassName('button')[0].style.backgroundColor = '#1d9bf0';
        document.getElementsByClassName('navbar')[0].style.backgroundColor = '#1d9bf0';

        var titles = document.getElementsByClassName('title')
        for(let i=0;i<titles.length;i++)
        {
            titles[i].style.color='red';
        }
        
        var y =document.getElementsByClassName('nav-elt')
        for(let i=0;i<y.length;i++){
        y[i].style.color='#000';
        }
        var headers = document.getElementsByTagName('h1');
        for(let j=0;j<headers.length;j++){
            headers[j].style.color='#000';
        }
        var inputs = document.getElementsByTagName('input');
        for(let k=0;k<inputs.length;k++)
        {
            inputs[k].style.backgroundColor='#fff';
        }
        document.getElementsByClassName('login')[0].style.backgroundColor = '#1d9bf0';
        document.getElementById('loginbut').style.backgroundColor= '#000';
        document.getElementById('loginbut').style.color= '#fff';
    }
}