import React from "react";
import { ThemRightSide } from "./RightSideProfile.style";
import { Bio } from "./Bio/Bio";

export const RightSideProfile = () => {
  return (
    <ThemRightSide className="RightSide">
        <Bio />
      <div className="FriendsBlock">
        <div className="Friends__title">
          <h2>Друзья</h2>
          <span className="count">130</span>
        </div>
        <div className="Friends__wrapper">
          <div className="friend">
            <img src="./img/users/aleksandr-maykov.jpeg" alt="Friend" />
            <span className="friend__name">Александр</span>
          </div>
          <div className="friend">
            <img src="./img/users/sofia-kodra.jpeg" alt="Friend" />
            <span className="friend__name">Софья</span>
          </div>
          <div className="friend">
            <img src="./img/users/andrey-kashirskiy.jpeg" alt="Friend" />
            <span className="friend__name">Андрей</span>
          </div>
          <div className="friend">
            <img src="./img/users/darya-gertner.jpeg" alt="Friend" />
            <span className="friend__name">Дарья</span>
          </div>
          <div className="friend">
            <img src="./img/users/denis-frolov.jpeg" alt="Friend" />
            <span className="friend__name">Денис</span>
          </div>
          <div className="friend">
            <img src="./img/users/mark-krahmalev.jpeg" alt="Friend" />
            <span className="friend__name">Марк</span>
          </div>
          <div className="friend">
            <img src="./img/users/katarina-fisher.jpeg" alt="Friend" />
            <span className="friend__name">Катарина</span>
          </div>
          <div className="friend">
            <img src="./img/users/viktoria.jpeg" alt="Friend" />
            <span className="friend__name">Виктория</span>
          </div>
          <div className="friend">
            <img src="./img/users/gleb.jpeg" alt="Friend" />
            <span className="friend__name">Глеб</span>
          </div>
        </div>
      </div>
      <div className="MusicBlock">
        <div className="MusicBlock__title">
          <h2>Вы недавно слушали</h2>
          <span>123</span>
        </div>
        <div className="MusicElem">
          <img src="./img/music/album-1.png" alt="Album" />
          <div className="music__description">
            <p className="main__text">Pieces</p>
            <p className="secondary__text">Andrew Belle</p>
          </div>
          <div className="plus-button _active"></div>
        </div>
        <div className="MusicElem">
          <img src="./img/music/album-2.png" alt="Album" />
          <div className="music__description">
            <p className="main__text">In the Wind</p>
            <p className="secondary__text">On-The-Go</p>
          </div>
          <div className="plus-button"></div>
        </div>
        <div className="MusicElem">
          <img src="./img/music/album-3.png" alt="Album" />
          <div className="music__description">
            <p className="main__text">On you own</p>
            <p className="secondary__text">Meltt</p>
          </div>
          <div className="plus-button _active"></div>
        </div>
        <div className="MusicElem">
          <img src="./img/music/album-4.png" alt="Album" />
          <div className="music__description">
            <p className="main__text">Infinity</p>
            <p className="secondary__text">James Young</p>
          </div>
          <div className="plus-button"></div>
        </div>
        <div className="MusicElem">
          <img src="./img/music/album-5.png" alt="Album" />
          <div className="music__description">
            <p className="main__text">Let me follow</p>
            <p className="secondary__text">Son Lux</p>
          </div>
          <div className="plus-button _active"></div>
        </div>
        <div className="MusicElem">
          <img src="./img/music/album-6.png" alt="Album" />
          <div className="music__description">
            <p className="main__text">Youth</p>
            <p className="secondary__text">Glass Animals</p>
          </div>
          <div className="plus-button"></div>
        </div>
      </div>
    </ThemRightSide>
  );
};
