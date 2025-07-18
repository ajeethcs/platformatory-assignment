// pages/ProfilePage.tsx
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Paper,
  Snackbar,
} from "@mui/material";
import ProfileHeader from "../components/ProfileHeader";
import ProfileInfoSection from "../components/ProfileInfoSection";
import ActionCards from "../components/ActionCards";
import "../styles/profile.css";

type ProfileType = {
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  pincode: string;
};

export default function ProfilePage() {
  const { user, getAccessTokenSilently, isAuthenticated, isLoading } =
    useAuth0();

  const [profile, setProfile] = useState<ProfileType>({
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    pincode: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: import.meta.env.VITE_AUTH0_AUDIENCE,
          },
        });
        const res = await axios.get("http://localhost:5000/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProfile(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load profile");
        setLoading(false);
      }
    };

    if (isAuthenticated) fetchProfile();
  }, [getAccessTokenSilently, isAuthenticated]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const saveProfile = async () => {
    try {
      setSaving(true);
      setError("");
      const token = await getAccessTokenSilently({
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
      });

      await axios.post("http://localhost:5000/api/profile", profile, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      //   alert("Profile saved!");
      setOpenNotification(true);
      setEditMode(false);
    } catch (err) {
      console.error(err);
      setOpenNotification(false);
      setError("Failed to save profile");
    } finally {
      setSaving(false);
    }
  };

  if (isLoading || loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  const handleClose = () => {
    setOpenNotification(false);
  };

  return (
    // <Paper elevation={3} className="profile-banner">
    <Container maxWidth="xl">
      <ProfileHeader
        user={user}
        profile={profile}
        editMode={editMode}
        onEdit={() => setEditMode(true)}
        onCancel={() => setEditMode(false)}
        onSave={saveProfile}
        saving={saving}
        onChange={handleChange}
      />

      <ProfileInfoSection
        profile={profile}
        editMode={editMode}
        onChange={handleChange}
        error={error}
      />
      {/* <ActionCards /> */}
      <Snackbar
        open={openNotification}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Profile saved succesfully!
        </Alert>
      </Snackbar>
    </Container>
    // </Paper>
  );
}
