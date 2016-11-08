var express = require('express');
var morgan = require('morgan');
var path = require('path');


var Pool = require('pg').Pool;

var config = {
  host: 'db.imad.hasura.app.io',
  user: 'itsinayats',
  password: process.env.DB_PASSWORD,
  database: 'itsinayats',
  port:'5432'
};




var app = express();
app.use(morgan('combined'));


app.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});



var pool=new Pool(config);
app.get('/test-db', function (req, res) {
    pool.querry('select * from user',function(err,res){
        if(err)
        {
          res.status(500).send(err.toString()) ;
        }
        else
        {
          res.send(JSON.stringify(res.rows));  
        }
    });
 
});





app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/fevicon.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'favicon.ico'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/images/inayat.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'inayat.jpg'));
});
app.get('/ui/images/fb.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'fb.png'));
});
app.get('/ui/images/gp.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'gp.png'));
});
app.get('/ui/images/lkn.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'lkn.png'));
});
app.get('/ui/images/twitter.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'twitter.png'));
});


app.get('/ui/images/a.gif',function(req,res){
res.sendFile(path.join(__dirname, 'ui/images' , 'a.gif'))
});
app.get('/ui/images/fb.jpg',function(req,res){
res.sendFile(path.join(__dirname, 'ui/images' , 'fb.jpg'))
});
app.get('/ui/images/gl.jpg',function(req,res){
res.sendFile(path.join(__dirname, 'ui/images' , 'gl.jpg'))
});

app.get('/ui/login.php', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'login.php'));
});



var counter=0;
app.get('/counter',function(req, res){
counter = counter + 1;
res.send(counter.toString());

});


 //CODE FOR GETTING VALUES
var names=[];
//app.get('/submit_name/:name',function(req,res){
app.get('/submit_name',function(req,res){
//var name=req.params.name;   //way 1
var name=req.query.name;
names.push(name);
res.send(JSON.stringify(names)); 
});








app.get('/articles/:articleName', function (req, res) {
// var articleName=req.params.articleName;
pool.query("Select * from article where title='" + req.params.articleName + "'", function(err,result){
    if(err){
          res.status(500).send(err.toString()) ;
          }
     else{
            if(result.rows.length===0)
             {
                res.status(400).send('ARTICLE NOT FOUND');
             }
                 else{
                  var  articleData=result.rows[0];
                  res.send(createTemplate(articleData));
                     }
             }
});

 });


 
/* CREATING TEMPLATE*/

//ARTICLE 1
var articles={
    articleOne:{
	title:'Article One',
	heading:'Article ONE',
	date:'dec 12,2016',
	content:`
	 <p>
	  To provide a situation to the students where in they get to develop business 
	  oriented applications using latest technologies within aggressive schedules. 
	  By doing so, they get exposed to real business problem statements,
	  experience accelerated learning and get credentials to share during future job pursuit. 
	  To provide a situation to the students where in they get to develop business 
	  oriented applications using latest technologies within aggressive schedules. 
	  By doing so, they get exposed to real business problem statements,
	  experience accelerated learning and get credentials to share during future job pursuit. 
	  </p>
	  <center><img src="ui/images/a.gif"></center>
	   <p>
	    To provide a situation to the students where in they get to develop business 
	  oriented applications using latest technologies within aggressive schedules. 
	  By doing so, they get exposed to real business problem statements,
	  experience accelerated learning and get credentials to share during future job pursuit. 
	  To provide a situation to the students where in they get to develop business 
	  oriented applications using latest technologies within aggressive schedules. 
	  By doing so, they get exposed to real business problem statements,
	  experience accelerated learning and get credentials to share during future job pursuit.
	   </p>   `
	

},
//ARTICLE 2
    articleTwo:{
	title:'Article Two',
	heading:'Article TWO',
	date:'dec 13,2016',
	content:`
	 <p>
	  To provide a situation to the students where in they get to develop business 
	  oriented applications using latest technologies within aggressive schedules. 
	  By doing so, they get exposed to real business problem statements,
	  experience accelerated learning and get credentials to share during future job pursuit. 
	  To provide a situation to the students where in they get to develop business 
	  oriented applications using latest technologies within aggressive schedules. 
	  By doing so, they get exposed to real business problem statements,
	  experience accelerated learning and get credentials to share during future job pursuit. 
	  </p>
	  <center><img src="ui/images/gl.jpg"></center>
	   <p>
	    To provide a situation to the students where in they get to develop business 
	  oriented applications using latest technologies within aggressive schedules. 
	  By doing so, they get exposed to real business problem statements,
	  experience accelerated learning and get credentials to share during future job pursuit. 
	  To provide a situation to the students where in they get to develop business 
	  oriented applications using latest technologies within aggressive schedules. 
	  By doing so, they get exposed to real business problem statements,
	  experience accelerated learning and get credentials to share during future job pursuit.
	   </p>   `
	

},
 //ARTICLE 3
    articleThree:{
	title:'Article Three',
	heading:'Article Three',
	date:'dec 15,2016',
	content:`
	 <p>
	  To provide a situation to the students where in they get to develop business 
	  oriented applications using latest technologies within aggressive schedules. 
	  By doing so, they get exposed to real business problem statements,
	  experience accelerated learning and get credentials to share during future job pursuit. 
	  To provide a situation to the students where in they get to develop business 
	  oriented applications using latest technologies within aggressive schedules. 
	  By doing so, they get exposed to real business problem statements,
	  experience accelerated learning and get credentials to share during future job pursuit. 
	  </p>
	  <center><img src="ui/images/fb.jpg"></center>
	   <p>
	    To provide a situation to the students where in they get to develop business 
	  oriented applications using latest technologies within aggressive schedules. 
	  By doing so, they get exposed to real business problem statements,
	  experience accelerated learning and get credentials to share during future job pursuit. 
	  To provide a situation to the students where in they get to develop business 
	  oriented applications using latest technologies within aggressive schedules. 
	  By doing so, they get exposed to real business problem statements,
	  experience accelerated learning and get credentials to share during future job pursuit.
	   </p>   `
	

}
};
//TEMPLATE CODE
function createTemplate(data){
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;
var template= `
   <html>
  <head>
<title>${title}</title>

<link href="/ui/style.css" rel="stylesheet" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
</head>
<body>
<div id="header">
<span class="menu"><a href="/">HOME</a>|</span>
<span class="menu"><a href="articleOne">Article1</a>|</span>
<span class="menu"><a href="articleTwo">Article2</a>|</span>
<span class="menu"><a href="articleThree">Article3</a>|</span>
<span class="menu"><a href="counter">TestCounter</a>|</span>
</div>
<hr>
<div id="container">

<h3>
${heading}
</h3>
      <div>
	  ${date}
	  </div>
	  <div>
	  ${content}
	  </div>
	  
	  </div>
<div id="footer">
&copyinayat
 </div>
</body>
</html>

`;

return template;
}






var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
