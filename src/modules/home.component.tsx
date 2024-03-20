import { Blog } from "./blog/blog.component"
import { Hero } from "./hero/hero.component"

export const Home: React.FC = () => {
    return <>
        <Hero />
        <Blog/>
    </>
}