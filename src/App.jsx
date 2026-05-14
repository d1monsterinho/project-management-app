import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar/ProjectsSidebar";
import NewProjectMenu from "./components/NewProjectMenu/NewProjectMenu";
import NoProjectSelectedPlaceholder from "./components/NoProjectSelectedPlaceholder/NoProjectSelectedPlaceholder";
import SelectedProject from "./components/SelectedProject/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function onAddProjectClick() {
    setProjectsState(prev => {
      return ({
        ...prev,
        selectedProjectId: null,
      });
    });
  }

  function onNewProjectMenuSaveClick(title, description, dueDate) {
    setProjectsState(prev => {
      const newProject = {
        id: Math.random(),
        title: title,
        description: description,
        dueDate: dueDate,
      };

      return ({
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      });
    });
  }

  function onNewProjectMenuCancelClick() {
    setProjectsState(prev => {
      return ({
        ...prev,
        selectedProjectId: undefined,
      });
    });
  }

  function onSelectProjectClick(id) {
    setProjectsState(prev => ({
      ...prev,
      selectedProjectId: id,
    }));
  }

  function onDeleteProjectButtonClick(id) {
    setProjectsState(prev => ({
      selectedProjectId: undefined,
      projects: prev.projects.filter(project => project.id !== id),
    }))
  }

  let content = <NoProjectSelectedPlaceholder onCreateProjectClick={onAddProjectClick} />;

  if (projectsState.selectedProjectId === null) {
    content = <NewProjectMenu onSaveClick={onNewProjectMenuSaveClick} onCancelClick={onNewProjectMenuCancelClick} />;
  } else if (projectsState.selectedProjectId) {
    content = <SelectedProject
     project={projectsState.projects.find(project => project.id === projectsState.selectedProjectId)}
     onDeleteClick={onDeleteProjectButtonClick}
     />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onAddProjectClick={onAddProjectClick}
        projectsState={projectsState}
        handleSelectProject={onSelectProjectClick}
      />
      {content}
    </main>
  );
}

export default App;
