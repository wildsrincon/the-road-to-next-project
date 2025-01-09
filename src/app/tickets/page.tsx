"use client";

import Link from "next/link";

import { Ticket, tickets } from "@/data";

const TicketsPage = () => {
  return (
    <div>
      <h1>Ticket List</h1>
      <ul>
        {tickets.map((ticket: Ticket) => (
          <li key={ticket.id}>
            <Link href={`/tickets/${ticket.id}`}>
              <span>{ticket.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketsPage;
