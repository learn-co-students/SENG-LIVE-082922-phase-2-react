import ProjectListItem from "./ProjectListItem"; 
import projects from "../projects";

const ProjectList = () => {
  console.log(projects);
  // const projectListItems = [
  //   <ProjectListItem key={projects[0].id} project={projects[0]} />,
  //   <ProjectListItem key={projects[1].id} project={projects[1]} />,
  //   <ProjectListItem key={projects[2].id} project={projects[2]} />,
  //   <ProjectListItem key={projects[3].id} project={projects[3]} />,
  //   <ProjectListItem key={projects[4].id} project={projects[4]} />
  // ]

  const projectListItems = projects.map(project => {
    return <ProjectListItem key={project.id} project={project} />
  })

  return (
    <section>
      <h1>All Projects</h1>
      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <ul className="cards">
        {projectListItems}
      </ul>
    </section>
  )
}

export default ProjectList;