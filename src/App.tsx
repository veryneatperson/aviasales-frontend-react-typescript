import { useReducer } from 'react';

import Header from './components/Header';
import LayoverFilters from './components/LayoverFilters';
import SortingTabs from './components/SortingTabs';
import TicketList from './components/TicketList';

import {
  initState as groupingInitState,
  reducer as groupingReducer,
} from './store/reducers/grouping';

import './App.scss';

function App() {
  const [groupingState, groupingDispatch] = useReducer(
    groupingReducer,
    groupingInitState
  );

  const { layovers, sorting } = groupingState;

  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="wrapper">
          <LayoverFilters layovers={layovers} dispatch={groupingDispatch} />
          <div className="main">
            <SortingTabs sorting={sorting} dispatch={groupingDispatch} />
            <TicketList sorting={sorting} layovers={layovers} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
