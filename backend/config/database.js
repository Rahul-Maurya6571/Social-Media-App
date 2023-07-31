const mongoose = require('mongoose')


exports.connectDatabase = () =>{
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
        console.log(`Database connected`)
    }).catch((error)=>{
        console.log(error)
    })
}