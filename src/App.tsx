import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  Link1Icon as LinkIcon,
} from "@radix-ui/react-icons"
import { Typewriter } from "react-simple-typewriter"
import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FormContact } from "@/components/form-contact"
import { DATA } from "@/lib/utils"

export default function App() {
  return (
    <>
      <Navbar />

      <main id="home" className="mx-auto max-w-6xl px-4">
        {/* Hero Section */}
        <section className="flex min-h-svh flex-col-reverse items-start justify-center gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-xl font-bold md:text-3xl dark:text-white">
              Akhmad{" "}
              <Typewriter
                words={["Ardiansyah Amnur"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={80}
                delaySpeed={1200}
              />
            </h1>

            <p className="text-md mt-3 md:text-xl">
              Fullstack Developer |
              <br className="md:hidden" /> Machine Learning Developer
            </p>

            <div className="mt-6 flex flex-wrap gap-5">
              <Button
                className="pixel-box bg-fuchsia-600 px-6 py-5 text-white"
                asChild
              >
                <a href="#contact">Contact</a>
              </Button>

              <div className="hidden md:block">
                <div className="pixel-box h-full w-3 bg-fuchsia-600"></div>
              </div>

              <div className="flex justify-center gap-3 md:justify-start">
                <Button
                  className="pixel-box h-full bg-fuchsia-600 text-white"
                  asChild
                >
                  <a href="#">
                    <LinkedInLogoIcon />
                  </a>
                </Button>

                <Button
                  className="pixel-box h-full bg-fuchsia-600 text-white"
                  asChild
                >
                  <a href="">
                    <GitHubLogoIcon />
                  </a>
                </Button>

                <Button
                  className="pixel-box h-full bg-fuchsia-600 text-white"
                  asChild
                >
                  <a href="">
                    <InstagramLogoIcon />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/dummy-img.jpg"
              alt="Profile"
              className="pixel-box w-48 rounded-xl md:w-72"
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-svh py-16 md:py-28">
          <h2 className="text-start text-2xl font-bold md:text-center">
            About Me
          </h2>
          <span className="pixel-separator mr-auto block w-20 bg-fuchsia-600 py-0.5 md:mx-auto"></span>
          <h4 className="mt-1 mb-7 text-start text-lg md:text-center">
            Let me introduce myself
          </h4>

          <Card className="pixel-box mx-auto w-full bg-white text-black md:w-2/3 dark:bg-black dark:text-white">
            <CardContent className="flex flex-col items-start gap-6 md:flex-row md:items-center">
              <img
                src="/dummy-img.jpg"
                alt="About"
                className="pixel-box w-48 rounded-xl"
              />

              <div>
                <p className="text-start md:text-left">
                  I am Fullstack Developer and Machine Learning Enthusiast who
                  is passionate about building techonology-based solutions. With
                  experience in NextJS, ExpressJS, TensorFlow, and Scikit-learn,
                  I develop innovative and impactful web applications and AI
                  models.
                </p>

                <div className="mt-6 flex flex-wrap gap-5">
                  <Button
                    className="pixel-box bg-fuchsia-600 px-6 py-5 text-white"
                    asChild
                  >
                    <a href="#contact">Contact</a>
                  </Button>

                  <div className="hidden md:block">
                    <div className="pixel-box h-full w-3 bg-fuchsia-600"></div>
                  </div>

                  <div className="flex justify-center gap-3 md:justify-start">
                    <Button
                      className="pixel-box h-full bg-fuchsia-600 text-white"
                      asChild
                    >
                      <a href="#">
                        <LinkedInLogoIcon />
                      </a>
                    </Button>

                    <Button
                      className="pixel-box h-full bg-fuchsia-600 text-white"
                      asChild
                    >
                      <a href="">
                        <GitHubLogoIcon />
                      </a>
                    </Button>

                    <Button
                      className="pixel-box h-full bg-fuchsia-600 text-white"
                      asChild
                    >
                      <a href="">
                        <InstagramLogoIcon />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-svh py-16 md:py-28">
          <h2 className="text-start text-2xl font-bold md:text-center">
            My Projects
          </h2>
          <span className="pixel-separator mr-auto block w-20 bg-fuchsia-600 py-0.5 md:mx-auto"></span>
          <h4 className="mt-1 mb-7 text-start text-lg md:text-center">
            Bridging intelligent algorithms with scalable web.
          </h4>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {DATA.projects.map((project, index) => (
              <Card
                key={index}
                className="pixel-box mx-auto w-11/12 bg-white text-black dark:bg-black dark:text-white"
              >
                <CardContent>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="pixel-box mb-3 h-auto w-full rounded-lg"
                  />
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2">{project.description}</p>

                  <div className="mt-4 flex gap-3">
                    <Button className="pixel-box w-fit bg-fuchsia-600 py-5 text-white">
                      <GitHubLogoIcon className="size-6" />
                    </Button>

                    <Button className="pixel-box w-fit bg-fuchsia-600 py-5 text-white">
                      <LinkIcon className="size-6" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-svh py-16 md:py-28">
          <h2 className="text-start text-2xl font-bold md:text-center">
            My Skills
          </h2>
          <span className="pixel-separator mr-auto block w-20 bg-fuchsia-600 py-0.5 md:mx-auto"></span>
          <h4 className="mt-1 mb-7 text-start text-lg md:text-center">
            Engineering scalable Apps with integrated intelligence.
          </h4>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
            {DATA.skills.map((skill, index) => (
              <Card
                key={index}
                className="pixel-box mx-auto w-11/12 bg-white text-black dark:bg-black dark:text-white"
              >
                <CardContent>
                  <div className="pixel-box mb-3 w-fit bg-fuchsia-600 p-2">
                    {<skill.icon className="size-7 text-white" />}
                  </div>
                  <h3 className="text-xl font-bold">{skill.title}</h3>
                  <p className="mt-2">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-svh py-16 md:py-28">
          <h2 className="text-start text-2xl font-bold md:text-center">
            Contact Me
          </h2>
          <span className="pixel-separator mr-auto block w-20 bg-fuchsia-600 py-0.5 md:mx-auto"></span>
          <h4 className="mt-1 mb-7 text-start text-lg md:text-center">
            Collaborating at the intersection of AI and Web.
          </h4>

          <Card className="pixel-box mx-auto w-full bg-white text-black md:w-2/3 dark:bg-black dark:text-white">
            <CardContent>
              <FormContact />
              <div className="flex justify-center gap-3">
                <Button
                  className="pixel-box h-full bg-fuchsia-600 p-3 text-white"
                  asChild
                >
                  <a href="#">
                    <LinkedInLogoIcon />
                  </a>
                </Button>

                <Button
                  className="pixel-box h-full bg-fuchsia-600 p-3 text-white"
                  asChild
                >
                  <a href="#">
                    <GitHubLogoIcon />
                  </a>
                </Button>

                <Button
                  className="pixel-box h-full bg-fuchsia-600 p-3 text-white"
                  asChild
                >
                  <a href="#">
                    <InstagramLogoIcon />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="pb-10">
          <Card className="pixel-box mx-auto mt-10 w-full bg-white text-black md:w-2/3 dark:bg-black dark:text-white">
            <CardContent>
              <p className="text-center text-sm text-gray-500 dark:text-gray-300">
                &copy; {new Date().getFullYear()} Akhmad Ardiansyah Amnur. All
                rights reserved.
              </p>
            </CardContent>
          </Card>
        </footer>
      </main>
    </>
  )
}
