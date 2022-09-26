import { useState } from 'react';

import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);

  const onLoadProjects = () => {
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projectsData) => setProjects(projectsData));
  }
  
  const onAddProject = (newProject) => {
    setProjects(projects => [...projects, newProject])
  }

  return (
    <>
      <ProjectForm onAddProject={onAddProject} />
      <ProjectList
        onLoadProjects={onLoadProjects}
        projects={projects}
      />
    </>
  )
}

export default ProjectsContainer;