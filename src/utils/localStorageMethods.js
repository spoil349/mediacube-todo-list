export default {
  GET_LOCALSTORAGE_DATA: function (poleName) {
    const res = localStorage.getItem(poleName);
    return res ? JSON.parse(res) : [];
  },
  ADD_ITEM_LOCALSTORAGE_DATA: function (poleName, data) {
    const localStorageData = JSON.parse(localStorage.getItem(poleName));
    if (Array.isArray(localStorageData) && localStorageData.length !== 0) {
      localStorageData.unshift(data);
      const newData = JSON.stringify(localStorageData);
      localStorage.setItem(poleName, newData);
      return localStorageData;
    } else {
      const newData = JSON.stringify([data]);
      localStorage.setItem(poleName, newData);
      return JSON.parse(localStorage.getItem(poleName));
    }
  },
  REWRITE_LOCALSTORAGE_DATA: function (poleName, data) {
    const newData = JSON.stringify(data);
    localStorage.setItem(poleName, newData);
    return JSON.parse(localStorage.getItem(poleName));
  },
};
