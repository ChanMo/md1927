import { ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
// import Timeline from '@mui/lab/Timeline'
// import TimelineItem from '@mui/lab/TimelineItem'
// import TimelineSeparator from '@mui/lab/TimelineSeparator'
// import TimelineConnect

import BoltIcon from '@mui/icons-material/Bolt';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import GroupsIcon from '@mui/icons-material/Groups';
import { blue, lime, amber, pink } from '@mui/material/colors';

import Navbar from './Navbar'
import Footer from './Footer'
import banner from './banner.jpg'
import theme from './theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box sx={{position:'relative',background:'rgba(0,0,0,0.4)'}}>
        <Box
          sx={{zIndex:'-1',position:'absolute',top:0,left:0,width:'100%',height:'100%',backgroundImage:`url(${banner})`,backgroundSize:'cover'}} />
        <Container maxWidth="xl" sx={{py:30}}>
          <Typography variant="h2" gutterBottom color="white">
            专注于区块链创新应用研发
          </Typography>
          <Typography variant="h5" color="white">
            数字货币交易所, 区块链钱包, NFT去中心化交易
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="xl" sx={{py:20}}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} sx={{display:'flex', alignItems:'center'}}>
            <BoltIcon sx={{mr:2,fontSize:56, color:pink[500]}} />
            <Box>
              <Typography variant="h4" gutterBottom>前沿</Typography>
              <Typography color="grey.600">
                使用更前沿的开发技术框架, <br/ >
                更前沿的设计语言,<br/>
                更前沿的协作方式
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} sx={{display:'flex', alignItems:'center'}}>
            <HealthAndSafetyIcon sx={{mr:2,fontSize:56, color:amber[500]}} />
            <Box>
              <Typography variant="h4" gutterBottom>安全</Typography>
              <Typography color="grey.600">
                严格遵循语言框架安全开发规范<br />
                完整的代码覆盖率测试<br />
                安全渗透测试
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} sx={{display:'flex', alignItems:'center'}}>
            <LightbulbIcon sx={{mr:2,fontSize:56, color:lime[500]}} />
            <Box>
              <Typography variant="h4" gutterBottom>创新</Typography>
              <Typography color="grey.600">
                了解并剖析众多创新应用核心原理<br />
                可以快速复制市场新兴产品<br />
                可独立快速多产创新型产品应用
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} sx={{display:'flex', alignItems:'center'}}>
            <GroupsIcon sx={{mr:2,fontSize:56, color:blue[500]}} />
            <Box>
              <Typography variant="h4" gutterBottom>高效</Typography>
              <Typography color="grey.600">
                具备高效专业的研发团队<br />
                拥有上百款产品研发经验<br />
                让每个环节更高效更舒适
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{backgroundColor:'grey.100',py:20}}>
        <Container maxWidth="xl">
          <Typography variant="h4" gutterBottom>Contact Us</Typography>
          <Typography gutterBottom>
            Company Address: 山东省济南市花园东路88号
          </Typography>
          <Typography gutterBottom>Email: chan.mo@outlook.com</Typography>
          <Typography gutterBottom>Phone: 18743238391</Typography>
          <Typography gutterBottom>Wechat: chanmo1927</Typography>
        </Container>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
