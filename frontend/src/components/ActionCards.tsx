// components/ActionCards.tsx
import { Grid, Paper, Typography, Box } from "@mui/material";

const actions = [
  {
    title: "Ready for work",
    description: "Show recruiters that you’re available.",
  },
  {
    title: "Share posts",
    description: "Post updates to connect with others.",
  },
  {
    title: "Update",
    description: "Keep your profile updated regularly.",
  },
];

export default function ActionCards() {
  return (
    <Grid container spacing={2} mt={3}>
      {actions.map((action) => (
        <Grid item xs={12} sm={4} key={action.title}>
          <Paper elevation={1} sx={{ p: 2 }}>
            <Typography fontWeight={600}>{action.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {action.description}
            </Typography>
            <Box mt={1}>
              <Typography fontSize={13} color="primary">
                ➜
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
