import Button from "./Button";
import FolderIcon from "@mui/icons-material/Folder";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import CloseIcon from "@mui/icons-material/Close";

export default function Sidebar({
	handleShowModal,
	projectList,
	handleProjectOpen,
	isSideBarOpen,
	handleOpenSidebar,
}) {
	return (
		<div
			className={`md-p:fixed md-p:w-[100%] basis-1/5 duration-300 z-10 ${
				isSideBarOpen ? "left-0" : "left-[-100%]"
			}`}>
			{/* <div className="fixed inset-0 bg-[#00000059] hidden md-p:block z-0"></div> */}
			<aside
				className={`min-h-[100vh] bg-amber-500 relative md-p:w-[70%] rounded-r-3xl py-10 px-5 `}>
				<button
					onClick={handleOpenSidebar}
					className="absolute right-5 top-5 hidden md-p:block p-2 rounded-full bg-slate-100 hover:bg-slate-200 active:bg-slate-300 active:scale-95 duration-200">
					<CloseIcon />
				</button>

				<h1>Projects</h1>
				<div>
					<Button isPrimarry={true} onClick={handleShowModal}>
						Add Project
					</Button>
					<ol>
						{/* <li className="bg-amber-600 rounded-lg cursor-pointer px-3 py-1 hover:bg-amber-400 duration-200">
						{isProjectOpened ? <FolderOpenIcon /> : <FolderIcon />}
						Project
					</li> */}

						{projectList.projects.map((project) => (
							<li
								className={`bg-amber-600 rounded-lg cursor-pointer px-3 py-1 ${
									projectList.openedProject == project.id &&
									"bg-amber-800"
								} hover:bg-amber-700 duration-200`}
								key={project.id}
								onClick={() => {
									handleProjectOpen(project.id);
								}}>
								{projectList.openedProject == project.id ? (
									<FolderOpenIcon />
								) : (
									<FolderIcon />
								)}
								{project.projectName}
							</li>
						))}
					</ol>
				</div>
			</aside>
		</div>
	);
}
