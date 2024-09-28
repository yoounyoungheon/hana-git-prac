import { Session, CartItem, LoginUser } from "../../../utils/type";

type ActionType =
  | { type: "login"; payload: LoginUser }
  | { type: "logout" }
  | { type: "addCartItem"; payload: CartItem }
  | { type: "removeCartItem"; payload: number };


export const initialSession: Session ={
  loginUser: null,
  cart: [
    { id: 100, name: "TypeScript", hour: 2 },
    { id: 101, name: "React", hour: 2 },
    { id: 200, name: "Next JS", hour: 5 },
  ],
}

export const sessionReducer = (state:Session, action:ActionType):Session=>{
  switch(action.type){
    case 'login':
      return {...state, loginUser:action.payload};
    case 'logout':
      return {...state, loginUser:null};
    case 'addCartItem':
      return {...state, cart:[...state.cart, action.payload]};
    case 'removeCartItem':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default: return initialSession;
  }
}
