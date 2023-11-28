<template>
  <v-card class="pa-4 white--text" color="transparent">
    <h3 class="mb-2 white--text">{{ data.title }}: {{ setCurrency(amount) }}</h3>
    <v-slide-group dark multiple show-arrows prev-icon="mdi-chevron-left" next-icon="mdi-chevron-right">
      <slider-item v-for="item, index in data.list" :key="index" :date="item.date" :value="item.value"
        :type="data.type" />
    </v-slide-group>
  </v-card>
</template>

<script>
import setCurrency from '@/utils/setCurrency'
import SliderItem from './slider-item.vue'
export default {
  components: { SliderItem },
  props: ['data'],
  computed: {
    amount() {
      return this.data.list.reduce((acc, actual) => {
        return acc + actual.value
      }, 0)
    }
  },
  methods: {
    setCurrency
  }

}
</script>
