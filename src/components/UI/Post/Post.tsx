import React, { useState } from "react";
import { PostMenu } from "./PostMenu";
import { useUploadFileMutation } from "../../../store/api/fileApi";
import { format } from "date-fns";
import { Icon } from "../Icon/Icon";

interface PostProps {
  userName: string;
  postDate: string;
  photos: Array<string>;
  postText: string;
  postId: string;
}

export const Post = ({
  userName,
  postDate,
  photos,
  postText,
  postId,
}: PostProps) => {
  const [isMenuOpen, toogleMenu] = useState<boolean>(false);

  const [uploadFile] = useUploadFileMutation();

  const onPostFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      const formData = new FormData();
      const file = event.target.files[0];

      formData.append("post_id", postId);
      formData.append("photo_file", file);

      // uploadFile(formData)
    }
  };

  const formattedDate = format(new Date(postDate), "eeee MM/dd/yyyy hh:mm");

  return (
    <div className="Post _liked _marked">
      <div className="UserElem">
        <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
        <div className="user__description">
          <a href="#" className="main__text">
            {userName}
          </a>
          <p className="secondary__text">{formattedDate}</p>
        </div>
      </div>
      <p className="Post__text">{postText}</p>
      {photos.length && (
        <div className="media-container">
          {photos.map((photo) => (
            <img className="media__item" src={photo} alt="Post Item" />
          ))}
        </div>
      )}
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
      <span onClick={() => toogleMenu(!isMenuOpen)}>
        <Icon name="more" width="25" height="5" />
      </span>
      {isMenuOpen && <PostMenu onUploadClick={onPostFileUpload} />}
    </div>
  );
};
