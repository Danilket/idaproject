<template>
  <div class="list__actions">
    <div class="list__select">
      <span>Rent</span>
      <select class="list__choise" type="text" v-model.number="currentCategory">
        <option value="0">whatever</option>
        <option
          :value="category.type"
          v-for="category in categories"
          :key="category.type"
        >
          {{ category.type }}
        </option>
      </select>
    </div>
    <div class="list__new-product">
      <div class="list__add-text">Add new</div>
      <button class="list__add-btn">+</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["categoryId"],
  computed: {
    currentCategory: {
      get() {
        return this.categoryId;
      },
      set(value) {
        this.$emit("update:categoryId", value);
      }
    },
    categoryList() {
      return this.$store.state.vehicles ? this.$store.state.vehicles : 0;
    },
    categories() {
      let filteredCategories = this.categoryList;

      if (this.categoryList) {
        filteredCategories = filteredCategories.filter(
          (category, index, self) =>
            index === self.findIndex(c => c.type === category.type)
        );
      }

      return filteredCategories;
    }
  }
};
</script>

<style lang='scss'>
.list {
  &__actions {
    display: flex;
    justify-content: space-between;
  }

  &__select {
    * {
      font-weight: 700;
    }
    font-size: 40px;
  }

  &__choise {
    border: none;
    background: transparent;
    padding-right: 12px;
    color: $accent-color;
  }

  &__new-product {
    display: flex;
    align-items: center;
  }

  &__add-text {
    font-size: 20px;
    color: $accent-color;
    font-weight: 700;
    margin-right: 20px;
    white-space: nowrap;
  }

  &__add-btn {
    width: 48px;
    height: 48px;
    color: #fff;
    background-color: $accent-color;
    border-radius: 16px;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }

  @include mobile {
    &__select {
      font-size: 24px;
    }

    &__choise {
      padding-right: 4px;
    }

    &__add-text {
      font-size: 16px;
      margin-right: 12px;
    }

    &__add-btn {
      width: 32px;
      height: 32px;
      border-radius: 8px;
    }
  }
}
</style>