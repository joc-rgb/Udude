import React from "react";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
	return (
		<Link to={`/video/${video?.id?.videoId}`}>
			<div className='flex flex-col rounded-xl max-w-[300px] shadow-xl drop-shadow-xl '>
				<img
					src={video?.snippet?.thumbnails?.high?.url}
					className='rounded-xl'
					width={350}
					height={120}
				/>
				<div className='flex flex-col p-2'>
					<p className='font-semibold text-clip overflow-hidden'>
						{video?.snippet?.title?.replace("&#39;", "'")}
					</p>
					<div className='flex gap-2'>
						<p className='text-sm font-bold text-clip overflow-hidden'>
							{video?.snippet?.channelTitle}
						</p>
						<MdVerified />
					</div>
				</div>
			</div>
		</Link>
	);
};

export default VideoCard;
