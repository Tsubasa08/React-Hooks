import { useState, useEffect } from 'react';
import React = require('react');

export const CustomHook = () => {
  const isOnline = useFriendStatus(1);
  return <div>{`${isOnline}`}</div>;
};

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(false);
  });

  return isOnline;
}
