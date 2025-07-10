import {
  Avatar,
  Box,
  Button,
  Typography,
  Stack,
  Paper,
  TextField,
} from "@mui/material";
import { User } from "@auth0/auth0-react";

type Props = {
  user: User | undefined;
  profile: any;
  editMode: boolean;
  onEdit: () => void;
  onCancel: () => void;
  onSave: () => void;
  saving: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ProfileHeader({
  user,
  profile,
  editMode,
  onEdit,
  onCancel,
  onSave,
  saving,
  onChange,
}: Props) {
  return (
    <Paper square={false} variant="outlined" className="profile-banner">
      <Box className="cover-banner" />
      <Box className="profile-header-content">
        <Avatar
          src={user?.picture}
          sx={{ width: 96, height: 96, border: "4px solid white" }}
        />
        <Box
          mt={2}
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {editMode ? (
            <>
              <Stack direction="row" spacing={2}>
                <TextField
                  name="firstName"
                  value={profile.firstName}
                  onChange={onChange}
                  label="First Name"
                  size="small"
                />
                <TextField
                  name="lastName"
                  value={profile.lastName}
                  onChange={onChange}
                  label="Last Name"
                  size="small"
                />
              </Stack>
            </>
          ) : (
            <>
              <Typography variant="h5" fontWeight={600}>
                {profile.firstName} {profile.lastName}
              </Typography>
            </>
          )}
          <Typography variant="body2" color="textSecondary">
            {profile.city || "Your city"}, India
          </Typography>
        </Box>

        <Stack direction="row" spacing={2} mt={2}>
          {editMode ? (
            <>
              <Button variant="contained" onClick={onSave} disabled={saving}>
                {saving ? "Saving..." : "Save"}
              </Button>
              <Button variant="outlined" onClick={onCancel}>
                Cancel
              </Button>
            </>
          ) : (
            <Button
              size="large"
              variant="contained"
              onClick={onEdit}
              autoCapitalize="sentences"
            >
              Edit Profile
            </Button>
          )}
        </Stack>
      </Box>
    </Paper>
  );
}
