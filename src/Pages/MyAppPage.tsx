import * as React from "react";
import { getSomething } from "../api/api";
import { AppContext, StartLoading, StopLoading } from "../store/AppContext";

export const MyAppPage = () => {
  // You can choose to get state, dispatch or both, depending on what your component need
  // appState will become globally available
  const { appState, dispatch } = React.useContext(AppContext);

  React.useEffect(() => {
    dispatch(StartLoading);
    getSomething().then(() => dispatch(StopLoading));
  }, []);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center  '}}>
        <h2>Is loading: {appState.isLoading.toString()}</h2>
      </div>
    </>
  );
};
