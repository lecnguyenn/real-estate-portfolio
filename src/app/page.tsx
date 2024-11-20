// import Banner from './components/Banner'
import AboutUs from '@/components/About'
import FeatureSerive from '@/components/FeatureService'
import Intro from '@/components/Intro'
import TextSlider from '@/components/TextSlider'
import TrustBy from '@/components/TrustBy'
import WhyChooseUs from '@/components/WhyChooseUs'



export default function Home() {
  return (
    <>
      <Intro />
      <TextSlider />
      <AboutUs />
      <FeatureSerive />
      <WhyChooseUs />
      <TrustBy />
    </>
  )
}
