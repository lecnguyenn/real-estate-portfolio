// import Banner from './components/Banner'
import AboutUs from '@/components/About'
import FeatureSerive from '@/components/FeatureService'
import Intro from '@/components/Intro'
import Header from '@/components/layout/Header'
import TextSlider from '@/components/TextSlider'
import WhyChooseUs from '@/components/WhyChooseUs'



export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <TextSlider />
      <AboutUs />
      <FeatureSerive />
      <WhyChooseUs />
    </>
  )
}
