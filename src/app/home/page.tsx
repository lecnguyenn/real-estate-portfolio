// import Banner from './components/Banner'
import AboutUs from '@/components/About'
import FeatureSerive from '@/components/FeatureService'
import Intro from '@/components/Intro'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import TextSlider from '@/components/TextSlider'
import TrustBy from '@/components/TrustBy'
import WhyChooseUs from '@/components/WhyChooseUs'



export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Intro />
      <TextSlider />
      <AboutUs />
      <FeatureSerive />
      <WhyChooseUs />
      <TrustBy />
      <Footer />
    </>
  )
}
