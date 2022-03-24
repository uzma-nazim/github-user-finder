import { Provider } from "react-redux";
import GithubUser from "./components/githubUser";
import UserStore from "./store/action/store";


function App() {
  return (
    <>
      <Provider store={UserStore} >
        <GithubUser />
      </Provider>
    </>
  );
}

export default App;
