<template>
    <div class="row">
        <h2>Select type of password</h2>
    </div>
</template>
<script>
export default {
    data() {
        return {
            card_1: 'Basic password',
            card_2: 'Choose Length',
            card_3: 'Customize password',
            card_4: 'Exact password'
        }
    }
}
</script>
<style>
.row {
    background-color: rgb(25, 25, 112);
}
</style>