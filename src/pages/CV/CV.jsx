import Wave from '../../components/Wave/Wave'
import CvPdf from '../../assets/CV - Steff Dierckx.pdf'
import Avatar from '../../assets/Avatar.png'
import './CV.css'

export default function CV() {
  return (
    <>
      <Wave />

      <div className="Skills" aria-label="About me">
        <div className="AboutLayout" aria-label="About me content">
          <div className="AboutContent">
            <p className="SkillsTitle">About me</p>

            <div className="AboutTextBlock" aria-label="About text">
              <p className="AboutHeading">A quick introduction</p>

              <p className="AboutParagraph">
                Hello, my name is <strong>Steff Dierckx</strong>. I’m an Application Development graduate with a strong focus on backend systems and database design.
              </p>

              <p className="AboutParagraph">
                I’m especially interested in taking projects from start to finish, with a focus on <strong>back-end development</strong> and <strong>database management</strong>:
                working with data, designing structure, and building the logic that powers an app (APIs, services, and
                databases).
              </p>

              <p className="AboutParagraph">
                I completed my <strong>Bachelor&apos;s degree in Application Development</strong> at <strong>Thomas More Geel</strong>
                and am now studying my second bachelor&apos;s degree in <strong>Cloud and Cyber Security (CCS)</strong>. My goal is to
                grow into a versatile IT professional who can turn ideas into secure, well-structured solutions from start to finish.
              </p>
              <p className="AboutParagraph">
                If you want to contact me, you can email me at: <a href="mailto:Steff.Dierckx@outlook.com">Steff.Dierckx@outlook.com</a>
              </p>
            </div>

            <a className="CVDownloadButton" href={CvPdf} download aria-label="Download my CV as PDF">
              Download CV 
            </a>
          </div>

          <div className="AboutAvatar">
            <img className="AboutAvatarImage" src={Avatar} alt="Portrait of Steff Dierckx" />
          </div>
        </div>
      </div>
    </>
  )
}
