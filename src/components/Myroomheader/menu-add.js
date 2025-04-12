import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import Modal from '../../components/modal/modal';
import heartEmpty from '../../resources/svg/heart-empty.svg';
import './../modal/modal.css';
import './../Myroomheader/myroomstyle.css';
import ArtworkUploader from './ArtworkUploader';

const MenuAdd = () => {
    const [modalActive, setModalActive] = useState(false);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [artworks, setArtworks] = useState([]);

    const fetchArtworks = async () => {
        const { data, error } = await supabase
            .from('artworks')
            .select('*')
            .order('id', { ascending: false });

        if (error) {
            console.error('Ошибка загрузки картин:', error);
        } else {
            setArtworks(data);
        }
    };

    useEffect(() => {
        fetchArtworks();
    }, []);

    

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
                            <button type='submit' onClick={() => setModalActive(true)}>Adăugare</button>
                            <Modal active={modalActive} setActive={setModalActive}>
                                <div className='import_art'>Загрузить картину</div>
                                <ArtworkUploader onUploaded={() => setModalActive(false)} />
                            </Modal>
                        </div>

                        <div className="grid_adaugari">
                            <div className='adaugat'>
                                {artworks.map(({ id, title, price, image_url }) => (
                                    <div className="add_xcard" key={id}>
                                        <div className="photo_x">
                                            <img src={image_url} alt={title} />
                                        </div>
                                        <div className="nume_x">
                                            <div className="x-name">
                                                <div className="numePrenume">Nume prenume</div>
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
