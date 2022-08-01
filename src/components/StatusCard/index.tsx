import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

interface StatusCardProps {
  url: string;
  data: any;
}

const StatusCard = ({ data, url }: StatusCardProps) => {
  return (
    <Card>
      <CardContent>
        <code>{url}</code>
        <Typography>{data.hostname}</Typography>
        <Typography>{data.message}</Typography>
      </CardContent>
    </Card>
  );
};

export default StatusCard;
