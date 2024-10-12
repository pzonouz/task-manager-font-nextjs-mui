"use client"

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Box, FormControl, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const AddTask = () => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div>
    <Fab onClick={()=>{setModalOpen(true)}} color="primary" sx={{position:"fixed",bottom:"2rem",right:"2rem"}}><AddIcon /></Fab>
    <Modal
  open={modalOpen}
  onClose={()=>{setModalOpen(false)}}
>
  <Box
   sx={{ backgroundColor: 'background.paper', p: 3,width:"80%",marginX:"auto" ,marginTop:"8rem",borderRadius:"2rem",display:"flex",flexDirection:"column",gap:"1rem",padding:"2rem"}}>
    <Typography variant="h4" component="h2">Add Task</Typography>
    {/* TODO: Complete this form */}
  <TextField name="name" label="Name" variant="outlined" fullWidth/>
  <TextField name="description" label="Description" variant="outlined" fullWidth/>
  <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    value={10}
    label="Category"
    onChange={()=>{}}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
  </Box>
</Modal>
</div>
  )
}

export default AddTask