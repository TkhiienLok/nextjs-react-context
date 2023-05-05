import {
  CounterActions,
  CounterState,
  counterInitialState,
  counterReducer,
} from "./reducers/counter";
import {
  CheckoutActions,
  CheckoutInitialState,
  CheckoutState,
  checkoutReducer,
} from "./reducers/checkout";
import React, {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

interface AppState {
  counter: CounterState;
  checkout: CheckoutState;
}
const appInitialState: AppState = {
  counter: counterInitialState,
  checkout: CheckoutInitialState,
};

const AppContext = createContext<{
  state: AppState;
  dispatch: Dispatch<CounterActions | CheckoutActions>;
}>({
  state: appInitialState,
  dispatch: () => {},
});

export function mainReducer(
  state: AppState,
  action: CounterActions | CheckoutActions
) {
  return {
    counter: counterReducer(state.counter, action as CounterActions),
    checkout: checkoutReducer(state.checkout, action as CheckoutActions),
  };
}

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, appInitialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

function useAppContext() {
  return useContext(AppContext);
}

export { AppProvider, useAppContext };
