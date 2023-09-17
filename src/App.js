import React, { useState } from "react";
import { Card, CardContent,Grid, Button } from "@mui/material";


function App() {
  const [get, getData]= useState("#000000");
  return (
   <Grid container spacing={3}>
   <Grid item xs={12}>
    <Card sx={{bgcolor:get,fontSize:"25px", textAlign:"center", color:"white"}}>
      <CardContent>
       {get}
      </CardContent>
    </Card>


   </Grid>
   <Grid item xs={3}>
   <Button onClick={()=>getData("red")} fullWidth  variant="contained" color="error">Red</Button>
   </Grid>
   <Grid item xs={3}>
   <Button onClick={()=>getData("green")}  fullWidth variant="contained" color="success">Green</Button>
   </Grid>
   <Grid item xs={3}>
   <Button onClick={()=>getData("blue")} fullWidth  variant="contained" color="primary">Blue</Button>
   </Grid>
   <Grid item xs={3}>
   <Button onClick={()=>getData("yellow")} fullWidth  variant="contained" color="warning">Yellow</Button>
   </Grid>
   </Grid>
  );
}

export default App;
