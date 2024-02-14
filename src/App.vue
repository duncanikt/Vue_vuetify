<template>
  <v-app>
    <v-container fluid>
      <AppBar />
      <v-row>
        <v-col cols="12" style="margin-top: 50px;">
            <!-- 在這裡動態顯示內容 -->
            <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue';
import router from './router';

export default {
  components: {
    AppBar,
  },
  router
};
</script>
