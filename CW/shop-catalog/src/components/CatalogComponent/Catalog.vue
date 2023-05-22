<script setup>
import Cards from "@/components/CatalogComponent/Cards.vue";
</script>

<template>
    <div>
        <Cards :cards="products" :actionHandler="pressAction"></Cards>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pressAction: function (item) {
                alert("id: "+item.id+"; productName: "+ item.productName)
            },
            products: [
                {
                    id: 1,
                    productName: "iPhone 14",
                    imageURL: [
                        "https://i-point.ru/storage/gallery/big/2707.jpg",
                        "https://i-point.ru/storage/gallery/big/2709.jpg",
                    ],
                    price: "93 990",
                    discountPrice: "73 990",
                    currency: "₽",
                    rating: 4.3,
                    category: "Смартфон",
                    isAvailable: true
                },
                {
                    id: 2,
                    productName: "iPhone 14 Pro Max",
                    imageURL: [
                        "https://i-point.ru/storage/gallery/big/2678.jpg",
                        "https://i-point.ru/storage/gallery/big/2680.jpg",
                    ],
                    price: "112 990",
                    discountPrice: "100 990",
                    currency: "₽",
                    rating: 5.0,
                    category: "Смартфон",
                    isAvailable: false
                },
                {
                    id: 3,
                    productName: "MacBook Pro 2022",
                    imageURL: [
                        "https://i-point.ru/storage/gallery/big/3278.jpg",
                        "https://i-point.ru/storage/gallery/big/3279.jpg",
                    ],
                    price: "107 990",
                    discountPrice: null,
                    currency: "₽",
                    rating: 3.2,
                    category: "Ноутбук",
                    isAvailable: true
                },
                {
                    id: 4,
                    productName: "iMac 24\" Retina 4,5K",
                    imageURL: [
                        "https://i-point.ru/storage/gallery/big/877.jpg",
                        "https://i-point.ru/storage/gallery/big/878.jpg",
                    ],
                    price: "174 990",
                    discountPrice: null,
                    currency: "₽",
                    rating: 3.2,
                    category: "Моноблок",
                    isAvailable: true
                },
                {
                    id: 5,
                    productName: "Apple AirPods Max",
                    imageURL: [
                        "https://i-point.ru/storage/gallery/big/627.jpg",
                        "https://i-point.ru/storage/gallery/big/628.jpg",
                    ],
                    price: "52 990",
                    discountPrice: null,
                    currency: "₽",
                    rating: 4.5,
                    category: "Наушники",
                    isAvailable: false
                },
                {
                    id: 6,
                    productName: "Apple AirPods Pro",
                    imageURL: [
                        "https://i-point.ru/storage/gallery/big/2188.jpg",
                        "https://i-point.ru/storage/gallery/big/2189.jpg",
                    ],
                    price: "19 990",
                    discountPrice: "13 990",
                    currency: "₽",
                    rating: 4.5,
                    category: "Наушники",
                    isAvailable: true
                },
                {
                    id: 7,
                    productName: "Apple Pencil 1",
                    imageURL: [
                        "https://i-point.ru/storage/gallery/big/accs_199.jpg",
                        "https://i-point.ru/storage/gallery/big/accs_200.jpg",
                    ],
                    price: "9 490",
                    discountPrice: null,
                    currency: "₽",
                    rating: 4.5,
                    category: "Стилус",
                    isAvailable: true
                },
                {
                    id: 8,
                    productName: "Apple Watch SE",
                    imageURL: [
                        "https://i-point.ru/storage/gallery/big/973.jpg",
                        "https://i-point.ru/storage/gallery/big/974.jpg",
                    ],
                    price: "21 990",
                    discountPrice: null,
                    currency: "₽",
                    rating: 4.5,
                    category: "Смарт часы",
                    isAvailable: true
                },
                {
                    id: 9,
                    productName: "Apple HomePod mini",
                    imageURL: [
                        "https://i-point.ru/storage/gallery/big/1141.jpg",
                        "https://i-point.ru/storage/gallery/big/1142.jpg",
                    ],
                    price: "11 990",
                    discountPrice: null,
                    currency: "₽",
                    rating: 4.5,
                    category: "Колонка",
                    isAvailable: true
                },
                {
                    id: 10,
                    productName: "MacBook Air 2020 13\"",
                    imageURL: [
                        "https://i-point.ru/storage/gallery/big/603.jpg",
                        "https://i-point.ru/storage/gallery/big/604.jpg",
                    ],
                    price: "79 990",
                    discountPrice: null,
                    currency: "₽",
                    rating: 4.5,
                    category: "Ноутбук",
                    isAvailable: true
                },
                {
                    id: 11,
                    productName: "iPad 2021 Wi-Fi",
                    imageURL: [
                        "https://i-point.ru/storage/gallery/big/909.jpg",
                        "https://i-point.ru/storage/gallery/big/912.jpg",
                    ],
                    price: "27 990",
                    discountPrice: null,
                    currency: "₽",
                    rating: 5.0,
                    category: "Планшет",
                    isAvailable: true
                },
                {
                    id: 12,
                    productName: "iPad Pro 2022 11\"",
                    imageURL: [
                        "https://i-point.ru/storage/gallery/big/2542.jpg",
                        "https://i-point.ru/storage/gallery/big/2544.jpg",
                    ],
                    price: "73 990",
                    discountPrice: null,
                    currency: "₽",
                    rating: 5.0,
                    category: "Планшет",
                    isAvailable: true
                },
                {
                    id: 13,
                    productName: "iPhone 12 mini",
                    imageURL: [
                        "https://i-point.ru/storage/gallery/big/839.jpg",
                        "https://i-point.ru/storage/gallery/big/840.jpg",
                    ],
                    price: "51 990",
                    discountPrice: null,
                    currency: "₽",
                    rating: 5.0,
                    category: "Смартфон",
                    isAvailable: true
                },
                {
                    id: 14,
                    productName: "Apple Watch Ultra",
                    imageURL: [
                        "https://i-point.ru/storage/gallery/big/2256.jpg",
                        "https://i-point.ru/storage/gallery/big/2257.jpg",
                    ],
                    price: "73 990",
                    discountPrice: null,
                    currency: "₽",
                    rating: 4.5,
                    category: "Смарт часы",
                    isAvailable: true
                },
                {
                    id: 15,
                    productName: "Apple Studio Display",
                    imageURL: [
                        "https://i-point.ru/storage/gallery/big/3023.jpg",
                        "https://i-point.ru/storage/gallery/big/3024.jpg",
                    ],
                    price: "199 990",
                    discountPrice: null,
                    currency: "₽",
                    rating: 4.5,
                    category: "Монитор",
                    isAvailable: true
                },
                {
                    id: 16,
                    productName: "Mac Studio 2022 M1",
                    imageURL: [
                        "https://i-point.ru/storage/gallery/big/2861.jpg",
                        "https://i-point.ru/storage/gallery/big/2862.jpg",
                    ],
                    price: "199 990",
                    discountPrice: null,
                    currency: "₽",
                    rating: 5.0,
                    category: "Электроника",
                    isAvailable: true
                },
                {
                    id: 17,
                    productName: "Mac mini M1",
                    imageURL: [
                        "https://i-point.ru/storage/gallery/big/665.jpg",
                        "https://i-point.ru/storage/gallery/big/666.jpg",
                    ],
                    price: "64 990",
                    discountPrice: null,
                    currency: "₽",
                    rating: 4.5,
                    category: "Компьютер",
                    isAvailable: true
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>