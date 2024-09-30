import './App.css'
interface User{name: string};

function Welcome(user: User){
  return (<h1>{user.name}이의 첫 리액트</h1>)
}

export default Welcome