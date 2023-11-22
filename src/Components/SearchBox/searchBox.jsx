import { useState } from 'react';
import './searchBox.css';
import { FiSearch } from "react-icons/fi";
import { useAppStore } from '../../store';
const SearchBox = () => {
    const [value, setValue] = useState();
    const { setSearchKey } = useAppStore();
    return <div className='search-box'>
        <button onClick={() => setSearchKey(value)}>
            <FiSearch />
        </button>
        <input
            type="search"
            placeholder='Find Product'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSearchKey(value);
                }
              }}
        />
    </div>
}
export default SearchBox;