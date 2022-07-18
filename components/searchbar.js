import { useState } from "react";
import { useRouter } from 'next/router'

import Image from 'next/image'

export default function Searchbar() {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${searchQuery}`)
    };

    return (
        <form 
            className="flex items-center my-5 mx-2 md:w-[65%] lg:w-[50%] xl:w-[40%]"
            onSubmit={onSubmit}
        >
            <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <Image 
                        src="/search-icon.svg"
                        alt="search-icon"
                        width={20}
                        height={20}
                        className="w-5 h-5 text-gray-500 dark:text-blue-400"
                    />
                </div>
                <input 
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 text-blue-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                    placeholder="Search"
                    required
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                ></input>
            </div>
            <button type="submit"
                className="p-2 ml-2 text-sm font-medium text-white bg-teal-200 rounded-lg hover:bg-teal-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <Image 
                    src="/search-icon.svg"
                    alt="search-icon"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                />
                <span className="sr-only">Search</span>
            </button>
        </form>
    )
  }
  