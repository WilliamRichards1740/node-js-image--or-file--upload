const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();


app.use(fileUpload());
app.get('/', function(req, res) {
res.sendFile(__dirname + '/index.html')

})

app.post('/upload', function(req, res) {
   
const sampleFile = req.files.upload;
const name = req.files.upload.name;

if (name == 'index.html'){

  res.send("Please Dont Send Index Files!");
}
if (name == 'index.php'){

  res.send("Dont You know Node js cant process PHP you silly goose :)");
}



if (name.endsWith(".html") == true){

  res.send("Please Dont upload Html");
   
}
if (name.endsWith(".htm") == true ){

  res.send("Please Dont upload Html");
}
if (name.endsWith(".php") == true){

  res.send("Dont You know Node js cant process PHP you silly goose :)");
}
   if (name.endsWith(".js") == true){

  res.send("Dont Upload JS files :)");
}


  
  else{
  sampleFile.mv(__dirname + '/uploads/' + name , function(err) {
    if (err)
      res.send("server err");
     

    res.send('uploaded :)');
  });
}
});
console.log("Server Running");
app.listen(4000);
