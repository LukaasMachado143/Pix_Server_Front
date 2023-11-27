<template>
  <v-list>
    <v-list-item v-for="page, index in list" :key="index">
      <v-list-item-title @click="$router.push({ name: page.to })" style="cursor: pointer;">
        <v-row no-gutters align="end">
          <v-icon class="mr-2">
            {{ page.icon }}
          </v-icon>
          {{ page.title }}
        </v-row>
      </v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: ['list']
}
</script>

<style></style>