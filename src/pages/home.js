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

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const caselist = [
    {
      title: 'SaaS-地质勘探平台',
      type: 'dzkt',
      createAt: '2021年3月13日',
      image: '/cases/dzkt/dzkt0.png',
      introduction: [
        '一款地质数据分析平台',
        '通过地质数据，展示三维模型，可以实现二维切片展示，全方位查看地质状况',
        '可以多企业多项目部署，每个项目包含多个地质点位，实现点位状态管理。',
        '应用于轨道交通、桥梁、水电管道等需要地质分析的场景'
      ],
      tags: ['Sass', '地质勘探', '三维模型']
    },
    {
      title: 'Saas-高水平建设平台',
      type: 'gsp',
      createAt: '2021年3月13日',
      image: '/cases/gsp/gsp0.jpg',
      introduction: ['特色化项目管理平台', '数据分析', '大屏数据实时展示'],
      tags: ['Sass', '数据分析']
    },
    {
      title: '教育-题库管理平台',
      type: 'tk',
      createAt: '2021年3月13日',
      image: '/cases/tk/tk5.jpg',
      introduction: [
        '多学校线上题库管理',
        '创建试题试卷',
        '导出试卷',
        '模拟考试',
      ],
      tags: ['教育', '题库', '线上考试']
    },
    {
      title: '区块链-MPOC NFT交易平台',
      type: 'mpoc',
      createAt: '2021年3月13日',
      image: '/cases/nft/home.jpg',
      introduction: [
        '支持ERC1155, 兼容OpenSea等主流NFT交易平台',
        '支持多种音频以及视频格式, 支持多种解码规格和音乐保护',
        '现代化的在线播放器, 支持作品收藏, 音乐人收藏等',
        '多种交易模型以及多币种支付, 安全高效',
      ],
      tags: ['区块链', 'NFT', '音频播放', '多币种']
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
                专注于创新应用开发
              </Typography>
              <Typography variant="h5" paddingBottom={4} gutterBottom>
                科技创新，引领未来
              </Typography>
              <Button variant="outlined"
                sx={{
                  // borderColor: "#333",
                  width: 'fit-content',
                  p: 0,
                  'a': {
                    color: "rgba(25, 118, 210, 0.8)",
                    py: 0.6,
                    px: 1.5,
                    textDecoration: 'none',
                    display: 'block',
                  }
                }}>
                <a href='mailto:mandiankeji@163.com' target='__blank'>联系我们</a>
              </Button>
            </Grid>
            <Grid item xs={12} md={5} sx={{
              '@media screen and (max-width:900px)': {
                display: 'none'
              }, 'img': {
                width: '100%'
              }
            }}>
              <img src='/images/team_.png' alt='' />
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
            sx={{ mb: 5 }}>关于我们</Typography>
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={7} sx={{
                pr: 10,
                '@media screen and (max-width:900px)': {
                  pr: 0
                },
              }}>
                <Typography gutterBottom>济南漫点信息科技是一家专注于互联网项目定制开发的公司，成立于 2019 年。公司技术前沿，擅于从 0 开发各类创新型应用。</Typography>
                <Typography gutterBottom>公司主营业务涵盖多个行业和领域，包括区块链、人工智能、物联网、Sass 系统、教育、医疗等。公司致力于为客户提供高质量、高性价比的项目开发服务，帮助客户实现业务目标。</Typography>
                <Typography gutterBottom>公司拥有一支经验丰富的技术团队，成员具有丰富的项目开发经验，擅长使用各种前沿技术。</Typography>
                <Typography gutterBottom>公司拥有完善的项目管理流程，确保项目按时、高质量完成。公司还提供售后支持，帮助客户解决项目使用过程中遇到的问题。</Typography>

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
      <Box>
        <Container sx={{ py: 10 }}>
          <Typography variant='h4' sx={{ mb: 5 }}>我们的优势</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3} sx={{
              display: 'flex', alignItems: 'center',
              '@media screen and (max-width:900px)': {
                justifyContent: 'center'
              },
            }}>
              <BoltIcon sx={{
                mr: 2, fontSize: 46,
                color: pink[500],
                bgcolor: "#536DFE",
                borderRadius: 2, p: 1
              }} />
              <Box sx={{ width: 240 }}>
                <Typography variant="h5" gutterBottom>前沿</Typography>
                <Typography variant='h7' color="white.600">
                  使用更前沿的开发技术框架<br />
                  更前沿的设计语言<br />
                  更前沿的协作方式
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3} sx={{
              display: 'flex', alignItems: 'center',
              '@media screen and (max-width:900px)': {
                justifyContent: 'center'
              },
            }}>
              <HealthAndSafetyIcon sx={{
                mr: 2,
                fontSize: 46,
                color: amber[500],
                bgcolor: "#00BFA6",
                borderRadius: 2, p: 1
              }} />
              <Box sx={{ width: 240 }}>
                <Typography variant="h5" gutterBottom>安全</Typography>
                <Typography variant='h7' color="white.600">
                  严格遵循语言框架安全开发规范<br />
                  完整的代码覆盖率测试<br />
                  安全渗透测试
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3} sx={{
              display: 'flex', alignItems: 'center',
              '@media screen and (max-width:900px)': {
                justifyContent: 'center'
              },
            }}>
              <LightbulbIcon sx={{
                mr: 2,
                fontSize: 46,
                color: lime[500],
                bgcolor: "#00B0FF",
                borderRadius: 2, p: 1
              }} />
              <Box sx={{ width: 240 }}>
                <Typography variant="h5" gutterBottom>创新</Typography>
                <Typography variant='h7' color="white.600">
                  了解并剖析众多创新应用核心原理<br />
                  可以快速复制市场新兴产品
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3} sx={{
              display: 'flex', alignItems: 'center',
              '@media screen and (max-width:900px)': {
                justifyContent: 'center'
              },
            }}>
              <GroupsIcon sx={{
                mr: 2, fontSize: 46,
                color: blue[500],
                bgcolor: "#F9A826",
                borderRadius: 2, p: 1
              }} />
              <Box sx={{ width: 240 }}>
                <Typography variant="h5" gutterBottom>高效</Typography>
                <Typography variant='h7' color="white.600">
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
        <Container sx={{
          py: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: "center",
          alignItems: 'center',
          position: 'relative',
        }}>
          <Typography variant='h4' sx={{ mb: 5, width: '100%' }}>案例展示</Typography>
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
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }} src={row.image} alt='' />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <Box sx={{
                      pl: 6, py: 2, pb: 10,
                      '@media screen and (max-width:900px)': {
                        pl: 3,
                        pr: 3
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
      <Box sx={{ backgroundColor: '#f7f6f9', py: 10, alignItems: 'center' }}>
        <Container>
          <Typography variant='h4' sx={{ mb: 5, width: '100%' }}>联系我们</Typography>
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

              }}>
                <Typography variant="h5" gutterBottom>济南漫点信息科技有限公司</Typography>
                <Typography sx={{ mt: 2 }} color={grey[600]} variant="h7" gutterBottom>公司地址</Typography>
                <Typography gutterBottom>山东省济南市花园东路88号</Typography>
                <Typography sx={{ mt: 2 }} color={grey[600]} variant="h7" gutterBottom>联系电话</Typography>
                <Typography gutterBottom>18743238391</Typography>
                <Typography sx={{ mt: 2 }} color={grey[600]} variant="h7" gutterBottom>联系邮箱</Typography>
                <Typography sx={{ mb: 3 }} gutterBottom>mandiankeji@163.com</Typography>
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
                    <Typography>微信</Typography>
                  </Box>
                  <Box>
                    <img src="/images/mdian.png" alt=''></img>
                    <Typography>公众号</Typography>
                  </Box>
                  <Box>
                    <img src="/images/mdian.png" alt=''></img>
                    <Typography>小红书</Typography>
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
