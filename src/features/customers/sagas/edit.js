import { all, put, select, takeLatest, delay} from 'redux-saga/effects';
import * as actions from '../reducers.js';

import {set} from '../../../utilities/async_storage';
export function* watchEditCustomer() {
    yield takeLatest(actions.editCustomer.toString(), takeEditCustomer);
}

export function* takeEditCustomer(action) {
    
    try {

        const {payload: {id}} = action;

        const fields = yield select(state => state.customers.form.fields);
        const customers = yield select (state => state.customers.list.customers);

        const customer = {
            id,
            ...fields,
        }

        const result = customers.map (item => {
            if (item.id === id) {
                return customer;
            }
            return item;
        })
        set ('CUSTOMERS_LIST', result);
        yield put (actions.editCustomerResult(result));
    } catch (error) {
        console.log ('error:', error);
        yield put (actions.createCustomerError(error));
    }

}