import React from "react";
import { Box, Typography } from "@mui/material";
import { CSVReader } from "react-papaparse";

const Uploader = (props) => {
	const handleDrop = (data) => {
		console.log("--------------------");
		console.log(data);
		console.log("--------------------");
	};

	const handleError = (err, file, inputElem, reason) => {
		console.log(err);
	};

	const handleRemoveFile = (data) => {
		console.log("--------------------");
		console.log(data);
		console.log("--------------------");
	};

	return (
		<Box>
			<Typography variant="h2">Drag & Drop Upload</Typography>
			<CSVReader
				onDrop={handleDrop}
				onError={handleError}
				addRemoveButton
				onRemoveFile={handleRemoveFile}
			>
				<Typography>Drop CSV file here or click to upload.</Typography>
			</CSVReader>
		</Box>
	);
};

export { Uploader };
