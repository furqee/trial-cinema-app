<template>
    <div>
        <header class="mb-5">
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <router-link class="navbar-brand" to="/">Films App</router-link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/films">Films</router-link>
                        </li>
                        <li class="nav-item" v-show="user">
                            <router-link class="nav-link" to="/film/create">Create a Film</router-link>
                        </li>
                        <li class="nav-item" v-show="!user">
                            <router-link class="nav-link" to="/login">Login</router-link>
                        </li>
                        <li class="nav-item" v-show="!user">
                            <router-link class="nav-link" to="/register">Register</router-link>
                        </li>
                        <li class="nav-item" v-show="user">
                            <router-link class="nav-link" to="/profile">Profile</router-link>
                        </li>
                        <li class="nav-item" v-show="user">
                            <a class="nav-link" href="#" @click="logout">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

        <main role="main" class="container">
            <router-view/>
        </main>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";

    export default {
        computed: {
            ...mapGetters("auth", ["user"])
        },

        mounted() {
            if (localStorage.getItem("authToken")) {
                this.getUserData();
            }
        },

        methods: {
            ...mapActions("auth", ["sendLogoutRequest", "getUserData"]),

            logout() {
                this.sendLogoutRequest();
            }
        }
    };
</script>
