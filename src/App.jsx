import { useContext, useState } from "react";
import { Feed, SearchFeed } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Searchbar, Sidebar, VideoDetails } from "./components";
import ChannelDetails from "./components/ChannelDetails";
import { GiHamburgerMenu } from "react-icons/gi";
import { UDudeContext } from "./context/UDudeContext";
function App() {
	const { setDrawerOpen } = useContext(UDudeContext);
	return (
		<BrowserRouter>
			<div className='flex overflow-hidden min-w-screen bg-slate-100 '>
				<Sidebar />
				<div className='flex flex-col flex-1 min-w-0 overflow-auto pl-8'>
					<div className='flex items-center w-full justify-between'>
						<GiHamburgerMenu
							onClick={() => setDrawerOpen(true)}
							className='cursor-pointer text-3xl text-gray-700'
						/>
						<Searchbar />
					</div>
					<Routes>
						<Route exact path='/' element={<Feed />} />
						<Route path='/video/:id' element={<VideoDetails />} />
						<Route path='/channel/:id' element={<ChannelDetails />} />
						<Route path='/search/:searchTerm' element={<SearchFeed />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
