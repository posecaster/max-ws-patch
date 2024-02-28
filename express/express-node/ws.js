const MaxAPI = require("max-api");


/*
const io = require("socket.io")();

io.on("connection", (socket) => {

	console.log("Socket is connected with App");

	socket.on("dispatch", (data) => {
		//console.log(data);
		//MaxAPI.outlet(data);
		
		MaxAPI.outlet({
			rhand:data[0][0],
			lhand:data[0][1],
			face:data[0][2],
			pose:data[0][3]
		});
	});

});

io.listen(4512); // trying to avoid using frequently used ports like 3000, 8000
*/

function anypost(str) {
	if (MaxAPI) {
		MaxAPI.post(str);
	} else {
		console.log(str);
	}
}

function ab2str(buf) {
	return buf.toString();
  return String.fromCharCode.apply(null, new Uint16Array(buf));
}

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 44444 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        //console.log('received: %s', message);
		var data = ab2str(message);
		anypost(JSON.parse(data).image);
		//anypost(Object.keys(JSON.parse(data)));
		

		//const img = new ImageData(JSON.parse(data).image);


    	MaxAPI.outlet(JSON.parse(data));

    });
    
    //ws.send('something');
});




const OSC = require('osc-js')

const config = { udpClient: { port: 9129 } }
const osc = new OSC({ plugin: new OSC.BridgePlugin(config) })

osc.open() 