import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { List, ListItem } from "@mui/material";
import { UploaderRow } from "./UploaderRow";

export const UploaderSummary = () => {
	return (
		<Box sx={{ marginTop: 4 }}>
			<Typography variant="body1" color="initial">
				Uploader Summary
			</Typography>
			<List>
				<ListItem>
					<UploaderRow />
				</ListItem>
				<ListItem>
					<UploaderRow />
				</ListItem>
				<ListItem>
					<UploaderRow />
				</ListItem>
			</List>
		</Box>
	);
};
