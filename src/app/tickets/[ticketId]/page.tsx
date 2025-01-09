import { tickets } from "@/data";

type TicketPageProps = {
  params: Promise<{ticketId: string}>;
}

const TicketDetailPage = async ({params}: TicketPageProps) => {

  const { ticketId } = await params;

  const ticket = tickets.find((ticket) => ticket.id === ticketId);

  if (!ticket) {
    return <div>Not found</div>;
  }

  return (
    <div>
      <h1>Ticket Detail</h1>
      <h2 className="text-lg">{ ticket.title }</h2>
      <p>Ticket ID: {ticketId}</p>
      <p className="text-sm">{ticket.description}</p>
    </div>
  );

};

export default TicketDetailPage;
