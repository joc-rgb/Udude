import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UDudeContext } from "../context/UDudeContext";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const ChannelDetails = () => {
	const [channelDetails, setChannelDetails] = useState(null);
	const [channelVideos, setChannelVideos] = useState([]);

	const { fetchYoutube } = useContext(UDudeContext);
	const { id } = useParams();

	useEffect(() => {
		fetchYoutube(`channels?part=snippet%2Cstatistics&id=${id}`).then((data) =>
			setChannelDetails(data.items[0])
		);

		fetchYoutube(
			`search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`
		).then((data) => setChannelVideos(data.items));
	}, [id]);
	return (
		<div className='w-full flex flex-col'>
			{channelDetails && (
				<>
					<ChannelCard channel={channelDetails} type={"channelPage"} />
					<div className='flex flex-wrap gap-4'>
						{channelVideos.map((v, i) => (
							<VideoCard key={i} video={v} />
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default ChannelDetails;
