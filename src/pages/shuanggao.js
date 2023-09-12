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

const character_list = [{
  title: '权限控制',
  content: '用户特性控制访问权限的一种方式是为每个用户参数化数据库凭据。',
  image: '/images/banner.jpg'
}, {
  title: '回收站',
  content: '打造富有个性功能的回收站可以更加方便我们日常的文档维护工作。',
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
}]

function ShuanggaoPage() {
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
            <img src={`/images/shuanggao/zz_b${row}.jpg`} alt={`zz${row}`} />
          </SwiperSlide>
        })}
      </Swiper>
    </Box>
  }
  const client_list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
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
                中职院校双高建设SASS平台
              </Typography>
              <Typography variant="h5" paddingBottom={4} gutterBottom>产品在任务管理和文档管理方面提供了高度的灵活性、多样性和效率，满足了不同组织的需求。</Typography>
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
                  }
                }
              }}>
                <Button variant="outlined">
                  <a href='mailto:chan.mo@outlook.com' target='__blank'>申请试用</a>
                </Button>
                {/* <Button variant="contained">
                  <a style={{ color: "#fff" }}>申请试用</a>
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
      {/* <Box style={{ background: "#fff" }}>
        <Container maxWidth='xl' sx={{ py: 5 }}>
          <Typography variant='h4'
            sx={{ mb: 4, textAlign: 'center' }}>专为"泛资质建设"设计的文档和流程管理系统</Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}>
            <Typography></Typography>
          </Box>
        </Container>
      </Box> */}

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
                  <img src="/images/shuanggao/zz_b4.jpg" alt=''></img>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant='h4'
                  sx={{
                    mt: 4
                  }} gutterBottom>灵活的目录结构和活动(任务)结构</Typography>
                <Typography gutterBottom>
                  灵活的目录结构 (Flexible Directory Structure): 您的系统允许用户根据自己的需求轻松设置目录结构，使其能够组织和管理任务和文档。这种灵活性使不同类型的组织能够根据其特定的工作流程和项目需求来定制目录结构，从而提高工作效率。
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

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
                  <img src="/images/shuanggao/zz_b6.jpg" alt=''></img>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant='h4'
                  sx={{
                    mt: 2,
                  }} gutterBottom>丰富的活动(任务)内容模板</Typography>
                <Typography gutterBottom>
                  丰富的内容模板 (Rich Content Templates): 每个任务都具备丰富的内容模板，适用于不同的场景和需求。这种多样性使用户能够更轻松地创建任务，并根据其性质和目标选择适当的模板。这不仅提高了工作效率，还确保了任务的一致性和质量。
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} sx={{
                '@media screen and (max-width:900px)': {
                  display: 'none'
                }
              }}>
                <div className='about_img'>
                  <img src="/images/shuanggao/zz_b6.jpg" alt=''></img>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

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
                  <img src="/images/shuanggao/zz_b7.jpg" alt=''></img>
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
                    mt: 2,
                  }} gutterBottom>完善的文档操作</Typography>
                <Typography gutterBottom>
                  完善的文档管理系统 (Comprehensive Document Management): 您的系统提供了完整的文档管理功能，为学校和其他组织提供了方便的内部文档管理工具。用户可以轻松地上传、存储、查找和分享文档，从而促进了信息共享和协作。这有助于提高学校和其他组织的工作效率，并确保文档的安全和可访问性。
                </Typography>
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
        }}>
          <Typography variant='h4'
            sx={{
              mt: 2,
              mb: 3
            }} gutterBottom>更多特性</Typography>
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
                }}><Typography sx={{ p: 1, fontSize: '.875rem' }}>{item.content}</Typography></Box>
              </Box>
            </Box>)}
          </Box>
        </Container>
      </Box > */}
      {/* <Box style={{ background: "#fff" }}>
        <Container maxWidth='xl' sx={{
          py: 5,
          '@media screen and (max-width:900px)': {
            pb: 0
          }
        }} maxWidth='md' >
          <Typography variant='h4'
            sx={{
              mb: 3, textAlign: 'center',
              '@media screen and (max-width:900px)': {
                mb: 2
              }
            }} gutterBottom>我们的客户</Typography>
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
        <Container maxWidth='xl' sx={{ py: 5 }}>
          <Typography variant='h4'
            sx={{ textAlign: 'center', mb: 3 }} gutterBottom>联系我们</Typography>
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

export default ShuanggaoPage;
