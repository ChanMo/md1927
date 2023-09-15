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
          position: 'relative',
          overflow: 'hidden'
        }}>
        {banner ? <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            // '@keyframes slidein': {
            //   '10%': {
            //     transform: 'scale(1)',
            //   },
            //   '49%': {
            //     transform: 'scale(1.5)',
            //   },
            //   '51%': {
            //     transform: 'scale(1.5)',
            //   },
            //   '90%': {
            //     transform: 'scale(1)',
            //   }
            // },
            // animation: 'slidein 20s',
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
        {/* <Box className="bottom" sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          zIndex:1,
          height:250,
          '.wave-svg-shape': {
            width: '100%',
            overflow: 'hidden',
          },
          '.wave-svg-shape .wave-svg': {
            width: '400%',
            overflow: 'hidden',
            float: 'left',
            fill: '#00A1DF',
            margin: 0,
            // opacity:0.4,
            animation: 'waveSvgAnim 6s linear infinite',
            transform:'scaleY(.6)'
          },
          '@keyframes waveSvgAnim': {
            '0%': {
              transform: 'translateX(-75%) scaleY(.6)'
            },
            '100%': {
              transform: 'translateX(0%) scaleY(.6)'
            }
          }
        }} data-animation="/json/cta-wave.json" data-animation-loop="true">
          <div className='wave-svg-shape'>
            <img className="wave-svg" src="/images/line.svg" />
          </div>
        </Box> */}
      </Box> :
        <Box sx={{ paddingTop: '64px' }}></Box>}
      {children}
    </Box>
  )
}
