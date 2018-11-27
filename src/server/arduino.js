const sp = require("serialport");
const SerialPort = sp.SerialPort;
const portName = process.argv[2];

const myPort = new SerialPort(portName, {
  baudRate: 9600,
  parser: sp.parsers.readline("\r\n")
});

myPort.on("open", onOpen);
myPort.on("data", onData);

function onOpen() {
  console.log("Opened Connection");
}

function onData(data) {
  console.log("On data", data);
}
