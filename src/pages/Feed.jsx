import React, { useContext, useEffect, useState } from "react";
import { UDudeContext } from "../context/UDudeContext";
import { Videos } from "../components";

const Feed = () => {
	const { selectedCategory, fetchYoutube } = useContext(UDudeContext);
	const [videos, setVideos] = useState([]);
	useEffect(() => {
		console.log("run");
		fetchYoutube(
			`search?q=${
				selectedCategory ? selectedCategory : "new"
			}&part=snippet&regionCode=US`
		).then((data) => {
			setVideos(data.items);
		});
	}, [selectedCategory]);
	return (
		<div className='flex flex-col w-full'>
			<p className='font-semibold text-black text-xl py-4'>
				{selectedCategory ? selectedCategory : "Home"}
			</p>
			<Videos videos={videos} />
		</div>
	);
};

export default Feed;
