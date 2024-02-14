<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-app-bar app color="grey lighten-4" light>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on">Category 1</v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in category1Items" :key="index" @click="selectItem(item)">
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn text v-on="on">Category 2</v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in category2Items" :key="index" @click="selectItem(item)">
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-app-bar>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="3">
        <v-card class="sidebar">
          <v-card-text>
            <v-treeview :items="treeItems" activatable @update:active="selectedItem"></v-treeview>
          </v-card-text>
        </v-card>
        <v-btn @click="toggleTree" color="primary">Toggle Tree</v-btn>
      </v-col>

      <v-col cols="9">
        <v-card class="content">
          <v-card-text>
            <div id="iframeContainer">
              <iframe id="pageFrame" :src="selectedItemUrl"></iframe>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      category1Items: ['Item 1', 'Item 2', 'Item 3'],
      category2Items: ['Option 1', 'Option 2', 'Option 3'],
      treeItems: [
        {
          id: 1,
          name: '項目01',
          children: [
            {
              id: 11,
              name: '子項目01',
              url: 'your-url-1',
              children: [
                {
                  id: 111,
                  name: '子子項目01',
                  url: 'your-url-5'
                },
                {
                  id: 112,
                  name: '子子項目02',
                  url: 'your-url-6'
                }
              ]
            },
            {
              id: 12,
              name: '子項目02',
              url: 'your-url-2'
            }
          ]
        },
        {
          id: 2,
          name: '項目02',
          children: [
            {
              id: 21,
              name: '子項目03',
              url: 'your-url-3'
            },
            {
              id: 22,
              name: '子項目04',
              url: 'your-url-4'
            }
          ]
        }
      ],
      selectedItemUrl: '' // 要載入的內容頁面 URL
    };
  },
  methods: {
    toggleTree() {
      const sidebar = document.querySelector('.sidebar');
      sidebar.classList.toggle('collapsed');
    },
    selectedItem(selectedItems) {
      if (selectedItems.length > 0) {
        const selectedItem = selectedItems[0];
        this.selectedItemUrl = selectedItem.url;
      }
    },
    selectItem(item) {
      // Your item selection logic here
      console.log('Selected Item:', item);
    }
  }
};
</script>

<style>
.app-bar {
  margin-bottom: 20px;
}

.sidebar {
  margin-top: 20px;
}
</style>
