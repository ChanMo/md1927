import {
  Box,
} from '@mui/material'

export default function Layout({
  banner = null,
  bannerContent = null,
  children
}) {
  return (
    <Box>
      {banner || bannerContent ? <Box
        sx={{
          position: 'relative'
        }}>
        <Box sx={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: '-1',
          background: 'rgba(0,0,0,0.02)'
        }}>
        </Box>
        {banner ? <Box
          sx={{
            zIndex: '-2',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${'/images/banner.jpg'})`,
            backgroundSize: 'cover'
          }} /> : null}
        <Box sx={{ height: 700, paddingTop: '64px' }}>{bannerContent}</Box>
      </Box> : <Box sx={{ paddingTop: '64px' }}></Box>}
      {children}
    </Box>
  )
}
