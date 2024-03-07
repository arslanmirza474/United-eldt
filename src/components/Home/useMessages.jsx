import React, { useState } from 'react';

const useMessages = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return [messages, addMessage];
};

export default useMessages;
