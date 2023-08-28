import { Box, Container, Grid, Typography } from "@mui/material";
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
    <Box sx={{ backgroundColor: 'grey.100', py: 20, alignItems: 'center' }}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item sm={12} md={5} sx={{ 'img': { width: '100%' } }}>
            <img src="/images/banner.jpg" alt="" />
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
              <Typography sx={{ mb: 5 }} variant="h2" gutterBottom>Contact Us</Typography>
              <Typography gutterBottom>
                Company Address: 山东省济南市花园东路88号
              </Typography>
              <Typography gutterBottom>Email: chan.mo@outlook.com</Typography>
              <Typography gutterBottom>Phone: 18743238391</Typography>
              <Typography gutterBottom>Wechat: chanmo1927</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </Layout>
}

export default AboutPage;