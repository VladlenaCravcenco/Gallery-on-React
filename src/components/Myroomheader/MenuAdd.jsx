// components/Myroomheader/MenuAdd.jsx

import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import Modal from '../modal/modal';
import heartEmpty from '../../resources/svg/heart-empty.svg';
import '../../styles/myroom.css';

const MenuAdd = () => {
  const [modalActive, setModalActive] = useState(false);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [artworks, setArtworks] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
        fetchArtworks(session.user.id);
      }
    };
    fetchSession();
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

    if (dbError) alert('Ошибка базы');
    else {
      alert('Добавлено');
      setTitle('');
      setPrice('');
      setImageFile(null);
      setModalActive(false);
      fetchArtworks(user.id);
    }
    setUploading(false);
  };

  return (
    <div className="menu_adaugari">
      <div className="container">
        <div className="navbar_adaugari">
          <div className="lucruri-sets">
            <div className="tittle">Lucruri</div>
            <div className="tittle">Statistici</div>
            <div className="tittle">Salvat</div>
            <div className="tittle">Urmări</div>
          </div>

          <div className="lucruri-set">
            <div className="adaugare">
              <button onClick={() => setModalActive(true)}>Adăugare</button>
              <Modal active={modalActive} setActive={setModalActive}>
                <div className="upload-fields">
                  <input
                    placeholder="Denumire"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <input
                    placeholder="Preț"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
                  <button onClick={handleUpload} disabled={uploading}>
                    {uploading ? 'Se încarcă...' : 'Încarcă'}
                  </button>
                </div>
              </Modal>
            </div>

            <div className="grid_adaugari">
              <div className="adaugat">
                {artworks.map(({ id, title, price, image_url }) => (
                  <div className="add_xcard" key={id}>
                    <div className="photo_x">
                      <img src={image_url} alt={title} />
                    </div>
                    <div className="nume_x">
                      <div className="x-name">
                        <div className="numePrenume">Nume utilizator</div>
                        <div className="like_x">
                          <img src={heartEmpty} alt="heart" />
                        </div>
                      </div>
                      <div className="denumirea">{title}</div>
                      <div className="xprice">€{price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuAdd;
