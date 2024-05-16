import { ActionFunctionArgs, LinksFunction } from '@remix-run/node';
import AuthForm from '~/components/auth/AuthForm';
import authStyles from '~/styles/auth.css?url'

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: authStyles },
];
export async function action({ request }:ActionFunctionArgs) {
  const searchParams = new URLSearchParams(request.url.split('?')[1]);
  const mode = searchParams.get('mode') || 'login';
  const body = await request.formData();
  const credentials = Object.fromEntries(body);
  console.log(credentials,mode);
  if (mode === 'login') {
    // login logic
  } else {
    // signup logic
  }
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return null
}

export default function Auth() {
  return (
    <AuthForm />
  )
}