import { useState } from "react";
import "./App.css";
import AddProject from "./assets/components/AddProject";
import Sidebar from "./assets/components/Sidebar";
import EmptyProject from "./assets/components/EmptyProject";
import Project from "./assets/components/Project";
import DeselectIcon from "@mui/icons-material/Deselect";
import MenuIcon from '@mui/icons-material/Menu';
// const poje = {
// 	id: 6,
// 	projectName: "Project 6",
// 	projectDate: "14/10/2024",
// 	projectTask: {
// 		taskId: 6,
// 		tasks: [{ taskName: "Task 6", completed: false }],
// 	},
// }

function App() {
	const [isProjectModalActive, setIsProjectModalActive] = useState(false);
	const [projectList, setProjectList] = useState({
		openedProject: undefined,
		projects: [],
	});
	const [isSideBarOpen, setIsSideBarOpen] = useState(false)

	function handleShowModal() {
		setIsProjectModalActive((prev) => !prev);
	}

	function handleAddProject(newProject) {
		// Ensure newProject has a properly structured projectTask
		const newProjectWithTasks = {
			...newProject,
			projectTask: {
				taskId: new Date().getTime(), // Generate a unique taskId
				tasks: [], // Initialize with an empty array
			},
		};

		setProjectList((prev) => {
			const updatedProjectList = {
				...prev,
				openedProject: newProjectWithTasks.id, // Open the new project
				projects: [...prev.projects, newProjectWithTasks],
			};
			return updatedProjectList;
		});
	}

	function handleDeleteProject(selectedProject) {
		setProjectList((prev) => {
			// Filter out the selected project from the project list
			const updatedProjects = prev.projects.filter(
				(project) => project.id !== selectedProject
			);

			const updatedProductList = {
				...prev,
				// If no projects remain after deletion, set `openedProject` to `undefined`
				openedProject: updatedProjects.length === 0 ? undefined : null,
				projects: updatedProjects,
			};

			return updatedProductList;
		});
	}

	function handleProjectOpen(id) {
		setProjectList((prev) => {
			const UpdatedProductList = { ...prev, openedProject: id };
			return UpdatedProductList;
		});
	}

	function handleAddingTask(selectedProject, newTask) {
		setProjectList((prev) => {
			const updatedProjectList = prev.projects.map((project) => {
				if (project.id === selectedProject.id) {
					return {
						...project,
						projectTask: {
							...project.projectTask,
							tasks: [
								...project.projectTask.tasks,
								{ taskName: newTask, completed: false }, // Add a new task object
							],
						},
					};
				}
				return project;
			});

			return { ...prev, projects: updatedProjectList };
		});
	}

	const selectedProject = projectList.projects.find(
		(project) => project.id == projectList.openedProject
	);

	function handleDeleteTask(projectId, taskIndex) {
		setProjectList((prev) => {
			const updatedProjectList = prev.projects.map((project) => {
				if (project.id === projectId) {
					return {
						...project,
						projectTask: {
							...project.projectTask,
							tasks: project.projectTask.tasks.filter(
								(_, index) => index !== taskIndex
							), // Remove the task at taskIndex
						},
					};
				}
				return project;
			});

			return { ...prev, projects: updatedProjectList };
		});
	}

	function handleToggleCompleteTask(projectId, taskIndex) {
		setProjectList((prev) => {
			const updatedProjectList = prev.projects.map((project) => {
				if (project.id === projectId) {
					return {
						...project,
						projectTask: {
							...project.projectTask,
							tasks: project.projectTask.tasks.map(
								(task, index) =>
									index === taskIndex
										? {
												...task,
												completed: !task.completed,
										  }
										: task
							),
						},
					};
				}
				return project;
			});

			return { ...prev, projects: updatedProjectList };
		});
	}

	function handleOpenSidebar(){
		setIsSideBarOpen(prev => !prev)
	}

	return (
		<main className="flex prose max-w-none prose-ol:list-none prose-ol:m-0 prose-ol:p-0 bg-orange-100 relative">
			<button className="fixed left-5 top-5 hidden md-p:block p-2 rounded-full bg-slate-100 hover:bg-slate-200 active:bg-slate-300 active:scale-95 duration-200" onClick={handleOpenSidebar}>
				<MenuIcon />
			</button>
			
			<Sidebar
				handleShowModal={handleShowModal}
				projectList={projectList}
				handleProjectOpen={handleProjectOpen}
				isSideBarOpen={isSideBarOpen}
				handleOpenSidebar={handleOpenSidebar}
			/>
			{projectList.openedProject === undefined && (
				<EmptyProject handleShowModal={handleShowModal} />
			)}

			{projectList.openedProject === null && (
				<div className="flex flex-col items-center justify-center min-h-[100vh] md-p:basis-[100%]  basis-4/5">
					<DeselectIcon className="!w-[100px] !h-[100px]" />{" "}
					<h2>No Project is selected</h2>
				</div>
			)}
			{projectList.openedProject && (
				<Project
					selectedProject={selectedProject}
					handleDeleteProject={handleDeleteProject}
					handleAddingTask={handleAddingTask}
					handleDeleteTask={handleDeleteTask}
					handleToggleCompleteTask={handleToggleCompleteTask}
				/>
			)}
			<AddProject
				projectModalStatus={isProjectModalActive}
				handleShowModal={handleShowModal}
				handleAddProject={handleAddProject}
			/>
		</main>
	);
}

export default App;
