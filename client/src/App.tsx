import { Route, Routes } from "react-router";
import Governance from "./pages/Governance";
import Know from "./pages/Know";
import Life from "./pages/Life";
import Mandis from "./pages/Mandis";
import Research from "./pages/Research";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admission from "./pages/Admission";
import Careers from "./pages/Careers";
import Literature from "./pages/Literature";
import Law from "./pages/Law";
import Contact from "./pages/Contact";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/governance" element={<Governance />} />
				<Route path="/literature" element={<Literature />} />
				<Route path="/know" element={<Know />} />
				<Route path="/life" element={<Life />} />
				<Route path="/mandis" element={<Mandis />} />
				<Route path="/research" element={<Research />} />
				<Route path="/login" element={<Login />} />
				<Route path="/admission" element={<Admission />} />
				<Route path="/careers" element={<Careers />} />
				<Route path="/law" element={<Law />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
