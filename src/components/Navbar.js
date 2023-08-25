import {
  Container,
  Toolbar,
  AppBar,
  Typography,
  Button,
  Menu,
  MenuItem
} from '@mui/material'
import { useState } from 'react'


export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => { setAnchorEl(null) }
  return (
    <AppBar position="fixed" color="transparent" sx={{
      boxShadow: 'none',
      background: 'rgba(255,255,255,0.9)'
    }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            href="/"
            color="dark" component="a" sx={{
              mr: 10,
              color: '#333',
              textDecoration: 'none'
            }}>
            济南漫点信息科技有限公司
          </Typography>
          {/* <div>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              onMouseOver={handleClick}
            >
              Dashboard
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <div
                onMouseLeave={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </div>
            </Menu>
          </div> */}
          <Button href='/case'>案例展示</Button>
          <Button href="/about">关于我们</Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
