// hooks.ts (or wherever you keep your custom hooks)
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Correctly type the `useDispatch` hook
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Correctly type the `useSelector` hook
export const useAppSelector: <TSelected>(
  selector: (state: RootState) => TSelected
) => TSelected = useSelector;
