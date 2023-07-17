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


function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf));
}

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 44444 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
var data = ab2str(message);
		//console.log(JSON.parse(data));
    		MaxAPI.outlet(JSON.parse(data));

    });
    
    //ws.send('something');
    }
);

