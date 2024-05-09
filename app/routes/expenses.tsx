import { Outlet } from "@remix-run/react";

export default function Expenses() {
    return (
      <main>
        <div>Expenses</div>
        <Outlet />
      </main>
    )
  }