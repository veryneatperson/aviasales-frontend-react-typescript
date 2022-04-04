import { useState } from 'react';

import Ticket from '../Ticket';
import Loader from '../Loader';
import Notification from '../Notification';

import fetchData from '../../store/actions/tickets';
import { GroupingState, SortingOptions } from '../../types/grouping';
import { Ticket as TicketInterface } from '../../types/tickets';
import sortTickets from '../../helpers/sortTickets';
import filterTickets from '../../helpers/filterTickets';
import { NOTIFICATION_MESSAGE, SHOW_TICKETS_AMOUNT } from '../../constants';

import './TicketList.scss';

interface TicketListProps {
  sorting: SortingOptions;
  layovers: GroupingState['layovers'];
}

function TicketList({ sorting, layovers }: TicketListProps) {
  const [showTicketsAmount, setShowTicketsAmount] =
    useState(SHOW_TICKETS_AMOUNT);

  const { isLoading, searchIdError, ticketsError, tickets } = fetchData();

  const renderTickets = (ticketsArr: TicketInterface[]): JSX.Element[] =>
    sortTickets(filterTickets(ticketsArr, layovers), sorting, showTicketsAmount)
      .slice(0, showTicketsAmount)
      .map((ticket: TicketInterface) => (
        <Ticket
          ticket={ticket}
          key={`${ticket.price}${ticket.segments[0].date}${ticket.segments[1].date}`}
        />
      ));

  const renderShowMoreButton = (ticketsArr: TicketInterface[]) => {
    if (ticketsArr.length <= showTicketsAmount) return null;

    return (
      <button
        onClick={() =>
          setShowTicketsAmount((amount) => amount + SHOW_TICKETS_AMOUNT)
        }
        className="ticket-list__button"
        type="button"
      >
        {`Показать еще ${SHOW_TICKETS_AMOUNT} билетов`}
      </button>
    );
  };

  if (searchIdError) {
    return <Notification {...NOTIFICATION_MESSAGE.searchIdError} />;
  }

  if (ticketsError) {
    return <Notification {...NOTIFICATION_MESSAGE.ticketsError} />;
  }

  if (layovers.every((el) => el.checked === false)) {
    return <Notification {...NOTIFICATION_MESSAGE.emptyList} />;
  }

  return (
    <div className="ticket-list">
      {isLoading && <Loader />}
      {!!tickets.length && renderTickets(tickets)}
      {!!tickets.length && renderShowMoreButton(tickets)}
    </div>
  );
}

export default TicketList;
