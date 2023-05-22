<script setup>
import {defineProps} from 'vue'
import {VueperSlides, VueperSlide} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

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

</script>

<template>

    <div class="template">

        <template v-for="i in cards">
            <div class="cards" v-on:click="actionHandler(i)">
                <p class="category">{{ i.category }}</p>

                <vueper-slides class="no-shadow carousel" :gap="2" :slideImageInside="false" v-on:click.stop
                               :infinite="false" :parallax="0" :slide-ratio="1 / 1" :arrows="false">
                    <vueper-slide class="image"
                                  v-for="j in i.imageURL"
                                  :image="j">
                    </vueper-slide>
                </vueper-slides>

                <p class="productName">{{ i.productName }}</p>

                <p v-if="i.isAvailable">Нет в наличии</p>
                <p v-else-if="i.discountPrice==null" class="prise">{{ i.price }} {{ i.currency }}</p>
                <p v-else class="priseDiscount"><span class="strike">{{ i.price }}</span> {{ i.discountPrice }}
                    {{ i.currency }}</p>

                <p class="rating">рейтинг: {{ i.rating }}</p>
            </div>
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

.carousel {


    margin-left: 5px;
    margin-right: 5px;
}

.image {
    border-radius: 25px;
    border: 5px solid #b7e4c7;
    border-radius: 25px;
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