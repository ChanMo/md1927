import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

export default function Footer() {
  return (
    <Container sx={{textAlign:'center',py:6}}>
      <Typography gutterBottom>济南漫点信息科技有限公司</Typography>
      <Link href="https://beian.miit.gov.cn/">鲁ICP备19017316-3号</Link>
    </Container>
  )
}
