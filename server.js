var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/images/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'madi.png'));
});
app.get('/ui/images/inayat.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/images', 'inayat.jpg'));
});

app.get('/ui/a.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'a.png'));
});



app.get('/:articleName', function (req, res) {
 // res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
 var articleName=req.params.articleName;
res.send(createTemplate(articles[articleName]));
 });
app.get('/articleTwo', function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
  res.send(createTemplate(articleTwo));
});
app.get('/articleThree', function (req, res) {
// res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
res.send(createTemplate(articleThree));
});


/* CREATING TEMPLATE*/

//ARTICLE 1
var articles={
    'articleOne':{
	title:'Article One',
	heading:'Article 1',
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

    'articleTwo':{
	title:'Article Two',
	heading:'Article 2',
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
    'articleThree':{
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
<div>
<a href="/">HOME</a>|<a href="articleOne">Article1</a>|<a href="articleTwo">Article2</a>|<a href="articleThree">Article3</a>
</div>
<hr>

<h3>
${heading}
</h3>
      <div>
	  ${date}
	  </div>
	  <div>
	  ${content}
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
