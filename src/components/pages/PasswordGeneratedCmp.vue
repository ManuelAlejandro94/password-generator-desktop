<template>
    <div class="row back-row">
        <div class="col-2">
            <button class="btnBack" @click="goBack">
                <i class="fas fa-arrow-left btnIconBack"></i>
            </button>
        </div>
        <div class="col-8 text-center">
            <h2>Basic password</h2>
        </div>
    </div>
    <br>
    <div class="container">
        <div class="col-12">
            <div class="row">
                <h3>Your password generated</h3>
            </div>
            <div class="row">
                <input type="text" ref="passwordGenerated" readonly :value="apiResponse" />
            </div>
            <br>
            <div class="row">
                <button class="generateButton" @click="generateNewPassword">Generate new password</button>
            </div>
            <br>
            <div class="row">
                <button class="copyButton" @click="copyPassword">Password copy to clipoard</button>
            </div>
        </div>
    </div>
</template>
<script>
import { writeText } from 'clipboard-polyfill';
import axios from 'axios';

export default {
    name: 'PasswordGenerated',
    data() {
        return {
            apiResponse: "Password generating..."
        }
    },
    mounted() {
        this.apiRequest()
    },
    methods: {
        apiRequest() {
            axios.get("https://password-generator-yjm5.onrender.com/v2/generate-password")
                .then(response => {
                    this.apiResponse = response.data.response;
                })
                .catch(error => {
                    const msg = "Failed to load password";
                    console.error(msg, error);
                    this.apiResponse = msg;
                })
        },
        copyPassword() {
            const content = this.$refs.passwordGenerated.value;

            writeText(content)
                .then(() => {
                    alert("Password copy to clipboard");
                })
                .catch((err) => {
                    const msg = "Error copying password to clipboard"
                    console.error(msg, err);
                    alert(msg);
                });
        },
        generateNewPassword() {
            this.apiRequest();
        },
        goBack(){
            this.$router.go(-1);
        }
        //TODO: Make component reusable
        //[ ] Add method for customize page
        //[ ] Add method for length page
        //[ ] Add method for exact page
    }
}
</script>
<style>
.copyButton{
    background-color: rgba(255, 255, 255, 178);
    color: black;
    min-height: 50px;
}

.generateButton{
    background-color: rgba(25, 25, 112, 255);
    color: rgba(192, 192, 192, 255);
    min-height: 50px;
}

br{
    display: block;
    margin: 10px 0;
    content: " ";
}
</style>