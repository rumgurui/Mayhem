function yay() {
    var gifElement = document.createElement('img');
    gifElement.src = 'cf506d6998d68de01e9171f30fc4e287.gif';
    
    gifElement.setAttribute('alt', 'GIF');
    var gifContainer = document.getElementById('gif');
    gifContainer.innerHTML = '';
    gifContainer.appendChild(gifElement);
    text=document.getElementById('text')
    text.innerHTML=`<h1 style="color: hotpink; padding: 10px;">I love you </h1>`
}

var fontsize = 30;
var fontize = 30
function ohno() {
    var gifElement = document.createElement('img');
    gifElement.src = '6wyzyc.jpg';
    gifElement.setAttribute('alt', 'GIF');
    var gifContainer = document.getElementById('gif');
    gifContainer.innerHTML = '';
    gifContainer.appendChild(gifElement);

    var no = document.getElementById('no');
    var yes = document.getElementById('yes');
    no.style.fontSize = '20px';
    no.textContent = 'u sure??';
    fontize-=2
    no.style.fontSize= fontize+ 'px'
    fontsize += 5;
    text=document.getElementById('text')
    text.innerHTML=`<h1 style="color: hotpink; padding: 10px;">please :( </h1>`
    yes.style.fontSize = fontsize + 'px';}