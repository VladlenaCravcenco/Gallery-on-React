import { useState } from 'react';
import { supabase } from '../supabaseClient';

const UploadArtwork = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    setUploading(true);

    const user = (await supabase.auth.getUser()).data.user;
    if (!user) {
      alert("Пожалуйста, войдите в аккаунт");
      setUploading(false);
      return;
    }

    // 1. Загружаем картинку
    const fileName = `${Date.now()}-${imageFile.name}`;
    const { data: storageData, error: storageError } = await supabase
      .storage
      .from('artworks')
      .upload(fileName, imageFile);

    if (storageError) {
      alert("Ошибка загрузки изображения");
      setUploading(false);
      return;
    }

    const imageUrl = supabase.storage.from('artworks').getPublicUrl(fileName).data.publicUrl;

    // 2. Добавляем запись в таблицу
    const { error: dbError } = await supabase.from('artworks').insert({
      user_id: user.id,
      title,
      description,
      image_url: imageUrl
    });

    if (dbError) {
      alert("Ошибка записи в базу");
    } else {
      alert("Картина добавлена!");
      setTitle('');
      setDescription('');
      setImageFile(null);
    }

    setUploading(false);
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto' }}>
      <h2>Загрузить картину</h2>
      <input
        type="text"
        placeholder="Название"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: '100%', marginBottom: '0.5rem' }}
      />
      <textarea
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ width: '100%', marginBottom: '0.5rem' }}
      />
      <input
        type="file"
        onChange={(e) => setImageFile(e.target.files[0])}
      />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Загрузка...' : 'Загрузить'}
      </button>
    </div>
  );
};

export default UploadArtwork;