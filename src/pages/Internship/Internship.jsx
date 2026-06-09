import './Internship.css'
import projectplan from '../../assets/ProjectPlan - Steff Dierckx.pdf'
import realisatiedocument from '../../assets/RealisatieDocument - Steff Dierckx.pdf'
import realsiatie from '../../assets/reflectie - Steff Dierckx.pdf'


export default function Internship() {
  return (
    <>
<div className="Skills">
    <div className="InternshipLayout">

        <div className="InternshipContent">

            <p className="SkillsTitle">
                Internship · Ziekenhuis Geel
            </p>

            <div className="InternshipInfoGrid">

                <div className="InternshipInfoCard">
                    <p className="InternshipInfoLabel">Duration</p>
                    <p className="InternshipInfoValue">
                        February 23 – May 22
                    </p>
                </div>

                <div className="InternshipInfoCard">
                    <p className="InternshipInfoLabel">Role</p>
                    <p className="InternshipInfoValue">
                        Software Developer Intern
                    </p>
                </div>

                <div className="InternshipInfoCard">
                    <p className="InternshipInfoLabel">Location</p>
                    <p className="InternshipInfoValue">
                        Ziekenhuis Geel
                    </p>
                </div>

            </div>

            <div className="InternshipTextBlock">


<div className="InternshipDetailsGrid">

    <div className="InternshipDetailCard">

        <p className="InternshipHeading">
            Main project · Poetscontrole
        </p>

        <p className="InternshipParagraph">
            One of the most significant projects I completed was a cleaning
            inspection management application called
            <strong> Poetscontrole</strong>.
        </p>

        <p className="InternshipParagraph">
            The system consists of a web application where inspections can be
            entered, managed and reviewed by staff members.
        </p>

        <ul className="InternshipList">
            <li>Database structure design</li>
            <li>Three-tier architecture</li>
            <li>Business logic layer</li>
            <li>Windows Forms development</li>
            <li>ASPX web application</li>
        </ul>

    </div>

    <div className="InternshipDetailCard">

        <p className="InternshipHeading">
            What I learned
        </p>

        <p className="InternshipParagraph">
            Throughout the internship, I learned not only technical
            skills but also the importance of writing semantic,
            maintainable and well-structured code.
        </p>

        <p className="InternshipParagraph">
            Working on applications that are actively used in a
            healthcare environment taught me the value of reliability,
            scalability and clear software design.
        </p>

        <p className="InternshipParagraph">
            The experience strengthened my interest in back-end
            development and database management while giving me
            valuable insight into professional software development.
        </p>

    </div>

</div>

            </div>

            <div className="InternshipDocuments">

    <p className="InternshipHeading">
        Documents
    </p>

    <div className="InternshipDocsGrid">

        <a
            href={projectplan}
            download
            className="InternshipDocButton"
        >
            projectplan
        </a>

        <a
        
            href={realisatiedocument}
            download
            className="InternshipDocButton"
        >
            realisatiedocument
        </a>

        <a
            href={realsiatie}
            download
            className="InternshipDocButton"
        >
realsiatie
        </a>

    </div>

</div>

        </div>


    </div>
</div>

    </>
  )
}
