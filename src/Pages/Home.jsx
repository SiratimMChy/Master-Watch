import Slider from "../component/Slider"
import CategoryCards from "../component/CategoryCards"
import FeaturedProducts from "../component/FeaturedProducts"
import Contact from "./Contact"
import Faq from "./Faq"

const Home = () => {
    return (
        <div>
            <title>Home</title>
            <Slider />
            <CategoryCards />
            <FeaturedProducts />
            <Contact/>
            <Faq/>
        </div>
    )
}

export default Home