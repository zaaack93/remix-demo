import { LinksFunction } from '@remix-run/node';
import authStyles from '~/styles/auth.css?url'

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: authStyles },
];

export default function Auth() {
  return (
    <div>Auth</div>
  )
}