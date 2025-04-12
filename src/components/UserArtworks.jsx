import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import ArtworkUploader from './Myroomheader/ArtworkUploader'; // путь скорректируй

const UserArtworks = () => {

  const [artworks, setArtworks] = useState([]);

  const fetchMyArtworks = async () => {
    const user = (await supabase.auth.getUser()).data.user;
    if (!user) return;

    const { data, error } = await supabase
      .from("artworks")
      .select("*")
      .eq("user_id", user.id)
      .order("id", { ascending: false });

    if (error) console.error(error);
    else setArtworks(data);
  };

  useEffect(() => {
    fetchMyArtworks();
  }, []);


  return (
    <div className="myroom-artworks">
      <ArtworkUploader onUploaded={fetchMyArtworks} />
  
      <h2 style={{ marginTop: "2rem" }}>Мои картины</h2>
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
