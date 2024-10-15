import DeleteIcon from "@mui/icons-material/Delete";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useRef } from "react";
export default function Project({
	selectedProject,
	handleDeleteProject,
	handleAddingTask,
	handleDeleteTask,
	handleToggleCompleteTask,
}) {
	const addTaskInput = useRef();

	return (
		<div className="min-h-[100vh] md-p:basis-[100%] basis-4/5 p-5 ">
			<div className="flex justify-between items-center max-w-screen-md">
				<h2>{selectedProject.projectName}</h2>
				<button
					className="font-bold bg-orange-50 py-2 px-3 border-2 border-amber-600 rounded-xl"
					onClick={() => {
						handleDeleteProject(selectedProject.id);
					}}>
					Delete
				</button>
			</div>

			<h3>{selectedProject.projectDate}</h3>

			<div className="max-w-screen-md">
				<div className="rounded-2xl w-full flex overflow-hidden">
					<input
						className="py-2 px-3 outline-none basis-10/12"
						ref={addTaskInput}
						type="text"
					/>

					<button
						className="bg-amber-400 py-2 px-3 basis-2/12"
						onClick={() => {
							handleAddingTask(
								selectedProject,
								addTaskInput.current.value
							);
							addTaskInput.current.value = "";
						}}>
						Add Task
					</button>
				</div>
				{selectedProject.projectTask.tasks.length === 0 ? (
					<div className="flex flex-col items-center mt-5">
						<AssignmentIcon className="!w-[100px] !h-[100px]" />
                        <span><strong className="text-2xl">Add Tasks</strong></span>
					</div>
				) : (
					<ul className="p-0 list-none">
						{selectedProject.projectTask.tasks.map((task, i) => (
							<li
								className="bg-orange-50 flex justify-between p-2 rounded-xl"
								key={i}
								onClick={() =>
									handleToggleCompleteTask(
										selectedProject.id,
										i
									)
								}
								style={{
									textDecoration: task.completed
										? "line-through"
										: "none",
									cursor: "pointer",
								}}>
								{task.taskName}
								<button
									onClick={(e) =>
										handleDeleteTask(
											selectedProject.id,
											i,
											e
										)
									}>
									<DeleteIcon />
								</button>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}
