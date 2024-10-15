export default function Button({ children, isPrimarry, ...props }) {
	return (
		<button
			className={`${
				isPrimarry
					? "bg-amber-900 text-stone-200 hover:bg-amber-800"
					: "bg-amber-50 text-stone-950 hover:bg-amber-100"
			} py-3 px-5 rounded-xl font-bold border-[1px] border-amber-900   active:scale-95 duration-200`}
			{...props}>
			{children}
		</button>
	);
}
