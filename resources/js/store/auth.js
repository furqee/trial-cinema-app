import axios from "axios";

export default {
    namespaced: true,

    state: {
        userData: null
    },

    getters: {
        user: state => state.userData
    },

    mutations: {
        setUserData(state, user) {
            state.userData = user;
        }
    },

    actions: {
        getUserData({commit}) {
            axios
                .get(process.env.MIX_API_URL + "/api/user")
                .then(response => {
                    commit("setUserData", response.data.user);
                })
                .catch(() => {
                    localStorage.removeItem("authToken");
                });
        },
        sendLoginRequest({commit}, data) {
            return axios.get('/sanctum/csrf-cookie').then(response => {
                 return axios
                    .post(process.env.MIX_API_URL + "/api/login", data)
                    .then(response => {
                        commit("setUserData", response.data.user);
                        localStorage.setItem("authToken", response.data.token);
                        return response;
                    })
                    .catch(error => {
                        return error;
                    });
            });
        },
        sendRegisterRequest({commit}, data) {
            return axios
                .post(process.env.MIX_API_URL + "/api/register", data)
                .then(response => {
                    return response;
                })
                .catch(error => {
                    return error;
                });
        },
        sendLogoutRequest({commit}) {
            axios.get(process.env.MIX_API_URL + "/api/logout").then(() => {
                commit("setUserData", null);
                localStorage.removeItem("authToken");
            });
        }
    }
};
