import {
  Box,
  Typography,
  Link
} from '@mui/material'

export default function Layout({
  banner = null,
  bannerContent = null,
  children
}) {
  return (
    <Box>
      {banner ? <Box
        sx={{
          position: 'relative'
        }}>
        <Box sx={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: '-1',
          background: 'rgba(0,0,0,0.4)'
        }}>
        </Box>
        <Box
          sx={{
            zIndex: '-2',
            position: 'fixed',
            top: 0, left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${'/images/banner.jpg'})`,
            backgroundSize: 'cover'
          }} />
        <Box sx={{ height: 700, paddingTop: '64px' }}>{bannerContent}</Box>
      </Box> : null}
      {children}
    </Box>
  )
}
