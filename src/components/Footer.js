import {
  Box,
  Typography,
  Link,
  Grid,
  Container
} from '@mui/material'
import { blue } from '@mui/material/colors'

export default function Footer() {
  return (
    <Box>
      <Box sx={{
        background: '#444',
        color: "#fff",
        py: 6,
      }}>
        <Container maxWidth='xl' sx={{
          '@media screen and (max-width:900px)':{
            textAlign:'center',
            '.MuiGrid-grid-xs-12':{
              mb:2,
            },
          }
        }}>
          <Grid container sx={{px:10}}>
            <Grid item xs={12} md={5}>
              <Typography variant='h4' gutterBottom>联系我们</Typography>
              <Typography gutterBottom>电话：13145312751</Typography>
              <Typography gutterBottom>邮箱：mandiankeji@163.com</Typography>
              <Typography gutterBottom>微信：mandian1927</Typography>
              <Typography>地址：济南市历下区盛景广场A座1606室</Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography variant='h4' gutterBottom>案例展示</Typography>
              <Typography gutterBottom>微信小程序</Typography>
              <Typography gutterBottom>Android/IOS移动端</Typography>
              <Typography>网站设计</Typography>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box sx={{
                textAlign: 'center',
                'img': {
                  width:'120px'
                }
              }}>
                <div>
                  <img src="/images/mdian.png" alt=''></img>
                </div>
                <Typography>详情咨询</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{
        background: '#333',
        color: "#fff",
        display: 'flex',
        alignItems: 'cente',
        justifyContent: 'center',
        py: 1,
        fontSize: '.875rem',
        "a": {
          color: blue[200],
        }
      }}>
        <Typography>济南漫点信息科技有限公司</Typography>
        <Link href="https://beian.miit.gov.cn/">鲁ICP备19017316-3号</Link>
      </Box>
    </Box>
  )
}
