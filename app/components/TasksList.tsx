import { IconButton, List, ListItem, ListItemButton } from "@mui/material";
import { Task } from "../types/Task";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddTask from "./AddTask";
import { Category } from "../types/Category";
import { Priority } from "../types/Priority";

const TasksList = ({ tasks, categories, priorities }: { tasks: Task[], categories: Category[], priorities: Priority[] }) => {
  if (tasks.length == 0) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>No tasks</h1>
      </div>
    );
  }
  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: "100rem", bgcolor: "background.paper" }}
      >
        {tasks.map((task: Task) => {
          return (
            <ListItem
              sx={{ paddingY: "1rem" }}
              key={task?.id}
              secondaryAction={
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
                >
                  <IconButton edge="end">
                    <DeleteIcon color="error" fontSize="large" />
                  </IconButton>
                  <IconButton edge="end">
                    <CheckCircleIcon color="success" fontSize="large" />
                  </IconButton>
                </div>
              }
              disablePadding
            >
              <ListItemButton>{task?.name}</ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default TasksList;
