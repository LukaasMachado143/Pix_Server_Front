<template>
  <v-card class="pa-4 white--text" color="transparent">
    <h3 class="mb-2">
      {{ data.title }}
    </h3>
    <v-progress-circular
      indeterminate
      color="red"
      size="100"
      class="mt-4 ml-4"
      v-if="data.isLoading"
    />
    <v-slide-group
      v-else-if="!data.isLoading && data.list.length > 0"
      dark
      multiple
      show-arrows
      prev-icon="mdi-chevron-left"
      next-icon="mdi-chevron-right"
    >
      <slider-item
        v-for="(item, index) in data.list"
        :key="index"
        :date="item.date"
        :value="item.value"
        :type="data.type"
      />
    </v-slide-group>
    <p v-else>Não há transferências desse tipo !</p>
  </v-card>
</template>

<script>
import SliderItem from "./slider-item.vue";
export default {
  components: { SliderItem },
  props: ["data"],
  computed: {
    amount() {
      return this.data.list.reduce((acc, actual) => {
        return acc + actual.value;
      }, 0);
    },
  },
};
</script>
