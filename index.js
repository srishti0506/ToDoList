const express=require('express');
const bodyParser=require("body-parser");
const app=express();
const ejs=require('ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('assets'));


app.set('view engine','ejs');
var a=[];//a--newItems
app.get("/",function(req,res){
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// var today  = new Date();
    let today=new Date();
    //let day=today_date.getDay();
    let day=(today.toLocaleDateString("en-US", options)); 
   // res.send(day);
   res.render("list",{data1:day,data2:a});
})

app.post("/",function(req,res){
   let b= req.body.n;//newItem
    a.push(b);
   res.redirect('/');
})

app.get('/delete-task/',function(req,res){
    console.log(req.query);
    var d1=req.query.data1;
    var indexx=a.findIndex(i=> i==d1);
    console.log(indexx);
    if(indexx!=-1){
        a.splice(indexx,1);
    }
    res.redirect('/');
    
})




app.listen(3000,()=>console.log("port is running at 3000"));
