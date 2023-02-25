
import { all, put, select, delay, takeLatest } from 'redux-saga/effects'
import * as actions from '../reducers'
import { get, set } from '../../../utilities/async_storage'

export function* watchLoadCustomers() {
    yield takeLatest(actions.loadCustomers.toString(), takeLoadCustomerss)
}

export function* takeLoadCustomerss() {
    try {
        const customers = yield get('CUSTOMERS_LIST') || [] ;

        if (customers.length===0) {
            // save it as empty array
            yield set('CUSTOMERS_LIST', []);
        }

        yield put(actions.loadCustomersResult(customers))
    } catch (error) {
        yield put(actions.loadCustomersResult([]))
    }
}