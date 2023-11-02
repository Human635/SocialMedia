import React from "react";
import { UserPost } from "./POSTS/UserPost";
import { Icon } from "../../UI/Icon/Icon";

export const MainProfile = () => {
  return (
    <main className="Main">
      <div className="WhatsNew">
        <img src="./img/users/arina-volkova.jpeg" alt="User" />
        <input
          type="text"
          name="whats-new"
          id="whats-new"
          placeholder="Что у вас нового?"
        />
        <div className="icons-wrapper">
          <Icon name="camera" padding="10" borderRadius="10" />
          <Icon name="play-history" padding="10" borderRadius="10" />
          <Icon name="music" padding="10" borderRadius="10" />
        </div>
      </div>
      <UserPost />
      <div className="Post _liked _marked">
        <div className="UserElem">
          <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
          <div className="user__description">
            <a href="#" className="main__text">
              Александр Майков
            </a>
            <p className="secondary__text">Сегодня 9:37</p>
          </div>
        </div>
        <p className="Post__text">Момент умиротворения и спокойствия</p>
        <div className="media-container">
          <img
            className="media__item"
            src="./img/post/nature-1.png"
            alt="Post Item"
          />
          <img
            className="media__item"
            src="./img/post/nature-2.png"
            alt="Post Item"
          />
          <img
            className="media__item"
            src="./img/post/nature-3.png"
            alt="Post Item"
          />
          <img
            className="media__item"
            src="./img/post/nature-4.png"
            alt="Post Item"
          />
          <img
            className="media__item"
            src="./img/post/nature-5.png"
            alt="Post Item"
          />
          <img
            className="media__item"
            src="./img/post/nature-6.png"
            alt="Post Item"
          />
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
              className="media__item"
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
    </main>
  );
};
