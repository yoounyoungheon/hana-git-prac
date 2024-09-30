import { Link, useParams } from "react-router-dom"
import { useSession } from "../context-api/SessionContext";

export function Items(){
  const { id } = useParams<{id:string}>();
  const {session} = useSession();
  const item = session.cart.find((item)=> item.id === Number(id));

  if(!item){return <div>Item not found</div>}

  return (
    <div className="item-details">
      <h2>Item details</h2>
      <p>
        <strong>ID:</strong> {item.id}
      </p>
      <p>
        <strong>Name:</strong> {item.name}
      </p>
      <p>
        <strong>Price:</strong> {item.hour.toLocaleString()}시간
      </p>
      <Link to="/items">Back to Items</Link>
    </div>
  )
}