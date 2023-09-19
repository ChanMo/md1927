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
  IconButton,
  Dialog,
  Slide,
  DialogTitle,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material'
import { forwardRef, useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useLocal } from '../i18n/LocalProvider';
const Transition = forwardRef(function Transition(
  props: any,
  ref: any
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Navbar(props) {
  const { intl, isCN } = useLocal()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => { setAnchorEl(null) }


  const [menuOpen, setMenuOpen] = useState(false);

  const renderPhoneMenu = () => {
    return <Box sx={{
      '@media screen and (min-width:900px)': {
        display: 'none'
      }
    }}>
      <IconButton onClick={() => setMenuOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Dialog
        open={menuOpen}
        fullScreen
        onClose={() => setMenuOpen(false)}
        sx={{
          'a': {
            display: 'block'
          }
        }}
      >
        <Container maxWidth='xl'>
          <Toolbar sx={{
            display: 'flex'
          }}>
            <Box sx={{ flex: 1 }}></Box>
            <IconButton
              onClick={() => setMenuOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </Container>
        <Box>
          <ListItemButton component="a" href="/zhigao">
            <ListItemText primary="职教高考题库SASS平台" />
          </ListItemButton>
          <Divider />
          <ListItemButton component="a" href="/shuanggao">
            <ListItemText primary="中职院校双高建设SASS平台" />
          </ListItemButton>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Box onClick={() => setMenuOpen(false)} sx={{ width: 'fit-content' }}>{props.buttons}</Box>
          </Box>
        </Box>
      </Dialog>
    </Box >
  }
  return (
    <AppBar position="fixed" color="transparent" sx={{
      boxShadow: 'none',
      background: `rgba(255,255,255,0.92)`
    }}>
      <Container maxWidth='xl'>
        <Toolbar>
          <Typography
            variant="h6"
            href="/" component="a" sx={{
              color: '#333',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              'img': {
                height: 32,
                width: 32,
                mr: 1,
                // background: "#fff",
                borderRadius: '32px'
              },
              '@media screen and (max-width:900px)': {
                color: '#333'
              }
            }}>
            <img src='/images/logo_md1927.png' alt='' />
            <span>{intl.get('navbar.company')}</span>
          </Typography>
          <Box sx={{
            ml: 2,
            '@media screen and (max-width:900px)': {
              display: 'none'
            }
          }}>
            {isCN ? <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              onMouseOver={handleClick}
              sx={{ color: "#333" }}
            >
              {intl.get('navbar.case')}
            </Button> : null}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              sx={{
                boxShadow: 'none',
                '.MuiMenu-paper': {
                  paddingTop: 1.2,
                  boxShadow: 'none !important'
                },
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
          <Box sx={{
            '.MuiButtonGroup-outlined': {
              'button:nth-child(1)': {
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4
              },
              'button:last-child': {
                borderTopRightRadius: 4,
                borderBottomRightRadius: 4
              }
            },
            'button': {
              boxShadow: 'none',
              // borderColor: "#fff",
              // borderWidth:2,
            },
            '@media screen and (max-width:900px)': {
              display: 'none'
            }
          }}>
            {props.buttons}
          </Box>
          {renderPhoneMenu()}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
