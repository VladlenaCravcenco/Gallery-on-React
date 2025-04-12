import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import Modal from '../../components/modal/modal';
import work4 from '../../resources/works/work4.jpg';
import heartEmpty from '../../resources/svg/heart-empty.svg';
import './../modal/modal.css';
import './../Myroomheader/myroomstyle.css';

const MenuAdd = () => {
  const [modalActive, setModalActive] = useState(false);
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
    const { data: fileData, error: fileError } = await supabase
      .storage
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
      setModalActive(false);
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

          <div className='lucruri-set'>
            <div className="adaugare">
              <button type='submit' onClick={() => setModalActive(true)}>Adăugare</button>
              <Modal active={modalActive} setActive={setModalActive}>
                <div className='import_art'>Загрузить картину</div>
                <div className='inputs-descrip'>
                  <input placeholder='denumire' value={title} onChange={e => setTitle(e.target.value)} />
                  <input placeholder='price' value={price} onChange={e => setPrice(e.target.value)} />
                  <input type='file' onChange={e => setImageFile(e.target.files[0])} />
                </div>
                <button onClick={handleUpload} disabled={uploading}>
                  {uploading ? 'Загрузка...' : 'Adăuga'}
                </button>
              </Modal>
            </div>

            <div className="grid_adaugari">
              <div className='adaugat'>
                <div className="add_xcard_2">
                  <div className="photo_x"><img src={work4} alt="" /></div>
                  <div className="nume_x">
                    <div className="x-name">
                      <div className="numePrenume">Nume prenume</div>
                      <div className="like_x"><img src={heartEmpty} alt="" /></div>
                    </div>
                    <div className="denumirea">Denumirea</div>
                    <div className="xprice">€10,000</div>
                  </div>
                </div>

                <div className="add_xcard_3">
                  <div className="photo_x"><img src={work4} alt="" /></div>
                  <div className="nume_x">
                    <div className="x-name">
                      <div className="numePrenume">Nume prenume</div>
                      <div className="like_x"><img src={heartEmpty} alt="" /></div>
                    </div>
                    <div className="denumirea">Denumirea</div>
                    <div className="xprice">€10,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MenuAdd;