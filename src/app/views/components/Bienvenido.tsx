import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Hidden } from '@mui/material';
import { COLOR } from "../../styles/colors";


export default function Bienvenido({ }: {  }) {
  useEffect(() => {
    console.log("Bienvenido");
  }, []);


  return (
    <Grid padding={0} >
      
      <Grid item paddingTop="2%" paddingBottom="2%"> 
      <Box display="flex" justifyContent="center">
      <Box >
      <Typography variant="h4" color= {COLOR.azul}> {(" ¡Bienvenid@! ")} </Typography>
      </Box>
      </Box>
      </Grid>

      <Hidden smDown>
      <Grid height="100%" width="100%" bgcolor= {COLOR.grisBotones}  >
      <Grid item alignContent="center">
      <Box boxShadow={3}> 
      </Box>
      </Grid>
      </Grid>
      </Hidden>

    </Grid>
  );
}

