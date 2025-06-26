import { useState } from "react";
import { DefaultPage } from "./components/DefaultPage";
import { NewProject } from "./components/NewProject";
import { ProjectSideBar } from "./components/ProjectSideBar";
import { SelectedProject } from "./components/SelectedProject";

function App() {
  const [projects, setProjects] = useState({
    selectedProjectId: undefined,
    projectList: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjects((prev) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prev.selectedProjectId,
        id: taskId,
      };
      return {
        ...prev,
        tasks: [newTask, ...prev.tasks],
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjects((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((task) => task.id !== taskId),
      };
    });
  }

  const handleSelectProject = (id) => {
    setProjects((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  };

  const handleStartAddProject = () => {
    setProjects((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  };

  function handleCancelAddProject() {
    setProjects((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(project) {
    setProjects((prev) => {
      const projectId = Math.random();
      const newProject = {
        ...project,
        id: projectId,
      };
      return {
        ...prev,
        projectList: [...prev.projectList, newProject],
        selectedProjectId: undefined,
      };
    });
  }

  function handleDeleteFunction() {
    setProjects((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projectList: prev.projectList.filter(
          (project) => project.id !== prev.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = projects.projectList.find(
    (project) => project.id === projects.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteFunction}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projects.tasks.filter(
        (task) => task.projectId === projects.selectedProjectId
      )}
    />
  );

  if (projects.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projects.selectedProjectId === undefined) {
    content = <DefaultPage onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onStartAddProject={handleStartAddProject}
        projectList={projects.projectList}
        onSelectProject={handleSelectProject}
        selectedProjectId={projects.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
