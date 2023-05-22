<script setup>
import {defineProps} from 'vue'

const props = defineProps({
    cards: {
        type: Array,
        required: false
    },
    actionHandler: {
        type: Function,
        required: false
    }
})

const d = (id, name) => {
    alert("id: " + id + "; name: " + name)
}

</script>

<template>
    <div class="template">
        <template v-for="i in cards">
            <button class="cards" v-on:click="actionHandler(i)">
                <p class="category">{{ i.category }}</p>
                <img class="image" v-bind:src="i.imageURL[0]"/>
                <p class="productName">{{ i.productName }}</p>

                <p v-if="i.isAvailable">Нет в наличии</p>
                <p v-else-if="i.discountPrice==null" class="prise">{{ i.price }} {{ i.currency }}</p>
                <p v-else class="priseDiscount"><span class="strike">{{ i.price }}</span> {{ i.discountPrice }}
                    {{ i.currency }}</p>

                <p class="rating">рейтинг: {{ i.rating }}</p>
            </button>
        </template>
    </div>
</template>


<style scoped>

.template {
    overflow-y: scroll;
    border-radius: 25px;
    background: #081c15;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    height: 100%;
    width: 100%;
}

.cards {
    text-align: center;
    background: #40916c;
    border: 2px solid #95d5b2;
    border-radius: 25px;
    margin: 10px;
}

.category {
    font-size: 0.8rem;
    color: #b7e4c7;
}

.image {
    display: block;

    width: 100%;
    height: auto;

    border-radius: 25px;
    border: 5px solid #b7e4c7;

    margin-left: auto;
    margin-right: auto;

}

.productName {
    font-weight: bold;
    font-size: 1.1rem;
    color: #d8f3dc;
}

.prise {

}

.strike {
    text-decoration: line-through;
    color: #000000;
    font-size: 0.8rem;
}

.priseDiscount {
    color: #d8f3dc;
    font-size: 1rem;
    font-weight: bold;
}

.rating {
    font-weight: bold;
}

</style>