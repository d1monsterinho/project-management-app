import ProjectsSidebar from "./components/ProjectsSidebar/ProjectsSidebar";
import NewProjectMenu from "./components/NewProjectMenu/NewProjectMenu";
import NoProjectSelectedPlaceholder from "./components/NoProjectSelectedPlaceholder/NoProjectSelectedPlaceholder";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      <NoProjectSelectedPlaceholder />
    </main>
  );
}

export default App;
