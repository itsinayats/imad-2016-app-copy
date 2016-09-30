console.log('Loaded!');
alert("welcome");

//show address onclick
function show_address(){
var element=document.getElementById('address');
element.innerHTML= '<br>c1-20,Pusa ,Samastipur,Bihar(848125)';
}

//MOve MY PROFILE PIC
var img= document.getElementById('imgi');
img.onclick = function() {
img.style.marginLeft='100px';
};