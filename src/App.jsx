
import {useState} from 'react'
import Hero from './Hero'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import Navbar from './Navbar'
import About from './About'
import Experience from './Experience'
import Education from './Education'
import Hobbies from './Hobbies'


const App = () => {
  const [dark, setDark] = useState(true);
  return (
  <div className={dark? "dark" : ""}>
    <div className='bg-slate-100 dark:bg-[#020617] text-slate-900 dark:text-white transition-colors duration-500'>
      <Navbar dark={dark} setDark={setDark} />
        <Hero />
        <About/>
        <Skills />
         <Projects />
        <Experience/>
        <Education/>
        <Hobbies/>
        <Contact />
</div>
</div>
  )
}

export default App
