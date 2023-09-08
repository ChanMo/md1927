import { Box, Container, Typography } from "@mui/material";
import Layout from "../components/Layout";

function AboutPage() {
  return <Layout banner={'/images/banner.jpg'} bannerContent={
    <Container maxWidth="xl" sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    }}>
      <Typography variant="h2" gutterBottom color="white">
        济南漫点信息科技有限公司
      </Typography>
      <Typography variant="h5" color="white">
        专业、独特的产品设计理念，完全定制化研发，搞笑的开发流程，助您迈出创业第一步。
      </Typography>
    </Container>}>
    <Box sx={{ backgroundColor: 'grey.100', py: 10, alignItems: 'center' }}>
      <Container>
        <Box sx={{ mb: 10 }}>
          <Typography sx={{ textAlign: 'center' }} variant="h3" gutterBottom>关于我们</Typography>
          <Typography gutterBottom>济南漫点信息科技是一家专注于互联网项目定制开发的公司，成立于 2019 年。公司技术前沿，擅于从 0 开发各类创新型应用。</Typography>
          <Typography gutterBottom>公司主营业务涵盖多个行业和领域，包括区块链、人工智能、物联网、Sass 系统、教育、医疗等。公司致力于为客户提供高质量、高性价比的项目开发服务，帮助客户实现业务目标。</Typography>
          <Typography gutterBottom>公司拥有一支经验丰富的技术团队，成员具有丰富的项目开发经验，擅长使用各种前沿技术。</Typography>
          <Typography gutterBottom>公司拥有完善的项目管理流程，确保项目按时、高质量完成。公司还提供售后支持，帮助客户解决项目使用过程中遇到的问题。</Typography>

        </Box>
      </Container>
      {/* <Container maxWidth='xl'>
        <Grid container spacing={3}>
          <Grid item sm={12} md={5} sx={{ 'img': { width: '100%' } }}>
            <Box sx={{ height: 320 }}>
              <Map
                amapkey="0f969a22ab41e6bf775642a51aabdc6f"
                plugins={{

                }}
                center={{longitude: 117.109517, latitude: 36.695167}}
                zoom={14}
              >
                <Marker position={{ longitude: 117.109517, latitude: 36.695167 }} />
              </Map>
            </Box>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box sx={{
              mx: 5,
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center',
              height: '100%',
              justifyContent: 'center'
            }}>
              <Typography sx={{ mb: 5 }} variant="h3" gutterBottom>联系我们</Typography>
              <Typography gutterBottom>地址: 山东省济南市花园东路88号</Typography>
              <Typography gutterBottom>邮箱: chan.mo@outlook.com</Typography>
              <Typography gutterBottom>手机: 18743238391</Typography>
              <Typography gutterBottom>微信: chanmo1927</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container> */}
    </Box>
  </Layout>
}

export default AboutPage;