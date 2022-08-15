import request from "./request";

const authService = {
  login(params) {
    return request.post("/login", params).then((res) => {
      return res;
    });
  },
  users() {
    return request.get("/user").then((res) => {
      return res;
    });
  },
  addUser(params) {
    return request.post("/user", params).then((res) => {
      return res;
    });
  },
  updateUser(id, params) {
    return request.put("/user/" + id, params).then((res) => {
      return res;
    });
  },
  deleteUser(id) {
    return request.delete("/user/" + id).then((res) => {
      return res;
    });
  },
};

export default authService;
