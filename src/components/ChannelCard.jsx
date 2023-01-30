import React from "react";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";

const ChannelCard = ({ channel, type }) => {
	return (
		<Link to={`/channel/${channel?.id?.channelId || channel?.id}`}>
			<div
				className={`flex flex-col rounded-xl ${
					channel?.snippet?.title
						? "w-full items-center justify-center"
						: "max-w-xs shadow-xl drop-shadow-xl"
				}  gap-5 p-5`}
			>
				<img
					src={channel?.snippet?.thumbnails?.high?.url}
					className='rounded-full'
					width={150}
					height={150}
				/>

				<div className='w-full flex gap-2 items-center justify-center text-center'>
					<p className='text-lg font-bold text-clip overflow-hidden'>
						{channel?.snippet?.channelTitle || channel?.snippet?.title}
					</p>
					<MdVerified />
					{channel.statistics?.subscriberCount && (
						<p className='text-xs text-gray-700 text-clip overflow-hidden'>
							{channel.statistics?.subscriberCount?.toLocaleString("en-US")}{" "}
							Subscribers
						</p>
					)}
				</div>
			</div>
		</Link>
	);
};

export default ChannelCard;
