import { Box, Button, Container, Grid, Typography } from '@mui/material'
import BoltIcon from '@mui/icons-material/Bolt';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import GroupsIcon from '@mui/icons-material/Groups';
import { blue, lime, amber, pink, grey } from '@mui/material/colors';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import Layout from '../components/Layout';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { Map, Marker } from 'react-amap';
import { useState } from 'react';
import intl from 'react-intl-universal'
function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  console.log(intl.get("home.case"));
  const caselist = [
    {
      title: intl.get("home.case.dzkt.title"),
      type: 'dzkt',
      createAt: '2021年3月13日',
      image: '/cases/dzkt/dzkt0.png',
      introduction: intl.get("home.case.dzkt.items"),
      tags: intl.get("home.case.dzkt.tags")
    },
    {
      title: intl.get("home.case.gsp.title"),
      type: 'gsp',
      createAt: '2021年3月13日',
      image: '/cases/gsp/gsp0.jpg',
      introduction: intl.get("home.case.gsp.items"),
      tags: intl.get("home.case.gsp.tags")
    },
    {
      title: intl.get("home.case.tk.title"),
      type: 'tk',
      createAt: '2021年3月13日',
      image: '/cases/tk/tk5.jpg',
      introduction: intl.get("home.case.tk.items"),
      tags: intl.get("home.case.tk.tags")
    },
    {
      title: intl.get("home.case.mpoc.title"),
      type: 'mpoc',
      createAt: '2021年3月13日',
      image: '/cases/nft/home.jpg',
      introduction: intl.get("home.case.mpoc.items"),
      tags: intl.get("home.case.mpoc.tags")
    }
  ]
  return (
    <Layout
      // banner={'/images/banner.jpg'}
      bannerContent={
        <Container sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
          <Grid container>
            <Grid item xs={12} md={7} sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              '@media screen and (max-width:900px)': {
                textAlign: 'center',
                alignItems: 'center'
              }
            }}>
              <Typography variant="h3" gutterBottom>
                {intl.get('home.title')}
              </Typography>
              <Typography variant="h5" paddingBottom={4} gutterBottom>
                {intl.get('home.subtitle')}
              </Typography>
              <Button variant="outlined"
                sx={{
                  borderColor: "#6C63FF",
                  width: 'fit-content',
                  p: 0,
                  'a': {
                    color: "#6C63FF",
                    py: 0.6,
                    px: 1.5,
                    textDecoration: 'none',
                    display: 'block',
                  }
                }}>
                <a href='mailto:chan.mo@outlook.com' target='__blank'>联系我们</a>
              </Button>
            </Grid>
            <Grid item xs={12} md={5} sx={{
              '@media screen and (max-width:900px)': {
                display: 'none'
              }, 'img': {
                width: '100%'
              }
            }}>
              <img src='/images/team_.svg' alt='' />
            </Grid>
          </Grid>
        </Container>}>
      <Box style={{ background: "#fff" }}>
        <Container sx={{
          py: 10,
          '.about_img': {
            width: '100%',
            'img': {
              width: '100%',
              objectFit: 'cover'
            }
          }
        }}>
          <Typography variant='h4'
            sx={{ mb: 5 }}>{intl.get('home.about.title')}</Typography>
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={7} sx={{
                pr: 10,
                '@media screen and (max-width:900px)': {
                  pr: 0
                },
              }}>
                {intl.get('home.about.content').map((item, index) => <Typography key={index} gutterBottom>{item}</Typography>)}
              </Grid>
              <Grid item xs={6} md={5} sx={{
                '@media screen and (max-width:900px)': {
                  display: 'none'
                },
              }}>
                <div className='about_img'>
                  <img src="/images/Educator.png" alt=''></img>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      {/* <Box style={{ background: "#f7f6f9" }}>
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
      </Box> */}
      <Box sx={{ background: "#fff" }}>
        <Container sx={{ py: 10 }}>
          <Typography variant='h4' sx={{ mb: 5 }}>{intl.get('home.advantage.title')}</Typography>
          <Grid container spacing={3} sx={{
            'svg': {
              boxShadow: '1px 1px 20px 1px rgba(0,0,0,0.03)'
            },
          }}>
            {intl.get('home.advantage.content').map((item, index) => <Grid key={index} item className='svg_box' xs={12} md={3} sx={{
              display: 'flex', alignItems: 'center',
              '.advantage_icon': {
                mr: 2, fontSize: 46,
                bgcolor: "#fff",
                borderRadius: 2, p: 1
              },
              '@media screen and (max-width:900px)': {
                justifyContent: 'center'
              },
            }}>
              {index == 0 && <BoltIcon className='advantage_icon' sx={{ color: pink[500] }} />}
              {index == 1 && <HealthAndSafetyIcon className='advantage_icon' sx={{ color: amber[500] }} />}
              {index == 2 && <LightbulbIcon className='advantage_icon' sx={{ color: lime[500] }} />}
              {index == 3 && <GroupsIcon className='advantage_icon' sx={{ color: blue[500] }} />}
              <Box sx={{ width: 240 }}>
                <Typography variant="h5" gutterBottom>{item.title}</Typography>
                <Typography variant='h7' color="white.600">
                  {item.values.map((row, key) => <Box key={key}>{row}</Box>)}
                </Typography>
              </Box>
            </Grid>)}
          </Grid>
        </Container>
      </Box>
      <Box style={{ background: "#fff" }}>
        <Container sx={{
          py: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: "center",
          alignItems: 'center',
          position: 'relative',
        }}>
          <Typography variant='h4' sx={{ mb: 5, width: '100%' }}>{intl.get('home.case.title')}</Typography>
          <Box sx={{
            width: '100%',
            '.swiper': {
              height: 'auto',
              '.swiper_banner': {
                width: '100%'
              },
              '.control': {
                position: 'absolute',
                right: 0,
                width: '40%',
                bottom: 0,
                zIndex: 1,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                '@media screen and (max-width:900px)': {
                  width: '100%',
                  justifyContent: 'center'
                },
                'div': {
                  cursor: 'pointer',
                  mx: 5,
                  pl: 2,
                  py: 1,
                },
              }
            }
          }}>
            <Swiper
              spaceBetween={50}
              loop
              onSlideChange={(e) => {
                setCurrentIndex(e.realIndex)
              }}
            >
              {caselist.map((row, key) => <SwiperSlide key={key} style={{ background: '#fff' }}>
                <Grid container>
                  <Grid item xs={12} md={7} sx={{ overflow: 'hidden' }}>
                    {/* <img className='swiper_banner' src={row.image} alt='' /> */}
                    <Box sx={{
                      height: 360,
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '1px 10px 5px 10px #333'
                    }}>
                      <img style={{
                        width: '110%',
                        // height: '100%',
                        display: 'block'
                      }} src={row.image} alt='' />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <Box sx={{
                      pl: 6, py: 2, pb: 10,
                      '@media screen and (max-width:900px)': {
                        px: 0
                      }
                    }}>
                      <Typography variant='h5' gutterBottom>{row.title}</Typography>
                      {row.introduction.map((r, k) => <Typography key={k} gutterBottom>{r}</Typography>)}
                      <Box>
                        {row.tags.map((r, k) => <Typography sx={{
                          border: '1px solid',
                          borderColor: grey[500],
                          p: '.1rem .4rem',
                          borderRadius: 1,
                          color: grey[800],
                          fontSize: '.6rem',
                          width: 'fit-content',
                          display: 'inline-block',
                          mr: 1
                        }} key={k} gutterBottom>{r}</Typography>)}
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </SwiperSlide>)}
              <div className='control'>
                <SlidePrevButton />
                <Box>{currentIndex + 1}/{caselist.length}</Box>
                <SlideNextButton />
              </div>
            </Swiper>
          </Box>
        </Container>
      </Box >
      <Box sx={{ backgroundColor: 'rgba(0,0,0,0.02)', py: 10, alignItems: 'center' }}>
        <Container>
          <Typography variant='h4' sx={{ mb: 5, width: '100%' }}>{intl.get('home.contact.title')}</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} sx={{ height: 420, 'img': { width: '100%' } }}>
              <Map
                amapkey="0f969a22ab41e6bf775642a51aabdc6f"
                plugins={{

                }}
                center={{ longitude: 117.109517, latitude: 36.695167 }}
                zoom={12}
              >
                <Marker position={{ longitude: 117.109517, latitude: 36.695167 }} />
              </Map>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box sx={{
                mx: 5,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                '@media screen and (max-width:900px)': {
                  mx: 0
                }
              }}>
                <Typography variant="h5" gutterBottom>{intl.get('home.contact.title')}</Typography>
                <Typography sx={{ mt: 2 }} color={grey[600]} variant="h7" gutterBottom>{intl.get('home.contact.address.title')}</Typography>
                <Typography gutterBottom>{intl.get('home.contact.address.value')}</Typography>
                <Typography sx={{ mt: 2 }} color={grey[600]} variant="h7" gutterBottom>{intl.get('home.contact.phone.title')}</Typography>
                <Typography gutterBottom>{intl.get('home.contact.phone.value')}</Typography>
                <Typography sx={{ mt: 2 }} color={grey[600]} variant="h7" gutterBottom>{intl.get('home.contact.email.title')}</Typography>
                <Typography sx={{ mb: 3 }} gutterBottom>{intl.get('home.contact.email.value')}</Typography>
                <Box sx={{ flex: 1 }}></Box>
                <Box sx={{
                  display: 'flex', textAlign: 'center',
                  'div': {
                    mr: 2,
                  },
                  'img': {
                    width: '60px'
                  }
                }}>
                  <Box>
                    <img src="/images/mdian.png" alt=''></img>
                    <Typography>{intl.get('home.contact.wx')}</Typography>
                  </Box>
                  <Box>
                    <img src="/images/mdian.png" alt=''></img>
                    <Typography>{intl.get('home.contact.gzh')}</Typography>
                  </Box>
                  <Box>
                    <img src="/images/mdian.png" alt=''></img>
                    <Typography>{intl.get('home.contact.xhs')}</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout >
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
    <div onClick={() => {
      swiper.slideNext()
      console.log(1234);
    }}>
      <KeyboardArrowRightIcon style={{ fontSize: 40 }} />
    </div>
  );
}

export default HomePage;
