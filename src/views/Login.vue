<template>
<div class="login-page">
    <div class="login-img">
        <img class="login-cover" :src="cover" alt="cover" />
        <div class="over"></div>
    </div>
    <div class="login-box">
        <div class="login-name">天津大学校务管理平台</div>
        <div class="login-card">
            <div class="login-card-title">
                管理员登录
            </div>
            <v-card-text>
                <div>
                    <v-form lazy-validation ref="form">
                        <v-text-field v-model="form.name" label="用户名" required></v-text-field>

                        <v-text-field v-model="form.password" label="密码" type="password" required></v-text-field>

                        <div>
                            <v-btn v-if="isSubmit" @click="login" rounded block dark>登录</v-btn>
                            <v-btn v-else rounded block disabled>登录</v-btn>
                        </div>
                        <v-divider></v-divider>

                    </v-form>
                </div>
            </v-card-text>
        </div>
    </div>
</div>
</template>

<script>
import {
    login
} from "../api/admin.js";
import {
    setUserInfo
} from "../utils/cookie.js";
export default {
    name: "Login",
    data() {
        return {
            form: {
                name: "",
                password: ""
            },
            cover: require("../assets/cover.jpg")
        }
    },

    methods: {
        login() {
            login(this.form).then(res => {
                if (res.data.ErrorCode === 1) {
                    //TODO: 弹窗 - error
                    alert("密码或账号错误");
                } else {
                    let info = res.data.data
                    setUserInfo(info.token, info.id, info.PhoneNumber, info.is_lb, this.form.name);
                    this.$router.push({
                        name: "Home",
                    });
                }
            })
        }
    },

    computed: {
        isSubmit() {
            for (let item in this.form) {
                let arri = this.form[item];
                if (arri === undefined || arri === "" || arri == null) {
                    return false;
                }
            }
            return true;
        }
    }

}
</script>

<style scoped>
a {
    text-align: center;
}

a:hover {
    cursor: pointer;
    color: #007bff;
}

.login-page {
    height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-columns: 40% 60%;
}

.login-box {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eeeeee;
}

.login-card {
    max-width: 40%;
    min-width: 400px;
    margin: 0 auto;
    border: 2px solid #d9d9d9;
    border-radius: 10px;
    box-shadow: 7px 7px 10px rgba(200, 200, 200, 0.2);
}

.login-img {
    position: relative;
}

.over {
    top: 0;
    z-index: 9;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(50, 50, 50, 0);
}

.login-cover {
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.login-name {
    bottom:10px;
    color:#a9a9a9;
    position: absolute;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
}

.login-card-title {
    text-align: center;
    font-size: 24px;
    margin: 14px 0;
}
</style>
