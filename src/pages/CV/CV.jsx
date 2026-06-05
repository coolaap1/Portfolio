import Wave from '../../components/Wave/Wave'
import CvPdf from '../../assets/CV.pdf'
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
                Hello, my name is <strong>Steff Dierckx</strong>. I’m a web developer who enjoys building efficient,
                reliable applications and understanding how systems work behind the scenes.
            </p>

            <p className="AboutParagraph">
                I’m especially interested in <strong>back-end development</strong> and <strong>database management</strong>:
                working with data, designing structure, and building the logic that powers an app (APIs, services, and
                databases).
            </p>

            <p className="AboutParagraph">
                I’m completing my <strong>Bachelor&apos;s degree in Application Development</strong> at <strong>Thomas More Geel</strong>,
                and I plan to continue with a <strong>Bachelor&apos;s degree in Cloud and Cyber Security</strong>. My goal is to
                grow into a versatile IT professional who can help turn ideas into secure, well-structured solutions.
            </p>
            </div>

            <a className="CVDownloadButton" href={CvPdf} download aria-label="Download my CV as PDF">
              Download CV (PDF)
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
