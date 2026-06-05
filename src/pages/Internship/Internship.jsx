import './Internship.css'

export default function Internship() {
  return (
    <>
      <div className="Skills" aria-label="Internship">
        <div className="SkillsCube" aria-label="Internship card">
          <p className="SkillsTitle">Internship - ziekenhuis geel</p>
          <div className="DownloadSection" aria-label="Downloads">
            <p className="DownloadTitle">Download</p>

            <button type="button" className="DownloadButton DownloadButtonFull">
              Download ZIP
            </button>

            <div className="DownloadRow" aria-label="Individual files">
              <button type="button" className="DownloadButton DownloadButtonThird">
                File 1
              </button>
              <button type="button" className="DownloadButton DownloadButtonThird">
                File 2
              </button>
              <button type="button" className="DownloadButton DownloadButtonThird">
                File 3
              </button>
            </div>
          </div>
          <div className="InternshipTextBlock" aria-label="Internship description">
            <p className="InternshipTextTitle">About the internship</p>
            <p className="InternshipParagraph">
              From February 23 to May 22, I completed my internship at Ziekenhuis Geel, where I worked as a programmer
              within the hospital&apos;s IT department. Unlike a traditional internship focused on a single project, I
              contributed to multiple applications and development tasks throughout the internship period.
            </p>

            <p className="InternshipParagraph">
              During my internship, I worked with a three-tier architecture and developed applications using Windows
              Forms and ASPX web technologies. My responsibilities included maintaining and improving existing
              applications as well as developing entirely new solutions tailored to the needs of different departments
              within the hospital.
            </p>

            <p className="InternshipParagraph">
              One of the most significant projects I completed was a cleaning inspection management application called{' '}
              <strong>Poetscontrole</strong>. This project was developed entirely from scratch and was designed to help
              the hospital monitor and evaluate the quality of cleaning activities. The system consists of a web
              application where inspections can be entered, managed, and reviewed by staff members.
            </p>

            <p className="InternshipParagraph">For this project, I was responsible for the complete development process, including:</p>

            <ul className="InternshipList" aria-label="Poetscontrole responsibilities">
              <li>Designing and creating the database structure.</li>
              <li>Implementing the three-tier architecture.</li>
              <li>Developing the business logic layer.</li>
              <li>Building the Windows Forms components.</li>
              <li>Creating the ASPX web application used for recording and managing inspections.</li>
            </ul>

            <p className="InternshipParagraph">
              Throughout the internship, I learned not only technical skills but also the importance of writing
              semantic, maintainable, and well-structured code. Working on applications that are actively used in a
              professional healthcare environment taught me the value of reliability, scalability, and clear software
              design. The experience strengthened my interest in back-end development and database management while
              giving me valuable insight into how software solutions are developed and maintained in a real-world
              organization.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}
