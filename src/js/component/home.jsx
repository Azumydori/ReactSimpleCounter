import React from "react";
import Counter from "./counter.jsx";

//create your first component
function Home() {
	return (
		<div className=" container d-flex justify-content-center mt-5">
			<div className=" p-2 input mx-2  ">
				<i className="far fa-clock"></i>
			</div>
			<div className=" p-2 mx-2 ">
				<Counter delay={1000} start={0} />
			</div>
			<div className=" p-2 mx-2 ">
				<Counter delay={100} start={0} />
			</div>
			<div className="p-2  mx-2 ">
				<Counter delay={10} start={0} />
			</div>
			<div className=" p-2 mx-2 ">
				<Counter delay={1} start={0} />
			</div>
		</div>
	);
}

export default Home;
