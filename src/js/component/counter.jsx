import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Counter = props => {
	const [time, setTime] = useState(props.start);

	useEffect(() => {
		setInterval(() => {
			setTime(time => time + 1);
		}, 1000 * props.delay);
	}, []);

	return (
		<div className="counter-card">
			<span>{time % 10}</span>
		</div>
	);
};

export default Counter;

Counter.propTypes = {
	delay: PropTypes.number,
	start: PropTypes.number
};
