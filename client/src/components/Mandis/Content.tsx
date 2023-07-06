import React from "react";
import { FaDownload } from "react-icons/fa";
const Content = (props: any) => {
	return (
		<tr className="">
			<td className="p-3 text-sm text-gray-900  whitespace-nowrap">
				<div className="flex flex-col">
					<span>{props.name}</span>
					<span> {props.date}</span>
					<span>
						<FaDownload />
					</span>
				</div>
			</td>
			<td className="p-3 text-sm text-gray-900 text-center  whitespace-nowrap">
				<a
					href="#"
					className="font-semibold text-blue-500 hover:underline">
					<span className="flex justify-center align-middle space-x-5">
						<span>Download</span>
						<FaDownload />
					</span>
				</a>
			</td>
		</tr>
	);
};

export default Content;
