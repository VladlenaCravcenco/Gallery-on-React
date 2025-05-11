// components/app/tablouri-populare.js
import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import './tablouri-populare.css';

const TablouriPopulare = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const { data, error } = await supabase.rpc('get_popular_artworks');
    if (error) {
      console.error('Eroare la încărcarea celor populare:', error);
    } else {
      setPopular(data);
    }
  };

  return (
    <div className="popular-section">
      <h2>Tablouri populare</h2>
      <div className="popular-gallery">
        {popular.map((item) => (
          <div className="popular-card" key={item.artwork_id}>
            <img src={item.image_url} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.likes} ❤️</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TablouriPopulare;
