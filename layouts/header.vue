<template>
  <div class="container">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPageParams: {}
    };
  },
  methods: {
    gotoPage(pageParams) {
      this.currentPageParams = pageParams;
    },
    goodResponse() {
      this.$store.commit("changeResponse", true);
    },
    badResponse() {
      this.$store.commit("changeResponse", false);
    },
    checkAction() {
      this.$store.dispatch("vehiclesAction");
    }
  },
  created() {
    this.checkAction();
    this.$nuxt.$on("gotoPage", pageParams => {
      this.gotoPage(pageParams);
      this.$store.commit("changeProductInfo", this.currentPageParams);
    });
  }
};
</script>

<style lang="scss">
.container {
  max-width: 2048px;
  min-width: 320px;
  margin: 0 auto;
  padding: 0 64px 20px;
}

@include mobile {
  .container {
    padding: 0 0 16px;
    margin-bottom: 0;
  }
}
</style>