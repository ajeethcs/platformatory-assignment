// AddressSection.tsx
import { Card, Grid, Typography } from "@mui/material";
import styled from "styled-components";

const AddressCard = styled(Card)`
  padding: 24px;
  border-radius: 16px;
  background-color: #ffffff;
`;

export default function AddressSection({ profile }: { profile: any }) {
  return (
    <AddressCard>
      <Typography variant="h6" gutterBottom>
        Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle2" color="textSecondary">
            Country
          </Typography>
          <Typography>India</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle2" color="textSecondary">
            City
          </Typography>
          <Typography>{profile.city || "-"}</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle2" color="textSecondary">
            Postal Code
          </Typography>
          <Typography>{profile.pincode || "-"}</Typography>
        </Grid>
      </Grid>
    </AddressCard>
  );
}
