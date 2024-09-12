<script lang="ts">
import { RouterLink } from "vue-router";

export default {
    name: "NavBar"
}
</script>
<template>
    <main>
      <nav class="flex items-center justify-between flex-wrap bg-black p-4 flex-shrink-0">
        <div class="font-bold m-4 animate-slide-in-left">
          <span class="text-white text-4xl">Prime Flix</span>
        </div>
        <div class="text-white animate-slide-in-down">
          <RouterLink 
            to="/home" 
            class="mx-5 hover:text-purple-500 hover:scale-110 hover:-translate-y-1 duration-0"
          >
            <button class="text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Home
            </button>
          </RouterLink>
          <RouterLink 
            to="/home" 
            class="mx-5 hover:text-purple-500 hover:scale-110 hover:-translate-y-1 duration-0"
          >
            <button class="text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Movies
            </button>
          </RouterLink>
          <RouterLink 
            to="/home" 
            class="mx-5 hover:text-purple-500 hover:scale-110 hover:-translate-y-1 duration-0"
          >
            <button class="text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Series
            </button>
          </RouterLink>
        </div>
        <div class="animate-slide-in-right">
          <RouterLink to="/favorites" class="text-white hover:text-purple-500 hover:scale-125 hover:-translate-y-1 duration-0">
            <button class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <span class="pi pi-heart-fill"/>
              <span class="px-2 text-xl">Favoritos</span>
            </button>
          </RouterLink>
        </div>
      </nav>
    </main>
  </template>