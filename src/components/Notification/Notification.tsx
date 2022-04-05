import { memo } from 'react';
import { Notification as NotificationProps } from '../../types/tickets';

import './Notification.scss';

function Notification({ title, text }: NotificationProps) {
  return (
    <div className="notification">
      <h3 className="notification__title">{title}</h3>
      <p className="notification__text">{text}</p>
    </div>
  );
}

export default memo(Notification);
