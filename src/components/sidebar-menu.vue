<template>
  <v-row>
    <v-col cols="2">
      <v-card class="sidebar-menu">
        <v-card-text>
          <v-treeview :items="categories" activatable @update:active="showContent"></v-treeview>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="8">
      <router-view></router-view>
    </v-col>
  </v-row>
</template>

<script>
import router from './router';

export default {
  data() {
    return {
      categories: [
        {
          id: 1,
          name: '項目01',
          children: [
            {
              id: 11,
              name: '子項目01',
              children: [
                { id: 111, name: '子子項目01' },
                { id: 112, name: '子子項目02' }
              ]
            },
            { id: 12, name: '子項目02' }
          ]
        },
        {
          id: 2,
          name: '項目02',
          children: [
            { id: 21, name: '子項目03' },
            { id: 22, name: '子項目04' }
          ]
        }
      ]
    };
  },
  methods: {
    showContent(selectedItems) {
      if (selectedItems.length > 0) {
        const selectedItem = selectedItems[0];
        if (selectedItem.children && selectedItem.children.length > 0) {
          // 存在子项目，不做路由跳转，而是展开子项目
          selectedItem.open = !selectedItem.open;
        } else {
          // 没有子项目，执行路由跳转
          const targetPath = '/' + selectedItem;
          if (this.$route.path !== targetPath) {
            this.$router.push(targetPath);
          }
        }
      }
    }
  },
  router
};
</script>

<style>
.sidebar-menu {
  margin-top: 20px;
}

.v-treeview .v-treeview-node {
  background-color: #fff;
  /* border: 1px solid #ddd; */
  border-radius: 4px;
  cursor: pointer;
}

.v-treeview .v-treeview-node:hover {
  background-color: #f0f0f0;
}
</style>
