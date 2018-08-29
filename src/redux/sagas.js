import {takeLatest} from 'redux-saga/effects';
import * as constants from './constants';
import fetchRequest from './fetchData/action'
import deleteRequest from './deleteData/action';

export function* fetchActions(){
    yield takeLatest(constants.LIST_TODO,fetchRequest);
    yield takeLatest(constants.FOR_DELETE,deleteRequest);
}
export default function* rootSaga(){
    yield[
        fetchActions()
    ];
}