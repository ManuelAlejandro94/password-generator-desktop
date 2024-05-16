<template>
    <div class="row back-row">
        <div class="col-2">
            <button class="btnBack" @click="goBack">
                <i class="fas fa-arrow-left btnIconBack"></i>
            </button>
        </div>
        <div class="col-8 text-center">
            <h2>Password generated</h2>
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
            apiResponse: "Password generating...",
            msgErrorLoad: "Failed to load password",
            length: 0,
            body: {},
            methodType: "",
            title: ""
        }
    },
    mounted() {
        this.executeMethod()
    },
    methods: {
        apiRequestDefault() {
            axios.get("https://jmhvrh49e8.execute-api.us-east-2.amazonaws.com/dev/v2/generate-password")
                .then(response => {
                    this.apiResponse = response.data.response;
                })
                .catch(error => {
                    console.error(this.msgErrorLoad, error);
                    this.apiResponse = this.msgErrorLoad;
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
            this.executeMethod()
        },
        goBack(){
            this.$router.go(-1);
        },
        apiRequestCustomize(){
            axios.post("https://jmhvrh49e8.execute-api.us-east-2.amazonaws.com/dev/v2/generate-password-customize", this.body)
                .then(response => {
                    this.apiResponse = response.data.response;
                })
                .catch(error => {
                    console.error(this.msgErrorLoad, error);
                    this.apiResponse = this.msgErrorLoad;
                })
        },
        apiRequestLength() {
            axios.get(`https://jmhvrh49e8.execute-api.us-east-2.amazonaws.com/dev/v2/generate-password-length/${this.length}`)
                .then(response => {
                    this.apiResponse = response.data.response
                })
                .catch(error => {
                    console.error(this.msgErrorLoad, error);
                    this.apiResponse = this.msgErrorLoad;
                })
        },
        apiRequestExact() {
            axios.post("https://jmhvrh49e8.execute-api.us-east-2.amazonaws.com/dev/v2/generate-password-exact", this.body)
                .then(response => {
                    this.apiResponse = response.data.response;
                })
                .catch(error => {
                    console.error(this.msgErrorLoad, error);
                    this.apiResponse = this.msgErrorLoad;
                })
        },
        executeMethod() {
            this.methodType = history.state.methodType
            switch (this.methodType) {
                case "length":
                    this.length = history.state.length;
                    this.apiRequestLength();
                    break;
                case "custom":
                    this.body = history.state.body;
                    this.apiRequestCustomize();
                    break;
                case "exact":
                    this.body = history.state.body;
                    this.apiRequestExact();
                    break;
                default:
                    this.apiRequestDefault();
                    break;
            }
        }
    }
}
</script>
<style>
.copyButton{
    background-color: rgba(255, 255, 255, 178);
    color: black;
    min-height: 50px;
    border-radius: 20px;
}

br{
    display: block;
    margin: 10px 0;
    content: " ";
}
</style>