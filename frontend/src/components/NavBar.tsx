import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { List,ListItemText, ListItem, ListItemButton } from "@mui/material";
import ChangePasswordComponent from "./ChangePasswordComponent";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#1c0b0b",
});

const StyledMenuItem = styled(MenuItem)({
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#F57C00",
  },
});

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("api/user/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const message = await response.json();
        console.log(message);
      } else {
        console.log("7777777777777777");
      }
    } catch (error) {
      console.log("errr");
    }
    window.localStorage.removeItem("logged");
    window.localStorage.removeItem("role");
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("id");
    navigate("/login");
    window.location.reload();
  };

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <Link to={"/home"}>
          <Box
            component="img"
            src={logo}
            sx={{ display: { xs: "none", md: "flex" }, mr: 1, height: "50px" }}
          />
        </Link>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "center",
            alignContent: "center",
            marginLeft: 40,
          }}
        >
          <Box component={Link} to="/home" sx={{ textDecoration: "none" }}>
            <StyledMenuItem>Home</StyledMenuItem>
          </Box>
          <Box
            component={Link}
            to="/announcements"
            sx={{ textDecoration: "none" }}
          >
            <StyledMenuItem>Announcements</StyledMenuItem>
          </Box>
          <Box
            component={Link}
            to="/conferences"
            sx={{ textDecoration: "none" }}
          >
            <StyledMenuItem>Conferences</StyledMenuItem>
          </Box>
          <Box
            component={Link}
            to="/evaluations"
            sx={{ textDecoration: "none" }}
          >
            <StyledMenuItem>Evaluation</StyledMenuItem>
          </Box>
          <Box component={Link} to="/filelinks" sx={{ textDecoration: "none" }}>
            <StyledMenuItem>Links</StyledMenuItem>
          </Box>
          <Box component={Link} to="/funds" sx={{ textDecoration: "none" }}>
            <StyledMenuItem>Funds</StyledMenuItem>
          </Box>
          <Box
            component={Link}
            to="/complaints"
            sx={{ textDecoration: "none" }}
          >
            <StyledMenuItem>Complaints</StyledMenuItem>
          </Box>
          <List>
      <ListItem >
      <ChangePasswordComponent/>
      <ListItemText primary="Change Password" />
      </ListItem>
      <ListItemButton  onClick={handleLogout}>
        <LogoutIcon />
        <ListItemText primary="Logout" />
      </ListItemButton>
    </List>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
