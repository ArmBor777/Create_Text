// import { createContext } from "react";
import { useReducer } from "react";
import UserList from "./components/UserList";

// const Data = createContext(null);
// const NewData = createContext(null);


function App() {

  const reducer = (posts, action) => {
    if (action.type = "delete") {
      return posts.filter((post) => post.id !== action.payload.id)
    }
  }

  const [posts, dispatch] = useReducer({ reducer }, posts)

  return (
    <div className="App">
      {/* <NewData.Provider value={'data2'}>
        <Data.Provider value={'data'}>
          <UserList />
        </Data.Provider>
      </NewData.Provider> */}

      <UserList />
      
      <button
        onClick={() => {
          dispatch({
            type: "delete",
            payload: {
              id: 1
            }
          })
        }}
      >
        Delete Post
      </button>
    </div>
  );
}
// export { Data, NewData}
export default App;

