interface OrderLine {
    productId: string,
    amount: number
}
export interface CheckoutState {
    loading: boolean,
    orderLines: OrderLine[],
}

export const CheckoutInitialState: CheckoutState = {
    loading: false,
    orderLines: [],
}


export enum CheckoutActionTypes {
    CreateOrder = "CREATE_ORDER",
    CreateOrderSuccess = "CREATE_ORDER_SUCCESS",
    CreateOrderFailure = "CREATE_ORDER_FAILURE",
}

type CheckoutPayloadMap = {
    [CheckoutActionTypes.CreateOrder]: { orderLines: OrderLine[] },
    [CheckoutActionTypes.CreateOrderSuccess]: {},
    [CheckoutActionTypes.CreateOrderFailure]: {},
}

export type CheckoutActions = ActionMap<CheckoutPayloadMap>[keyof ActionMap<CheckoutPayloadMap>];

export function checkoutReducer(state: CheckoutState = CheckoutInitialState, action: CheckoutActions): CheckoutState {
  switch (action.type) {
    case CheckoutActionTypes.CreateOrder:
        return {
            loading: true,
            orderLines: action.payload.orderLines,
        }
    case CheckoutActionTypes.CreateOrderSuccess:
        return { 
            loading: false,
            orderLines: [],
        }
    case CheckoutActionTypes.CreateOrderFailure:
        return { 
            loading: false,
            orderLines: [],
        }
    default:
        return state;
  }
}