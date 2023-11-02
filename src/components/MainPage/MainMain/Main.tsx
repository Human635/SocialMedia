import React, { useEffect, useInsertionEffect, useState } from "react";
import { AppInputMain } from "../../../components/UI/AppInputMain/AppInputMain";
import { Post } from "../../../components/UI/Post/Post";
import { useLazyGetPostItemQuery } from "../../../store/api/postApi";
import { ThemeMainSide } from "./Main.style";
import { NewPostsection } from "./NewPostSection/NewPostsection";
import { Icon } from "../../UI/Icon/Icon";

export const MainSide = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [fetchTrigger, { data, isError, isLoading }] =
    useLazyGetPostItemQuery();

  useEffect(() => {
    fetchTrigger(0);
  }, [fetchTrigger]);

  useInsertionEffect(() => {
    setFilteredPosts(data?.message);
  }, [data]);

  const handleAddNewPost = () => {
    fetchTrigger(0);
  };

  return (
    <ThemeMainSide className="Main">
      <NewPostsection onNewPostAdded={handleAddNewPost} />
      <div className="History">
        <Icon name="slider-button"></Icon>
        <div className="History__wrapper">
          <div className="History__item add-history">
            <div className="icon-wrapper">
              <Icon name="plus-button"></Icon>
              <span>История</span>
            </div>
            <img src="./img/users/andrey-kashirskiy.jpeg" alt="Add History" />
          </div>
          <div className="History__item">
            <img src="./img/history/poster-1.jpeg" alt="History Poster" />
            <div className="History__owner">
              <img
                className="owner__img"
                src="./img/users/aleksandr-maykov.jpeg"
                alt="History Owner"
              />
              <span className="owner__name">Александр Майков</span>
            </div>
          </div>
          <div className="History__item">
            <img src="./img/history/poster-2.jpeg" alt="History Poster" />
            <div className="History__owner">
              <img
                className="owner__img"
                src="./img/users/darya-gertner.jpeg"
                alt="History Owner"
              />
              <span className="owner__name">Дарья Гертнер</span>
            </div>
          </div>
          <div className="History__item">
            <img src="./img/history/poster-3.jpeg" alt="History Poster" />
            <div className="History__owner">
              <img
                className="owner__img"
                src="./img/users/denis-frolov.jpeg"
                alt="History Owner"
              />
              <span className="owner__name">Денис Фролов</span>
            </div>
          </div>
          <div className="History__item">
            <img src="./img/history/poster-4.jpeg" alt="History Poster" />
            <div className="History__owner">
              <img
                className="owner__img"
                src="./img/users/katarina-fisher.jpeg"
                alt="History Owner"
              />
              <span className="owner__name">Катарина Фишер</span>
            </div>
          </div>
          <div className="History__item">
            <img src="./img/history/poster-1.jpeg" alt="History Poster" />
            <div className="History__owner">
              <img
                className="owner__img"
                src="./img/users/aleksandr-maykov.jpeg"
                alt="History Owner"
              />
              <span className="owner__name">Александр Майков</span>
            </div>
          </div>
          <div className="History__item">
            <img src="./img/history/poster-2.jpeg" alt="History Poster" />
            <div className="History__owner">
              <img
                className="owner__img"
                src="./img/users/darya-gertner.jpeg"
                alt="History Owner"
              />
              <span className="owner__name">Дарья Гертнер</span>
            </div>
          </div>
        </div>
      </div>
      {isError && <h1>ПРОИЗОШЛА ОШИБКА</h1>}
      {isLoading && <h1>ЗАГРУЗКА...</h1>}
      {filteredPosts?.length &&
        filteredPosts.map((post: any) => (
          <Post
            key={post.id}
            postText={post.main_text}
            postDate={post.reg_date}
            photos={post.photos}
            userName={post.user_fk.name}
            postId={post.id}
          />
        ))}

      <div className="Post Repost _liked _marked">
        <div className="UserElem Repost__owner">
          <img src="./img/users/mark-krahmalev.jpeg" alt="User" />
          <div className="user__description">
            <a href="#" className="main__text">
              Марк Крахмалев
            </a>
            <p className="secondary__text">20 марта 23:31</p>
          </div>
        </div>
        <div className="Repost__wrapper">
          <div className="UserElem">
            <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
            <div className="user__description">
              <a href="#" className="main__text">
                Александр Майков
              </a>
              <p className="secondary__text">Сегодня 9:37</p>
            </div>
          </div>
          <div className="media-container">
            <img
              className="media__item"
              src="./img/post/garnet-man.png"
              alt="Post Item"
            />
            <img
              className="madia__item"
              src="./img/post/garnet.png"
              alt="Post Item"
            />
          </div>
        </div>
        <div className="PostControls">
          <div className="icon-wrapper like">
            <span className="count likes-count">-500</span>
            <Icon name="heart"></Icon>
          </div>
          <div className="icon-wrapper comment">
            <span className="count comments-count">500</span>
            <Icon name="comment" width="26" height="26"></Icon>
          </div>
          <div className="icon-wrapper repost">
            <Icon name="repost" width="32" height="26"></Icon>
          </div>
          <div className="icon-wrapper mark">
            <Icon name="mark" width="21" height="25" />
          </div>
        </div>
        <div className="CommentBlock">
          <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
          <div className="comment__description">
            <a href="#" className="comment__owner">
              Карина Савина
            </a>
            <p className="comment__text">Это текст комментария...</p>
            <a href="#" className="reply">
              Ответить
            </a>
          </div>
          <span className="date">25 марта</span>
          <Icon name="heart"></Icon>
        </div>
        <Icon name="more" width="25" height="5" />
      </div>
    </ThemeMainSide>
  );
};
