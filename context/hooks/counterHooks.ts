import { useCallback } from "react";
import { useAppContext } from "../AppProvider";
import { fetchCount } from "../../components/Counter/counterApi";
import { CounterActionTypes } from "../reducers/counter";

export const useCounterApi = () => {
  const { state, dispatch } = useAppContext();
  const increaseByAmount = useCallback(async (amount: number) => {
    dispatch({ type: CounterActionTypes.IncrementAsyncByAmount });

    fetchCount(amount)
      .then((res) => {
        dispatch({
          type: CounterActionTypes.IncrementAsyncByAmountSuccess,
          payload: {
            amount: res.data,
          },
        });
      })
      .catch(() => {
        dispatch({ type: CounterActionTypes.IncrementAsyncByAmountFailure });
      });
  }, []);

  return { increaseByAmount };
};
