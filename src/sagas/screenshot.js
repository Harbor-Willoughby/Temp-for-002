import { delay } from "redux-saga"
import { call, put, takeLatest } from 'redux-saga/effects';
import {SCREENSHOT_REQUEST, SCREENSHOT_SUCCESS} from '../reducers/screenshot';
import agent from '../agent';
import _ from 'lodash';

function* screenSuccess({ payload: { url } }) {
  try {
    const response = yield call(agent.facebook.getThumnailImage, url);
    // console.log(response);
    // const genScreenShot = yield call(agent.screenshot.generateScreenshot, url);
    // let response = undefined;
    // do {
    //   response = yield call(agent.screenshot.getScreenshot,
    //       genScreenShot.key);
    //   yield call(delay, 3000);
    // } while(response.status != 'ready');
    // if (!response) {
    //   return;
    // }
    yield put({
      type: SCREENSHOT_SUCCESS,
      payload: {
        url: _.first(response.image).url, // response.imageUrl
      }
    });
  } catch(err) {
    console.error(err);
  }
}

function* rootSaga() {
  yield takeLatest(SCREENSHOT_REQUEST, screenSuccess);
};

export default rootSaga;