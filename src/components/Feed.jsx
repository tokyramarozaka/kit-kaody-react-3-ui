import {useEffect, useState} from 'react';
import {axios} from '../utils/api';
import {printLong} from '../utils/date';

const FeedMenu = ({ id }) => {
  const handleDelete = async () => {
    await axios.delete(`feeds/${id}`);
    window.location.reload();
  };

  return (
    <div className='feed-menu'>
      <div className='feed-menu_item' onClick={handleDelete}>
        <span>delete</span>
        <i className='fas fa-trash' />
      </div>
    </div>
  );
};

const FeedItem = ({ data }) => {
  const [menuIsOn, setMenuIsOn] = useState(false);
  const {
    id,
    description,
    postingDate,
    imgURL,
    user,
  } = data;

  const handleClick = () => {
    setMenuIsOn(!menuIsOn);
  };

  return (
      <div className='feeds-item'>
        <div className='feeds-item_header'>
          <div className='feeds-item_header__avatar'>
            <img src={user.avatarURL} alt='' />
          </div>

          <div className='feeds-item_header__post-info'>
            <h4>{user.name}</h4>
            <div>{printLong(postingDate)}</div>
          </div>

          <div className='feeds-item_header__menu' onClick={handleClick}>
            <i className='fas fa-folder' />
            {menuIsOn && <FeedMenu id={id} />}
          </div>
        </div>

        <div className='feeds-item_content'>
          <p>{description}</p>
          <img src={imgURL} className='feeds-item_content__img' alt='error' />
        </div>
      </div>
  );
};

export const FeedList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("feeds");
        setData(res.data);
      } catch (e) {
        console.error(e);
      }
    };

    void fetch();
  }, []);

  return (
    <div className='feeds'>
      {data.map(feed => (
        <FeedItem key={feed.id} data={feed} />
      ))}
    </div>
  );
};
