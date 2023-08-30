import {
  Container,
  Toolbar,
  AppBar,
  Typography,
  Button,
} from '@mui/material'


export default function Navbar() {
  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl)
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => { setAnchorEl(null) }
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
            <span>济南漫点信息科技有限公司</span>
          </Typography>
          <div style={{ flex: 1 }}></div>
          {/* <div>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              onMouseOver={handleClick}
            >
              案例展示
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <Box
                sx={{
                  'a': {
                    display: 'block',
                    width: '100%',
                    color: "#333"
                  }
                }}
                onMouseLeave={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link underline="none" href="/case">微信小程序</Link>
                </MenuItem>
                <MenuItem href="/case" onClick={handleClose}>
                  <Link underline="none" href="/case">Android/IOS移动端</Link>
                </MenuItem>
                <MenuItem href="/case" onClick={handleClose}>
                  <Link underline="none" href="/case">网站设计</Link>
                </MenuItem>
              </Box>
            </Menu>
          </div> */}
          {/* <Button href="/case">案例展示</Button> */}
          {/* <Button sx={{ color: "#333" }} href="/about">关于我们</Button> */}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
