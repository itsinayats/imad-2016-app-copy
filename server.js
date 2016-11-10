var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var app = express();
app.use(morgan('combined'));


//DATABASE CONFIGURATION
var config = {
  host: 'db.imad.hasura-app.io',
  user: 'itsinayats',
  password: process.env.DB_PASSWORD,
  database: 'itsinayats',
  port:'5432'
};

//INDEX PAGE
app.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


//CONNECTION CREATION
var pool=new Pool(config);
app.get('/test-db', function (req, res) {
    pool.query('select * from article',function(err,result){
        if(err)
        {
          res.status(500).send(err.toString()) ;
        }
        else
        {
          res.send(JSON.stringify(result.rows));  
        }
    });
 
});




//BOOTSTRAP FILES INCLUDES
app.get('/ui/css/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'bootstrap.min.css'));  //bootstrap  to test
});

app.get('/ui/css/bootstrap.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'bootstrap.css'));  //bootstrap
});

app.get('/ui/js/bootstrap.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'bootstrap.min.js'));  //bootstrap
});
//main.js
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
//favicon
app.get('/fevicon.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'favicon.ico'));
});
//style
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});



//blog
app.get('/blog', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/blog', 'blog.html'));
});








//images

app.get('/ui/images/inayat.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'inayat.jpg'));
});

app.get('/ui/images/saviours.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'saviours.png'));
});
app.get('/ui/images/server.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'server.png'));
});
app.get('/ui/images/phone.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'phone.png'));
});
app.get('/ui/images/mail.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'mail.png'));
});
app.get('/ui/images/iitm.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'iitm.png'));
});
app.get('/ui/images/web.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'web.png'));
});
app.get('/ui/images/java.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'java.png'));
});
app.get('/ui/images/setting.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'setting.png'));
});
app.get('/ui/images/school.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'school.png'));
});
app.get('/ui/images/college.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'college.png'));
});
app.get('/ui/images/fb.PNG', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'fb.PNG'));
});
app.get('/ui/images/gp.PNG', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'gp.PNG'));
});
app.get('/ui/images/lkn.PNG', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'lkn.PNG'));
});
app.get('/ui/images/twitter.PNG', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'twitter.PNG'));
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


//counter
var counter=0;
app.get('/counter',function(req, res){
counter = counter + 1;
res.send(counter.toString());

});

 //CODE FOR GETTING names
var names=[];
//app.get('/submit_name/:name',function(req,res){
app.get('/submit_name',function(req,res){
//var name=req.params.name;   //way 1
var name=req.query.name;
names.push(name);
res.send(JSON.stringify(names)); 
});





//articles

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


 
/* CONTENTS ARTICLES*/

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
var category=data.category;
var template= `
<!DOCTYPE html>
<html lang="en">
<head>
  <title>${title}</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="ui/style.css">
 
  		<style>
  		#leftcol{
  		    background-color:red;
  		}
  .affix {
      top: 0;
      width: 100%;
  }

 .affix + .container-fluid {
      padding-top: 70px;
  }
  .bold{
      font-weight:bolder;
  }
</style>
</head>
<body>
 <!--NAVBAR STARTS  -->
    <nav class="navbar navbar-inverse" role="navigation" data-spy="affix" style="z-index:1">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
       <a href="#" class="active navbar-brand bold">Inayat's Blog</a>
       
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
            <li class=" bold"><a href="#">Home</a></li>
            <li><a href="#" class="bold">Login</a></li>
           <li><a href="#" class="bold">Register</a></li>
           </ul>
           <div class="col-sm-3 col-md-3 pull-right">
            <form class="navbar-form" role="search">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search" name="q">
                    <div class="input-group-btn">
                        <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                    </div>
                </div>
            </form>
        </div>        
    </div>
</nav>
  <!--NAVBAR ENDS  -->
   <div class="container">
	<div class="row">
	
      <!--left-->
      <div class="col-md-3" id="leftCol">
        <ul class="nav nav-stacked" id="sidebar">
          <li><a href="#sec0">Section 0</a></li>
          <li><a href="#sec1">Section 1</a></li>
          <li><a href="#sec2">Section 2</a></li>
          <li><a href="#sec3">Section 3</a></li>
          <li><a href="#sec4">Section 4</a></li>
        </ul>
    </div><!--/left-->
    
      <div class="col-sm-9">
    
      <h4><small>RECENT POSTS</small></h4>
      <hr>
      <h2>TITLE OF CONTENT</h2>
      <h5><span class="glyphicon glyphicon-time"></span> Post by John Doe, Sep 24, 2015.</h5>
      <h5><span class="label label-success">LABEL</span></h5><br>
      <p>CONTENTS O ARTICLE</p>
      <hr>

      <h4>Leave a Comment:</h4>
      
      <form role="form">
        <div class="form-group">
          <textarea class="form-control" rows="3" required></textarea>
        </div>
        <button type="submit" class="btn btn-success">Submit</button>
      </form>
      <br><br>
      
      <p><span class="badge">2</span> Comments:</p><br>
      
      <div class="row">
        <div class="col-sm-2 text-center">
          <img src="bandmember.jpg" class="img-circle" height="65" width="65" alt="Avatar">
        </div>
        <div class="col-sm-10">
          <h4>Anja <small>Sep 29, 2015, 9:12 PM</small></h4>
          <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <br>
        </div>
        <div class="col-sm-2 text-center">
          <img src="bird.jpg" class="img-circle" height="65" width="65" alt="Avatar">
        </div>
        <div class="col-sm-10">
          <h4>John Row <small>Sep 25, 2015, 8:25 PM</small></h4>
          <p>I am so happy for you man! Finally. I am looking forward to read about your trendy life. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <br>
          <p><span class="badge">1</span> Comment:</p><br>
          <div class="row">
            <div class="col-sm-2 text-center">
              <img src="bird.jpg" class="img-circle" height="65" width="65" alt="Avatar">
            </div>
            <div class="col-xs-10">
              <h4>Nested Bro <small>Sep 25, 2015, 8:28 PM</small></h4>
              <p>Me too! WOW!</p>
              <br>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<footer class="container-fluid">
  <p>Footer Text</p>
</footer>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/ui/main.js"></script>
</body>
</html>

`;

return template;
}






var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
