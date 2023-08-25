import {
  Box,
  Typography,
  Link
} from '@mui/material'

export default function Footer() {
  return (
    <Box sx={{ textAlign: 'center', py: 6, background: '#fff' }}>
      <Typography gutterBottom>济南漫点信息科技有限公司</Typography>
      <Link href="https://beian.miit.gov.cn/">鲁ICP备19017316-3号</Link>
    </Box>
  )
}
