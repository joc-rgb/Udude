import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { UDudeProvider } from "./context/UDudeContext";
import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AnimatePresence exitBeforeEnter>
			<UDudeProvider>
				<App />
			</UDudeProvider>
		</AnimatePresence>
	</React.StrictMode>
);
