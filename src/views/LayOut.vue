<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!-- 测试 -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> 测试平台 </v-list-item-title>
          <v-list-item-subtitle> 南极星 </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :href="item.link" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>南极星测试平台</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);
</script>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "测试用例", icon: "mdi-view-dashboard", link: "#/layout/case"},
      { title: "测试任务", icon: "mdi-image", link: "#/layout/task" },
      { title: "测试报告", icon: "mdi-help-box", link: "#/layout/report"},
    ],
    right: null,
  }),
};
</script>
