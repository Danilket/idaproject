<template>
  <div>
    <div class="product__description">
      {{ product.specifications_text }}
    </div>
    <h3 class="product__subtitle">Features:</h3>
    <div class="product__feature">
      <div class="product__feature-img-bg">
        <img
          src="@/static/icons/product-1.svg"
          alt=""
          class="product__feature-img"
        />
      </div>
      <div class="product__feature-info">
        <h4 class="product__feature-title">A challenge for a true champion</h4>
        <div class="product__feature-text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </div>
      </div>
    </div>
    <div class="product__feature">
      <div class="product__feature-img-bg">
        <img
          src="@/static/icons/product-2.svg"
          alt=""
          class="product__feature-img"
        />
      </div>
      <div class="product__feature-info">
        <h4 class="product__feature-title">Pilot's sweaty hands</h4>
        <div class="product__feature-text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </div>
      </div>
    </div>
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