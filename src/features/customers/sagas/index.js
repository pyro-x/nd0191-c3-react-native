import { all } from 'redux-saga/effects';
import { watchCreateCustomer } from './create';
import { watchLoadCustomers } from './load';

export default function* customers() {
    yield all([
        watchCreateCustomer(),
        watchLoadCustomers()
    ]);


}