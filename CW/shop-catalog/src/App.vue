<script setup>
import Catalog from './components/CatalogComponent/Catalog.vue'
</script>

<template >
    <h1>
        Епифанцев Георгий Андреевич
    </h1>
    <h2>
        2023 НГТУ, АП-026 <br/>Курсовая работа по дисциплине "Web-программирование"
    </h2>
    <p>Тема: Разработка компонента отображения каталога товаров для интернет-магазина</p>

  <main>
      <Catalog class="Catalog"/>
  </main>
</template>

<style scoped>
h1{
    text-align: center;
    font-weight: bold;
}
h2{
    text-align: center;
}
p{
    text-align: center;
}
.Catalog{
    width: 80vw;
    height: 70vh;
    margin-left: auto;
    margin-right: auto;
}
</style>
