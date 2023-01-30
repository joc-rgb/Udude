import React, { useContext, useEffect } from "react";
import {
	NavLink,
	Router,
	useLocation,
	useNavigate,
	useParams,
} from "react-router-dom";
import {
	MdOutlineShareLocation,
	MdHome,
	MdOutlineQueueMusic,
	MdOutlineBarChart,
	MdLibraryMusic,
} from "react-icons/md";
import { categories } from "../utils/constant";
import { UDudeContext } from "../context/UDudeContext";

const links = [{ name: "Home", to: "/", icon: MdHome }];

const NavLinks = ({ handleClick }) => {
	const { selected, setSelected } = useContext(UDudeContext);

	return (
		<div className='mt-10 flex flex-col gap-1 w-full items-center justify-center'>
			{links.map((item) => (
				<div
					key={item.name}
					onClick={() => handleClick(item.name)}
					className={`hover:bg-slate-300 rounded-md w-full flex items-center justify-center pl-6 ${
						selected === item.name && "bg-slate-300"
					}`}
				>
					<NavLink
						to={item.to}
						className={`flex flex-row justify-start items-center my-2 text-md font-medium text-purple-500 hover:text-purple-600  rounded-md w-full z-50`}
					>
						<item.icon className='w-6 h-6 mr-2' />
						{item.name}
					</NavLink>
				</div>
			))}
		</div>
	);
};

const Sidebar = () => {
	const {
		selected,
		setSelected,
		selectedCategory,
		setSelectedCategory,
		drawerOpen,
		setDrawerOpen,
	} = useContext(UDudeContext);

	//Router
	const location = useLocation();
	const navigate = useNavigate();

	const handleClick = (pageName) => {
		setSelectedCategory(null);
		setSelected(pageName);
	};
	const handleCategoriesClick = (categoryName) => {
		console.log("Click category", categoryName);
		console.log(selectedCategory);
		setSelected(categoryName);
		setSelectedCategory(categoryName);
	};

	useEffect(() => {
		if (
			location.pathname.includes("channel") ||
			location.pathname.includes("video")
		) {
			navigate("/");
		}
	}, [selectedCategory]);
	return (
		<>
			{drawerOpen && (
				<div className='fixed h-full w-full z-50 left-0 top-0'>
					<div
						className='fixed h-full w-full left-0 top-0 bg-black bg-opacity-50 z-[-1]'
						onClick={() => setDrawerOpen(false)}
					></div>

					<div className='z-50 h-screen  flex flex-col pt-8 items-center w-72  bg-slate-200 text-purple-500 gap-5 fixed'>
						<p className='font-bold text-2xl text-purple-500'>UDude</p>
						<NavLinks handleClick={handleClick} />
						<div className='mt-10 flex flex-col gap-1 w-full'>
							{categories.map((c) => (
								<div
									key={c.name}
									className={`hover:bg-slate-300 rounded-md w-full flex items-center justify-center pl-6 cursor-pointer ${
										selected === c.name && "bg-slate-300"
									}`}
									onClick={() => handleCategoriesClick(c.name)}
								>
									<div className='flex flex-row justify-start items-center my-2 text-md font-medium text-purple-500 hover:text-purple-600  rounded-md w-full z-50 '>
										<c.icon className='w-6 h-6 mr-2' />
										<p>{c.name}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Mobile sidebar */}
					<div className='md:hidden block '></div>
				</div>
			)}
		</>
	);
};

export default Sidebar;
