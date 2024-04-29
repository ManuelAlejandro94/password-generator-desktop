<template>
    <div class="row back-row">
        <div class="col-2">
            <button class="btnBack" @click="goBack">
                <i class="fas fa-arrow-left btnIconBack"></i>
            </button>
        </div>
        <div class="col-8 text-center">
            <h2>{{ title }}</h2>
        </div>
    </div>
    <div class="row justify-content-center">
        <div v-if="flag === 'length'" class="col-8 mx-auto text-center colAb">
            <h3>{{ subTitle }}</h3>
            <div v-for="(input, index) in inputs" :key="index" class="row">
                <input type="number" :placeholder="input.placeholder" :ref="input.model" />
            </div>
            <div class="row">
                <button class="generateButton" @click="lengthGenerator">Generate password</button>
            </div>
        </div>
        <div v-else-if="flag === 'custom'" class="col-8 mx-auto text-center colAb">
            <h3>{{ subTitle }}</h3>
            <div v-for="(input, index) in inputs" :key="index" class="row">
                <input type="number" :placeholder="input.placeholder" :ref="input.model" />
            </div>
            <div class="row">
                <button class="generateButton" @click="customGenerator">Generate password</button>
            </div>
        </div>
        <div v-else-if="flag === 'exact'" class="col-8 mx-auto text-center colAb">
            <h3>{{ subTitle }}</h3>
            <div v-for="(input, index) in inputs" :key="index" class="row">
                <input type="number" :placeholder="input.placeholder" :ref="input.model" />
            </div>
            <div class="row">
                <button class="generateButton" @click="exactGenerator">Generate password</button>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'PasswordForm',
    data() {
        return {
            title: "",
            subTitle: "",
            flag: "",
            inputs: []
        }
    },
    mounted() {
        this.title = history.state.title;
        this.subTitle = history.state.subTitle;
        this.flag = history.state.flag;
        this.templateConstructor();
    },
    methods: {
        goBack(){
            this.$router.go(-1);
        },
        templateConstructor() {
            switch (this.flag) {
                case "length":
                    this.inputs.push({
                        placeholder: "Length",
                        model: "len"
                    });
                    break;
                case "custom":
                    this.inputs.push(
                        {
                            placeholder: "Length",
                            model: "len",
                        },
                        {
                            placeholder: "Minimum number of letters",
                            model: "letters"
                        },
                        {
                            placeholder: "Minimum number of digits",
                            model: "digits"
                        },
                        {
                            placeholder: "Minimum number of numbers",
                            model: "special_characters"
                        }
                    );
                    break;
                case "exact":
                    this.inputs.push(
                        {
                            placeholder: "Number of Capitalize letters",
                            model: "uppercase"
                        },
                        {
                            placeholder: "Number of Lowercase letters",
                            model: "lowercase"
                        },
                        {
                            placeholder: "Number of digits",
                            model: "digits"
                        },
                        {
                            placeholder: "Number of special characters",
                            model: "special_characters"
                        }
                    );
                    break;
                default:
                    break;
            }
        },
        lengthGenerator() {
            const lenValue = this.$refs['len'][0].value;
            this.$router.push({
                name: 'PasswordGenerated',
                state: {
                    methodType: "length",
                    length: lenValue
                }
            });
        },
        customGenerator() {
            const lenValue = this.$refs['len'][0].value;
            const lettersValue = this.$refs['letters'][0].value;
            const digitsValue = this.$refs['digits'][0].value;
            const specialValue = this.$refs['special_characters'][0].value;
            const body = {
                len: Number(lenValue),
                letters: Number(lettersValue),
                digits: Number(digitsValue),
                special_characters: Number(specialValue)
            }

            this.$router.push({
                name: 'PasswordGenerated',
                state: {
                    methodType: "custom",
                    body: body
                }
            });
        },
        exactGenerator() {
            const uppercaseValue = this.$refs['uppercase'][0].value;
            const lowercaseValue = this.$refs['lowercase'][0].value;
            const digitsValue = this.$refs['digits'][0].value;
            const specialCharactersValue = this.$refs['special_characters'][0].value;
            const body = {
                uppercase: Number(uppercaseValue),
                lowercase: Number(lowercaseValue),
                digits: Number(digitsValue),
                special_characters: Number(specialCharactersValue)
            };

            this.$router.push({
                name: 'PasswordGenerated',
                state: {
                    methodType: "exact",
                    body: body
                }
            });
        }
    }

}
</script>
<style>
.rowVh {
    height: 100vh;
    position: relative;
}

.colAb {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

input {
    margin-bottom: 10px;
}
</style>