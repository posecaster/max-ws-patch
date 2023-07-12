const MaxAPI = require("max-api");
const io = require("socket.io")();

io.on("connection", (socket) => {

	console.log("Socket is connected with App");

	socket.on("dispatch", (data) => {
		console.log(data);
		MaxAPI.outlet(data);
	});

});

io.listen(4512); // trying to avoid using frequently used ports like 3000, 8000

