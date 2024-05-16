import { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

import sharedStyles from '~/styles/shared.css?url'
import Error from "./components/util/Error";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: sharedStyles },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap" rel="stylesheet" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  console.log("dddd")
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary` check the error that are expected to have

  if (isRouteErrorResponse(error)) {
    return (
      <Layout>
        <Error title={error.statusText}>
          <p>{error.data.message}</p>
          <p>Back to <Link to="/">Safety</Link>.</p>
        </Error>
      </Layout>
    );
  }
  else{
    //other error unexpected and given from loader or actions
    return (
      <Layout>
        <Error title="Oops!">
          <p>{error.message ? error.message : "An error occurred."}</p>
          <p>Back to <Link to="/">Safety</Link>.</p>
        </Error>
      </Layout>
    );
  }
}