import { Link } from 'react-scroll';
import './App.css';
import Headshot from './assets/headshot.png'
import PythonLogo from './assets/python.png'
import JavaScriptLogo from './assets/javascript.png'
import HTMLLogo from './assets/html.png'
import CSSLogo from './assets/css.png'
import CLogo from './assets/c.png'
import CPPLogo from './assets/cpp.png'
import FirebaseLogo from './assets/firebase.png'
import GitLogo from './assets/git.png'
import JavaLogo from './assets/java.png'
import ExpressLogo from './assets/express.png'
import MongoLogo from './assets/mongo.png'
import NodeLogo from './assets/node.png'
import AzureLogo from './assets/azure.png'
import RubyLogo from './assets/ruby.png'
import ReactLogo from './assets/react.png'
import PostmanLogo from './assets/postman.png'
import HaskellLogo from './assets/haskell.png'

import KotlinLogo from './assets/kotlin.png'
import JiraLogo from './assets/jira.png'
import DockerLogo from './assets/docker.png'
import FigmaLogo from './assets/figma.png'
import ASLogo from './assets/androidstudio.png'
import GradleLogo from './assets/gradle.png'
import MySQLLogo from './assets/mysql.png'

import MavenLogo from './assets/maven.png'

import SteampunkLogo from './assets/steampunk.png'
import ThinksociallyLogo from './assets/thinksocially.png'

import BashLogo from './assets/bash.png'
import SSLogo from './assets/screensaver.png'
import BSLogo from './assets/binarytree.png'



