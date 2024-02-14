<template>
  <v-app-bar app color="grey lighten-4" light>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on">sort 1</v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in category1Items" :key="index">
          <!-- 使用 router-link 替代 v-btn -->
          <router-link :to="'/category1/' + item" class="router-link">
            <v-list-item-title class="router-link-text">{{ item }}</v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on">sort 2</v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in category2Items" :key="index">
          <!-- 使用 router-link 替代 v-btn -->
          <router-link :to="'/category2/' + item" class="router-link">
            <v-list-item-title class="router-link-text">{{ item }}</v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      category1Items: ['Item 1', 'Item 2', 'Item 3'],
      category2Items: ['Option 1', 'Option 2', 'Option 3']
    };
  },
};
</script>

<style>
.router-link {
  text-decoration: none;
}

.router-link-text {
  color: #1976D2; /* 按钮文字颜色 */
}

.router-link:hover {
  background-color: #E3F2FD; /* 按钮悬停时背景颜色 */
}

.router-link:hover .router-link-text {
  color: #2f3633; /* 按钮悬停时文字颜色 */
}
</style>
