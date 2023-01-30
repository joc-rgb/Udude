import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Searchbar = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`search/${searchTerm}`);
	};
	return (
		<form
			className='w-full md:w-[800px] m-4 ml-8'
			onSubmit={(e) => handleSubmit(e)}
		>
			<label
				htmlFor='default-search'
				className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
			>
				Search
			</label>
			<div className='relative'>
				<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
					<MdSearch />
				</div>
				<input
					type='search'
					id='default-search'
					className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-neutral-100 focus:outline-none focus:ring-purple-500 focus:border-purple-500 '
					placeholder='Search'
					required
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<button
					type='submit'
					className='text-white absolute right-2.5 bottom-2.5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-2xl text-sm px-4 py-2 dark:bg-purple-600 ml-8 dark:hover:bg-purple-700 dark:focus:ring-purple-800'
				>
					Search
				</button>
			</div>
		</form>
	);
};

export default Searchbar;
