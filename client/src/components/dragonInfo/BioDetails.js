import React from "react";
import { Box, Typography } from "@mui/material";
// import { fakeDragons } from "../../api/fakeDragons";

const BioDetails = (props) => {
	const { dragon } = props;
	return (
		<Box>
			{dragon.gender === "Male" ? (
				<Typography color="#6495ED" variant="caption">
					M&nbsp;
				</Typography>
			) : (
				<Typography color="#F08080" variant="caption">
					F&nbsp;
				</Typography>
			)}
			<Typography variant="caption">{dragon.breed}</Typography>
			<Typography variant="caption" color="#9E9E9E" display="block">
				{dragon.parents}
			</Typography>
		</Box>
	);
};

export { BioDetails };
