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
import { useLocal } from '../i18n/LocalProvider';
function HomePage() {
  const { intl, isCN } = useLocal()
  const [currentIndex, setCurrentIndex] = useState(0)
  const caselist = isCN ? [
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
  ] : [
    {
      title: intl.get("home.case.hisoul.title"),
      type: 'hisoul',
      createAt: '2021年3月13日',
      image: '/cases/hisoul/hisoul0.jpg',
      introduction: intl.get("home.case.hisoul.items"),
      tags: intl.get("home.case.hisoul.tags")
    },
    {
      title: intl.get("home.case.swcx.title"),
      type: 'swcx',
      createAt: '2021年3月13日',
      image: '/cases/swcx/swcx0.jpg',
      introduction: intl.get("home.case.swcx.items"),
      tags: intl.get("home.case.swcx.tags")
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
  // 业务范围
  const renderBusinessScope = () => {
    const list = [
      { title: intl.get('home.businessScope.list')[0], image: '/images/app_d.png', hover: '/images/app.png' },
      { title: intl.get('home.businessScope.list')[1], image: '/images/wechat_d.png', hover: '/images/wechat.png' },
      { title: intl.get('home.businessScope.list')[2], image: '/images/webicon_d.png', hover: '/images/webicon.png' },
      { title: intl.get('home.businessScope.list')[3], image: '/images/UI_d.png', hover: '/images/UI.png' },
      { title: intl.get('home.businessScope.list')[4], image: '/images/qukuai_d.png', hover: '/images/qukuai.png' },
      { title: intl.get('home.businessScope.list')[5], image: '/images/weihu_d.png', hover: '/images/weihu.png' }
    ]
    return <Box style={{ background: "#fff" }}>
      <Container maxWidth="xl" sx={{ py: 10 }}>
        <Typography variant='h4' sx={{ mb: 5 }}>{intl.get('home.businessScope.title')}</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7} sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            position: 'relative'
          }}>
            {list.map((item, key) => <Box key={key} sx={{
              width: "33.33333%",
              '@media screen and (max-width:900px)': {
                display: 'flex',
                justifyContent: 'center'
              }
            }}>
              <Box
                className='icon_box' sx={{
                  textAlign: 'center',
                  alignItems: 'center',
                  width: 'fit-content',
                  mb: 4,
                  'img': {
                    display: 'block',
                    mb: 1,
                    transition: '.4s',
                    borderRadius: '100%',
                    boxShadow: '0px 0px 21px -5px rgba(178.00336174342945, 194.49609495065613, 208.34999084472656, 0.5)'
                  },
                  'span': {
                    fontSize: '.876rem'
                  },
                  ':hover': {
                    '.img_box': {
                      background: `url(${item.hover})`,
                      'img': {
                        opacity: 0
                      }
                    }
                  },
                }}>
                <div className='img_box'><img src={item.image} alt='' /></div>
                <span>{item.title}</span>
              </Box>
            </Box>)}
          </Grid>
          <Grid item xs={12} md={5} sx={{
            textAlign: 'center',
            'div': {
              mb: 1
            }
          }}>
            <div><img src='/images/mdian.png' alt=''></img></div>
            <span>{intl.get('home.businessScope.getPlay')}</span>
          </Grid>
        </Grid>
      </Container>
    </Box>
  }
  // 我们的优势
  const renderAdvantage = () => {
    return <Box sx={{ background: "#fff" }}>
      <Container maxWidth='xl' sx={{ py: 10 }}>
        <Typography variant='h4' sx={{ mb: 5 }}>{intl.get('home.advantage.title')}</Typography>
        <Grid container spacing={3} sx={{
          'svg': {
            boxShadow: '1px 1px 20px 1px rgba(0,0,0,0.03)'
          },
        }}>
          {intl.get('home.advantage.content').map((item, index) => <Grid key={index}
            item
            className='svg_box'
            xs={12} md={3} sx={{
              transition: '.3s',
              ':hover': {
                transform: 'scale(1.1)'
              },
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
            {index === 0 && <BoltIcon className='advantage_icon' sx={{ color: pink[500] }} />}
            {index === 1 && <HealthAndSafetyIcon className='advantage_icon' sx={{ color: amber[500] }} />}
            {index === 2 && <LightbulbIcon className='advantage_icon' sx={{ color: lime[500] }} />}
            {index === 3 && <GroupsIcon className='advantage_icon' sx={{ color: blue[500] }} />}
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
  }
  // 案例展示
  const renderCase = () => {
    return <Box style={{ background: "#fff" }}>
      <Container maxWidth='xl' sx={{
        py: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        position: 'relative',
      }}>
        <Typography variant='h4' sx={{ mb: 5, width: '100%' }}>{intl.get('home.case.title')}</Typography>
        {intl.get('local') == 'en-US' ? <Box sx={{
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
            {caselist.map((row, key) => {
              return <SwiperSlide key={key} style={{ background: '#fff' }}>
                <Grid container>
                  <Grid item xs={12} md={7} sx={{ overflow: 'hidden' }}>
                    {/* <img className='swiper_banner' src={row.image} alt='' /> */}
                    <Box sx={{
                      height: 430,
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
              </SwiperSlide>
            })}
            <div className='control'>
              <SlidePrevButton />
              <Box>{currentIndex + 1}/{caselist.length}</Box>
              <SlideNextButton />
            </div>
          </Swiper>
        </Box> : <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          'div': {
            width: '33.3333%',
            mt: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: "hidden",
            ':hover': {
              'img': {
                transform: 'scale(1.1)'
              }
            },
            '@media screen and (max-width:900px)': {
              width: '100%'
            },
            'img': {
              transition:'.4s',
              paddingY: '4%',
              width: '90%'
            }
          },
        }}>
          {[1, 2, 3, 4, 6, 5].map((item, key) => <Box key={key}>
            <img src={`/images/project${item}.png`} alt='' />
          </Box>)}
        </Box>}
      </Container>
    </Box >
  }
  // 联系我们
  const renderContact = () => {
    return <Box sx={{ backgroundColor: 'rgba(0,0,0,0.02)', py: 10, alignItems: 'center' }}>
      <Container maxWidth="xl">
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
              {/* <Typography variant="h5" gutterBottom>{intl.get('home.contact.title')}</Typography> */}
              <Typography sx={{ mt: 1 }} color={grey[600]} variant="h7" gutterBottom>{intl.get('home.contact.address.title')}</Typography>
              <Typography gutterBottom>{intl.get('home.contact.address.value')}</Typography>
              <Typography color={grey[600]} variant="h7" gutterBottom>{intl.get('home.contact.phone.title')}</Typography>
              <Typography gutterBottom>{intl.get('home.contact.phone.value')}</Typography>
              <Typography color={grey[600]} variant="h7" gutterBottom>{intl.get('home.contact.email.title')}</Typography>
              <Typography sx={{ mb: 1 }} gutterBottom>{intl.get('home.contact.email.value')}</Typography>
              <Box sx={{ flex: 1 }}></Box>
              <Box sx={{
                display: 'flex', textAlign: 'center',
                'div': {
                  mr: 2,
                },
                'img': {
                  width: '100px'
                }
              }}>
                <Box>
                  <img src="/images/mdian.png" alt=''></img>
                  <Typography>{intl.get('home.contact.wx')}</Typography>
                </Box>
                {/* <Box>
                <img src="/images/mdian.png" alt=''></img>
                <Typography>{intl.get('home.contact.gzh')}</Typography>
              </Box>
              <Box>
                <img src="/images/mdian.png" alt=''></img>
                <Typography>{intl.get('home.contact.xhs')}</Typography>
              </Box> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  }
  return (
    <Layout
      banner={!isCN ? '/images/banner.jpg' : '/images/banner.jpg'}
      bannerContent={
        <Container maxWidth='xl' sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
          <Grid container>
            <Grid item xs={12} md={12} sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              // alignItems: !isCN ? 'center' : 'initial',
              '@media screen and (max-width:900px)': {
                textAlign: 'center'
              }
            }}>
              <Typography variant="h3" gutterBottom>
                {intl.get('home.title')}
              </Typography>
              <Typography variant="h5" paddingBottom={4} gutterBottom>
                {intl.get('home.subtitle')}
              </Typography>
              <Button variant="contained"
                sx={{
                  borderColor: "#6C63FF",
                  boxShadow: 'none',
                  width: 'fit-content',
                  p: 0,
                  'a': {
                    py: 0.6,
                    px: 1.5,
                    textDecoration: 'none',
                    display: 'block',
                  },
                  display: isCN ? 'none' : 'block'
                }}>
                <a href='mailto:chan.mo@outlook.com' target='__blank'>{intl.get('home.contact.title')}</a>
              </Button>
            </Grid>
            {/* {isCN && <Grid item xs={12} md={5} sx={{
              '@media screen and (max-width:900px)': {
                display: 'none'
              }, 'img': {
                width: '100%'
              }
            }}>
              <img src='/images/team_.svg' alt='' />
            </Grid>} */}
          </Grid>
        </Container>}>
      <Box style={{ background: "#fff" }}>
        <Container maxWidth='xl' sx={{
          py: 10,
          '.about_img': {
            width: '100%',
            'img': {
              width: '100%',
              objectFit: 'cover'
            }
          }
        }}>
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={7} sx={{
                pr: 10,
                '@media screen and (max-width:900px)': {
                  pr: 0
                }
              }}>
                <Typography variant='h4'
                  sx={{ mb: 5 }}>{intl.get('home.about.title')}</Typography>
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
      {renderBusinessScope()}
      {renderAdvantage()}
      {renderCase()}
      {renderContact()}
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
    <div onClick={() => {
      swiper.slideNext()
    }}>
      <KeyboardArrowRightIcon style={{ fontSize: 40 }} />
    </div>
  );
}

export default HomePage;
