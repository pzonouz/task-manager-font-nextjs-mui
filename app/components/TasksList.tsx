import {  IconButton, List, ListItem, ListItemButton } from "@mui/material";
import { Task } from "../types/Task";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddTask from "./AddTask";


const TasksList = ({tasks}:{tasks:Task[]}) => {
  return (
    <>
    <AddTask/>
    <List sx={{ width: '100%', maxWidth: "100rem", bgcolor: 'background.paper' }}>
          {tasks.map((task) => {
            return (
              <ListItem sx={{paddingY:"1rem"}}
                key={task?.id}
                secondaryAction={
                  <div style={{display:"flex",flexDirection:"row",gap:"1rem"}}>
                  <IconButton edge="end" >
                    <DeleteIcon color="error" fontSize="large" />
                  </IconButton>
                  <IconButton edge="end" >
                    <CheckCircleIcon color="success" fontSize="large"/>
                  </IconButton>
                  </div>
                }
                disablePadding
              >
                <ListItemButton>{task?.title}</ListItemButton>
              </ListItem>
            );
          })}
        </List>
          </>
  )
}

export default TasksList