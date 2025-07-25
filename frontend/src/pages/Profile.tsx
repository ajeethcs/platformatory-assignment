import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import AppLayout from "../components/AppLayout";
import ProfileForm from "../components/ProfileForm";

export default function ProfilePage() {
  const { user, getAccessTokenSilently, isAuthenticated, isLoading } =
    useAuth0();

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    pincode: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

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

      alert("Profile saved!");
    } catch (err) {
      console.error(err);
      setError("Failed to save profile");
    } finally {
      setSaving(false);
    }
  };

  if (isLoading || loading)
    return (
      <Box
        boxShadow="none"
        sx={{ display: "flex", justifyContent: "center", mt: 10 }}
      >
        <CircularProgress />
      </Box>
    );

  if (!isAuthenticated) {
    return <Typography variant="h6">Please login.</Typography>;
  }

  return (
    <AppLayout>
      <Container maxWidth="md">
        <ProfileForm
          profile={profile}
          onChange={handleChange}
          onSave={saveProfile}
          saving={saving}
          error={error}
        />
      </Container>
    </AppLayout>
  );
}
