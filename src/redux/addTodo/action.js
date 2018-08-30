import {call, put} from 'redux-saga/effects';
import * as actions from '../actions'
import AxiosServer from '../../axios'

export default function* addtodoRequest (action) {
    try {
      const response = yield call(AxiosServer, 'postt',{name:action.payload,completed:false});
      if(response){
          yield put(actions.ifAddtodo(response.data));
      }
    }catch(error){
        console.log('error');
    }
}