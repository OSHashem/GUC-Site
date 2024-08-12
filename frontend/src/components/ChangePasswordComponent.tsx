import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
const ChangePasswordComponent = () => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const togglePasswordForm = () => {
    setShowPasswordForm(!showPasswordForm);
  };

  return (
    <div>
      <Link
        to="/changePassword"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div onClick={togglePasswordForm}>
          <EditIcon style={{ cursor: "pointer" }} />
          <span>Change Password</span>
        </div>
      </Link>
    </div>
  );
};

export default ChangePasswordComponent;
