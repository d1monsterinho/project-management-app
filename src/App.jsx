import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar/ProjectsSidebar";
import NewProjectMenu from "./components/NewProjectMenu/NewProjectMenu";
import NoProjectSelectedPlaceholder from "./components/NoProjectSelectedPlaceholder/NoProjectSelectedPlaceholder";

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

  function onNewProjectMenuCancelClick() {
    setProjectsState(prev => {
      return ({
        ...prev,
        selectedProjectId: undefined,
      });
    });
  }

  const content = projectsState.selectedProjectId === null ?
    <NewProjectMenu onCancelClick={onNewProjectMenuCancelClick}/>
    :
    <NoProjectSelectedPlaceholder onCreateProjectClick={onAddProjectClick}/>;

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onAddProjectClick={onAddProjectClick}/>
      {content}
    </main>
  );
}

export default App;
