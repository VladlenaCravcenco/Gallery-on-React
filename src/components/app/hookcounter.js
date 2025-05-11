// ✅ hookcounter.js — лайки через Supabase
import React, { useEffect, useState } from 'react';
import heartEmpty from '../../resources/svg/heart-empty.svg';
import heartFull from '../../resources/svg/heart-color.svg';
import { supabase } from '../../supabaseClient';

const HookCounter = ({ artworkId }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    fetchLikes();
  }, [artworkId]);

  const fetchLikes = async () => {
    const user = (await supabase.auth.getUser()).data.user;
    const { data: likes, count } = await supabase
      .from('likes')
      .select('*', { count: 'exact' })
      .eq('artwork_id', artworkId);

    setLikeCount(count);
    if (user) {
      const { data: existing } = await supabase
        .from('likes')
        .select('*')
        .eq('user_id', user.id)
        .eq('artwork_id', artworkId);

      setLiked(existing.length > 0);
    }
  };

  const toggleLike = async () => {
    const user = (await supabase.auth.getUser()).data.user;
    if (!user) return alert('Авторизуйтесь, чтобы лайкать');

    if (liked) {
      await supabase
        .from('likes')
        .delete()
        .eq('user_id', user.id)
        .eq('artwork_id', artworkId);
    } else {
      await supabase.from('likes').insert({ user_id: user.id, artwork_id });
    }
    fetchLikes();
  };

  return (
    <div onClick={toggleLike} className="like">
      <img src={liked ? heartFull : heartEmpty} alt="like" />
      {likeCount}
    </div>
  );
};

export default HookCounter;
