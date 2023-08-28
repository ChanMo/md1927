import { Box, Container, Grid, Typography } from '@mui/material'
import BoltIcon from '@mui/icons-material/Bolt';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import GroupsIcon from '@mui/icons-material/Groups';
import { blue, lime, amber, pink } from '@mui/material/colors';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import Layout from '../components/Layout';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';

function HomePage() {
  return (
    <Layout banner={'/images/banner.jpg'} bannerContent={
      <Container maxWidth="xl" sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}>
        <Typography variant="h2" gutterBottom color="white">
          专注于创新应用开发
        </Typography>
        <Typography variant="h5" color="white">
          科技创新，引领未来
        </Typography>
      </Container>}>
      <Box style={{ background: "#fff" }}>
        <Container maxWidth="xl" sx={{
          py: 10
        }}>
          <Typography variant='h3'
            sx={{ mb: 5, mx: 'auto', textAlign: 'center' }}>业务范围</Typography>
          <Box>
            <Grid container spacing={3} sx={{
              width: '100%',
              textAlign: 'center',
              'div': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '.icon_box': {
                  cursor: 'pointer',
                  ":hover": {
                    'img': {
                      transform: 'scale(1.2)',
                      transition: '.3s'
                    }
                  }
                },
                'img': {
                  display: 'block',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0px 0px 21px -5px rgba(178.00336174342945, 194.49609495065613, 208.34999084472656, 0.5)',
                  mb: 1
                }
              }
            }}>
              <Grid item xs={6} md={2}>
                <div className='icon_box'>
                  <img src="/images/app-icon.png" alt=''></img>
                  <span>APP定制</span>
                </div>
              </Grid>
              <Grid item xs={6} md={2}>
                <div className='icon_box'>
                  <img src="/images/wx-icon.png" alt=''></img>
                  <span>微信小程序</span>
                </div>
              </Grid>
              <Grid item xs={6} md={2}>
                <div className='icon_box'>
                  <img src="/images/web-icon.png" alt=''></img>
                  <span>网站建设</span>
                </div>
              </Grid>
              <Grid item xs={6} md={2}>
                <div className='icon_box'>
                  <img src="/images/ui-icon.png" alt=''></img>
                  <span>UI设计</span>
                </div>
              </Grid>
              <Grid item xs={6} md={2}>
                <div className='icon_box'>
                  <img src="/images/b-icon.png" alt=''></img>
                  <span>区块链</span>
                </div>
              </Grid>
              <Grid item xs={6} md={2}>
                <div className='icon_box'>
                  <img src="/images/settings-icon.png" alt=''></img>
                  <span>升级维护</span>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="xl" sx={{ py: 10, color: "#fff" }}>
          <Typography variant='h3' sx={{ mb: 5, textAlign: 'center' }}>我们的优势</Typography>
          <Grid container spacing={3} sx={{ px: 10 }}>
            <Grid item xs={6} md={3} sx={{ display: 'flex', alignItems: 'center' }}>
              <BoltIcon sx={{
                mr: 2, fontSize: 56, color: pink[500],
                bgcolor: "#fff", borderRadius: 2, p: 1
              }} />
              <Box>
                <Typography variant="h4" gutterBottom>前沿</Typography>
                <Typography color="white.600">
                  使用更前沿的开发技术框架, <br />
                  更前沿的设计语言,<br />
                  更前沿的协作方式
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3} sx={{ display: 'flex', alignItems: 'center' }}>
              <HealthAndSafetyIcon sx={{
                mr: 2,
                fontSize: 56,
                color: amber[500],
                bgcolor: "#fff",
                borderRadius: 2, p: 1
              }} />
              <Box>
                <Typography variant="h4" gutterBottom>安全</Typography>
                <Typography color="white.600">
                  严格遵循语言框架安全开发规范<br />
                  完整的代码覆盖率测试<br />
                  安全渗透测试
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3} sx={{ display: 'flex', alignItems: 'center' }}>
              <LightbulbIcon sx={{
                mr: 2,
                fontSize: 56, color: lime[500],
                bgcolor: "#fff", borderRadius: 2, p: 1
              }} />
              <Box>
                <Typography variant="h4" gutterBottom>创新</Typography>
                <Typography color="white.600">
                  了解并剖析众多创新应用核心原理<br />
                  可以快速复制市场新兴产品<br />
                  可独立快速多产创新型产品应用
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3} sx={{ display: 'flex', alignItems: 'center' }}>
              <GroupsIcon sx={{ mr: 2, fontSize: 56, color: blue[500], bgcolor: "#fff", borderRadius: 2, p: 1 }} />
              <Box>
                <Typography variant="h4" gutterBottom>高效</Typography>
                <Typography color="white.600">
                  具备高效专业的研发团队<br />
                  拥有上百款产品研发经验<br />
                  让每个环节更高效更舒适
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box style={{ background: "#fff" }}>
        <Container maxWidth="xl" sx={{
          py: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: "center",
          alignItems: 'center',
          position: 'relative',
        }}>
          <Typography variant='h3' sx={{ mb: 5 }}>案例展示</Typography>
          <Box sx={{
            width: '100%',
            '.swiper': {
              height: 'auto',
              mx: 10,
              '.swiper_banner': {
                width: '100%'
              },
              '.control': {
                position: 'absolute',
                right: 0,
                bottom: 0,
                zIndex: 1,
                display: 'flex',
                flexDirection: 'row',
                'div': {
                  cursor: 'pointer',
                  mx: 5,
                  p: 2,
                  py: 1,
                },
              }
            }
          }}>
            <Swiper
              spaceBetween={50}
              loop
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <Grid container>
                  <Grid item xs={12} md={6} sx={{ overflow: 'hidden' }}>
                    <img className='swiper_banner' src='/images/banner.jpg' alt='' />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ px: 5, py: 2, pb: 10 }}>
                      <Typography variant='h4' gutterBottom>案例1</Typography>
                      <Typography>案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍介绍案例介绍案例介绍案案例介绍案例绍介绍案例介绍案例介绍案案例介绍案例绍介绍案例介绍案例介绍案案例介绍案例绍介绍案例介绍案例介绍案案例介绍案例绍介绍案例介绍案例介绍案案例介绍案例绍介绍案例介绍案例介绍案案例介绍案例介绍案例介绍案例例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </SwiperSlide>
              <SwiperSlide>
                <Grid container>
                  <Grid item xs={12} md={6} sx={{ overflow: 'hidden' }}>
                    <img className='swiper_banner' src='/images/banner.jpg' alt='' />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ px: 5, py: 2, pb: 10 }}>
                      <Typography variant='h4' gutterBottom>案例1</Typography>
                      <Typography>案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍介绍案例介绍案例介绍案案例介绍案例绍介绍案例介绍案例介绍案案例介绍案例绍介绍案例介绍案例介绍案案例介绍案例绍介绍案例介绍案例介绍案案例介绍案例绍介绍案例介绍案例介绍案案例介绍案例绍介绍案例介绍案例介绍案案例介绍案例介绍案例介绍案例例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </SwiperSlide>
              <div className='control'>
                <SlidePrevButton />
                <SlideNextButton />
                {/* <div className="swiper-button-prev" onClick={() => swiper.slidePrev()}>
                  <KeyboardArrowLeftIcon sx={{ fontSize: 50 }} />
                </div>
                <div className="swiper-button-next" onClick={() => swiper.slideNext()}>
                  <KeyboardArrowRightIcon sx={{ fontSize: 50 }} />
                </div> */}
              </div>
            </Swiper>
          </Box>
        </Container>
      </Box>
      <Box style={{ background: "#fff" }}>
        <Container maxWidth="xl" sx={{
          py: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: "center",
          alignItems: 'center'
        }}>
          <Typography variant='h3' sx={{ mb: 5 }}>服务流程</Typography>
          <img src="/images/process.png" style={{ width: '100%' }} alt='' />
        </Container>
      </Box>
      <Box sx={{ backgroundColor: 'grey.100', py: 10, alignItems: 'center' }}>
        <Container maxWidth="xl">
          <Grid container spacing={3} sx={{ px: 10 }}>
            <Grid item xs={12} md={5} sx={{ 'img': { width: '100%' } }}>
              <img src="/images/banner.jpg" alt="" />
            </Grid>
            <Grid item xs={12} md={7}>
              <Box sx={{
                // mx: 5,
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'center',
                height: '100%',
                justifyContent: 'center',
                'h4': {
                  color: blue[400]
                }
              }}>
                <Typography variant="h4">济南漫点信息科技有限公司</Typography>
                <Typography variant="h4" gutterBottom>---专注于创业，创新型互联网产品研发</Typography>
                <Typography variant='h6' gutterBottom>专业,独特的产品设计理论, 完全定制化研发, 高效的开发流程, 助您迈出创业第一步. 不止是写代码, 我们替您梳理产品需求, 确定产品功能, 制定产品设计方案, 规划升级， 曾帮客户打造多款精品应用，获得千万级项目融资，区块链合约项目单日最高盈利70万。</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}

function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <div onClick={() => swiper.slidePrev()}>
      <KeyboardArrowLeftIcon style={{ fontSize: 40 }} />
    </div>
  );
}

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <div onClick={() => swiper.slideNext()}>
      <KeyboardArrowRightIcon style={{ fontSize: 40 }} />
    </div>
  );
}

export default HomePage;
