import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({
  projects,
  onEditProject,
  onDeleteProject,
  onUpdateProject,
  setSelectedPhase,
  setSearchQuery
}) => {
  const [searchInputText, setSearchInputText] = useState("");

  const projectItems = projects.map((project) => {
    return (
      <ProjectListItem
        key={project.id}
        project={project}
        onEditProject={onEditProject}
        onDeleteProject={onDeleteProject}
        onUpdateProject={onUpdateProject}
      />
    );
  });

  const { phase } = useParams();

  const handleOnChange = (e) => setSearchInputText(e.target.value);

  useEffect(() => {
    const scheduledUpdate = setTimeout(() => {
      setSearchQuery(searchInputText);
    }, 300)
    
    return () => {
      clearTimeout(scheduledUpdate);
    }
  }, [setSearchQuery, searchInputText])

  useEffect(() => {
    if (phase) {
      setSelectedPhase(phase);
    } 
  },[phase, setSelectedPhase])

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <NavLink className="button" exact to="/projects" onClick={() => setSelectedPhase("")}>All</NavLink>
        <NavLink className="button" to="/projects/phase/5" onClick={() => setSelectedPhase("5")}>Phase 5</NavLink>
        <NavLink className="button" to="/projects/phase/4" onClick={() => setSelectedPhase("4")}>Phase 4</NavLink>
        <NavLink className="button" to="/projects/phase/3" onClick={() => setSelectedPhase("3")}>Phase 3</NavLink>
        <NavLink className="button" to="/projects/phase/2" onClick={() => setSelectedPhase("2")}>Phase 2</NavLink>
        <NavLink className="button" to="/projects/phase/1" onClick={() => setSelectedPhase("1")}>Phase 1</NavLink>
      </div>
      <input type="text" placeholder="Search..." onChange={handleOnChange} />

      <ul className="cards">{projectItems}</ul>
    </section>
  );
};

export default ProjectList;
