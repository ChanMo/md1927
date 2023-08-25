import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'


export default function Navbar() {
  return (
    <AppBar position="static" color="transparent" sx={{boxShadow:'none'}}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            color="dark" component="div" sx={{flexGrow:1}}>
            济南漫点信息科技有限公司
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
