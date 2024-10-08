import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import guc from "../assets/guc.png";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [typoMessage, setTypoMessage] = useState<string>("");
  const [typoOpen, setTypoOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChangePassword = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setLoading(true);

    // Add your fetch request here to handle changing the password
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/user/changePassword`,
      {
        credentials: "include",
        method: "POST",
        body: JSON.stringify({ currentPassword, newPassword, confirmPassword }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    if (!response.ok) {
      setTypoOpen(true);
      if (response.status === 401) {
        setTypoMessage("The old password isn't correct. Please retype it.");
      } else if (response.status === 402) {
        setTypoMessage(
          "The password you entered doesn't meet the minimum security requirements. Password must contain at least one number, one capital letter and one small letter"
        );
      } else if (response.status === 403) {
        setTypoMessage(
          "The passwords you typed don't match. Please try again."
        );
      }
    } else {
      window.localStorage.removeItem("logged");
      navigate("/login");
    }

    setLoading(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 100,
            mb: 2,
          }}
          alt="guc"
          src={guc}
        />
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Change Password
        </Typography>
        <Box
          component="form"
          onSubmit={handleChangePassword}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            name="currentPassword"
            label="Current Password"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="newPassword"
            label="New Password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm New Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {typoOpen && (
              <Typography sx={{ color: "red" }}>
                *{typoMessage}{" "}
              </Typography>
            )}
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Change Password"
            )}
          </Button>
          <Typography
            component={Link}
            to="/"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            Back to Home
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ChangePassword;
