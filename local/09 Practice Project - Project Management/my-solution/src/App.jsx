import { useState, useRef } from 'react';

import SideBar from './components/SideBar';
import NoProject from './components/NoProject';
import ProjectForm from './components/ProjectForm';
import ProjectDetail from './components/ProjectDetail';

function App() {
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [projects, setProjects] = useState([]);
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);
  // const [activeProject, setActiveProject] = useState({});

  const isProjectSelected = activeProjectIndex !== null;
  const hideNoProject = !showProjectForm && !isProjectSelected;
  const activeProject =
    activeProjectIndex >= 0 ? projects[activeProjectIndex] : {};

  function handleShowProjectForm() {
    setActiveProjectIndex(null);
    setShowProjectForm(true);
  }

  function handleCloseProjectForm() {
    setShowProjectForm(false);
  }

  function handleSaveNewProject(projectTitle, projectDescription) {
    setShowProjectForm(false);
    // console.log(projectTitle, projectDescription);
    setProjects((prevValue) => [
      ...prevValue,
      {
        projectTitle,
        projectDescription,
        tasks: [],
      },
    ]);
  }

  function handleSeeProjectDetail(index) {
    setActiveProjectIndex(index);
    // setActiveProject(projects[index]);
  }

  // console.log(activeProjectIndex, isProjectSelected);

  function handleAddNewTask(taskName) {
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.map((project, index) => {
        if (index === activeProjectIndex) {
          return {
            projectTitle: project.projectTitle,
            projectDescription: project.projectDescription,
            tasks: [...project.tasks, taskName],
          };
        } else {
          return project;
        }
      });

      console.log(updatedProjects);

      return updatedProjects;
    });
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar
          handleShowProjectForm={handleShowProjectForm}
          projects={projects}
          handleSeeProjectDetail={handleSeeProjectDetail}
        />
        <div>
          {hideNoProject && (
            <NoProject
              handleShowProjectForm={handleShowProjectForm}
              projects={projects}
            />
          )}
          {showProjectForm && (
            <ProjectForm
              handleCloseProjectForm={handleCloseProjectForm}
              handleSaveNewProject={handleSaveNewProject}
            />
          )}
          {isProjectSelected && (
            <ProjectDetail
              handleAddNewTask={handleAddNewTask}
              project={activeProject}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
