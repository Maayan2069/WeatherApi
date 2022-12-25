import { Provider } from "react-redux";
import { store } from "./data/store";
import weatherApi from "./data/services/weather";

const { useGetWeatherQuery } = weatherApi;

function Weater(props) {
  const { data, error, isLoading } = useGetWeatherQuery();
  if (error) {
    return <p>Error ... {JSON.stringify(error)}</p>;
  }
  const weater_info = data || [];

  return (
    <>
      <h1>London Weather</h1>
      {console.log("weater", weater_info)}
      {JSON.stringify(weater_info)}
      <ul style={{ listStyle: "none" }}>
        <li>dt: ({weater_info.dt}) </li>
      </ul>
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Weater />
      </div>
    </Provider>
  );
}
