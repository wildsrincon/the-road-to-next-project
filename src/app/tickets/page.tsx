"use client";

import Link from "next/link";

import { Ticket, tickets } from "@/data";
import { ticketPath } from "@/paths";

const TICKET_ICONS = {
  OPEN:  "Open",
  CLOSED: "Closed",
  IN_PROGRESS: "In Progress",
}

const TicketsPage = () => {
  return (
    <div>
      <ul>
        {tickets.map((ticket: Ticket) => (
          <li key={ticket.id}>
            <div>{TICKET_ICONS[ticket.status as keyof typeof TICKET_ICONS]}</div>
            <h2>{ticket.title}</h2>
            <Link href={ticketPath(ticket.id)} className="text-sm underline">
              View
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketsPage;
