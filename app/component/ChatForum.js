'use client'; // Mark this as a Client Component

import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs'; // Fixed missing import

import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';

const ChatForum = ({ clerkUser, slug }) => {
  const [channel, setChannel] = useState();


  const apiKey = 'fuzhd5ak3fcu';
  const userId = clerkUser.id;
  const userName = clerkUser.name;
  const userToken = clerkUser.token;
  console.log('TOKEN IS: ' + userToken);
  const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };


  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });







  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', slug, {
      image: 'https://getstream.io/random_png/?name=react',
      name: slug + ' Disscussion',
      members: [userId],
    });

    setChannel(channel);
  }, [client]);






  if (!client) {
    return (
      <>
        <div className="h-16"></div>
        <div>Setting up client & connection...</div>
      </>
    );
  }

  return (
    <>
      <div className="h-16"></div>
      <Chat client={client}>
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </>
  );
};

export default ChatForum;
