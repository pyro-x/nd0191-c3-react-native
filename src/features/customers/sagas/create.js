import { all, put, select, takeLatest, delay} from 'redux-saga/effects';
import * as actions from '../reducers.js';

import * as services from '../services';
import {set} from '../../../utilities/async_storage';
export function* watchCreateCustomer() {
    yield takeLatest(actions.createCustomer.toString(), takeCreateCustomer);
}

export function* takeCreateCustomer() {
    
    try {
        const fields = yield select(state => state.customers.form.fields);
        const customers = yield select (state => state.customers.list.customers);

        const customer = {
            ...fields,
            id: customers.length + 1
        }
        yield delay (500);
 
        const result = [customer, ...customers];

        yield set('CUSTOMERS_LIST', result);
        yield put (actions.createCustomerResult(result));
    } catch (error) {
        console.log ('error:', error);
        yield put (actions.createCustomerError(error));
    }

}