import {
  Box,
  Typography,
  Link,
  Grid,
  Container
} from '@mui/material'
import { blue, grey } from '@mui/material/colors'
import { useLocal } from '../i18n/LocalProvider';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  const { intl, isCN } = useLocal()
  return (
    <Box>
      {isCN ? <><Box sx={{
        background: '#444',
        color: "#fff",
        py: 6,
      }}>
        <Container sx={{
          '@media screen and (max-width:900px)': {
            '.MuiGrid-grid-xs-12': {
              mb: 2,
            },
          }
        }}>
          <Grid container sx={{
            'div': {
              'h5': {
                mb: 2,
              },
              'a': {
                color: grey[200],
                display: 'block',
                mb: 1,
                width: 'fit-content',
                textDecorationThickness: '.5px',
                ":hover": {
                  textDecorationColor: grey[200]
                }
              }
            }
          }}>
            <Grid item xs={12} md={4}>
              <Typography variant='h5' gutterBottom>{intl.get("footer.entry.title")}</Typography>
              <Typography>{intl.get("footer.entry.items.0")}</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='h5' gutterBottom>{intl.get("footer.product.title")}</Typography>
              <Link href="https://paper.md1927.com/" target='__blank'>{intl.get("footer.product.items.0")}</Link>
              <Link href="https://hisoul.md1927.com/" target='__blank'>{intl.get("footer.product.items.1")}</Link>
              <Link href="https://work.md1927.com/" target='__blank'>{intl.get("footer.product.items.2")}</Link>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='h5' gutterBottom>{intl.get("footer.link.title")}</Typography>
              <Link href='https://www.3ykeji.com/' target='__blank'>{intl.get("footer.link.items.0")}</Link>
              <Link href="http://www.langyikeji.cn/" target='__blank'>{intl.get("footer.link.items.1")}</Link>
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
        </Box></> :
        <Box sx={{
          background: '#333',
          color: "#fff",
          py: 2,
          fontSize: '.875rem',
          "a": {
            color: blue[200],
          }
        }}>
          <Container sx={{
            display: 'flex',
            alignItems: 'cente',
            justifyContent: 'center',
          }}>
            <Typography sx={{ fontSize: '.8rem' }}>@MDIAN Leading the Future with Innovation</Typography>
            <Box sx={{ flex: 1 }} />
            <GitHubIcon sx={{ mr: 1 }} />
            <TwitterIcon sx={{ mr: 1 }} />
            <TelegramIcon sx={{ mr: 1 }} />
            <LinkedInIcon sx={{ mr: 1 }} />
          </Container>
        </Box>}
    </Box>
  )
}
