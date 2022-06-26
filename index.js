require("./models/db");

const express = require("express");
const path = require("path");
const handlebars = require("handlebars");
const exphbs = require("express-handlebars");
const bodyparser = require("body-parser");
const { allowInsecurePrototypeAccess } = require("@handlebars/allow-prototype-access");

const vehicleController = require("./controllers/vehicle.controller");

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get("/", (req, res) => {
    res.send(`
    <body style="background-color: rgba(125, 148, 77, 0.5); font-family: candara, sans-serif;">
    <h2 style="background-color: rgb(125, 148, 77); text-align: center; width: 100px; margin: auto; margin-top: 300px; padding: 10px; border-radius: 10px;">
    <a href="vehicle/list" style="color: rgb(0, 0, 0); text-decoration: none;">Database</a>
    </h2>
    </body>`);
});

app.set("views", path.join(__dirname, "views"));

app.engine("hbs", exphbs.engine({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    defaultLayout: 'vehicleMain',
    extname: ".hbs",
}));

app.set("view engine", "hbs");

app.listen(3030, () => {
    console.log("server running on port 3030");
});

app.use("/vehicle", vehicleController);