import { Form, Link, useNavigation, useSearchParams } from '@remix-run/react';
import { FaLock, FaPlus } from 'react-icons/fa';

function AuthForm() {
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();

  const mode= searchParams.get('mode') || 'login';

  const btnSubmitCaption = mode === 'login' ? 'Login' : 'Sign Up';
  const btnModeCaption = mode === 'login' ? 'Create a new account' : 'Log in with existing user';
  const isSubmitting = navigation.state !== "idle";

  return (
    <Form method="post" className="form" id="auth-form">
      <div className="icon-img">
        {
          mode === 'login' ? <FaLock /> : <FaPlus />
        }
      </div>
      <p>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength={7} />
      </p>
      <div className="form-actions">
        <button disabled={isSubmitting}>{isSubmitting ? 'Loading ...' : btnSubmitCaption}</button>
        <Link to={mode === 'login' ? '/auth?mode=signup' : '/auth?mode=login'}>{btnModeCaption}</Link>
      </div>
    </Form>
  );
}

export default AuthForm;
