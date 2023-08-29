import { Box, Card, Container, Grid, Typography } from "@mui/material";
import Layout from "../components/Layout";

function CasePage() {
  const list = [
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
      ]
    },
    {
      title: 'Saas-高水平建设平台',
      type: 'gsp',
      createAt: '2021年3月13日',
      image: '/cases/gsp/gsp0.png',
      introduction: ['项目管理', '数据分析', '大屏数据实时展示']
    },
    {
      title: '教育-题库管理平台',
      type: 'tk',
      createAt: '2021年3月13日',
      image: '/cases/tk/tk0.jpg',
      introduction: [
        '多学校线上题库管理',
        '创建试题试卷',
        '导出试卷',
        '模拟考试',
      ]
    },
    {
      title: '区块链-MPOC NFT交易平台',
      type: 'mpoc',
      createAt: '2021年3月13日',
      image: '/cases/nft/home.png',
      introduction: [
        '支持ERC1155, 兼容OpenSea等主流NFT交易平台',
        '支持多种音频以及视频格式, 支持多种解码规格和音乐保护',
        '现代化的在线播放器, 支持作品收藏, 音乐人收藏等',
        '多种交易模型以及多币种支付, 安全高效',
      ]
    }
  ]
  return <Layout>

    <Box sx={{ background: "#fff" }}>
      <Container sx={{ py: 5 }}>
        {list.map((item, index) => {
          return <Card key={index}
            sx={{ mb: 3, boxShadow: '1px 5px 10px 0 #f3f3f3' }}>
            <Grid container>
              <Grid item xs={12} md={4}>
                <Box sx={{
                  height: 260,
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <img style={{
                    width: '110%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }} src={item.image} alt='' />
                </Box>
              </Grid>
              <Grid item xs={12} md={8} sx={{
                p: 3, display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <Box>
                  <Typography variant="h4" gutterBottom>{item.title}</Typography>
                  {item.introduction.map((row, key) => <Typography
                    key={key} >{row}</Typography>)}

                </Box>
                {/* <Box>
                  <Button variant="outlined">查看详情</Button>
                </Box> */}
              </Grid>
            </Grid>
          </Card>
        })}
        {/* <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div>加载更多</div>
        </Box> */}
      </Container>
    </Box>
  </Layout>
}

export default CasePage;