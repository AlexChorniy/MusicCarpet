'use strict';

export const uuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
});

export function debounce(fn, ms) {
      let timeout;
      return function () {
            const fnCall = () => {
                  fn.apply(this, arguments);
            };
            clearTimeout(timeout);
            timeout = setTimeout(fnCall, ms);
      };
};

export const createAsyncAction = (type) => ({
      REQUEST: `${type}.REQUEST`,
      SUCCESS: `${type}.SUCCESS`,
      FAILURE: `${type}.FAILURE`,
});

export const workWithLS = {
      getData(key) {
            return localStorage.getItem(key);
      },
      setData(key, value) {
            localStorage.setItem(key, value);
      },
      removeData(key) {
            localStorage.removeItem(key);
      },
};
