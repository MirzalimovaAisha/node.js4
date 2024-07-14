const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/add-new-usedCar", (req, res) => {
    res.send(`
        <div style="margin-top:100px; display:flex; flex-direction:column; align-items:center">
            <h1 style="text-align:center">ADD new 'Used Car'</h1>
            <form action="/usedCar" method="POST" style="background-color: #f2f2f2; display: flex; flex-direction: column; gap: 20px; width: 400px; padding: 20px; ">
                <input type="text" name="name" placeholder="Name" style="padding: 10px;"/>
                <input type="text" name="company" placeholder="Company" style="padding: 10px;"/>
                <input type="text" name="price" placeholder="price" style="padding: 10px;"/>
                <input type="text" name="licenseType" placeholder="License Type" style="padding: 10px;"/>
                <input type="number" name="numberOfTravelers" placeholder="Number of travelers" style="padding: 10px;"/>
                <input type="text" name="location" placeholder="Location" style="padding: 10px;"/>
                <input type="submit" value="Add" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer"/>
            </form>
        </div>
    `);
});

app.use("/usedCar", (req, res) => {
    console.log(req.body);
    res.send(`
        <div style="display:flex; justify-content:center; width:100%; margin-top:200px; ">
            <div style="background:#8080801a; padding:20px; box-shadow:rgb(0 0 0 / 35%) 0px 0px 5px 0px; border-radius:20px">
                <h1>Used Car has been added</h1>
                <p>Name: '${req.body.name}'</p>
                <p>Company: '${req.body.company}'</p>
                <p>Price: '${req.body.price}'</p>
                <p>License Type: '${req.body.licenseType}'</p>
                <p>Number of Travelers: '${req.body.numberOfTravelers}'</p>
                <p>Location: '${req.body.location}'</p>
            </div>
        </div>
        `);
});

app.use("/", (req, res) => {
    console.log("middleware...");
    res.send(`<h1>home</h1>`);
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`Server running on port:`, PORT);
});
