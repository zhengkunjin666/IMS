import request from "./request";

const authService = {
  article() {
    return request.get("/article").then((res) => {
      return res;
    });
  },
  addArticle(params) {
    return request.post("/article", params).then((res) => {
      return res;
    });
  },
  showArticle(id) {
    return request.get("/article/" + id).then((res) => {
      return res;
    });
  },
  updateArticle(id, params) {
    return request.put("/article/" + id, params).then((res) => {
      return res;
    });
  },
  deleteArticle(id) {
    return request.delete("/article/" + id).then((res) => {
      return res;
    });
  },
};

export default authService;
