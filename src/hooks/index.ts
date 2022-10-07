<<<<<<< HEAD
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'src/store/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
=======
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { AppDispatch, RootState } from "src/store/store";
import ActionCreators from "../store/actions";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAction = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
>>>>>>> db5b01ab33c3348f86e17c4409901ac0426740c5
