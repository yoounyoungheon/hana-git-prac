import { PropsWithChildren } from "react";

type Props = {
    name: string;
    age: number;
    plusCount: () => void;
  };

function Hello({name, age, plusCount, children}: PropsWithChildren<Props>){
  return (
    <>
      <h1>Hello, {name} ( {age} )</h1>
      {children}
      <button onClick={plusCount}>count + 1</button>
    </>
  )
};

export default Hello