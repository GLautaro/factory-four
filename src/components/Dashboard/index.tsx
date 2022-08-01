import { Backdrop, CircularProgress, Grid, Typography } from "@mui/material";
import React from "react";
import StatusCard from "../StatusCard";

interface DashboardProps {
  data: any[];
  errors: any[];
  loading: boolean;
}

const Dashboard = ({ data, errors, loading }: DashboardProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ mt: 2 }}>
        <Typography variant="h3">Factory Four APIs Status</Typography>
      </Grid>

      {loading && (
        <Backdrop open={loading}>
          <CircularProgress />
        </Backdrop>
      )}

      {data.length &&
        data.map((value) => (
          <Grid item xs={12} md={3} key={value.url}>
            <StatusCard data={value.data} url={value.url} />
          </Grid>
        ))}
    </Grid>
  );
};

export default Dashboard;
