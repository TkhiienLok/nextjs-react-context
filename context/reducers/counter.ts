export interface CounterState {
  value: number;
  status: "loading" | "idle";
}

export const counterInitialState: CounterState = {
  value: 0,
  status: "idle",
};

export enum CounterActionTypes {
  Increment = "INCREMENT",
  Decrement = "DECREMENT",
  IncrementByAmount = "INCREMENT_BY_AMOUNT",
  IncrementAsyncByAmount = "INCREMENT_ASYNC_BY_AMOUNT",
  IncrementAsyncByAmountSuccess = "INCREMENT_ASYNC_BY_AMOUNT_SUCCESS",
  IncrementAsyncByAmountFailure = "INCREMENT_ASYNC_BY_AMOUNT_FAILURE",
  IncrementIfOdd = "INCREMENT_IF_ODD",
}

type CounterPayloadMap = {
  [CounterActionTypes.Increment]: undefined;
  [CounterActionTypes.Decrement]: undefined;
  [CounterActionTypes.IncrementByAmount]: { amount: number };
  [CounterActionTypes.IncrementAsyncByAmount]: undefined;
  [CounterActionTypes.IncrementIfOdd]: { amount: number };
  [CounterActionTypes.IncrementAsyncByAmountSuccess]: { amount: number };
  [CounterActionTypes.IncrementAsyncByAmountFailure]: undefined;
};

export type CounterActions =
  ActionMap<CounterPayloadMap>[keyof ActionMap<CounterPayloadMap>];

export function counterReducer(
  state: CounterState = counterInitialState,
  action: CounterActions
): CounterState {
  switch (action.type) {
    case CounterActionTypes.Increment:
      return {
        ...state,
        value: state.value + 1,
      };
    case CounterActionTypes.Decrement:
      return {
        ...state,
        value: state.value - 1,
      };
    case CounterActionTypes.IncrementAsyncByAmount:
      return {
        ...state,
        status: "loading",
      };
    case CounterActionTypes.IncrementAsyncByAmountSuccess:
      return {
        value: state.value + action.payload.amount,
        status: "idle",
      };
    case CounterActionTypes.IncrementAsyncByAmountFailure:
      return {
        ...state,
        status: "idle",
      };
    case CounterActionTypes.IncrementByAmount:
      return {
        ...state,
        value: state.value + action.payload.amount,
      };
    case CounterActionTypes.IncrementIfOdd:
      return {
        ...state,
        value:
          state.value % 2 === 1
            ? state.value + action.payload.amount
            : state.value,
      };
    default:
      return state;
  }
}
