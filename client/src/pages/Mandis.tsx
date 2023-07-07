import React from "react";
import Content from "../components/Mandis/Content";

const data = [
	{ name: "INTERAL QUALITY ASSURANCE CELL", date: "May 3,2022" },
	{ name: "GRIEVANCE COMMITTE", date: "May 3,2022" },
	{ name: "SEXUAL HARASSMENT COMMITTEE", date: "May 3,2022" },
];

const Mandis = () => {
	return (
		<main className="space-y-4 bg-slate-100  mx-2 md:mx-3 w-full">
			<div className="flex justify-center align-middle">
				<h1 className="text-2xl font-bold mt-6">
					Mandatory Disclosure
				</h1>
			</div>

			<div className="p-1 py-2 overflow-auto rounded-lg shadow space-y-1">
				<table className="w-full">
					<tbody className="divide-y  divide-gray-200 bg-slate-50">
						{data.map((item) => (
							<Content name={item.name} date={item.date} />
						))}
					</tbody>
				</table>
			</div>
		</main>
	);
};

export default Mandis;
