import "../App.css";

export default function SkillsSection() {
  return (
    <>
      <h2 className="section header-section">SKILLS</h2>

      <div className="section-text-container">
        <h4 className="section-text-content-headline">
          Languages / Markup, StyleSheet
        </h4>
        <p className="section-text-content">
          JavaScript, Java, HTML, CSS, SCSS, Sass
        </p>

        <h4 className="section-text-content-headline">
          Frameworks / Libraries / REs / Others
        </h4>
        <p className="section-text-content">
          React, Node.js, Express, JQuery, JRE, Bootstrap, MUI, Spring Boot,
          Jest, React Testing Library, Spring Cloud, Maven, Hibernate, REST API,
          JPA, Postman API, Nexus, Gradle, WordPress
        </p>

        <h4 className="section-text-content-headline">Databases</h4>
        <p className="section-text-content">MongoDB, SQL, PostgreSQL, MySQL</p>

        <h4 className="section-text-content-headline">Deployment</h4>
        <p className="section-text-content">Git, Github</p>
      </div>
    </>
  );
}
