import { all, put, select, takeLatest, delay} from 'redux-saga/effects';
import * as actions from '../reducers.js';

import * as services from '../services';
import {set} from '../../../utilities/async_storage';
export function* watchEditCustomer() {
    yield takeLatest(actions.editCustomer.toString(), takeEditCustomer);
}

export function* takeEditCustomer() {
    
    try {

        const fields = yield select(state => state.customers.form.fields);
        const customers = yield select (state => state.customers.list.customers);

        console.log ('fields:', fields);
        console.log ('customers:', customers);

        const customer = {
            ...fields,
        }

        const result = customers.map (item => {
            if (item.id === customer.id) {
                return customer;
            }
            return item;
        })
        yield put (actions.createCustomerResult(result));
    } catch (error) {
        console.log ('error:', error);
        yield put (actions.createCustomerError(error));
    }

}