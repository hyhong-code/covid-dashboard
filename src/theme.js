import { createMuiTheme } from "@material-ui/core";

export const red = "#f26d6d";
export const redLight = "#fcdada";
export const redDark = "#eb1f1f";
export const yellow = "#ffc24d";
export const yellowLight = "#fff1d5";
export const yellowDark = "#d58c00";
export const green = "#44d0c9";
export const greenLight = "#d9f6f4";
export const greenDark = "#269993";
export const greyLight = "#f5f5f5";
export const blueLight = "#f5f7ff";
export const black = "#3b3b3b";

export default createMuiTheme({
  palette: {
    common: {
      red,
      redLight,
      redDark,
      yellow,
      yellowLight,
      yellowDark,
      green,
      greenLight,
      greenDark,
      greyLight,
      blueLight,
      black,
    },
  },
  typography: {
    fontFamily: `'Lato', sans-serif`,
  },
});
