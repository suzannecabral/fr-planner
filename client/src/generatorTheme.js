import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

export const themeOptions = {
	palette: {
		type: "light",
		primary: {
			main: "#bf360c",
		},
		secondary: {
			main: "#ffc400",
		},
	},
	typography: {
		fontSize: 12,
		h1: {
			fontSize: "2.3rem",
			fontWeight: 700,
		},
		h2: {
			fontSize: "1.8rem",
		},
		h3: {
			fontSize: "1.4rem",
			fontWeight: 700,
			lineHeight: 1.17,
		},
		h4: {
			fontSize: "1.3rem",
		},
		h5: {
			fontSize: "1.1rem",
			fontWeight: 700,
		},
		h6: {
			lineHeight: 1.1,
			fontWeight: 400,
		},
		subtitle2: {
			fontWeight: 600,
			fontSize: "0.7rem",
			letterSpacing: "0.03em",
		},
		body1: {
			lineHeight: 1.4,
		},
		subtitle1: {
			fontSize: "0.8rem",
		},
		fontFamily: "Source Sans Pro",
	},
	spacing: 4,
};
