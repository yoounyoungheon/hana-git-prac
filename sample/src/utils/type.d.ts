export type LoginUser = {
  id: number;
  name: string
};

export type Cart = {
  id: number;
  name: string;
  hour: number
}; 

export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[]; 
};