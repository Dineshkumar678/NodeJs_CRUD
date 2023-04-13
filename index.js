const express = require("express");
const con = require("./config");
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//Get Employee
app.get("/", (req, resp) => {
  con.query("select * from contact", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
})


//post employee
app.post("/", (req, resp) => {  
  const data= req.body;
  con.query("Insert into contact set?", data, (err, result,fields) => {
    if (err) console.log(err);
    console.log("Data posted successfully");
    resp.send(result)
  })    
})





//Delete Employee
app.delete("/:id", (req, res) => {
    const id = req.params.id;
    con.query("DELETE FROM contact WHERE id = ?", id, (error, result, fields) => {
      if (error) {
        console.log(error);
        res.status(500).send("Error deleting contact.");
      } else {
        res.send(`Contact with id ${id} deleted successfully.`);
      }
    });
});

//Update Employee
app.put('/:id', (req, res) => {
    const contactId = req.params.id;
    const updatedcontact = req.body;
  
    con.query('UPDATE contact SET ? WHERE id = ?', [updatedcontact, contactId], (err, result) => {
      if (err) throw err;
      console.log(`Updated contact with id ${contactId}`);
      res.send(result);
    });
});
  




app.listen(80, () => {
    console.log("Server started on port 80");
  });
