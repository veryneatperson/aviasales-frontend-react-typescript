import Ticket from '../Ticket/Ticket';
import fetchData from '../../store/actions/tickets';

import './TicketList.scss';

function TicketList() {
  const { searchIdError, tickets, ticketsError } = fetchData();

  if (searchIdError) {
    return <div>Search Id error</div>;
  }

  if (ticketsError) {
    return <div>Tickets errror</div>;
  }

  return (
    <div className="ticket-list">
      {tickets.length &&
        tickets
          .sort((a, b) => a.price - b.price)
          .slice(0, 5)
          .map((ticket) => (
            <Ticket
              ticket={ticket}
              key={`${ticket.price}${ticket.segments[0].date}${ticket.segments[1].date}`}
            />
          ))}
    </div>
  );
}

export default TicketList;
