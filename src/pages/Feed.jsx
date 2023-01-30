import React, { useContext, useEffect, useState } from "react";
import { UDudeContext } from "../context/UDudeContext";
import { Videos } from "../components";

const Feed = () => {
	const { selectedCategory, fetchYoutube } = useContext(UDudeContext);
	const [videos, setVideos] = useState([]);
	useEffect(() => {
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
			<p className='font-semibold text-black'>
				{selectedCategory ? selectedCategory : "Home"}
			</p>
			<Videos videos={videos} />
		</div>
	);
};

export default Feed;
