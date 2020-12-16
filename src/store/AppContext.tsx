import * as React from 'react';
import { useReducer } from 'react';

export const StartLoading = { type: 'setIsLoading', payload: true };
export const StopLoading = { type: 'setIsLoading', payload: false };

export type InitialStateType = {
  theme: string;
  isLoading: boolean;
};

export const initialState: InitialStateType = {
  theme: 'dark',
  isLoading: false,
};

export const reducer = (state: InitialStateType, action: any): InitialStateType => {
  switch (action.type) {
    case 'setIsLoading':
      return {
        ...state,
        isLoading: action.payload,
      };

    case 'theme':
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };

    default:
      return state;
  }
};

export const AppContext = React.createContext<{ appState: InitialStateType; dispatch: React.Dispatch<any> }>({
  appState: initialState,
  dispatch: () => null,
});

export const AppProvider: React.FC = ({ children }: any) => {
  const [appState, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{ appState, dispatch }}>{children}</AppContext.Provider>;
};
