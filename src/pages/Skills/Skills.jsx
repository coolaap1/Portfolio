import './Skills.css'

export default function Skills() {
    return(
        <> 
        <div className="TechnicalSkills">
  <p className="SkillsTitle">Technical Skills</p>

  <div className="SkillsGrid">
    <div className="SkillCategory">
      <p className="SkillCategoryTitle">Languages</p>

      <div className="SkillsPills">
        <span className="SkillPill">C#</span>
        <span className="SkillPill">JavaScript</span>
        <span className="SkillPill">SQL</span>
        <span className="SkillPill">HTML</span>
        <span className="SkillPill">CSS</span>
      </div>
    </div>

    <div className="SkillCategory">
      <p className="SkillCategoryTitle">Frameworks & Technologies</p>

      <div className="SkillsPills">
        <span className="SkillPill">ASP.NET</span>
        <span className="SkillPill">React</span>
        <span className="SkillPill">Vite</span>
        <span className="SkillPill">Windows Forms</span>
        <span className="SkillPill">ASPX</span>
      </div>
    </div>

    <div className="SkillCategory">
      <p className="SkillCategoryTitle">Databases</p>

      <div className="SkillsPills">
        <span className="SkillPill">SQL Server</span>
        <span className="SkillPill">Database Design</span>
        <span className="SkillPill">Data Modelling</span>
      </div>
    </div>

    <div className="SkillCategory">
      <p className="SkillCategoryTitle">Tools & Methods</p>

      <div className="SkillsPills">
        <span className="SkillPill">Git</span>
        <span className="SkillPill">Visual Studio</span>
        <span className="SkillPill">VS Code</span>
        <span className="SkillPill">Three-Tier Architecture</span>
      </div>
    </div>
  </div>
</div>
        </>
    )
}