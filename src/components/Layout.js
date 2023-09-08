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
        {banner ? <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage: `url(${'/images/banner.jpg'})`,
            opacity: 0.8,
            backgroundSize: 'cover',
            zIndex: '-1'
          }} /> : null}
        {banner ? <Box sx={{
          position: 'absolute',
          zIndex: 1,
          height: '100%',
          width: '100%',
          background: 'rgba(0,0,0,0.6)'
        }}></Box> : null}
        <Box sx={{
          height: 700,
          paddingTop: '64px',
          position: 'relative',
          zIndex: 1,
          color: banner ? "#fff" : "#333",
          'button': {
            borderColor: "#fff",
            'a': {
              color: "#fff"
            }
          }
        }}>{bannerContent}</Box>
      </Box> :
        <Box sx={{ paddingTop: '64px' }}></Box>}
      {children}
    </Box>
  )
}
