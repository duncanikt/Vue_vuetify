<template>
  <v-container>
    <v-card>
      <v-card-title>Simple Table04</v-card-title>
      <v-card-text>
        <v-data-table :headers="headers" :items="desserts" item-key="name">
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>Simple Table03</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'Dessert', value: 'name' },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
      ],
      desserts: [
        { name: 'Frozen Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
        { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
        { name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
        { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
        { name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
      ],
    };
  },
};
</script>

<style scoped>
/* 在這裡添加樣式 */
</style>
