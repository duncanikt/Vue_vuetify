<template>
    <v-card class="content">
      <v-card-text>
        <div id="iframeContainer">
          <iframe id="pageFrame" :src="selectedItemUrl"></iframe>
        </div>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedItemUrl: '' // 要載入的內容頁面 URL
      };
    }
  };
  </script>
  
  <style>
  .content {
    margin-top: 20px;
  }
  </style>
  