const express = requiere("exprees");
const app = exprees();
const PORT = process.env.port || 3001;
const userRoutes = require("./routes/user-routes");

//express middleware, used to be bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Serve up Static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// app.use(require('./routes));
app.use("/api/", userRoutes);
// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