function App() {
  return (
    <div className='Web'>
      
      <nav>
        <Link className='link' to='about' smooth={true} duration={500}><u>About Me</u></Link>
        <Link className='link' to='skills' smooth={true} duration={500}><u>Skills</u></Link>
        <Link className='link' to='experience' smooth={true} duration={500}><u>Experience</u></Link>
        <Link className='link' to='projects' smooth={true} duration={500}><u>Projects</u></Link>
      </nav>

      <section id='about'>

        <h1>About Me</h1>
        
          <div id='about-content'>
            <div id='about-headshot'>
              <img src={Headshot} alt='heahshot' id='headshot'/>
            </div>
            <div id='about-text'>
              
              <p>I am a driven computer science student at the University of Maryland, College Park, with over five years of experience in IT and software development. As I approach graduation, I’m excited to apply my skills and knowledge to create impactful and innovative solutions in the tech industry.</p>
              <p>My journey in technology began with an associate's degree from Montgomery College, where I developed a solid foundation in computer science. Since then, I’ve gained hands-on experience in IT and software engineering roles, where I’ve tackled real-world challenges and honed my abilities in problem-solving, coding, and project management. Whether it’s developing secure applications, managing cloud infrastructure, or setting up complex networks, I bring a versatile skill set to the table.</p>
              <p>My journey in technology began with an associate's degree from Montgomery College, where I developed a solid foundation in computer science. Since then, I’ve gained hands-on experience in IT and software engineering roles, where I’ve tackled real-world challenges and honed my abilities in problem-solving, coding, and project management. Whether it’s developing secure applications, managing cloud infrastructure, or setting up complex networks, I bring a versatile skill set to the table.</p>
              <p>I’m particularly passionate about roles that allow me to leverage my technical expertise while contributing to meaningful projects, especially in environments that value continuous learning and innovation. With a strong background in both software engineering and IT, I’m well-equipped to bridge the gap between development and operations, ensuring that solutions are not only effective but also sustainable and scalable.</p>
              <p>Beyond my professional interests, I’m an avid soccer player and the captain of my intramural team, where I’ve learned the value of teamwork and leadership. I also enjoy producing music and exploring the cultural richness of Washington, DC, and my birthplace, Spain. These experiences have shaped my creative approach to problem-solving and my commitment to excellence in everything I do.</p>
              
            </div>
          </div>
      </section>

      <section id='skills'>
      
      <h2>Languages</h2>

      <div id='skills-content'>
        
        <div id='skills-box'>
          <img src={PythonLogo} id='skill-img' alt='logo'/>
          <p>Python</p>
        </div>

        <div id='skills-box'>
          <img src={JavaScriptLogo} id='skill-img' alt='logo'/>
          <p>JavaScript</p>
        </div>

        <div id='skills-box'>
          <img src={HTMLLogo} id='skill-img' alt='logo'/>
          <p>HTML</p>
        </div>

        <div id='skills-box'>
          <img src={CSSLogo} id='skill-img' alt='logo'/>
          <p>CSS</p>
        </div>

        <div id='skills-box'>
          <img src={JavaLogo} id='skill-img' alt='logo'/>
          <p>Java</p>
        </div>

        <div id='skills-box'>
          <img src={KotlinLogo} id='skill-img' alt='logo'/>
          <p>Kotlin</p>
        </div>

        <div id='skills-box'>
          <img src={CLogo} id='skill-img' alt='logo'/>
          <p>C</p>
        </div>

        <div id='skills-box'>
          <img src={CPPLogo} id='skill-img' alt='logo'/>
          <p>C++</p>
        </div>

        <div id='skills-box'>
          <img src={RubyLogo} id='skill-img' alt='logo'/>
          <p>Ruby</p>
        </div>

        <div id='skills-box'>
          <img src={HaskellLogo} id='skill-img' alt='logo'/>
          <p>Haskell</p>
        </div>
      </div>

      <h2>Frameworks and Libraries</h2>

      <div id='skills-content'>

        <div id='skills-box'>
          <img src={ReactLogo} id='skill-img' alt='logo'/>
          <p>React</p>
        </div>
        
        <div id='skills-box'>
          <img src={NodeLogo} id='skill-img' alt='logo'/>
          <p>Node.js</p>
        </div>

        <div id='skills-box'>
          <img src={FirebaseLogo} id='skill-img' alt='logo'/>
          <p>Firebase</p>
        </div>

        <div id='skills-box'>
          <img src={AzureLogo} id='skill-img' alt='logo'/>
          <p>Azure</p>
        </div>

        <div id='skills-box'>
          <img src={MongoLogo} id='skill-img' alt='logo'/>
          <p>MongoDB</p>
        </div>

        <div id='skills-box'>
          <img src={ExpressLogo} id='skill-img' alt='logo'/>
          <p>Express.js</p>
        </div>
        
        <div id='skills-box'>
          <img src={MySQLLogo} id='skill-img' alt='logo'/>
          <p>MySQL</p>
        </div>

        <div id='skills-box'>
          <img src={ASLogo} id='skill-img' alt='logo'/>
          <p>Android Studio</p>
        </div>
      
      </div>

      <h2>Developer Tools</h2>

      <div id='skills-content'>
        <div id='skills-box'>
          <img src={PostmanLogo} id='skill-img' alt='logo'/>
          <p>Postman</p>
        </div>

        <div id='skills-box'>
          <img src={JiraLogo} id='skill-img' alt='logo'/>
          <p>Jira</p>
        </div>

        <div id='skills-box'>
          <img src={GitLogo} id='skill-img' alt='logo'/>
          <p>Git</p>
        </div>

        <div id='skills-box'>
          <img src={DockerLogo} id='skill-img' alt='logo'/>
          <p>Docker</p>
        </div>

        <div id='skills-box'>
          <img src={FigmaLogo} id='skill-img' alt='logo'/>
          <p>Figma</p>
        </div>

        <div id='skills-box'>
          <img src={GradleLogo} id='skill-img' alt='logo'/>
          <p>Gradle</p>
        </div>

        <div id='skills-box'>
          <img src={MavenLogo} id='skill-img' alt='logo'/>
          <p>Maven</p>
        </div>
      </div>
      </section>

      <section id='experiences'>
        <h1>Experience</h1>

        <div id='experience'>
          <div id='experience-img-section'>
            <img src={SteampunkLogo} id='experience-img' alt='logo'/>
          </div>
          <div id='experience-content'>
            <p>
              • Built applications using <b>HTML/CSS </b>to manage hundreds of employee requests nationwide, streamlining processes and increasing team efficiency by 40% <br/>
              • Led implementation of tests for an internal project ensuring government-compliant software updates were installed on hundreds of devices, reducing debugging time by 80% <br/>
              • Participated in a <b>Scrum/Agile</b> environment using <b>Confluence</b> and <b>Jira</b>, including weekly stand-ups, sprint plannings, and story point estimations <br/>
              • Managed <b>SharePoint</b>user permissions and secured access to sensitive data for high-level government projects, ensuring stringent compliance with security protocols and safeguarding critical information across <b>SharePoint Sites </b>and <b>Cloud</b> storage systems <br/>
              • Managed employee devices using <b>Azure</b>, optimizing configurations and ensuring compliance with organizational security standards for reliable and secure device management across the company <br/>
              • Utilized <b>Git </b>and version control commands to manage project codebases, ensuring smooth collaboration, accurate tracking of changes, and seamless integration <br/>
              • Handled and resolved IT support tickets using <b>Freshservice</b>, streamlining workflows and ensuring timely resolutions to maintain operational efficiency <br/>
              • Utilized <b>Postman </b>to debug, test, and validate APIs and endpoints, ensuring reliable performance <br/>
            </p>
          </div>
        </div>

        <div id='experience'>
          <div id='experience-img-section'>
            <img src={ThinksociallyLogo} id='experience-img' alt='logo'/>
          </div>
          <div id='experience-content'>
            <p>
              • Developed automated monthly inventory reports using <b>Python</b> and <b>Pandas</b>, reducing invoice preparation time by 90% <br/>
              • Spearheaded an automated disk wiping and certificate backup project in <b>Python</b> using government-approved software, enhancing data security and regulatory compliance <br/>
              • Set up and configured <b>Cisco Meraki</b> equipment at client sites, optimizing network performance and security<br/>
              • Managed and resolved technical support tickets using <b>ConnectWise</b>, streamlining the ticketing process and achieving an improvement in response time and customer satisfaction.<br/>
              • Utilized <b>SolarWinds</b> to monitor and manage client devices, proactively identifying and resolving network and system issues<br/>
              • Diagnosed and resolved a wide range of computer and server issues including virus removal and device setup, greatly improving operational efficiency and client satisfaction.<br/>
            </p>
          </div>

        </div>
        
      </section>

      <section id='projects'>
        <h1>Projects</h1>

        <div id='projects-content'>
          <div id='projects-box'>
            <div id='box-icons'>
              <img src={CLogo} id='icon'/>
              <img src={GitLogo} id='icon'/>
            </div>
            <h2> Unix Shell Backend</h2>
            <img src={BashLogo} alt='logo' id='project-img'/>
            <div id='box-content'>
              <p>
              Developed the backend infrastructure of a shell system using C programming language, UNIX environment. The
              project aimed to create a robust shell capable of handling various operations efficiently. Leveraging my knowledge
              of data structures, particularly Binary Trees, I implemented support for essential features such as File Redirec
              tion, Pipes, and Boolean Operations. By employing the Binary Tree data structure, I ensured the correct execution
              of UNIX commands provided by the user
              </p>
            </div>
          </div>

          <div id='projects-box'>
            <div id='box-icons'>
              <img src={JavaLogo} id='icon'/>
              <img src={GitLogo} id='icon'/>
              <img src={MavenLogo} id='icon'/>
            </div>
            <h2>Screen Saver Project</h2>
            <img src={SSLogo} alt='logo' id='project-img'/>
            <div id='box-content'>
              <p>
              Developed a screensaver application using Java, JavaFX, Git, and Maven, featuring customizable display options
              for pictures and videos. Implemented button functionality to skip photos, add photos to the rotation, and enable
              automatic slideshow transitions for a seamless viewing experience.
              </p>
            </div>
          </div>

          <div id='projects-box'>
            <div id='box-icons'>
              <img src={HaskellLogo} id='icon'/>
              <img src={GitLogo} id='icon'/>
            </div>
            <h2>Haskell Binary Tree Manipulation</h2>
            <img src={BSLogo} alt='logo' id='project-img'/>
            <div id='box-content'>
              <p>
              Developed a screensaver application using Java, JavaFX, Git, and Maven, featuring customizable display options
              for pictures and videos. Implemented button functionality to skip photos, add photos to the rotation, and enable
              automatic slideshow transitions for a seamless viewing experience.
              </p>
            </div>
          </div>


      </div>
      </section>

    </div>
  );
}

export default App;
