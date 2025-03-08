import Heading from "@/components/heading";
import Spinner from "@/components/spinner";
import TicketList from "features/ticket/components/ticket-list";
import { Suspense } from "react";

export default function TicketsPage() {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Tickets"
        description="  All your tickets at one place"
      ></Heading>

      <Suspense fallback={<Spinner></Spinner>}>
        <TicketList></TicketList>
      </Suspense>
    </div>
  );
}
