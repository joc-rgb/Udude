import React, { useContext, useEffect, useState } from "react";
import { UDudeContext } from "../context/UDudeContext";
import { useParams } from "react-router-dom";
import { Videos } from "../components";

const SearchFeed = () => {
	const [videos, setVideos] = useState([]);
	const { fetchYoutube } = useContext(UDudeContext);

	const { searchTerm } = useParams();
	useEffect(() => {
		fetchYoutube(
			`search?q=${searchTerm}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`
		).then((data) => {
			setVideos(data.items);
		});
	}, [searchTerm]);
	return (
		<div className='flex flex-col w-full'>
			<p className='font-semibold text-black  py-4 text-xl'>
				Search Results for <span className='text-purple-800'>{searchTerm}</span>
			</p>
			<Videos videos={videos} />
		</div>
	);
};

export default SearchFeed;
