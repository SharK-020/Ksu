import { Route, Routes } from "react-router";
import Governance from "./pages/Governance";
import Schools from "./pages/Schools";
import Know from "./pages/Know";
import Life from "./pages/Life";
import Mandis from "./pages/Mandis";
import Research from "./pages/Research";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admission from "./components/Home/Admission";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/governance" element={<Governance />} />
				<Route path="/schools" element={<Schools />} />
				<Route path="/know" element={<Know />} />
				<Route path="/life" element={<Life />} />
				<Route path="/mandis" element={<Mandis />} />
				<Route path="/research" element={<Research />} />
				<Route path="/login" element={<Login />} />
				<Route path="/admission" element={<Admission />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
