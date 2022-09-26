import { useState, useEffect } from 'react';

import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);
  const [selectedPhase, setSelectedPhase] = useState("");
  const [searchQuery, setSearchQuery] = useState("")

  const onSelectedPhaseChange = (selectedPhase) => {
    setSelectedPhase(selectedPhase);
  }

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
  },[selectedPhase, searchQuery])
  
  const onAddProject = (newProject) => {
    setProjects(projects => [...projects, newProject])
  }

  return (
    <>
      <ProjectForm onAddProject={onAddProject} />
      <ProjectList
        onSelectedPhaseChange={onSelectedPhaseChange}
        projects={projects}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </>
  )
}

export default ProjectsContainer;