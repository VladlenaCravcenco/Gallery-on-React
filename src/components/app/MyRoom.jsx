// Очистка и настройка авторизации и загрузки на Supabase
// Файл: components/app/MyRoom.jsx

import React, { useEffect, useState } from 'react';
import HeaderBlock from '../header/headerBlock';
import Myroomheader from '../Myroomheader/Myroomheader';
import FooterBlock from '../footer/footer';
import { supabase } from '../../supabaseClient';
import './myroom.css';

const MyRoom = () => {
  const [artworks, setArtworks] = useState([]);
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      if (user) fetchArtworks(user.id);
    });
  }, []);

  const fetchArtworks = async (userId) => {
    const { data, error } = await supabase
      .from('artworks')
      .select('*')
      .eq('user_id', userId)
      .order('id', { ascending: false });

    if (!error) setArtworks(data);
  };

  const handleUpload = async () => {
    if (!user || !imageFile) return alert('Авторизуйтесь и выберите изображение');

    setUploading(true);
    const fileName = `${Date.now()}-${imageFile.name}`;
    const { error: fileError } = await supabase.storage.from('artworks').upload(fileName, imageFile);

    if (fileError) {
      alert('Ошибка загрузки');
      setUploading(false);
      return;
    }

    const imageUrl = supabase.storage.from('artworks').getPublicUrl(fileName).data.publicUrl;

    const { error: dbError } = await supabase.from('artworks').insert({
      user_id: user.id,
      title,
      price,
      image_url: imageUrl,
    });

    if (dbError) alert('Ошибка при сохранении в базу данных');
    else {
      alert('Картина добавлена!');
      setTitle('');
      setPrice('');
      setImageFile(null);
      fetchArtworks(user.id);
    }

    setUploading(false);
  };

  return (
    <div>
      <HeaderBlock />
      <Myroomheader />
      <div className="upload-section">
        <h2>Загрузить новую картину</h2>
        <input
          type="text"
          placeholder="Название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Цена"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setImageFile(e.target.files[0])}
        />
        <button onClick={handleUpload} disabled={uploading}>
          {uploading ? 'Загрузка...' : 'Загрузить'}
        </button>
      </div>

      <div className="gallery">
        <h2>Мои картины</h2>
        <div className="grid">
          {artworks.map(({ id, title, price, image_url }) => (
            <div key={id} className="card">
              <img src={image_url} alt={title} />
              <h3>{title}</h3>
              <p>€{price}</p>
            </div>
          ))}
        </div>
      </div>

      <FooterBlock />
    </div>
  );
};

export default MyRoom;
