import {call, put} from 'redux-saga/effects';
import * as actions from '../actions'
import AxiosServer from '../../axios'

export default function* deleteRequest (action) {
    console.log(action.payload.id);
    
    try {
      const response = yield call(AxiosServer, 'delete',{id:action.payload.id});
      //const response = yield call (AxiosServer, "get");
      console.log(response);
      if(response){
          yield put(actions.ifDelete(response.data));
          yield put(actions.listTodo());
      }
    }catch(error){
        console.log('error');
    }
}
