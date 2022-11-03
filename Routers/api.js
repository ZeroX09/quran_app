const Router = require('express').Router();
const FS = require('fs');



Router.get('/all',async(req,res)=>{
    const files = FS.readdir(path.join(__dirname,'..'+'/quran'),(err,files)=>{
if(err){
    return res.status(404).json([])
}
        res.json(files.map(item=>{
            return{
                filename:item.split('.')[0],
                source:`${process.env.PUBLIC_URL||"http://172.20.10.3:5000"}/q/${item}`
            }
           }));
    })


});
let path = require('path');


Router.get("*",(req,res,next)=>{
        res.sendFile(path.join(__dirname,'..','/public/index.html'))
})







module.exports = Router