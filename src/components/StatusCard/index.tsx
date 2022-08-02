import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import React from "react";

interface StatusCardProps {
  url: string;
  data?: any;
}

const StatusCard = ({ data, url }: StatusCardProps) => {
  return (
    <Card elevation={4} sx={{ width: 300, height: 125, borderRadius: 5 }}>
      <CardHeader
        avatar={
          data && data.success ? (
            <CheckCircleIcon fontSize="large" color="success" />
          ) : (
            <CancelIcon fontSize="large" color="error" />
          )
        }
        title={url}
        subheader={data ? data.version : 'Network Error'}
        sx={{ padding: '16px 16px 0px' }}
      />
      <CardContent>
        {data ? (
          <>
            <Typography variant="body2">
              <span style={{ fontWeight: "bold" }}>Hostname: </span>
              {data.hostname}
            </Typography>
            <Typography variant="body2">
              <span style={{ fontWeight: "bold" }}>Message: </span>
              {data.message}
            </Typography>
          </>
        ) : (
          <Typography variant="body2">Service unavailable</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default StatusCard;
