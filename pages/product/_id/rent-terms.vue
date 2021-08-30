<template>
  <div>
    <div class="product__description product__description--rent">
      {{ product.term_text }}
    </div>
    <div class="product__description product__description--rent">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.
    </div>
    <h4 class="product__rent-title">Additional conditions:</h4>
    <ul class="product__rent-list">
      <li class="product__description product__description--rent">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </li>
      <li class="product__description product__description--rent">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </li>
      <li class="product__description product__description--rent">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    product() {
      return this.$store.state.vehicles
        ? this.$store.state.vehicles.find(
            product => product.id === this.$route.params.id
          )
        : 0;
    }
  }
};
</script>

<style lang="scss">
.product {
  &__description--rent {
    margin-bottom: 16px !important;
  }

  &__rent-title {
    margin: 24px 0;
    font-size: 16px;
  }

  &__rent-list {
    margin-bottom: 80px;

    li {
      padding-left: 24px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        display: block;
        width: 4px;
        height: 4px;
        background: $price-color;
        left: 0;
        top: 8px;
      }
    }
  }

  @include mobile {
    &__description--rent {
      margin-bottom: 8px !important;
    }

    &__rent-title {
      margin: 16px 0;
    }

    &__rent-list {
      li {
        padding-left: 16px;
      }
    }
  }
}
</style>