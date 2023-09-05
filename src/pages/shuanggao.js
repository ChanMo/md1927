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

function ShuanggaoPage() {
  const character_list = [{
    title: '权限控制',
    content: '权限控制描述,权限控制描述,权限控制描述',
    image: '/images/banner.jpg'
  }, {
    title: '回收站',
    content: '权限控制描述,权限控制描述,权限控制描述',
    image: '/images/banner.jpg'
  }, {
    title: '专家账户',
    content: '权限控制描述,权限控制描述,权限控制描述',
    image: '/images/banner.jpg'
  }, {
    title: '打分系统',
    content: '权限控制描述,权限控制描述,权限控制描述',
    image: '/images/banner.jpg'
  }, {
    title: '教师档案',
    content: '权限控制描述,权限控制描述,权限控制描述',
    image: '/images/banner.jpg'
  }, {
    title: '人才培养',
    content: '权限控制描述,权限控制描述,权限控制描述',
    image: '/images/banner.jpg'
  }, {
    title: '资金记录',
    content: '权限控制描述,权限控制描述,权限控制描述',
    image: '/images/banner.jpg'
  }, {
    title: '权限控制',
    content: '权限控制描述,权限控制描述,权限控制描述',
    image: '/images/banner.jpg'
  }, {
    title: '++++',
    content: '权限控制描述,权限控制描述,权限控制描述',
    image: '/images/banner.jpg'
  }]
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
                中职院校双高建设SASS平台
              </Typography>
              <Typography variant="h5" paddingBottom={4} gutterBottom>
                "高水平学校"和"特色化专业"建设平台
              </Typography>
              <Box sx={{
                'button': {
                  borderColor: "#6C63FF",
                  p: 0,
                  mr: 2,
                  'a': {
                    color: "#6C63FF",
                    py: 0.6,
                    px: 1.5,
                    textDecoration: 'none',
                    display: 'block',
                  },
                  ':nth-child(1)': {
                    border: '1px solid #6C63FF',
                    bgcolor: "#6C63FF",
                    'a': {
                      color: "#fff",
                    }
                  }
                }
              }}>
                <Button variant="contained">
                  <a>申请试用</a>
                </Button>
                <Button variant="outlined">
                  <a href='mailto:chan.mo@outlook.com' target='__blank'>联系我们</a>
                </Button>
              </Box>
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
        <Container sx={{ py: 5 }}>
          <Typography variant='h4'
            sx={{ mb: 4, textAlign: 'center' }}>专为"泛资质建设"设计的文档和流程管理系统</Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}>
            <Typography>dawdawdawda=</Typography>
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
                  }}>灵活的目录结构和活动(任务)结构</Typography>
                <Typography gutterBottom>
                  ********
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
                }
              }}>
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
                  }}>丰富的活动(任务)内容模板</Typography>
                <Typography gutterBottom>
                  测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
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
              <Grid item xs={12} md={6}>
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
                  }}>完善的文档操作</Typography>
                <Typography gutterBottom>
                  完善的文档操作<br />
                  完善的文档操作
                </Typography>
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
              mb: 4,
              '@media screen and (max-width:900px)': {
                mb: 2
              }
            }}>更多特性</Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
            {character_list.map((item, index) => <Box key={index} sx={{
              p: 1,
              display: 'flex',
              alignItems: 'center'
            }}>
              <Box sx={{
                height: 100,
                width: 160,
                position: 'relative',
                boxShadow: '1px 2px 4px 2px rgba(0,0,0,0.05)',
                borderRadius: 1,
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundImage: `url(${item.image})`,
                // backgroundSize: 'cover',
                ':hover': {
                  'div': {
                    transition: '1s',
                    opacity: 1
                  }
                }
              }}>
                <Typography>{item.title}</Typography>
                <Box sx={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                  zIndex: 1,
                  opacity: 0,
                  background: 'rgba(0,0,0,0.6)',
                  color: '#fff',
                }}><Typography sx={{ p: 1 }}>{item.content}</Typography></Box>
              </Box>
            </Box>)}
          </Box>
        </Container>
      </Box >
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
                boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.05)'
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

export default ShuanggaoPage;
