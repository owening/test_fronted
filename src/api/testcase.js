import axios from "./http";

const testcase = {
  getTestcase(params) {
    return axios({
      method: "GET",
      url: "/testcase",
      params: params,
    });
  },

  addTestcase(data) {
    return axios({
      method: "POST",
      url: "/testcase",
      data: data,
    });
  },
  deleteTestcase(data) {
    return axios({
      method: "DELETE",
      url: "/testcase",
      data: data,
    });
  },
  updateTestcase(data) {
    return axios({
      method: "PUT",
      url: "/testcase",
      data: data,
    });
  },
};

export default testcase;
