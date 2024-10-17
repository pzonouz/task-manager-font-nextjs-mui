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
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
//Hooks
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useForm } from "react-hook-form";
//components
import { Category } from "../types/Category";
import { Priority } from "../types/Priority";
import dayjs from "dayjs";

type FormValues = {
  title: string;
  body: string;
  due_date: string;
  priority: string;
  category: string;
};
const schema = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
  due_date: z.string(),
  priority: z.string(),
  category: z.string(),
});

const submitHandler = (data: FormValues) => {
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        return;
      }
      document.location.href = "/";
    })
    .catch((err) => {});
};
const AddTask = ({
  categories,
  priorities,
}: {
  categories: Category[];
  priorities: Priority[];
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const {
    getValues,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { due_date: dayjs().toISOString() },
  });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

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
          onSubmit={handleSubmit(submitHandler)}
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
            label="Title"
            variant="outlined"
            {...register("title")}
            fullWidth
            helperText={errors?.["title"]?.message as string}
            error={errors?.["title"]?.message as boolean | undefined}
          />
          <TextField
            label="Body"
            variant="outlined"
            {...register("body")}
            fullWidth
            helperText={errors?.["body"]?.message as string}
            error={errors?.["body"]?.message as boolean | undefined}
          />
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              label="Category"
              defaultValue={categories[0].id}
              {...register("category")}
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
              label="Priority"
              defaultValue={priorities[0].id}
              {...register("priority")}
            >
              {priorities.map((priority) => (
                <MenuItem key={priority.id} value={priority.id}>
                  {priority.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* TODO: Convert to Iso string and disable paste and default value to now */}
          <DateTimePicker
            value={dayjs(getValues("due_date"))}
            onChange={(e) => {
              setValue("due_date", e?.toISOString() as string, {
                shouldDirty: true,
              });
            }}
            label="Due DateTime"
            disablePast
            slots={{
              textField: (props) => <TextField {...props} error={false} />,
            }}
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
          {/* <div style={{ color: "red" }}>{}</div> */}
        </Box>
      </Modal>
    </div>
  );
};

export default AddTask;
