import { useState, useEffect } from "react";
import React from "react";
import { UserInitial, FileInput } from "./UserAvatar.style";

interface UserAvatarProps {
  src: string
  onAvatarClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  userName?: string
};

export const UserAvatar = ({ src, onAvatarClick, userName }: UserAvatarProps) => {
    const [userInitial, setUserInitial] = useState<string>('')
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
            (<img src={src} alt=""  />) :
            (<UserInitial>{userInitial}</UserInitial>)
        }
        <FileInput type="file" onChange={onAvatarClick}/>
    </>
  )
  //   <img src="./img/users/denis-frolov.jpeg" alt="Denis Frolov" />;
};
