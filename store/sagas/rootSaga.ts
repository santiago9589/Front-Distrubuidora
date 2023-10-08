import { all } from 'redux-saga/effects';
import { mySagaGetProduct } from './products/getProduct';
import {mySagaPostContact} from "./products/postContactanos"

export function* rootSaga() {
  yield all([
    mySagaGetProduct(),
    mySagaPostContact()
  ]);
}