<template>
  <li class="list__product" @click="gotoPage(product)">
    <nuxt-link class="list__item" :to="`/product/${product.id}`">
      <img class="list__img" :src="product.preview" :alt="product.name" />
      <div class="list__info">
        <div class="list__name">{{ product.name }}</div>
        <div class="list__description">
          {{ product.description }}
        </div>
        <div class="list__price">{{ product.rent | numberFormat }} $/h</div>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
import numberFormat from "@/helpers/numberFormat";

export default {
  props: ["product"],
  filters: {
    numberFormat
  },
  methods: {
    gotoPage(pageParams) {
      $nuxt.$emit("gotoPage", pageParams);
    }
  }
};
</script>


<style lang="scss">
.list {
  &__product {
    flex-grow: 1;
  }

  &__item {
    height: 164px;
    background: #fff;
    border-radius: 32px;
    margin: 0 16px 32px;
    padding: 24px 32px;
    display: flex;
  }

  &__img {
    width: 88px;
    height: 88px;
    margin-right: 24px;
    border-radius: 24px;
  }

  &__info {
    padding-top: 16px;
    padding-right: 20px;
    max-width: 170px;
  }

  &__name {
    font-weight: 700;
    margin-bottom: 12px;
    font-size: 16px;
  }

  &__description {
    font-weight: 300;
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 16px;
    color: $gray-color;
  }

  &__price {
    font-size: 14px;
    color: $price-color;
    font-weight: 700;
  }

  @include mobile {
    &__item {
      height: 151px;
      margin: 0 6px 12px;
      padding: 20px;
    }

    &__img {
      margin-right: 20px;
    }

    &__info {
      padding-top: 12px;
      padding-right: 0;
    }
  }
}
</style>