import React from 'react'
import { AppBar, Box, Button,IconButton, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Main Menu
          </Typography>
          <Button >
            <Link to={'/at'} style={{color:'white'}}>Add Student</Link>
          </Button>
          <Button >
            <Link to={'/vt'} style={{color:'white'}}>View Student</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar