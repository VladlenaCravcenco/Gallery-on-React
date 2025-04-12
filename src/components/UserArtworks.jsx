import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const UserArtworks = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [artworks, setArtworks] = useState([]);

  const fetchMyArtworks = async () => {
    const user = (await supabase.auth.getUser()).data.user;
    if (!user) return;

    const { data, error } = await supabase
      .from('artworks')
      .select('*')
      .eq('user_id', user.id)
      .order('id', { ascending: false });

    if (error) console.error(error);
    else setArtworks(data);
  };

  useEffect(() => {
    fetchMyArtworks();
  }, []);

  const handleUpload = async () => {
    setUploading(true);
    const user = (await supabase.auth.getUser()).data.user;
    if (!user || !imageFile) return;

    const fileName = `${Date.now()}-${imageFile.name}`;
    const { error: fileError } = await supabase
      .storage
      .from('artworks')
      .upload(fileName, imageFile);

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

    if (dbError) {
      alert('Ошибка базы');
    } else {
      alert('Успешно!');
      setTitle('');
      setPrice('');
      setImageFile(null);
      fetchMyArtworks(); // перезагружаем список
    }

    setUploading(false);
  };

  return (
    <div className="myroom-artworks">
      <h2>Добавить новую картину</h2>
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
      <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Загрузка...' : 'Загрузить'}
      </button>

      <h2 style={{ marginTop: '2rem' }}>Мои картины</h2>
      <div className="artworks-grid">
        {artworks.map(({ id, title, price, image_url }) => (
          <div key={id} className="artwork-card">
            <img src={image_url} alt={title} />
            <h3>{title}</h3>
            <p>€{price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserArtworks;