const express = require('express');
const cors = require('cors')
const { SerialPort } = require('serialport')


const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

var port = 8080;

var arduinoCOMPort = "/dev/cu.usbmodem21301";

const arduinoSerialPort = new SerialPort({
    path: '/dev/cu.usbmodem21301',
    baudRate: 9600,
  })

arduinoSerialPort.on('open',function() {
  console.log('Serial Port ' + arduinoCOMPort + ' is opened.');
});

app.get('/', function (req, res) {

    return res.send('Connected');
 
})

app.get('/:action', function (req, res) {
  var action = req.params.action
  console.log(action)
    
    if (action == 'on') {
        arduinoSerialPort.write("m");
        return res.send("Magnet On");
    } else if (action == 'off') {
        arduinoSerialPort.write("d");
        return res.send("Magnet off");
    } else if (action == 'demo') {
        arduinoSerialPort.write("e");
    } else {
        console.log(action)
        arduinoSerialPort.write(action);
        return res.send("Motor Command Success");
    }
 
});

app.listen(port, function () {
  console.log('Example app listening on port http://localhost:' + port + '!');
});