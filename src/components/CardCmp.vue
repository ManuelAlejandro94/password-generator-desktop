<template>
    <div class="card text-center d-flex align-items-center">
        <div class="card-body">
            <h5 class="card-title"><strong>{{ cardTitle }}</strong></h5>
            <p class="card-text">{{ cardDescription }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        cardTitle: String,
        cardDescription: String
    }
}
</script>
<style scoped>
.card{
    background: rgb(12, 12, 76);
    background-image: linear-gradient(to bottom right, rgba(12,12,76,1), rgba(25,25,112,1), rgba(47,47,142,1));
    min-height: 180px;
    flex-direction: unset;
    box-shadow: 0 0 10px rgba(98, 113, 143, 0.5);
}
</style>