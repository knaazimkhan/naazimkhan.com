import About from '@/components/about'
import Education from '@/components/education'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Profile from '@/components/profile'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import WorkExperience from '@/components/work-experience'

export default function Home() {
  return (
    <div className="flex-1">
      <Header />
      <main>
        <div className="mx-auto w-full max-w-2xl px-4 pt-10 sm:px-6 md:pt-16 lg:px-8">
          <Profile />
          <About />
          {/* <Projects /> */}
          <Skills />
          <WorkExperience />
          <Education />
        </div>
      </main>
      <Footer />
    </div>
  )
}
