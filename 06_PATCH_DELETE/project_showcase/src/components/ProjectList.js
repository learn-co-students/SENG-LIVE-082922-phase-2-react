import { useEffect, useState } from 'react';
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({
  projects,
  onSelectedPhaseChange,
  onEditProject,
  setSearchQuery
}) => {
  const [searchInputText, setSearchInputText] = useState("");
 

  const handleSearch = (e) => {
    setSearchInputText(e.target.value)
  }

  useEffect(() => {
    const scheduledUpdateTimeoutID = setTimeout(() => { 
      setSearchQuery(searchInputText);
    }, 300)

    return () => {
      clearTimeout(scheduledUpdateTimeoutID);
    }
  },[searchInputText, setSearchQuery])


  const projectListItems = projects.map(project => (
    <ProjectListItem
      key={project.id}
      project={project}
      onEditProject={onEditProject}
    />
  ))

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button onClick={() => onSelectedPhaseChange("")}>All</button>
        <button onClick={() => onSelectedPhaseChange("5")}>Phase 5</button>
        <button onClick={() => onSelectedPhaseChange("4")}>Phase 4</button>
        <button onClick={() => onSelectedPhaseChange("3")}>Phase 3</button>
        <button onClick={() => onSelectedPhaseChange("2")}>Phase 2</button>
        <button onClick={() => onSelectedPhaseChange("1")}>Phase 1</button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
      />

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;