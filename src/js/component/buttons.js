import React from "react";




export const Buttons = props => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-6">
					<div className="form-group">
						<button type="button" className="btn btn-danger mx-3">
							Stop
						</button>
						<button type="button" className="btn btn-info mx-3">
							Restart
						</button>
						<button type="button" className="btn btn-warning mx-3">
							Resume
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

