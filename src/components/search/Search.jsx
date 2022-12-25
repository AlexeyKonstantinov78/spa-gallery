/* eslint-disable indent */
/* eslint-disable key-spacing */
import { useEffect, useState } from 'react';
import _ from './Search.module.css';
import Masonry from 'react-masonry-css';
import './masonry.css';
import { Photos } from '../photos/Photos';
import { useDispatch, useSelector } from 'react-redux';
import { searchPhotosAsync } from '../../store/search/searchAction';

const breakpointColumnsObj = {
  default: 4, 1100
    : 3, 700
    : 2, 500
    : 1
};

export const Search = () => {
  const [search, setSearch] = useState('');
  const searchPhotos = useSelector((state) => state.searchPhotos.searchPhotos.results);
  const dispatch = useDispatch();

  const handleSearch = ({ target }) => {
      setSearch(target.value);
  };

  useEffect(() => {
    if (search.length > 3) {
      dispatch(searchPhotosAsync(search));
    }
  }, [search]);

  return (
    <main className={_.search__main}>
      <label className={_.search__label} htmlFor="search">Поиск по #тегам </label>
      <input
        className={_.search__input}
        type="text"
        id="search"
        name="search"
        defaultValue={search}
        onChange={handleSearch}
        placeholder='введите больше 3 символов'
        />

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {searchPhotos &&
          searchPhotos.map((photo) => <Photos key={photo.id} photo={photo} list='search' />)
        }
      </Masonry>

    </main>
  );
};
