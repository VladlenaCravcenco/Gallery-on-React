import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import './setings.css';

const Setings = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data?.user) {
        setUser(data.user);
        const { data: profile } = await supabase
          .from('profiles')
          .select('username, avatar_url')
          .eq('id', data.user.id)
          .single();
        if (profile) {
          setUsername(profile.username || '');
          setAvatar(profile.avatar_url || '');
        }
      }
    };
    fetchUser();
  }, []);

  const handleUpdate = async () => {
    if (!user) return;
    const updates = {
      id: user.id,
      username,
      avatar_url: avatar,
      updated_at: new Date().toISOString(),
    };
    const { error } = await supabase.from('profiles').upsert(updates);
    if (error) {
      setMessage('Eroare la actualizare');
    } else {
      setMessage('Date actualizate cu succes!');
    }
  };

  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || !user) return;

    setUploading(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `${user.id}.${fileExt}`;
    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(fileName, file, { upsert: true });

    if (uploadError) {
      setMessage('Eroare la upload imagine');
      setUploading(false);
      return;
    }

    const { data: { publicUrl } } = supabase.storage.from('avatars').getPublicUrl(fileName);
    setAvatar(publicUrl);
    setUploading(false);
  };

  return (
    <div className="setari-container">
      <h2>Setările profilului</h2>
      {message && <p className="status-msg">{message}</p>}

      <input
        type="text"
        placeholder="Nume utilizator"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input type="file" onChange={handleAvatarUpload} disabled={uploading} />
      {avatar && <img src={avatar} alt="Avatar" className="avatar-preview" />}

      <button onClick={handleUpdate} disabled={!username || uploading}>
        Actualizează
      </button>
    </div>
  );
};

export default Setings;
