import { useState } from "react";
import { IconButton, Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FundEdit from "./FundEdit";
import { FundResponse } from "../type";
import { createFund } from "../api/FundApi";

//Why is there errors

const FundAdd = () => {
  const [open, setOpen] = useState(false);

        // Title, link, description, deadline
  const handleSave = async (title: string,link: string, description: string, deadline: Date | any
  ) => {
    try {
      // console.log(title, link, description, deadline);
      // Title, link, description, deadline
      const response = await createFund(title, link, description, deadline);
      console.log("Fund added:", response);
      setOpen(false);
      //refresh the funds to get the updated list
      window.location.reload();
    } catch (error) {
      console.error("Failed to add fund:", error);
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };
  const newFund: FundResponse = {
    _id: "",
    title: "",
    link: "",
    description: "",
    deadline: new Date(),
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
          Add a new Fund
        </Typography>
      </Box>

      <FundEdit
        open={open}
        fund={newFund}
        header="Add Fund"
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </>
  );
};

export default FundAdd;
