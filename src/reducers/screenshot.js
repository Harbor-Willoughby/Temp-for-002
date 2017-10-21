
export const SCREENSHOT_REQUEST = 'SCREENSHOT_REQUEST';
export const SCREENSHOT_SUCCESS = 'SCREENSHOT_SUCCESS';

const DEFAULT_STATE = {
  url: '',
};

const screenshotReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SCREENSHOT_REQUEST:
      return state;
    case SCREENSHOT_SUCCESS:
      return {
        url: action.payload.url,
      };
    default:
      return state;
  }
};

export default screenshotReducer;

