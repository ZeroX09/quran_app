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
                source:`${process.env.PUBLIC_URL||"https://172.20.10.3:5000"}/q/${item}`
            }
           }));
    })


});

Router.use((req,res,next)=>{
    if(req.path==="/"){
        res.sendFile(path.join(__dirname,'..','/public/index.html'))
        
    }else{
        next()
    };

})

let path = require('path');




module.exports = Router