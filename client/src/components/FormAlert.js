import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";

//  Dialog box for game forms
const FormAlert = ({ confirmation, confirmationAlert, alertStatus }) => {
	return (
		<Dialog open={confirmation} aria-describedby="alert-dialog-description">
			<DialogContent style={{ padding: "0" }}>
				{confirmation && confirmationAlert(alertStatus)}
			</DialogContent>
		</Dialog>
	);
};

export default FormAlert;
