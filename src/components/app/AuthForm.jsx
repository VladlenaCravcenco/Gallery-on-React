import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../supabaseClient'

const AuthForm = () => {
  return (
    <div style={{ maxWidth: 400, margin: '2rem auto' }}>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={[]}
        localization={{
          variables: {
            sign_in: { email_label: 'Email', password_label: 'Пароль' },
            sign_up: { email_label: 'Email', password_label: 'Придумай пароль' }
          }
        }}
      />
    </div>
  );
};

export default AuthForm;