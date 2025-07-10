import { Grid, Paper, TextField, Typography, Alert } from "@mui/material";

type Props = {
  profile: any;
  editMode: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export default function ProfileInfoSection({
  profile,
  editMode,
  onChange,
  error,
}: Props) {
  const fields = [
    { label: "Phone", name: "phone" },
    { label: "City", name: "city" },
    { label: "Pincode", name: "pincode" },
  ];

  return (
    <Paper elevation={2} variant="outlined" sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Contact Details
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      <Grid container spacing={2}>
        {fields.map((field) => (
          <Grid item xs={12} sm={6} key={field.name}>
            {editMode ? (
              <TextField
                label={field.label}
                name={field.name}
                value={profile[field.name]}
                onChange={onChange}
                fullWidth
              />
            ) : (
              <>
                <Typography variant="subtitle2" color="textSecondary">
                  {field.label}
                </Typography>
                <Typography variant="body1">
                  {profile[field.name] || "-"}
                </Typography>
              </>
            )}
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
