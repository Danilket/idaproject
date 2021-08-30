<template>
  <ProductPage />
</template>

<script>
import { getVehicles } from "@/js/request";

export default {
  layout: "header",
  middleware: "productPage",
  async validate({ params, store }) {
    if (store.state.vehicles) {
      return store.state.vehicles.some(category => category.id === params.id);
    } else {
      const result = await getVehicles();
      return result.some(category => category.id === params.id);
    }
  }
};
</script>