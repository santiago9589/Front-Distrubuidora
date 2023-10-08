import { call, put, takeLatest } from 'redux-saga/effects';
// import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../../types/product';
import {FAIL_PROSS_PRODUCT, PROSS_GET_PRODUCT} from "../../redux/sliceProducts"
import { api } from '../../../api/real/api';

function* getProductData() {
    try {
        const data :Product[] = yield call(api.getAllProducts)
        yield put(PROSS_GET_PRODUCT(data))
    } catch (error) {
        yield put(FAIL_PROSS_PRODUCT("Hubo un error"))
    }
}

export function* mySagaGetProduct() {
    yield takeLatest('productState/START_GET_PRODUCT', getProductData);
  }