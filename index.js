const fs=require("fs");
const express=require("express");


const app=express();

let a=new Date();
console.log(a);

 app.use("/file",(req,res)=>{
    res.send(`${a}`)

 })


let b= fs.writeFile("file.txt",`${a}`, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });


app.listen(3009)