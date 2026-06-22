import Slider from "../component/Slider"
import CategoryCards from "../component/CategoryCards"
import Contact from "./Contact"
import Faq from "./Faq"

const Home = () => {
    return (
        <div>
            <title>Home</title>
            <Slider />
            <CategoryCards />
            <Contact/>
            <Faq/>
        </div>
    )
}

export default Home