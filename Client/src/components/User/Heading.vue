<script setup>

import { ref } from 'vue';
import Logo from '/images/carlogo.png'



const menus = [
  { name: 'Home', href: '/' },
  { name: 'About', href: "/about" },
  { name: 'Models', href: "/model" },
  { name: 'Testimonials', href: "/testimonials" },
  { name: 'Team', href: "/team" },
  { name: 'Contact', href: "/contact" },

]



</script>

<template>
  <div class="border-b border-gray-200">
    <nav class="relative container  mx-auto p-6 bg-transparent">
      <div class="flex items-center justify-between space-x-20">
        <div class="pt-2">
          <img class="w-40 cursor-pointer h-12" :src="Logo" alt="c" />
        </div>
        <div class="hidden md:flex space-x-6">
          <a v-for="(menu, index) in menus" className="font-bold text-lg font-sans hover:text-orange" :key="index"
            :href="menu.href">{{ menu.name }}</a>
        </div>
        <div class="hidden md:flex space-x-6">
          <a class="font-bold text-lg font-sans py-3 px-4 hover:text-orange">Login</a>
          <a
            class="font-bold text-lg font-sans py-3 px-4 rounded text-white bg-orange opacity-90 hover:opacity-100 hover:shadow-md">
            Register</a>
        </div>
      </div>
    </nav>
  </div>
</template>