import { useReducer, useRef, useEffect } from 'react';
import axios from 'axios';

import { reducer, initState } from '../reducers/tickets';
import {
  TicketsActionTypes,
  TicketsResponse,
  SearchIdResponse,
  TicketsState,
} from '../../types/tickets';
import { BASE_URL } from '../../constants';

const POLLING_INTERVAL_IN_SECONDS = 3;
const MAX_POLLING_ATTEMPTS = 5;
const OMIT_ERROR_CODES = [500];

const searchIdUrl = `${BASE_URL}/search`;

const fetchData = (): TicketsState => {
  const [state, dispatch] = useReducer(reducer, initState);

  const pollingAttempts = useRef(0);

  useEffect(() => {
    dispatch({ type: TicketsActionTypes.GET_TICKETS_REQUEST });

    const fetchSearchId = async () => {
      try {
        const response = await axios.get<SearchIdResponse>(searchIdUrl);

        dispatch({
          type: TicketsActionTypes.GET_SEARCHID_SUCCESS,
          payload: response.data.searchId,
        });
      } catch (e) {
        dispatch({ type: TicketsActionTypes.GET_SEARCHID_FAILURE });
      }
    };
    fetchSearchId();
  }, []);

  useEffect(() => {
    if (!state.searchId) return;

    const fetchTickets = async () => {
      const pollingCallback = () => setTimeout(fetchTickets, POLLING_INTERVAL_IN_SECONDS * 1000);

      try {
        const {
          data: { tickets, stop },
        } = await axios.get<TicketsResponse>(
          `${BASE_URL}/tickets?searchId=${state.searchId}`
        );

        dispatch({
          type: TicketsActionTypes.GET_TICKETS_SUCCESS,
          payload: { tickets, stop },
        });

        if (stop) {
          return;
        }

        pollingCallback();
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err.response && OMIT_ERROR_CODES.includes(err.response.status)) {
            dispatch({ type: TicketsActionTypes.GET_TICKETS_FAILURE });
            return;
          }

          pollingAttempts.current += 1;

          if (pollingAttempts.current <= MAX_POLLING_ATTEMPTS) {
            pollingCallback();
          }
        }
      }
    };

    fetchTickets();
  }, [state.searchId]);

  return state;
};

export default fetchData;
