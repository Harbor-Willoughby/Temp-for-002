import axios from 'axios';
import {FACEBOOK_API_KEY, IMAGE_API_KEY} from './contant';

const API_ROOT = 'https://api.screenshotapi.io';
const API_SCREENSHOT = 'https://api.screenshotapi.io';
const API_FACEBOOK = 'https://graph.facebook.com/v2.10/'
const encode = encodeURIComponent;
const responseBody = res => res.data;

const screenShotConfig = {
  headers: {
    apikey: IMAGE_API_KEY,
  },
};

const facebookConfig = {};

const config = {};

const requestsForApi = {
  del: url =>
      axios.delete(`${API_ROOT}/api${url}`, config).then(responseBody),
  get: url =>
      axios.get(`${API_ROOT}/api${url}`, config).then(responseBody),
  put: (url, body) =>
      axios.put(`${API_ROOT}/api${url}`, body, config).then(responseBody),
  post: (url, body) =>
      axios.post(`${API_ROOT}/api${url}`, body, config).then(responseBody)
};

const generateScreenshot = (url, viewport = '1280x1024', device = '1080p_full_hd_television') => {
  return axios.post(`${API_SCREENSHOT}/capture`, {
    "url": url,
    "viewport": viewport,
    "fullpage": true,
    "javascript": true,
    "webdriver": "firefox",
    // "device": device,
    "fresh": false,
    "waitSeconds": 0
  }, screenShotConfig)
    .then(responseBody);
};

const getScreenshot = (key) => {
  return axios.get(`${API_SCREENSHOT}/retrieve?key=${key}`, screenShotConfig)
    .then(responseBody);
};

const getThumnailImage = (url) => {
  return axios.post(`${API_FACEBOOK}`, {
    "scrape": true,
    "id": url,
    'access_token': FACEBOOK_API_KEY
  }, facebookConfig)
  .then(responseBody);
};

export default {
  screenshot: {
    generateScreenshot,
    getScreenshot,
  },
  facebook: {
    getThumnailImage,
  }
};
