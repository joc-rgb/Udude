import axios from "axios";
import { createContext, useState } from "react";

export const UDudeContext = createContext();

export const UDudeProvider = ({ children }) => {
	const [selected, setSelected] = useState("Home");
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const rapid_key = import.meta.env.VITE_RAPID_KEY
	const BASE_URL = "https://youtube-v31.p.rapidapi.com";
	const options = {
		params: {
			maxResults: 30,
		},

		headers: {
			"X-RapidAPI-Key": rapid_key,
			"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
		},
	};

	const fetchYoutube = async (url) => {
		
		const { data } = await axios.get(`${BASE_URL}/${url}`, options);
		return data;
	};

	return (
		<UDudeContext.Provider
			value={{
				selected,
				setSelected,
				selectedCategory,
				setSelectedCategory,
				fetchYoutube,
				drawerOpen,
				setDrawerOpen,
			}}
		>
			{children}
		</UDudeContext.Provider>
	);
};
