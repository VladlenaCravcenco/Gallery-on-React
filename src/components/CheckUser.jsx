import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const CheckUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
    };

    getUser();
  }, []);

  return (
    <div style={{ padding: '1rem', background: '#eee', margin: '1rem 0' }}>
      <h3>Status autentificare:</h3>
      {user ? (
        <>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>ID:</strong> {user.id}</p>
        </>
      ) : (
        <p>❌ Nu ești autentificat(ă)</p>
      )}
    </div>
  );
};

export default CheckUser;