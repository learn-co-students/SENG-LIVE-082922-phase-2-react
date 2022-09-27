import { useState, useEffect } from 'react';

import ProjectForm from "./ProjectForm";
import ProjectEditForm from "./ProjectEditForm";
import ProjectList from "./ProjectList";

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);
  const [projectToEdit, setProjectToEdit] = useState(null);
  const [selectedPhase, setSelectedPhase] = useState("");
  const [searchQuery, setSearchQuery] = useState("")

  // if the selectedPhase or the searchQuery changes
  // run this side effect again with a new fetch url
  // to load the appropriate projects from the API
  useEffect(() => {
    let fetchUrl = "http://localhost:4000/projects";
    if (selectedPhase && searchQuery) {
      fetchUrl += `?q=${encodeURI(searchQuery)}&phase=${selectedPhase}`;
    } else if (searchQuery) {
      fetchUrl += `?q=${encodeURI(searchQuery)}`;
    } else if (selectedPhase) { 
      fetchUrl += `?phase=${selectedPhase}`;
    }
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((projectsData) => setProjects(projectsData));
  }, [selectedPhase, searchQuery])
  
  const onSelectedPhaseChange = (selectedPhase) => {
    setSelectedPhase(selectedPhase);
  }
  
  const onAddProject = (newProject) => {
    setProjects(projects => [...projects, newProject])
  }

  const onUpdateProject = () => {
    setProjectToEdit(null);
  };

  const onEditProject = (projectToEdit) => {
    setProjectToEdit(projectToEdit);
  };

  const renderForm = () => {
    if (projectToEdit) {
      return (
        <ProjectEditForm
          projectToEdit={projectToEdit}
          onUpdateProject={onUpdateProject}
        />
      );
    } else {
      return <ProjectForm onAddProject={onAddProject} />;
    }
  };

  return (
    <>
      {renderForm()}
      <ProjectList
        onSelectedPhaseChange={onSelectedPhaseChange}
        projects={projects}
        onEditProject={onEditProject}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </>
  )
}

export default ProjectsContainer;