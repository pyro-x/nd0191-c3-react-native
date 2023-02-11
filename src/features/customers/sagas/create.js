import { all, put, select, takeLatest, delay} from 'redux-saga/effects';
import * as actions from '../reducers';

import * as services from '../services';

export function* watchCreateCustomer() {
    yield takeLatest(actions.createCustomer.toString(), takeCreateCustomer);
}

export function* takeCreateCustomer() {
    
    try {
        const fields = yield select(state => state.customer.form.fields);
        const customers = yield select (state => state.customer.list.customers);

        const customer = {
            ...fields,
            id: customers.length + 1
        }
        yield delay (500);
 
        const result = [customers, ...customers];
        yield put (actions.createCustomerResult(result));
    } catch (error) {
        yield put (actions.createCustomerError(error));
    }

}