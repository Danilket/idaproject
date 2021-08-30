<template>
  <div>
    <div class="product__description">
      {{ product.team_text }}
    </div>
    <h3 class="product__subtitle">Qualified specialists</h3>
    <div class="product__specialists">
      <div class="product__person">
        <img
          src="@/static/products/person-1.png"
          alt=""
          class="product__person-img"
        />
        <div class="product__person-container">
          <div class="product__person-name">Marvin McKinney</div>
          <div class="product__person-job">Pilot assistant</div>
        </div>
      </div>
      <div class="product__person">
        <img
          src="@/static/products/person-2.png"
          alt=""
          class="product__person-img"
        />
        <div class="product__person-container">
          <div class="product__person-name">Savannah Nguyen</div>
          <div class="product__person-job">Mechanic</div>
        </div>
      </div>
      <div class="product__person">
        <img
          src="@/static/products/person-3.png"
          alt=""
          class="product__person-img"
        />
        <div class="product__person-container">
          <div class="product__person-name">Courtney Henry</div>
          <div class="product__person-job">Stewardess</div>
        </div>
      </div>
    </div>
    <div class="product__description product__description--team">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.
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

<style lang="scss">
.product {
  &__specialists {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
  }

  &__person {
    // flex-grow: 1;
  }

  &__person-img {
    width: 162px;
    height: 96px;
    margin-bottom: 16px;
    border-radius: 16px;
  }

  &__person-name {
    font-size: 16px;
    line-height: 14px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  &__person-job {
    font-weight: 300;
    font-size: 12px;
    line-height: 1.5;
  }

  &__description--team {
    margin-bottom: 49px !important;
  }

  @include mobile {
    &__specialists {
      margin-bottom: 20px;
    }

    &__description--team {
      margin-bottom: 80px !important;
    }
  }

  @media (max-width: 560px) {
    &__specialists {
      flex-direction: column;
    }

    &__person {
      display: flex;
      align-items: center;
      margin-bottom: 12px;

      &:last-child {
        margin: 0;
      }
    }

    &__person-img {
      margin-right: 16px;
      margin-bottom: 0;
      width: 132px;
      height: 80px;
    }
  }
}
</style>