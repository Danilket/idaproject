<template>
  <div class="list">
    <div v-if="this.$store.state.vehiclesLoading">
      Подождите пожалуйста, транспортные средства загружаются...
    </div>
    <div v-if="this.$store.state.vehiclesLoadingFailed">
      Ошибка загрузки, попробуйте перезагрузить каталог
      <button @click="reloadProducts()">Перезагрузить</button>
    </div>
    <div v-else>
      <ProductActions :category-id.sync="filterCategory" />
      <ul class="list__products">
        <ProductItem
          :product="product"
          v-for="(product, index) in filteredProducts"
          :key="index"
        />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterCategory: 0
    };
  },
  computed: {
    productList() {
      return this.$store.state.vehicles ? this.$store.state.vehicles : {};
    },
    filteredProducts() {
      let filteredProducts = this.productList;

      if (this.filterCategory) {
        filteredProducts = filteredProducts.filter(
          product => product.type === this.filterCategory
        );
      }

      return filteredProducts;
    }
  },
  methods: {
    reloadProducts() {
      this.$store.dispatch("vehiclesAction");
      this.$store.commit("vehiclesLoading", true);
      this.$store.commit("vehiclesLoadingFailed", false);
    }
  }
};
</script>

<style lang="scss">
.list {
  background: $bg-color;
  border-radius: 48px;
  padding: 56px 64px 24px;

  &__products {
    display: flex;
    flex-wrap: wrap;
    margin: 40px -16px 0;
  }

  @include mobile {
    padding: 24px 16px 12px;
    border-radius: 24px;

    &__products {
      margin: 24px -10px 0;
    }
  }
}
</style>