<template>
  <div class="list error">
    <h1 class="error__title">An error has occurred</h1>
    <div class="error__text">Please refresh the page</div>
    <button class="error__reload" @click="reloadPage()">Reload page</button>
  </div>
</template>

<script>
export default {
  layout: "header",
  methods: {
    reloadPage() {
      this.$router.go(0);
    }
  }
};
</script>

<style lang="scss" scoped>
.error {
  background: $bg-color;
  border-radius: 48px;
  height: calc(100vh - 197px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;

  &__title {
    font-size: 40px;
    line-height: 1.2;
    margin: 0 0 24px;
  }

  &__text {
    font-weight: 300;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 40px;
  }

  &__reload {
    width: 161px;
    height: 48px;
    background: $accent-color;
    border-radius: 12px;
    border: none;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
  }

  @include mobile {
    height: calc(100vh - 85px);
    border-radius: 24px;

    &__title {
      font-size: 24px;
      margin-bottom: 16px;
    }

    &__text {
      font-size: 16px;
      margin-bottom: 32px;
    }

    &__reload {
      width: 133px;
      height: 44px;
      font-size: 14px;
    }
  }
}
</style>