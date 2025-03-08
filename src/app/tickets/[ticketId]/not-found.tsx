import Placeholder from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ticketsPath } from "paths";
import React from "react";

export default function Notfound() {
  return (
    <Placeholder
      label="Ticket not found"
      button={
        <Button asChild variant="outline">
          <Link href={ticketsPath()}>Go to Tickets</Link>
        </Button>
      }
    />
  );
}
