import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { UDudeProvider } from "./context/UDudeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<UDudeProvider>
			<App />
		</UDudeProvider>
	</React.StrictMode>
);
