import { all, put, select, delay, takeLatest } from 'redux-saga/effects'
import * as actions from '../reducers'
import { get, set } from '../../../utilities/async_storage'

export function* watchLoadRegions() {
    yield takeLatest(actions.loadRegions.toString(), takeLoadRegions)
}

export function* takeLoadRegions() {
    try {
        let regions = yield get('REGIONS_LIST') ; 

        yield put(actions.loadRegionsStart());

        // if regions is empty, then load a default list
        if (!regions) {
            regions = [
                { id: 1, name: 'North America' },
                { id: 2, name: 'South America' },
                { id: 3, name: 'Europe' },
                { id: 4, name: 'Asia' },
                { id: 5, name: 'Africa' },
                { id: 6, name: 'Australia' },
            ]
            // and save it to async storage
            yield set('REGIONS_LIST', regions);
        }
        yield put(actions.loadRegionsSuccess(regions))
    } catch (error) {
        console.log ('error:', error);
        yield put(actions.loadRegionsFailure([]))
    }
}

