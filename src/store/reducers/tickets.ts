import {
  TicketsActionTypes,
  TicketsState,
  TicketsAction,
} from '../../types/tickets';

export const initState: TicketsState = {
  searchId: '',
  tickets: [],
  isLoading: false,
  searchIdError: false,
  ticketsError: false,
  fetchedAllTickets: false,
};

export const reducer = (
  state: TicketsState,
  action: TicketsAction
): TicketsState => {
  switch (action.type) {
    case TicketsActionTypes.GET_SEARCHID_SUCCESS:
      return {
        ...state,
        searchId: action.payload,
      };
    case TicketsActionTypes.GET_SEARCHID_FAILURE:
      return {
        ...state,
        isLoading: false,
        searchIdError: true,
      };
    case TicketsActionTypes.GET_TICKETS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case TicketsActionTypes.GET_TICKETS_SUCCESS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload.tickets],
        fetchedAllTickets: action.payload.stop,
        isLoading: !action.payload.stop,
      };
    case TicketsActionTypes.GET_TICKETS_FAILURE:
      return {
        ...state,
        ticketsError: true,
      };
    default:
      return state;
  }
};
