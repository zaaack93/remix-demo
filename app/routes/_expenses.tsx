import { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import MainHeaderExpenses from "~/components/navigation/MainHeaderExpenses";

import expensesStyles from "~/styles/expenses.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: expensesStyles },
];

export default function Expenses() {
    return (
        <>
            <MainHeaderExpenses />
            <Outlet />
        </>
    )
  }