import request from "./request";

const authService = {
  classify() {
    return request.get("/classify").then((res) => {
      return res;
    });
  },
  addClassify(params) {
    return request.post("/classify", params).then((res) => {
      return res;
    });
  },
  updateClassify(id, params) {
    return request.put("/classify/" + id, params).then((res) => {
      return res;
    });
  },
  deleteClassify(id) {
    return request.delete("/classify/" + id).then((res) => {
      return res;
    });
  },
};

export default authService;
