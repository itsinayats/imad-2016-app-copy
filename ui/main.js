console.log('Loaded!');

//show address onclick
function show_address(){
var element=document.getElementById('address');
element.innerHTML= '<br>c1-20,Shashtri nagar ,Ghaziabad(201202)';
}

//MOve MY PROFILE PIC
/*

var img= document.getElementById('imgi');
var rad=0;
function makebig(){
rad=rad+2;
img.style.width=rad+'px';
img.style.height=rad+'px';
img.style.borderRadius=rad+'px';
if(rad==150){
alert("welcome");
}
}
img.onload=function(){
var a=setInterval(makebig,20);
};
*/

//Click counter
/*
var button=document.getElementById('button');
var counterTxt=document.getElementById('counterTxt');
var counter=0;
button.onclick=function(){
counter++;
counterTxt.innerHTML= counter.toString();

}

*/
/*
//AJAX HTTP_REQUEST
 var btn=document.getElementById('ctrbtn');
 var counter;
 btn.onclick=function(){
 //create a request object
 var request=new XMLHttpRequest();
 //capture response and store it in variable
 request.onreadystatechange=function(){
 if(request.readyState===XMLHttpRequest.DONE){
   if(request.status===200){
   var counter=request.responseText;
   var span=document.getElementById('counterTxt');
   span.innerHTML=counter.toString();
   }
 }
 //not done yet
 };
 //make request
 request.open('GET','http://itsinayats.imad.hasura-app.io//counter',true);
 request.send(null);
 };

*/


//TESTING WITH MYSELF of COUNTER:
var btn=document.getElementById('ctrbtn');
btn.onclick=function(){

var request=new XMLHttpRequest();

request.onreadystatechange=function(){
if(request.status==200){
document.getElementById('counterTxt').innerHTML=this.responseText;
}
};
//request.open('GET',"http://itsinayats.imad.hasura-app.io/counter",true);
request.open('GET',"http://localhost:8080/counter",true);
request.send();
}

//GETTING NAME//

var submitbtn=document.getElementById('submitbtn');
submitbtn.onclick=function(){

var request=new XMLHttpRequest();
request.onreadystatechange=function(){
if(request.readyState===XMLHttpRequest.DONE){
if(request.status===200){
var names=request.responseText;
names=JSON.parse(names);
var list='';
for(var i=0;i<names.length;i++){
list+='<li>'+names[i]+'</li>';
}
var ul=document.getElementById('namelist');
ul.innerHTML=list;
}
}
};
var nameInput=document.getElementById('name');
var name=nameInput.value;
//request.open('GET','http://itsinayats.imad.hasura-app.io/submit_name?name='+name,true);
request.open('GET','http://localhost:8080/submit_name?name='+name,true);
request.send(null);

};