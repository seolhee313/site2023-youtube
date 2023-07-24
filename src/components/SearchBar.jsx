import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSearchHeart } from 'react-icons/bs';
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const onKeyPress = e => {
    if (e.charCode === 13) {
      handleSearch();
    }
  };
  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };
  return (
    <div className="search" onKeyPress={onKeyPress}>
      <label className="glass" htmlFor="searchInput">
        <BsSearchHeart />
      </label>
      <input
        type="text"
        id="searchInput"
        className="input__search"
        placeholder="검색어를 입력해주세요"
        title="검색"
        onChange={e => setSearchTerm(e.target.value)}
      />
      {/* <button type="submit">검색</button> */}
    </div>
  );
};
export default SearchBar;
