import React from "react";
import { Box, Typography } from "@mui/material";
import { CSVReader } from "react-papaparse";
import { UploaderSummary } from "../components/UploaderSummary";

const Uploader = (props) => {
	const [uploads, setUploads] = React.useState([]);
	const [statusMsg, setStatusMsg] = React.useState("");
	const [error, setError] = React.useState(false);

	const messages = {
		handleError: "Import error",
		invalidFile: "Invalid format, please check your file.",
		removeSuccess: "File removed",
		uploadSuccess: "File added successfully",
	};

	const checkValid = (data) => {
		// console.log("Check Valid");
		if (!data[11].data.fr_id) {
			setStatusMsg(messages.invalidFile);
			return false;
		} else {
			setStatusMsg(messages.uploadSuccess);
			return true;
		}
	};

	const handleDrop = async (data) => {
		// console.log("Handle Drop");
		const valid = await checkValid(data);
		if (valid) {
			setUploads(data);
		}
	};

	const handleError = (err, file, inputElem, reason) => {
		// console.log("Handle error");
		setStatusMsg(messages.handleError);
	};

	const handleRemoveFile = (data) => {
		// console.log("Handle Remove File");
		setStatusMsg(messages.removeSuccess);
		setTimeout(() => {
			setStatusMsg("");
		}, 2000);
	};

	const stringToNum = (value, headerName) => {
		// console.log("String to Num");
		const numberFlags = ["num", "number", "#", "tier", "level"];
		// if anything on the "flags" list is in the header name
		// then parse a number from the string
		if (numberFlags.some((flag) => headerName.toLowerCase().includes(flag))) {
			if (value.trim() === "") {
				return 0;
			} else {
				return parseInt(value, 10);
			}
		} else {
			return value;
		}
	};

	// TODO: Add a list of dragons being imported
	// 			 with the option to delete
	// Later: tag dragons here?
	// make uploader a drop-in page as part of the lair?

	return (
		<Box>
			<Typography variant="h5">Upload a CSV</Typography>
			<Box sx={{ marginTop: 2 }}>
				<CSVReader
					onDrop={handleDrop}
					onError={handleError}
					onRemoveFile={handleRemoveFile}
					addRemoveButton
					noProgressBar
					config={{
						header: true,
						transform: stringToNum,
					}}
				>
					<Typography>Drop CSV file here or click to upload.</Typography>
				</CSVReader>
				{/* TODO display conditional success/error message */}
				{/* fade success msg after x seconds */}
				<Typography color={error ? "error" : "success"}>{statusMsg}</Typography>
			</Box>
			<UploaderSummary />
		</Box>
	);
};

export { Uploader };
