import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import Layout from "../components/Layout";

function CasePage() {
  const list = [
    {
      title: '户外运动-运动跑图',
      type: '小程序',
      createAt: '2021年3月13日',
      image: '/images/banner.jpg',
      introduction: '户外运动是一款运动跑图的产品，用户购买线路后通过记录步数完成'
    },
    {
      title: '户外运动-运动跑图',
      type: '小程序',
      createAt: '2021年3月13日',
      image: '/images/banner.jpg',
      introduction: '户外运动是一款运动跑图的产品，用户购买线路后通过记录步数完成'
    }
  ]
  return <Layout banner={'/images/banner.jpg'} bannerContent={
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

    <Box sx={{ background: "#fff" }}>
      <Container sx={{ py: 5 }}>
        {list.map((item, index) => {
          return <Card key={index}
            sx={{ mb: 3, boxShadow: '1px 5px 10px 0 #f3f3f3' }}>
            <Grid container>
              <Grid item xs={12} md={4}>
                <img style={{ width: '100%', display: 'block' }} src={item.image} alt='' />
              </Grid>
              <Grid item xs={12} md={8} sx={{
                p: 3, display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <Box>
                  <Typography variant="h4" gutterBottom>{item.title}</Typography>
                  <Typography>
                    {item.type}
                  </Typography>
                </Box>
                <Box>
                  <Button variant="outlined">查看详情</Button>
                </Box>
              </Grid>
            </Grid>
          </Card>
        })}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div>加载更多</div>
        </Box>
      </Container>
    </Box>
  </Layout>
}

export default CasePage;