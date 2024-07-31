import { useState } from "react";
import { IconButton, Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AnnouncementEdit from "./AnnouncementEdit";
import { AnnouncementResponse } from "../type";
import { createAnnouncement } from "../api/AnnouncementsApi";

const AnnouncementAdd = () => {
  const [open, setOpen] = useState(false);

  const handleSave = async (title: string, details: string) => {
    try {
      console.log(title, details);
      const response = await createAnnouncement(title, details);
      console.log("Announcement added:", response);
      setOpen(false);
      //refresh the announcements to get the updated list
      window.location.reload();
    } catch (error) {
      console.error("Failed to add announcement:", error);
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };
  const newAnnouncement: AnnouncementResponse = {
    _id: "",
    title: "",
    details: "",
  };

  return (
    <>
      <Box display="flex" alignItems="center" sx={{ cursor: "pointer" }}>
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            backgroundColor: "#f5f5f5",
            marginBottom: 2,
            padding: 1,
            boxShadow: 3,
            "&:hover": {
              backgroundColor: "#F57C00",
              boxShadow: 6,
            },
          }}
        >
          <AddIcon fontSize="large" />
        </IconButton>
        <Typography
          variant="h6"
          sx={{ color: "black", paddingLeft: 4, paddingBottom: 3 }}
        >
          Add a new announcement
        </Typography>
      </Box>

      <AnnouncementEdit
        open={open}
        announcement={newAnnouncement}
        header="Add Announcement"
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </>
  );
};

export default AnnouncementAdd;
