import { Outlet } from "@remix-run/react";

export default function ProtectedLayout() {
    return (
      <>
      <p>protected</p>
        <main>
          <Outlet />
        </main>
      </>
    );
  }