const express = require("express");
const app = express();
const path = require("path");

app.set("port",process.env.PORT || 3030)

app.listen(app.get("port"),() => console.log("Server on http://localhost:"+app.get("port")));

//public acces
app.use(express.static(path.resolve(__dirname, "../public")))

//rutas
app.use(require("./routes/web"));


















