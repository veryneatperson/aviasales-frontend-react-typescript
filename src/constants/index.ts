import { NotificationType, Notification } from '../types/tickets';

export const BASE_URL = 'https://front-test.beta.aviasales.ru';
export const BASE_CARRIER_LOGO_URL = '//pics.avs.io/99/36/';

const ERROR_MSG = 'Произошла ошибка';
const SEARCH_ID_ERROR_MSG = 'Не удалось получить идентификатор поиска билетов';
const TICKETS_ERROR_MSG = 'Не удалось загрузить билеты';
const EMPTY_TICKETS_NOTIFICATION = 'По заданным параметрам билеты отсутствуют';
const EMPTY_FILTERS_MSG = 'Попробуйте выбрать один или несколько фильтров';

export const SHOW_TICKETS_AMOUNT = 5;

export const NOTIFICATION_MESSAGE: { [key in NotificationType]: Notification } =
  {
    searchIdError: {
      title: ERROR_MSG,
      text: SEARCH_ID_ERROR_MSG,
    },
    ticketsError: {
      title: ERROR_MSG,
      text: TICKETS_ERROR_MSG,
    },
    emptyList: {
      title: EMPTY_TICKETS_NOTIFICATION,
      text: EMPTY_FILTERS_MSG,
    },
  };
