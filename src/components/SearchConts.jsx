import React, { useState, useEffect } from 'react';
import { Category, Videos } from './';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
const SearchConts = () => {
  const [selectCategory, setSelectCategory] = useState('코딩');
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchTerm}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}_Y-18`,
    )
      .then(response => response.json())
      .then(result => {
        setVideos(result.items);
      })
      .catch(error => console.log(error));
  }, [searchTerm]);
  if (!videos) return <Loader />;
  return (
    <main id="main">
      <aside id="aside">
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="contents">
        <h2>입력하신 검색 결과입니다. {searchTerm}</h2>
        <Videos videos={videos} />
      </section>
    </main>
  );
};
export default SearchConts;
