import { Box } from "@mui/material"

export default function WindowImg(props) {
  const { src } = props
  return (
    <Box sx={{
      backgroundImage: 'url(/images/window.png)',
      backgroundSize: '100% 100%',
      paddingBottom: '80.8%',
      position:'relative',
      'img': {
        display:'block',
        borderRadius: '1px',
        position:'absolute',
        width:'91.5% !important',
        marginLeft:'4.3%',
        height:'63.5%',
        marginTop:'4.62%'
      }
    }}>
      <img src={src} />
    </Box>
  )
}
