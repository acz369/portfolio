import { EXPERIENCE, MENULINKS } from "../../constants";

const ExperienceSection = () => (
  <section
    className="section-container w-full py-24 select-none"
    id={MENULINKS[1].ref}
  >
    <p className="section-title-sm">EXPERIENCE</p>
    <h1 className="section-heading mt-2">Architecture with delivery in mind.</h1>
    <p className="text-xl md:max-w-3xl mt-3 text-gray-300">
      Experience leading enterprise integration, cloud evolution, and software
      delivery from discovery through implementation.
    </p>

    <div className="grid gap-6 mt-12 lg:grid-cols-3">
      {EXPERIENCE.map((experience) => (
        <article
          className="border border-gray-700 rounded-xl p-6 bg-gray-800/30"
          key={`${experience.company}-${experience.role}`}
        >
          <p className="text-sm text-gradient font-bold">{experience.period}</p>
          <h2 className="text-2xl font-medium mt-3">{experience.role}</h2>
          <p className="text-lg text-gray-300 mt-1">{experience.company}</p>
          <p className="mt-5 leading-relaxed text-gray-200">
            {experience.summary}
          </p>
          <ul className="mt-5 space-y-3 text-gray-300 leading-relaxed">
            {experience.highlights.map((highlight) => (
              <li className="flex" key={highlight}>
                <span className="text-gradient mr-3">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>

    <div className="grid gap-6 mt-12 md:grid-cols-2">
      <div>
        <p className="section-title-sm">EDUCATION</p>
        <p className="mt-3 text-xl">M.S. in Software Development and Architecture</p>
        <p className="text-gray-300">La Salle Barcelona - URL · 2023 - 2024</p>
        <p className="mt-5 text-xl">Computer Science</p>
        <p className="text-gray-300">University of Antioquia · 2017 - 2023</p>
      </div>
      <div>
        <p className="section-title-sm">LANGUAGES & TRAINING</p>
        <p className="mt-3 text-gray-300">Spanish (native) · English (professional proficiency) · Catalan (basic)</p>
        <p className="mt-5 text-gray-300">DevOps Bootcamp: CI/CD, Jenkins, GitLab, Docker, Kubernetes · 2021</p>
        <p className="mt-3 text-gray-300">Additional training: Node.js, TypeScript, Google Cloud Fundamentals, Agentic AI and AI Agents.</p>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
