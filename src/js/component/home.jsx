import React from "react";
import Semaforo from "./Semaforo";
import Button from "./Button";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Semaforo/>
			<Button/>
		</>
	);
};

export default Home;
