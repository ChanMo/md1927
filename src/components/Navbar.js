import {
  Container,
  Toolbar,
  AppBar,
  Typography,
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
  Box,
  Link,
} from '@mui/material'
import { useState } from 'react';


export default function Navbar(props) {
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
      <Container>
        <Toolbar>
          <Typography
            variant="h6"
            href="/"
            color="dark" component="a" sx={{
              color: '#333',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              'img': {
                height: 32,
                width: 32,
                mr: 1
              }
            }}>
            <img src='/images/logo_md1927.svg' alt='' />
            <span>济南漫点信息科技</span>
          </Typography>
          <Box sx={{
            ml: 2
          }}>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              onMouseOver={handleClick}
              sx={{ color: "#333" }}
            >
              案例展示
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              sx={{
                'a': {
                  display: 'block',
                  width: '100%',
                  color: "#333 !important"
                }
              }}
            >
              <Box
                onMouseLeave={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link underline="none" href="/zhigao">职教高考题库SASS平台</Link>
                </MenuItem>
                <MenuItem href="/case" onClick={handleClose}>
                  <Link underline="none" href="/shuanggao">中职院校双高建设SASS平台</Link>
                </MenuItem>
              </Box>
            </Menu>
          </Box>
          <div style={{ flex: 1 }}></div>
          {/* <Button sx={{ color: "#333" }} href="/about">关于我们</Button> */}
          {props.buttons}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
