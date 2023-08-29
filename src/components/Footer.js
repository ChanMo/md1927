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
        <Container sx={{
          '@media screen and (max-width:900px)': {
            textAlign: 'center',
            '.MuiGrid-grid-xs-12': {
              mb: 2,
            },
          }
        }}>
          <Grid container sx={{
            'div': {
              'h5': {
                mb: 2
              }
            }
          }}>
            <Grid item xs={12} md={4}>
              <Typography variant='h5' gutterBottom>快速入口</Typography>
              <Typography gutterBottom>关于我们</Typography>
              <Typography gutterBottom>联系我们</Typography>
              <Typography>产品案例</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='h5' gutterBottom>我们的产品</Typography>
              <Typography gutterBottom>Paper交互式文档</Typography>
              <Typography gutterBottom>HISOUL虚拟社交</Typography>
              <Typography>DSOOU WORK</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='h5' gutterBottom>友情链接</Typography>
              <Typography gutterBottom>日照异域科技</Typography>
              <Typography gutterBottom>陕西朗逸科技文化</Typography>
            </Grid>
            {/* <Grid item xs={12} md={2}>
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
            </Grid> */}
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
