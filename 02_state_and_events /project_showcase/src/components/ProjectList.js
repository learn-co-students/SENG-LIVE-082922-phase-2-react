import { useState } from "react";
import ProjectListItem from "./ProjectListItem";

import projects from "../projects";

const ProjectList = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const searchResults = projects.filter(project => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const projectListItems = searchResults.map(project => {
    return <ProjectListItem key={project.id} project={project} />
  })

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }


  console.log('ProjectList render')
  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
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
