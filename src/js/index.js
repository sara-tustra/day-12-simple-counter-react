//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

const SecondsCounter = props => {
	return (
		<div className="container m-4 p-4">
			<div className="row">
				<h1 className="display-3 text-center m-3">
					This is the time you have spent in this page
				</h1>
			</div>
			<div className=" row bg-dark rounded border justify-content-md-center">
				<div className="col-1 bg-dark m-2 p-2 display-3 rounded border border-secondary text-center text-light clock">
					<i className="far fa-clock"></i>
				</div>
				hrs
				<div className="col-1 bg-dark m-2 p-2 display-3 rounded border border-secondary text-center text-light hours2">
					{props.hours2}
				</div>
				<div className="col-1 bg-dark m-2 p-2 display-3 rounded border border-secondary text-center text-light hours1">
					{props.hours1}
				</div>
				min
				<div className="col-1 bg-dark m-2 p-2 display-3 rounded border border-secondary text-center text-light minutes2">
					{props.minutes2}
				</div>
				<div className="col-1 bg-dark m-2 p-2 display-3 rounded border border-secondary text-center text-light minutes1">
					{props.minutes1}
				</div>
				seg
				<div className="col-1 bg-dark m-2 p-2 display-3 rounded border border-secondary text-center text-light seconds2">
					{props.seconds2}
				</div>
				<div className="col-1 bg-dark m-2 p-2 display-3 rounded border border-secondary text-center text-light seconds1">
					{props.seconds1}
				</div>
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	hours2: PropTypes.number,
	hours1: PropTypes.number,
	minutes2: PropTypes.number,
	minutes1: PropTypes.number,
	seconds2: PropTypes.number,
	seconds1: PropTypes.number
};

var seconds = 0;

setInterval(() => {
	seconds += 1;
	ReactDOM.render(
		<SecondsCounter
			seconds1={Math.floor(seconds) % 10}
			seconds2={Math.floor(seconds / 10) % 6}
			minutes1={Math.floor(seconds / 60) % 10}
			minutes2={Math.floor(seconds / 600) % 6}
			hours1={Math.floor(seconds / 3600) % 10}
			hours2={Math.floor(seconds / 36000) % 10}
		/>,
		document.querySelector("#app")
	);
}, 1000);
