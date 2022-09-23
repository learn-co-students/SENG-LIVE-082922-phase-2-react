import { useState } from "react";

const initialState = {
  name: "",
  about: "",
  phase: "",
  link: "",
  image: ""
}

const ProjectForm = ({ onAddProject }) => {
  const [formData, setFormData] = useState(initialState);

  const { name, about, phase, link, image } = formData;
  // equivalent to:
  // const name = formData.name
  // const about = formData.about
  // const phase = formData.phase
  // const link = formData.link
  // const image = formData.image

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;
    console.log("name: " + name);
    console.log("value: " + value);
    
    setFormData(formData => {
      return {
       ...formData,
        [name]: value // equivalent to: [e.target.name]: e.target.value
      };
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData: " + JSON.stringify(formData));
    onAddProject(formData);
    setFormData(initialState);
  }

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input 
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleOnChange}
        />

        <label htmlFor="about">About</label>
        <textarea 
          id="about"
          name="about"
          value={about}
          onChange={handleOnChange}
        />

        <label htmlFor="phase">Phase</label>
        <select 
          name="phase" 
          id="phase"
          value={phase}
          onChange={handleOnChange}
        >
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input 
          type="text" 
          id="link" 
          name="link" 
          value={link}
          onChange={handleOnChange}
        />

        <label htmlFor="image">Screenshot</label>
        <input 
          type="text" 
          id="image" 
          name="image" 
          value={image}
          onChange={handleOnChange}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
