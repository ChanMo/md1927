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
  const banners = [1, 2, 3, 4, 5]

  const renderBanners = () => {
    const pagination = {
      clickable: true,
      renderBullet: function (index, className) {
        console.log(className);
        return `<span class="${className}"></span>`;
      },
    };
    return <Box sx={{
      '.swiper': {
        paddingBottom: '24px'
      },
    }}><Swiper
      spaceBetween={0}
      loop
      autoplay
      pagination={pagination}
      modules={[Pagination]}
    >
        {banners.map((row) => {
          return <SwiperSlide key={row}>
            <img src={`/images/zhigao/zg_b${row}.jpg`} alt={`zg${row}`} />
          </SwiperSlide>
        })}
      </Swiper>
    </Box>
  }
  const client_list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
  return (
    <Layout
      // banner={'/images/banner.jpg'}
      bannerContent={
        <Container maxWidth='xl' sx={{
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
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                'button': {
                  borderColor: "#6C63FF",
                  width: 'fit-content',
                  p: 0,
                  mr: 2,
                  'a': {
                    color: "#6C63FF",
                    py: 0.6,
                    px: 1.5,
                    textDecoration: 'none',
                    display: 'block'
                  }
                }
              }}>
                <Button variant="outlined">
                  <a href='mailto:chan.mo@outlook.com' target='__blank'>申请试用</a>
                </Button>
                {/* <Button variant="contained">
                  <a style={{ color: "#fff" }} target='__blank'>申请试用</a>
                </Button> */}
              </Box>
            </Grid>
            <Grid item xs={12} md={5} sx={{
              '@media screen and (max-width:900px)': {
                display: 'none'
              }, 'img': {
                width: '100%'
              }
            }}>
              {renderBanners()}
            </Grid>
          </Grid>
        </Container>}>
      <Box style={{ background: "#fff" }}>
        <Container maxWidth='xl' sx={{
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
                '@media screen and (max-width:900px)': {
                  pr: 0
                },
              }}>
                <Typography variant='h4'
                  sx={{ mt: 2 }} gutterBottom>专为中职高考设计</Typography>
                <Typography sx={{ mb: 1 }} gutterBottom>
                  平台涵盖几十种中职院校专业课程<br />
                  由从业多年的教师亲自设计的考题
                </Typography>
                <Typography sx={{ fontSize: '.875rem', color: "#666" }}>
                  职业高中学校培养与中国社会主义现代化建设要求相适应，德、智、体、美全面发展，具有综合职业能力，在生产、服务一线工作的高素质劳动者和技能型人才 。他们应当热爱社会主义祖国，能够将实现自身价值与服务祖国人民结合起来；具有基本的科学文化素养、继续学习的能力和创新精神；具有良好的职业道德，掌握必要的文化基础知识、专业知识和比较熟练的职业技能，具有较强的就业能力和一定的创业能力；具有健康的身体和心理；具有基本的欣赏美和创造美的能力。
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} sx={{
                '@media screen and (max-width:900px)': {
                  display: 'none'
                }
              }}>
                <div className='about_img'>
                  <img src="/images/zhigao/zg_b3.jpg" alt=''></img>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box >
      <Box style={{ background: "#fff" }}>
        <Container maxWidth='xl' sx={{
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
                  <img src="/images/zhigao/zg_b2.jpg" alt=''></img>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant='h4'
                  sx={{
                    mt: 2,
                  }} gutterBottom>在线视频课程</Typography>
                <Typography sx={{ fontSize: '.875rem', color: "#666" }} gutterBottom>
                  学习时间可控，可以随意调配，学习地点更加灵活方便。对于学生来说没有什么软硬件的要求，只需要有一部手机随时随地就可以上课学习了。
                </Typography>
                <Typography sx={{ fontSize: '.875rem', color: "#666" }} gutterBottom>
                  在线视频课程的具有任何人，任何时间，任何地点，从任何章节开始，学习任何课程等特点。这些特点决定不用担心学习资料的同步问题，不用担心时间的延误问题，只要有网就能及时开始学习，所有资源都在云服务器上，内容也会不断更新，确保学生学习的及时和快速性。
                </Typography>
                <Typography sx={{ fontSize: '.875rem', color: "#666" }} gutterBottom>
                  在线视频课程可以反复学习，学生可以根据自己学习掌握的情况，重听或者重学部分学习内容，更好的掌握所要学习的内容，避免学过就忘的问题，巩固效果。
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box >
      <Box style={{ background: "#fff" }}>
        <Container maxWidth='xl' sx={{
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
                  <img src="/images/zhigao/zg_b4.jpg" alt=''></img>
                </div>
              </Grid>
              <Grid item xs={12} md={6} sx={{
                '@media screen and (max-width:900px)': {
                  pr: 0
                },
              }}>
                <Typography variant='h4'
                  sx={{
                    mt: 2
                  }} gutterBottom>在线考试系统</Typography>
                <Typography sx={{ fontSize: '.875rem', color: "#666" }} gutterBottom>快捷方便、省时省力，打破时间和地域的限制，随时随地可以进行。</Typography>
                <Typography sx={{ fontSize: '.875rem', color: "#666" }} gutterBottom>成本低，效率高，借用当今互联网优势，通过考试系统发布考试，将二维码和考试链接散发给考生即可完成组织考试。 </Typography>
                <Typography sx={{ fontSize: '.875rem', color: "#666" }} gutterBottom>不需要像传统考试那样，人工阅卷，花费大量人力物力，效率还低，且容易出错，在线考试系统都是自动判卷出成绩。</Typography>
                <Typography sx={{ fontSize: '.875rem', color: "#666" }} gutterBottom>
                  精准的考试报表分析（如考试分析、成绩分析、考生分析、错题分析等），不再像传统考试需要人工经过大量统计工作才能得到一份报表，大大节省时间和成本。
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} sx={{
                '@media screen and (max-width:900px)': {
                  display: 'none'
                },
              }}>
                <div className='about_img'>
                  <img src="/images/zhigao/zg_b4.jpg" alt=''></img>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      {/* <Box style={{ background: "#fff" }}>
        <Container maxWidth='xl' sx={{
          py: 5,
          '@media screen and (max-width:900px)': {
            pb: 0
          }
        }} maxWidth='md'>
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
            '@media screen and (max-width:900px)': {
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
        <Container maxWidth='xl' sx={{ py: 5 }}>
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
      </Box > */}
    </Layout >
  );
}

export default ZhiGaoPage;
