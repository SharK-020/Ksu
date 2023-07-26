import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../state";

const Login = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const login = async (email: string, password: string) => {
		const response = await fetch("http://localhost:3001/auth/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password }),
		});

		const data = await response.json();

		if (typeof data.token === "string") {
			const token: string = data.token;
			dispatch(setLogin(token));
			navigate("/");
		}
	};

	return (
		<div
			className="container flex flex-col items-center 
    mx-auto p-4 pt-14 space-y-10">
			<div className="flex flex-col items-center justify-center">
				<div className="flex flex-col bg-gray-100 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
					<div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
						Login To Your Account
					</div>

					<div className="mt-10">
						<form action="#">
							<div className="flex flex-col mb-6">
								<label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
									E-Mail Address:
								</label>
								<div className="relative">
									<div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
										<svg
											className="h-6 w-6"
											fill="none"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
										</svg>
									</div>

									<input
										id="email"
										type="email"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
										className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
										placeholder="E-Mail Address"
									/>
								</div>
							</div>
							<div className="flex flex-col mb-6">
								<label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
									Password:
								</label>
								<div className="relative">
									<div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
										<span>
											<svg
												className="h-6 w-6"
												fill="none"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												viewBox="0 0 24 24"
												stroke="currentColor">
												<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
											</svg>
										</span>
									</div>

									<input
										id="password"
										type="password"
										value={password}
										onChange={(e) =>
											setPassword(e.target.value)
										}
										className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
										placeholder="Password"
									/>
								</div>
							</div>

							<div className="flex w-full">
								<button
									type="submit"
									className="flex items-center justify-center focus:outline-none text-white
									 text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full 
									 transition duration-150 ease-in"
									onSubmit={() => {
										login;
									}}>
									<span className="mr-2 uppercase">
										Login
									</span>
									<span>
										<svg
											className="h-6 w-6"
											fill="none"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
									</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
