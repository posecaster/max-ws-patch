const MaxAPI = require("max-api");
const io = require("socket.io")();

io.on("connection", (socket) => {

	console.log("Socket is connected with App");

	socket.on("dispatch", (data) => {
		//console.log(data);
		//MaxAPI.outlet(data);
		
		MaxAPI.outlet({
			rhand:data[0],
			lhand:data[1],
			face:data[2],
			pose:data[3]
		});
	});

});

io.listen(4512); // trying to avoid using frequently used ports like 3000, 8000

