import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos }) => {
	return (
		<div className='w-full flex flex-wrap justify-start gap-4'>
			{videos.map((i, id) => (
				<div key={id}>
					{i.id.videoId && <VideoCard video={i} />}
					{i.id.channelId && <ChannelCard channel={i} />}
				</div>
			))}
		</div>
	);
};

export default Videos;
