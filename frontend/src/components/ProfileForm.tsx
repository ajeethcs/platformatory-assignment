// components/ProfileForm.tsx
import {
  Alert,
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

type Props = {
  profile: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  saving: boolean;
  error?: string;
};

export default function ProfileForm({
  profile,
  onChange,
  onSave,
  saving,
  error,
}: Props) {
  const [editMode, setEditMode] = useState(false);

  const fields = [
    { label: "First Name", name: "firstName" },
    { label: "Last Name", name: "lastName" },
    { label: "Phone", name: "phone" },
    { label: "City", name: "city" },
    { label: "Pincode", name: "pincode" },
  ];

  return (
    <Paper
      style={{ border: "1px solid lightgray", borderRadius: "20px" }}
      elevation={0}
      sx={{ p: 4 }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        boxShadow="none"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5">Profile</Typography>
        {!editMode && (
          <Button variant="outlined" onClick={() => setEditMode(true)}>
            Edit
          </Button>
        )}
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

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
              <Box boxShadow="none">
                <Typography variant="subtitle2" color="textSecondary">
                  {field.label}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  {profile[field.name] || "-"}
                </Typography>
              </Box>
            )}
          </Grid>
        ))}

        {editMode && (
          <Grid item xs={12}>
            <Box boxShadow="none" display="flex" gap={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  onSave();
                  setEditMode(false);
                }}
                disabled={saving}
              >
                {saving ? "Saving..." : "Save"}
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}
