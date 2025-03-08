import { getTickets } from "../queries/get-tickets";
import TicketItem from "./ticket-item";

export default async function TicketList() {
  const tickets = await getTickets();

  return (
    <div className="flex-1 flex flex-col gap-y-4">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket}></TicketItem>
      ))}
    </div>
  );
}
