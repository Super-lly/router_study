<template>
  <div id="app">
    <li v-for="(item, index) in $store.state.nav" :key="index">
      <router-link :to="item.url">{{item.title}}</router-link>
    </li>
    <router-view/>
  </div>
</template>
