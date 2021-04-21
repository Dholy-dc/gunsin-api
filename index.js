const express=require('express');

const app=express();

app.use(()=>{
    console.log('helo server..');
    console.log('helo kamu..')
})

app.listen(4000);