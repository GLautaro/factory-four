import { Backdrop, CircularProgress, Grid, Typography } from "@mui/material";
import React from "react";
import { factoryFourUrls } from "../../entities/constants";
import useFetch from "../../hooks/useFetch";
import StatusCard from "../StatusCard";

const Dashboard = () => {
  const [data, loading, errors] = useFetch(factoryFourUrls);

  return (
    <Grid container sx={{ mb: 4 }}>
      <Grid item xs={12} sx={{ mt: 4, pb: 4, textAlign: "center" }}>
        <Typography variant="h2" fontSize={32}>
          FactoryFour APIs Status
        </Typography>
      </Grid>

      {loading && (
        <Backdrop open={loading}>
          <CircularProgress />
        </Backdrop>
      )}

      <Grid container spacing={2}>
        {!!errors.length &&
          errors.map((error) => (
            <Grid
              item
              xs={12}
              md={3}
              key={error.url}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <StatusCard url={error.url} />
            </Grid>
          ))}
        {!!data.length &&
          data.map((value) => (
            <Grid
              item
              xs={12}
              md={3}
              key={value.url}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <StatusCard data={value.data} url={value.url} />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
