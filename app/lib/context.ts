import { createContext } from "react";
import { useContext } from "react";
import { SelectedMoviesContextValue } from "./types";

export const SelectedMoviesContext = createContext<
  SelectedMoviesContextValue | undefined
>(undefined);

export const useSelectedMoviesContext = () => {
  const selectedMoviesContext = useContext(SelectedMoviesContext);
  if (selectedMoviesContext === undefined) {
    throw new Error(
      "useSelectedMoviesContext must be inside a SelectedMoviesProvider"
    );
  }
  return selectedMoviesContext;
};
