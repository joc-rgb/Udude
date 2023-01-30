import React, { useContext, useEffect, useState } from "react";
import { UDudeContext } from "../context/UDudeContext";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { MdCheckCircle } from "react-icons/md";
import Videos from "./Videos";

const VideoDetails = () => {
	const [videoDetails, setVideoDetails] = useState({});
	const [videos, setVideos] = useState([]);
	const { fetchYoutube } = useContext(UDudeContext);
	const { id } = useParams();
	useEffect(() => {
		fetchYoutube(
			`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`
		).then((data) => {
			setVideoDetails(data.items[0]);
		});

		fetchYoutube(
			`search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=50`
		).then((data) => {
			setVideos(data.items);
		});
	}, [id]);
	return (
		<div className='w-full flex flex-col gap-10 md:flex-row'>
			<div className='sticky w-full gap-8 pt-4'>
				<ReactPlayer
					url={`https://www.youtube.com/watch?v=${id}`}
					controls
					classname='react-player'
				/>
				<p className='text-lg font-semibold'>{videoDetails?.snippet?.title}</p>

				<div className='flex justify-between'>
					<Link to={`/channel/${videoDetails?.snippet?.channelId}`}>
						<div className='flex items-center text-center gap-1 '>
							<p className=' gap-2'>{videoDetails?.snippet?.channelTitle}</p>
							<MdCheckCircle className='font-bold' />
						</div>
					</Link>
					<div className='flex gap-4 text-sm'>
						<p>
							{videoDetails.statistics?.viewCount.toLocaleString("en-US")} views
						</p>
						<p>
							{videoDetails.statistics?.likeCount.toLocaleString("en-US")} likes
						</p>
					</div>
				</div>
				<div className='flex flex-col'>
					<p className='font-semibold text-base text-gray-500'>
						Published At {videoDetails?.snippet?.publishedAt}
					</p>
					<p className='text-gray-800 text-xs '>
						{videoDetails?.snippet?.description}
					</p>
				</div>
			</div>
			<div className='flex flex-col'>
				<p className='font-bold text-lg'>Suggested Videos</p>
				{videos && <Videos videos={videos} />}
			</div>
		</div>
	);
};

export default VideoDetails;
