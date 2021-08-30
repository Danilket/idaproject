<template>
  <div>
    <div v-if="this.$store.state.vehiclesLoading">
      Подождите пожалуйста, транспортные средства загружаются...
    </div>
    <div v-if="this.$store.state.vehiclesLoadingFailed">
      Ошибка загрузки, попробуйте перезагрузить каталог
      <button @click="reloadProducts()">Перезагрузить</button>
    </div>
    <div v-else class="product">
      <div class="product__img-container">
        <img :src="product.image" alt="" class="product__img" />
      </div>
      <div class="product__info">
        <h2 class="product__title">{{ product.name }}</h2>
        <nav class="product__nav">
          <nuxt-link
            :to="`/product/${product.id}/specifications`"
            class="product__nav-item"
            >Specifications</nuxt-link
          >
          <nuxt-link
            :to="`/product/${product.id}/team`"
            class="product__nav-item"
            >Team</nuxt-link
          >
          <nuxt-link
            :to="`/product/${product.id}/rent-terms`"
            class="product__nav-item"
            >Rent terms</nuxt-link
          >
        </nav>
        <nuxt-child />
        <div class="product__price-bg">
          <div class="product__price">
            <h3 class="product__hours">
              Rent for
              <span>{{ product.rent | numberFormat }} $/h</span>
            </h3>
            <button class="product__rent">Rent now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import numberFormat from "@/helpers/numberFormat";

export default {
  props: ["pageParams"],
  data() {
    return {
      currentPageParams: {}
    };
  },
  filters: {
    numberFormat
  },
  methods: {
    reloadProducts() {
      this.$store.dispatch("vehiclesAction");
      this.$store.commit("vehiclesLoading", true);
      this.$store.commit("vehiclesLoadingFailed", false);
    }
  },
  computed: {
    product() {
      return this.$store.state.vehicles
        ? this.$store.state.vehicles.find(
            product => product.id === this.$route.params.id
          )
        : 0;
    }
  },
  created() {
    this.currentPageParams = this.$store.state.productInfo;

    if (!this.currentPageParams.id) {
      this.currentPageParams = this.product;
      this.$store.commit("changeProductInfo", this.currentPageParams);
    }
  }
};
</script>

<style lang="scss">
.product {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  &__img {
    max-width: 712px;
    max-height: 700px;
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 24px;
  }

  &__img-container {
    margin-right: 64px;
  }

  &__info {
    margin-top: 56px;
    min-width: 536px;
    max-width: 536px;
  }

  &__title {
    font-weight: 700;
    font-size: 40px;
    margin: 0 0 32px;
  }

  &__nav {
    display: flex;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 32px;
  }

  &__nav-item {
    margin-right: 32px;
    color: $gray-color;

    &:last-child {
      margin: 0;
    }
  }

  &__description {
    font-weight: 300;
    font-size: 14px;
    color: $gray-color;
    line-height: 1.5;
    margin-bottom: 32px;
  }

  &__subtitle {
    font-weight: 700;
    font-size: 24px;
    margin: 0 0 32px;
  }

  &__feature {
    display: flex;
    margin-bottom: 16px;

    & + .product__feature {
      margin-bottom: 45px;
    }
  }

  &__feature-img-bg {
    min-width: 80px;
    height: 96px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: $bg-color;
    border-radius: 16px;
    margin-right: 24px;
  }

  &__feature-title {
    margin: 12px 0 8px;
    font-size: 16px;
  }

  &__feature-text {
    font-weight: 300;
    font-size: 14px;
    color: $gray-color;
    line-height: 1.5;
  }

  &__price {
    display: flex;
    height: 80px;
    width: 100%;
    justify-content: space-between;
    background: $bg-color;
    border-radius: 16px;
    align-items: center;
    padding: 0 32px;
  }

  &__hours {
    font-weight: 700;
    font-size: 20px;

    span {
      color: $price-color;
    }
  }

  &__rent {
    width: 136px;
    height: 48px;
    font-size: 16px;
    color: #fcfcfc;
    background: $accent-color;
    border-radius: 12px;
    border: none;
    font-weight: 700;
  }

  @include mobile {
    margin: 0 16px;
    flex-direction: column;
    align-items: center;

    &__img {
      margin: 0 0 22px;
      max-width: 550px;
      max-height: 550px;
      border-radius: 16px;
    }

    &__img-container {
      margin: 0;
    }

    &__info {
      margin: 0 0 16px;
      min-width: auto;
    }

    &__title {
      font-size: 24px;
      margin-bottom: 16px;
      line-height: 1.2;
    }

    &__nav {
      margin-bottom: 20px;
    }

    &__nav-item {
      margin-right: 20px;
    }

    &__description {
      margin-bottom: 20px;
    }

    &__subtitle {
      margin-bottom: 20px;
      font-size: 20px;
    }

    &__feature {
      margin-bottom: 12px;

      & + .product__feature {
        margin-bottom: 80px;
      }
    }

    &__feature-img-bg {
      min-width: 64px;
      height: 80px;
    }

    &__feature-img {
      width: 24px;
      height: 24px;
    }

    &__feature-title {
      margin-top: 4px;
    }

    &__price {
      height: 68px;
      padding: 0 24px;
      position: fixed;
      bottom: 32px;
      left: 16px;
      width: calc(100% - 32px);
    }

    &__price-bg {
      height: 100px;
      padding: 0 24px;
      position: fixed;
      bottom: 0;
      left: 16px;
      width: calc(100% - 32px);
      box-shadow: 0px 31px 31px 45px rgb(255 255 255 / 73%);
      background: #fff;
      border-radius: 16px 16px 0 0;
    }

    &__hours {
      font-size: 16px;
    }

    &__rent {
      width: 111px;
      height: 44px;
      font-size: 14px;
    }
  }
}

.nuxt-link-active {
  color: $accent-color;
}
</style>