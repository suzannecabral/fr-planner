import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Bio = (props) => {
	const { dragon } = props;
	return (
		<Box
			sx={{ margin: "10px", flexDirection: "column", width: "60px" }}
			display="flex"
		>
			<Typography>{dragon.name}</Typography>
			<img alt={dragon.name} src={dragon.portraiturl} />
			<Link sx={{ margin: "0 auto" }} variant="caption" href={dragon.url}>
				[FR]
			</Link>
		</Box>
	);
};

export { Bio };
