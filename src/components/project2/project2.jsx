import React, { useState } from 'react';
import './project2.css';

const Project = () => {
  const [projects, setProjects] = useState([
    {
      sr: 1,
      projectTitle: 'Project XYZ',
      description: 'Lorem ipsum dolor sit amet...',
    },
  ]);

  const handleAddProject = () => {
    const newProject = {
      sr: projects.length + 1,
      projectTitle: 'New Project',
      description: 'Add your description here...',
    };
    setProjects([...projects, newProject]);
  };

  return (
    <div className='project'>
      <h2 className='Mainhead1'>PROJECTS</h2>
      <table>
        <thead>
          <tr>
            <th>SR. NO.</th>
            <th>PROJECT TITLE</th>
            <th>DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((item, index) => (
            <tr key={index}>
              <td>{item.sr}</td>
              <td>
                <p>{item.projectTitle}</p>
              </td>
              <td>
                <p>{item.description}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='addButton' onClick={handleAddProject}>
        Add Project
      </button>
    </div>
  );
};

export default Project;
