import { forwardRef } from "react";

const InputField = forwardRef((props, ref) => {
	return (
		<input
			ref={ref}
			className="bg-amber-100 py-2 px-3 rounded-xl w-full focus:outline-dashed focus:outline-2 focus:outline-amber-700"
			{...props} 
		/>
	);
});
InputField.displayName = "InputField";
export default InputField;
