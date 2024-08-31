import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { IconButton, Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EvaluationFormEdit from "./EvaluationFormEdit";
import {
  EvaluationFormResponse,
  UserResponse,
  TaResponse,
  // QuestionAnswerResponse,
} from "../type";
import {
  createEvaluationForm,
  getAllEvaluationForms,
  getInstructorId,
  getTAId,
  getUserEvaluationForms,
} from "../api/EvaluationFormApi";
import { useQuery } from "@tanstack/react-query";
import Snackbar from "@mui/material/Snackbar";

const EvaluationFormAdd = () => {
  const [data, setData] = useState<EvaluationFormResponse[]>([]);
  const queryClient = useQueryClient();
  const [SnackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [open, setOpen] = useState(false);
  const { refetch } = useQuery<EvaluationFormResponse[]>({
    queryKey: ["evaluationforms"],
    queryFn: getUserEvaluationForms,
    refetchOnWindowFocus: false, // Disabling automatic refetching on window focus
    staleTime: 0, // Ensures that the data is considered fresh only for 0ms
    cacheTime: 0,
  });

  const handleSave = async (
    // evaluator: string, // Assuming UserResponse corresponds to the instructor's information
    evaluatedTA: string, // Assuming UserResponse corresponds to the TA's information
    semester: string,
    course: string
  ) => {
    try {
      console.log("inside handel save in add eval");

      console.log(evaluatedTA, semester, course);
      // const instructorId = await getInstructorId(evaluator);
      console.log(evaluatedTA);
      const taId = await getTAId(evaluatedTA);
      const response = await createEvaluationForm(
        // instructorId,
        taId,
        semester,
        course
      );
      console.log("Evaluation Form added:", response);
      queryClient.setQueryData(["evaluationforms"], await getUserEvaluationForms());
      // const updatedData = await getUserEvaluationForms();
      // console.log("Updated Data:", updatedData);
      // setData(updatedData);
      refetch();
      setOpen(false);
      // queryClient.invalidateQueries(["evaluationforms"]); // Invalidate and refetch
      // refetch()
      // forceUpdate(); // Force the component to re-render

      setSnackBarOpen(true);
      setSnackBarMessage("Evaluation Form added successfully!");
    } catch (error) {
      console.error("Failed to add EvaluationForm:", error);
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };
  const newEvaluationForm: EvaluationFormResponse = {
    evaluator: { _id: "", username: "", email: "", password: "" },
    evaluatedTA: { _id: "", name: "" },
    semester: "",
    course: "",
    questions: [], // This will be an array of QuestionAnswerResponse objects
    answers: [], // This will be an array of AnswerResponse objects
    _id: "",
  };

  return (
    <>
      <Box display="flex" alignItems="center">
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            backgroundColor: "#f5f5f5",
            marginBottom: 2,
            padding: 1,
            boxShadow: 3,
            cursor: "pointer",
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
          Add a new Evaluation Form
        </Typography>
      </Box>

      <EvaluationFormEdit
        open={open}
        evaluationform={newEvaluationForm}
        header="Add EvaluationForm"
        onSave={handleSave}
        onCancel={handleCancel}
      />
      <Snackbar
        open={SnackBarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackBarOpen(false)}
        message={snackBarMessage}
      />
    </>
  );
};

export default EvaluationFormAdd;
