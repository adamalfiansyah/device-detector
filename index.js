import express from "express";
import Device from "./controllers/DeviceController.js";

const app       = express()
const APP_PORT  = 8080

//setting endpoint yang dapat di akses user
app.get('/api/device-detector', Device.index);

//listen port
app.listen(APP_PORT, function () {
  console.log(`Server listening on port ${APP_PORT}`);
});