import {
  Box,
  Typography,
  Link,
  Grid,
  Container
} from '@mui/material'
import { blue, grey } from '@mui/material/colors'

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
              },
              'a': {
                color: grey[200],
                display: 'block',
                mb: 1
              }
            }
          }}>
            <Grid item xs={12} md={4}>
              <Typography variant='h5' gutterBottom>快速入口</Typography>
              <Link href="/about">关于我们</Link>
              {/* <Typography gutterBottom>联系我们</Typography> */}
              {/* <Typography>产品案例</Typography> */}
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='h5' gutterBottom>我们的产品</Typography>
              <Link href="https://paper.md1927.com/" target='__blank'>Paper交互式文档</Link>
              <Link href="https://hisoul.md1927.com/" target='__blank'>HISOUL虚拟社交</Link>
              <Link href="https://work.md1927.com/" target='__blank'>DSOOU WORK</Link>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='h5' gutterBottom>友情链接</Typography>
              <Link href='https://www.3ykeji.com/' target='__blank'>日照异域科技</Link>
              <Link href="http://www.langyikeji.cn/" target='__blank'>陕西朗逸科技文化</Link>
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
        py: 2,
        fontSize: '.8rem',
        "a": {
          color: blue[200],
        }
      }}>
        <Typography sx={{ fontSize: '.8rem' }}>济南漫点信息科技有限公司</Typography>
        <Link href="https://beian.miit.gov.cn/">鲁ICP备19017316-3号</Link>
      </Box>
    </Box>
  )
}
