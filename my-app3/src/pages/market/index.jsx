import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";

import {
  Box,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Market = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);



  

  return (
    <Box m="20px">
      <Header title="Available Properties" subtitle="For Sale" />
      <Grid></Grid>
    </Box>
  );
};

export default Market;
