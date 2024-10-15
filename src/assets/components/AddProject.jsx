import { useRef } from "react";
import Button from "./Button";
import InputField from "./InputField";
export default function AddProject({
	projectModalStatus,
	handleShowModal,
	handleAddProject,
}) {
	const projectNameRef = useRef(null);
	const PojectDateRef = useRef(null);

	return (
		<div
			className={`flex-col items-center justify-center fixed inset-0 z-20 bg-[#00000059] ${
				projectModalStatus ? "flex" : "hidden"
			}`}>
			<form className="bg-yellow-50 p-5 rounded-3xl">
				<p>
					<span>
						<strong>Project Name</strong>
					</span>
					<InputField ref={projectNameRef} />
				</p>
				<p>
					<span>
						<strong>Date</strong>
					</span>
					<InputField type="date" ref={PojectDateRef} />
				</p>
				<div className="flex gap-3 justify-end">
					<Button
						isPrimarry={false}
						onClick={(e) => {
							e.preventDefault();
							handleShowModal();
						}}>
						Cancel
					</Button>
					<Button
						isPrimarry={true}
						onClick={(e) => {
							e.preventDefault();
							if (
								projectNameRef.current.value != "" &&
								PojectDateRef.current.value != ""
							) {
								const newProject = {
									id: crypto.randomUUID(),
									projectName: projectNameRef.current.value,
									projectDate: PojectDateRef.current.value,
									projectTask: {taskId:6, tasks: ["Task 6"]},
								};
								handleAddProject(newProject);
								handleShowModal();
								projectNameRef.current.value = "";
								PojectDateRef.current.value = "";
							} else {
								alert("Enter Valid Input");
							}
						}}>
						Save
					</Button>
				</div>
			</form>
		</div>
	);
}
