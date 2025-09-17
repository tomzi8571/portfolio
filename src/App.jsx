import React, {useState} from 'react'
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import {Skills} from './components/Skills.jsx'
import BigSix from './components/BigSix.jsx'
import Projects from './components/Projects.jsx'
import Timeline from './components/Timeline.jsx'
import Contact from './components/Contact.jsx'
import Credits from './components/Credits.jsx'

function App() {
    const [skillFilter, setSkillFilter] = useState('All')
    const [projectQuery, setProjectQuery] = useState('')

    // const actions = useMemo(() => ({
    //     setSkillFilter, setProjectQuery, navigate: (id) => {
    //         const el = document.getElementById(id)
    //         if (el) el.scrollIntoView({behavior: 'smooth', block: 'start'})
    //     },
    // }), [],)

    // const handlePrompt = (text) => {
    //     const q = text.trim().toLowerCase()
    //     if (!q) return
    //
    //     if (/^go to (home|top)$/.test(q)) return actions.navigate('home')
    //     if (q.includes('go to skills')) return actions.navigate('skills')
    //     if (q.includes('go to projects')) return actions.navigate('projects')
    //     if (q.includes('go to timeline')) return actions.navigate('timeline')
    //     if (q.includes('go to contact')) return actions.navigate('contact')
    //
    //     if (q.includes('backend')) return actions.setSkillFilter('Backend')
    //     if (q.includes('frontend')) return actions.setSkillFilter('Frontend')
    //     if (q.includes('deploy') || q.includes('devops')) return actions.setSkillFilter('Deployment')
    //     if (q.includes('all skills')) return actions.setSkillFilter('All')
    //
    //     const m = q.match(/(show|filter).*(projects?)\s*(for|with|about)?\s*(.+)?/)
    //     if (m && m[4]) return actions.setProjectQuery(m[4])
    //
    //     return actions.setProjectQuery(q)
    // }

    return (<div className="relative ">
        <NavBar/>
        <main>
            <section id="home" className="section pt-28">
                <Hero/>
            </section>

            <section id="skills" className="section py-16">
                { /* Development Toolkit, Technical Proficiencies, Engineering Capabilities
                     Tools & Technologies, Applied Technologies, Platform Expertise
                */}
                <h2 className="section-title">Development Toolkit</h2>
                <Skills filter={skillFilter} onFilterChange={setSkillFilter}/>
            </section>

            <section id="bigsix" className="section py-16">
                {/*Engineering Focus, Core Competencies, Signature Strengths*/}
                {/*Key Areas of Expertise, Architectural Pillars, What I Bring to the Team*/}
                <h2 className="section-title">Core Competences</h2>
                <BigSix/>
            </section>

            <section id="projects" className="section py-16">
                <h2 className="section-title">My public Projects</h2>
                <Projects query={projectQuery} onQueryChange={setProjectQuery}/>
            </section>

            <section id="timeline" className="section py-16">
                <h2 className="section-title">Timeline</h2>
                <Timeline/>
            </section>

            <section id="contact" className="section py-16">
                <h2 className="section-title">Contact</h2>
                <Contact/>
            </section>
        </main>

        <Credits/>
        {/*<PromptBar onPrompt={handlePrompt} />*/}
    </div>)
}

export default App
