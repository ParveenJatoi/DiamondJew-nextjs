import HeroSection from "./herosec"
import FeaturedCollection from "./feature"

import GiftForHer from "./videos"
import BridalCollection from "./bridal/page"
import ProductSection from "./latest/page"
export default function Home() {
    return (
      <div>
      <HeroSection/>
        <FeaturedCollection/>
        <BridalCollection/>
        <ProductSection/>
        <GiftForHer/>
        </div>
    )
  }