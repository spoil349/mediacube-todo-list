export default {
  GET_LOCALSTORAGE_DATA: function (poleName) {
    const res = localStorage.getItem(poleName);
    return res ? JSON.parse(res) : [];
  },
  SET_LOCALSTORAGE_DATA: function (poleName, data) {
    const formattedData = JSON.stringify(data);
    localStorage.setItem(poleName, formattedData);
  },
};
