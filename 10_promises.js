import axios from "axios";

console.log("waiting data");

try {
	let axiosResponse = axios.get(" https://the-vehicles-api.herokuapp.com/brands/");
	// do other things that don't need the axiosResponse
	// ...
	// when you really need to use the axiosResponse then use "await"
	console.log((await axiosResponse).data);
} catch (e) {
	console.error(e.toJSON().status);
}
console.log("finished");


