import displayDuration from '../../helpers/displayDuration';
import displayIATAcodes from '../../helpers/displayIATAcodes';
import displayLayovers from '../../helpers/displayLayovers';
import displayLayoversLabel from '../../helpers/displayLayoversLabel';
import displayPrice from '../../helpers/displayPrice';
import displayTime from '../../helpers/displayTime';
import getCarrierLogoUrl from '../../helpers/getCarrierLogoUrl';

import { Ticket as TicketInterface } from '../../types/tickets';

import { BASE_CARRIER_LOGO_URL } from '../../constants/index';

import './Ticket.scss';

interface TicketProps {
  ticket: TicketInterface;
}

export default function Ticket({ ticket }: TicketProps) {
  const { price, carrier, segments } = ticket;

  return (
    <div className="ticket ticket-list__item">
      <div className="ticket__header">
        <div className="ticket__price">{displayPrice(price, 'Р')}</div>
        <img
          className="ticket__carrier-logo"
          src={getCarrierLogoUrl(BASE_CARRIER_LOGO_URL, carrier)}
          alt="Carrier logo"
        />
      </div>
      {segments.map(({ origin, destination, date, stops, duration }) => (
        <div className="ticket__segment">
          <div className="ticket__route">
            <span className="ticket__route-label">
              {displayIATAcodes(origin, destination)}
            </span>
            <span className="ticket__route-value">
              {displayTime(date, duration)}
            </span>
          </div>
          <div className="ticket__length">
            <span className="ticket__length-label">в пути</span>
            <span className="ticket__length-value">
              {displayDuration(duration)}
            </span>
          </div>
          <div className="ticket__stops">
            <span className="ticket__stops-label">
              {displayLayoversLabel(stops.length)}
            </span>
            <span className="ticket__stops-value">
              {displayLayovers(stops)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
