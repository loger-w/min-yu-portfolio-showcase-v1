import Layout from "./components/layout"
import Home from "./pages/home"
import About from "./pages/about"
import Skills from "./pages/skills"
import Projects from "./pages/projects"
import AnimatedSection from "./components/ui/animated-section"

export default function App() {
    return (
        <Layout>
            <AnimatedSection name="home">
                <Home />
            </AnimatedSection>
            
            <AnimatedSection name="about">
                <About />
            </AnimatedSection>
            
            <AnimatedSection name="skills">
                <Skills />
            </AnimatedSection>
            
            <AnimatedSection name="projects">
                <Projects />
            </AnimatedSection>
        </Layout>
    )
}