import PostAddIcon from "@mui/icons-material/PostAdd";
import Button from "./Button";
export default function EmptyProject({handleShowModal}) {
	return (
		<div className="min-h-[100vh] basis-4/5 md-p:basis-[100%] flex flex-col justify-center items-center text-center">
			<PostAddIcon className="!w-[150px] !h-[150px] text-amber-500" />
            <h2>No Project Found Add some project to stay organized</h2>
            <Button isPrimarry={true} onClick={handleShowModal} >Add Project</Button>
		</div>
	);
}
