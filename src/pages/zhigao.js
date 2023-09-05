import { Box, Button, Card, Container, Divider, Grid, Typography } from '@mui/material'
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


import { Grid as SwiperGrid, Pagination } from 'swiper/modules';
import 'swiper/css/grid';
import 'swiper/css/pagination';

function ZhiGaoPage() {

  const client_list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
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
                职教高考题库SASS平台
              </Typography>
              <Typography variant="h5" paddingBottom={4} gutterBottom>
                中职院校高考题库, 课程和在线考试系统
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
              <img src='/images/banner.jpg' alt='' />
            </Grid>
          </Grid>
        </Container>}>
      <Box style={{ background: "#fff" }}>
        <Container sx={{
          py: 5,
          '.about_img': {
            width: '100%',
            'img': {
              width: '100%',
              objectFit: 'cover'
            }
          },
          '@media screen and (max-width:900px)': {
            pb: 0
          }
        }}>
          <Box>
            <Grid container rowSpacing={0} columnSpacing={20}>
              <Grid item xs={12} md={6} sx={{
                '@media screen and (min-width:900px)': {
                  display: 'none'
                }
              }}>
                <div className='about_img'>
                  <img src="/images/banner.jpg" alt=''></img>
                </div>
              </Grid>
              <Grid item xs={12} md={6} sx={{
                pr: 10,
                '@media screen and (max-width:900px)': {
                  pr: 0
                },
              }}>
                <Typography variant='h4'
                  sx={{
                    my: 4,
                    '@media screen and (max-width:900px)': {
                      my: 2,
                    },
                  }}>专为中职高考设计</Typography>
                <Typography gutterBottom>
                  平台涵盖几十种中职院校专业课程<br />
                  由从业多年的教师亲自设计的考题
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} sx={{
                '@media screen and (max-width:900px)': {
                  display: 'none'
                }
              }}>
                <div className='about_img'>
                  <img src="/images/banner.jpg" alt=''></img>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box >
      <Box style={{ background: "#fff" }}>
        <Container sx={{
          py: 5,
          '.about_img': {
            width: '100%',
            'img': {
              width: '100%',
              objectFit: 'cover'
            }
          },
          '@media screen and (max-width:900px)': {
            pb: 0
          }
        }}>
          <Box>
            <Grid container rowSpacing={0} columnSpacing={20}>
              <Grid item xs={12} md={6}>
                <div className='about_img'>
                  <img src="/images/banner.jpg" alt=''></img>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant='h4'
                  sx={{
                    my: 4,
                    '@media screen and (max-width:900px)': {
                      my: 2,
                    },
                  }}>在线视频课程</Typography>
                <Typography gutterBottom>
                  测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box style={{ background: "#fff" }}>
        <Container sx={{
          py: 5,
          '.about_img': {
            width: '100%',
            'img': {
              width: '100%',
              objectFit: 'cover'
            }
          },
          '@media screen and (max-width:900px)': {
            pb: 0
          }
        }}>
          <Box>
            <Grid container rowSpacing={0} columnSpacing={20}>
              <Grid item xs={12} md={6} sx={{
                '@media screen and (min-width:900px)': {
                  display: 'none'
                },
              }}>
                <div className='about_img'>
                  <img src="/images/banner.jpg" alt=''></img>
                </div>
              </Grid>
              <Grid item xs={12} md={6} sx={{
                pr: 10,
                '@media screen and (max-width:900px)': {
                  pr: 0
                },
              }}>
                <Typography variant='h4'
                  sx={{
                    my: 4,
                    '@media screen and (max-width:900px)': {
                      my: 2,
                    },
                  }}>在线考试系统</Typography>
                <Typography gutterBottom>
                  平台涵盖几十种中职院校专业课程<br />
                  由从业多年的教师亲自设计的考题
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} sx={{
                '@media screen and (max-width:900px)': {
                  display: 'none'
                },
              }}>
                <div className='about_img'>
                  <img src="/images/banner.jpg" alt=''></img>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box style={{ background: "#fff" }}>
        <Container sx={{
          py: 5,
          '@media screen and (max-width:900px)': {
            pb: 0
          }
        }}>
          <Typography variant='h4'
            sx={{
              mb: 4, textAlign: 'center',
              '@media screen and (max-width:900px)': {
                mb: 2
              }
            }}>我们的客户</Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            '@media screen and (max-width:900px)':{
              justifyContent: 'center'
            }
          }}>
            {client_list.map((item, index) => <Box key={index} sx={{
              p: 1,
              display: 'flex',
              alignItems: 'center'
            }}>
              <Card sx={{
                height: 72,
                width: 72,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.13)'
              }}>学校名</Card>
            </Box>)}
          </Box>
        </Container>
      </Box >
      <Box style={{ background: "#fff" }}>
        <Container sx={{ py: 5 }}>
          <Typography variant='h4'
            sx={{ mb: 4, textAlign: 'center' }}>联系我们</Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}>
            <Typography>dawdawdawda=</Typography>
          </Box>
        </Container>
      </Box >
    </Layout >
  );
}

export default ZhiGaoPage;
