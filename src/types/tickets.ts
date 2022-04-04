export interface TicketsState {
  searchId: string;
  tickets: Ticket[] | [];
  isLoading: boolean;
  searchIdError: boolean;
  ticketsError: boolean;
  fetchedAllTickets: boolean;
}

export enum TicketsActionTypes {
  GET_SEARCHID_SUCCESS = 'GET_SEARCHID_SUCCESS',
  GET_SEARCHID_FAILURE = 'GET_SEARCHID_FAILURE',
  GET_TICKETS_REQUEST = 'GET_TICKETS_REQUEST',
  GET_TICKETS_SUCCESS = 'GET_TICKETS_SUCCESS',
  GET_TICKETS_FAILURE = 'GET_TICKETS_FAILURE',
}

export interface TicketsResponse {
  tickets: Ticket[];
  stop: boolean;
}

export interface SearchIdResponse {
  searchId: string;
}

interface GetSearchIdSuccessAction {
  type: TicketsActionTypes.GET_SEARCHID_SUCCESS;
  payload: string;
}

interface GetSearchIdFailureAction {
  type: TicketsActionTypes.GET_SEARCHID_FAILURE;
}

interface GetTicketsRequestAction {
  type: TicketsActionTypes.GET_TICKETS_REQUEST;
}

interface GetTicketsSuccessAction {
  type: TicketsActionTypes.GET_TICKETS_SUCCESS;
  payload: TicketsResponse;
}

interface GetTicketsFailureAction {
  type: TicketsActionTypes.GET_TICKETS_FAILURE;
}

export type TicketsAction =
  | GetSearchIdSuccessAction
  | GetSearchIdFailureAction
  | GetTicketsRequestAction
  | GetTicketsSuccessAction
  | GetTicketsFailureAction;

interface Segment {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}

export interface Ticket {
  price: number;
  carrier: string;
  segments: [Segment, Segment];
}

export interface Notification {
  title: string;
  text: string;
}

export type NotificationType = 'searchIdError' | 'ticketsError' | 'emptyList';
