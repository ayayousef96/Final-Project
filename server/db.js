
const mongoose = require("mongoose");


module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(
			`mongodb+srv://${process.env.CLUSTER_NAME}:${process.env.CLUSTER_PASS}@cluster0.dk0cucm.mongodb.net/?retryWrites=true&w=majority`
		);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};