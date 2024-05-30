import { createContext } from "react";
import { ContextProps } from "../interfaces/Interfaces";

export const context = createContext<ContextProps>({} as ContextProps);