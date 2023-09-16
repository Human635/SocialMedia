import { useState, useEffect } from "react";
import React from "react";
import { UserInitial, FileInput, User,   } from "./UserAvatar.style";

interface UserAvatarProps {
  src: string
  onAvatarClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  userName?: string
};

export const UserAvatar = ({ src, onAvatarClick, userName }: UserAvatarProps) => {
    const [initial, setUserInitial] = useState<string>('')
    useEffect(() => {
        if (!src && userName) {
            let initialsArr = userName.split(' ')
            let initials = `${initialsArr[0][0]} ${initialsArr[1][0]}`
            setUserInitial(initials)
        }
    }, [src, userName])
  return (
    <>
        {src ? 
            (<User src={src} alt=""  />) :
            (<UserInitial>{initial}</UserInitial>)
        }
        <FileInput type="file" onChange={onAvatarClick}/>
    </>
  )
  //   <img src="./img/users/denis-frolov.jpeg" alt="Denis Frolov" />;
};
