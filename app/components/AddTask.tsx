"use client";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Category } from "../types/Category";
import { Priority } from "../types/Priority";
import { AddTaskAction } from "../actions/tasks";
import { useFormState } from "react-dom";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


const AddTask = ({
  categories,
  priorities,
}: {
  categories: Category[];
  priorities: Priority[];
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const initialState = {};
  const [state, formAction] = useFormState(AddTaskAction, initialState);
  useEffect(() => {}, [state]);
  return (
    <div>
      <Fab
        onClick={() => {
          setModalOpen(true);
        }}
        color="primary"
        sx={{ position: "fixed", bottom: "2rem", right: "2rem" }}
      >
        <AddIcon />
      </Fab>
      <Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        <Box
          component={"form"}
          action={formAction}
          sx={{
            backgroundColor: "background.paper",
            p: 3,
            width: "80%",
            marginX: "auto",
            marginTop: "8rem",
            borderRadius: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "2rem",
          }}
        >
          <Typography variant="h4" component="h2">
            Add Task
          </Typography>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            helperText={(state as any)?.errors?.fieldErrors?.name}
            error={!!(state as any)?.errors?.fieldErrors?.name}
          />
          <TextField
            name="description"
            label="Description"
            variant="outlined"
            fullWidth
            helperText={(state as any)?.errors?.fieldErrors?.description||""}
            error={!!(state as any)?.errors?.fieldErrors?.description}
          />
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              name="category"
              defaultValue={categories[0].id}
              label="Category"
            >
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Priority</InputLabel>
            <Select
              name="priority"
              defaultValue={priorities[0].id}
              label="Priority"
            >
              {priorities.map((priority) => (
                <MenuItem key={priority.id} value={priority.id}>
                  {priority.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* TODO: Convert to Iso string and disable paste and default value to now  */}
          <DateTimePicker name="dueDate" label="Due Date Time" />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AddTask;
