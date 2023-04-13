const mysql=require('mysql2')
const con=mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"12345",
    database:"employee"
})

con.connect((err)=>{
    if(err){
        console.log("error")
    }
    else{
        console.log("connected")
    }
})

module.exports=con;