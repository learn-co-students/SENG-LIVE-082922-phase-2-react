const ProjectListItem = ({ project }) => {
  console.log(project);
  return (
    <li className="card">
      <figure className="image">
        <img src={project.image} alt={`${project.name} app`} />
      </figure>
      <section className="details">
        <h4>{project.name}</h4>
        <p>{project.about}</p>
        <p><a href={project.link}>Link</a></p>
      </section>
      <footer className="extra">
        <span className="badge blue">Phase {project.phase}</span>
      </footer>
    </li>
  );
}

export default ProjectListItem;