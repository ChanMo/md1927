import { Box } from "@mui/material";

function CasePage() {
  return <>
    <Box
      sx={{
        zIndex: '-1',
        position: 'absolute',
        top: 0, left: 0,
        width: '100%', height: '100%',
        backgroundImage: `url(${'/images/banner.jpg'})`,
        backgroundSize: 'cover'
      }} />
  </>
}

export default CasePage;