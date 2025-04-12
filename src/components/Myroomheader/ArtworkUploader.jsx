import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';

const ArtworkUploader = ({ onUploaded }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    setUploading(true);
    const user = (await supabase.auth.getUser()).data.user;

    if (!user) {
      alert('Сначала войдите в аккаунт');
      setUploading(false);
      return;
    }

    if (!imageFile) {
      alert('Выберите изображение');
      setUploading(false);
      return;
    }

    const fileName = `${Date.now()}-${imageFile.name}`;
    const { error: fileError } = await supabase.storage
      .from('artworks')
      .upload(fileName, imageFile);

    if (fileError) {
      alert('Ошибка при загрузке изображения');
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
      alert('Ошибка сохранения в базу данных');
    } else {
      alert('Картина добавлена!');
      setTitle('');
      setPrice('');
      setImageFile(null);
      if (onUploaded) onUploaded();
    }

    setUploading(false);
  };

  return (
    <div className='inputs-descrip'>
      <input
        placeholder='denumire'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder='price'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type='file'
        onChange={(e) => setImageFile(e.target.files[0])}
      />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Загрузка...' : 'Adăuga'}
      </button>
    </div>
  );
};

export default ArtworkUploader;
