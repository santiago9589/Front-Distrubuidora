import {put, takeLatest } from 'redux-saga/effects';
// import type { PayloadAction } from '@reduxjs/toolkit'
import { FAIL_POST_CONTACT, RESET_POST_CONTACT, SUCCES_POST_CONTACT } from '../../redux/sliceContact';
// import { Contactanos } from '../../../types/contactanos';


function* postContacts() {
    try {
        // const data :Boolean = yield call()
        yield put(SUCCES_POST_CONTACT("Mensaje enviado con exito"))
        yield put(RESET_POST_CONTACT(""))
    } catch (error) {
        yield put(FAIL_POST_CONTACT("Hubo un error en el proceso"))
        yield put(RESET_POST_CONTACT(""))
    }
}

export function* mySagaPostContact() {
    yield takeLatest('contactState/START_POST_CONTACT', postContacts);
  }