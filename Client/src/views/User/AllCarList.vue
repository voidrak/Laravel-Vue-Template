<script setup>
import { ref } from 'vue'
import car from "/cars.png"
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/vue/20/solid'
import UserLayout from '@/layout/UserLayout.vue';

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'All', label: 'ALL', checked: true },
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'All', label: 'ALL', checked: true },
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },


      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: false },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  // {
  //   id: 'size',
  //   name: 'Size',
  //   options: [
  //     { value: '2l', label: '2L', checked: false },
  //     { value: '6l', label: '6L', checked: false },
  //     { value: '12l', label: '12L', checked: false },
  //     { value: '18l', label: '18L', checked: false },
  //     { value: '20l', label: '20L', checked: false },
  //     { value: '40l', label: '40L', checked: true },
  //   ],
  // },
]

const mobileFiltersOpen = ref(false)
</script>
<template>
  <UserLayout>
    <div class="bg-white">
      <div>


        <main class="mx-auto  px-4 sm:px-6 lg:px-8">
          <div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-12">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900">Filter</h1>

            <div class="flex items-center">
              <Menu as="div" class="relative inline-block text-left">
                <div>
                  <MenuButton
                    class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon class="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true" />
                  </MenuButton>
                </div>

                <transition enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95">
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none">
                    <div class="py-1">
                      <MenuItem v-for="option in sortOptions" :key="option.name" v-slot="{ active }">
                      <button
                        :class="[option.current ? 'font-medium text-gray-900' : 'text-gray-500', active ? 'bg-gray-100 outline-none' : '', 'block px-4 py-2 text-sm']">{{
                          option.name }}</button>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>

            </div>
          </div>

          <section aria-labelledby="products-heading" class="pb-24  pt-6">


            <div class="grid  grid-cols-1 gap-x-8  gap-y-10 lg:grid-cols-4">
              <!-- Filters -->
              <form class="  lg:block border-r border-gray-200  ">
                <h3 class="sr-only">Categories</h3>
                <ul role="list" class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  <li v-for="category in subCategories" :key="category.name">
                    <a :href="category.href">{{ category.name }}</a>
                  </li>
                </ul>

                <Disclosure as="div" v-for="section in filters" :key="section.id" class="border-b border-gray-200 py-6"
                  v-slot="{ open }">
                  <h3 class="-my-3 flow-root">
                    <DisclosureButton
                      class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span class="font-medium text-gray-900">{{ section.name }}</span>
                      <span class="ml-6 flex items-center">
                        <PlusIcon v-if="!open" class="size-5" aria-hidden="true" />
                        <MinusIcon v-else class="size-5" aria-hidden="true" />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel class="pt-6">
                    <div class="space-y-4">
                      <div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex gap-3">
                        <div class="flex h-5 shrink-0 items-center">
                          <div class="group grid size-4 grid-cols-1">
                            <input :id="`filter-${section.id}-${optionIdx}`" :name="`${section.id}`"
                              :value="option.value" type="radio" :checked="option.checked"
                              class="col-start-1 row-start-1 appearance-none rounded-full border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                            <svg
                              class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                              viewBox="0 0 14 14" fill="none">
                              <path class="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path class="opacity-0 group-has-[:indeterminate]:opacity-100" d="M3 7H11"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                        </div>
                        <label :for="`filter-${section.id}-${optionIdx}`" class="text-sm text-gray-600">{{ option.label
                          }}</label>
                      </div>
                    </div>
                  </DisclosurePanel>
                </Disclosure>
                <div class="border-b border-gray-200 py-6">
                  <h3 class="-my-3 flow-root">
                    <span
                      class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <p class="font-medium text-gray-900"> Price</p>
                    </span>
                  </h3>
                  <div class="pt-6 ">
                    <div class="space-y-4">
                      <div class="flex gap-3 items-center">
                        <label class="text-sm text-gray-600">
                          Min Price
                        </label>

                        <input type="number"
                          class=" pl-3 h-10 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                          placeholder="5" value="5" />
                      </div>
                      <div class="flex gap-3 items-center">
                        <label class="text-sm text-gray-600">
                          Max Price
                        </label>

                        <input type="number"
                          class=" pl-3 h-10 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                          placeholder="5" value="5" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <!-- Product grid -->
              <div class="lg:col-span-3">
                <section class="">
                  <div class="mx-auto max-w-screen-xl">

                  </div>

                  <div
                    class=" grid md:grid-cols-3  md:ps-4 justify-center p-2 gap-4 items-center mx-auto max-w-screen-xl ">
                    <div
                      class="relative md:m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                      <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href=" #">
                        <img loading="lazy" class="object-cover" :src="car" alt="product image" />

                      </a>
                      <div class="mt-4 px-5 pb-5">
                        <div>
                          <h5 class=" font-bold text-xl tracking-tight text-slate-900">Toyota
                            Camry
                          </h5>
                        </div>
                        <div class="mt-2 mb-5 flex items-center justify-between">
                          <p>
                            <span class="text-3xl font-bold text-slate-900">100.00 </span>

                          </p>

                          <div class="flex items-center">
                            <svg aria-hidden="true" class="h-5 w-5 text-pr-300" fill="currentColor" viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                              </path>
                            </svg>

                            <span class="mr-2 ml-3 rounded bg-pr-300 px-2.5 py-0.5 text-xs font-semibold">4.5</span>
                          </div>
                        </div>
                        <RouterLink :to="{ name: 'ReserveCar' }"
                          class="flex items-center justify-center rounded-md bg-black hover:bg-orange px-5 py-2.5 text-center text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-blue-300">
                          <svg id="thisicon" class="mr-4 h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg"
                            height="1em" viewBox="0 0 512 512">


                            <path
                              d="M184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H96c-35.3 0-64 28.7-64 64v16 48V448c0 35.3 28.7 64 64 64H416c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H376V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H184V24zM80 192H432V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V192zm176 40c-13.3 0-24 10.7-24 24v48H184c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24V352h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V256c0-13.3-10.7-24-24-24z" />
                          </svg>
                          Reserve
                        </RouterLink>
                      </div>
                    </div>
                    <div
                      class="relative md:m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                      <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href=" #">
                        <img loading="lazy" class="object-cover" :src="car" alt="product image" />

                      </a>
                      <div class="mt-4 px-5 pb-5">
                        <div>
                          <h5 class=" font-bold text-xl tracking-tight text-slate-900">Toyota
                            Camry
                          </h5>
                        </div>
                        <div class="mt-2 mb-5 flex items-center justify-between">
                          <p>
                            <span class="text-3xl font-bold text-slate-900">100.00 </span>

                          </p>

                          <div class="flex items-center">
                            <svg aria-hidden="true" class="h-5 w-5 text-pr-300" fill="currentColor" viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                              </path>
                            </svg>

                            <span class="mr-2 ml-3 rounded bg-pr-300 px-2.5 py-0.5 text-xs font-semibold">4.5</span>
                          </div>
                        </div>
                        <RouterLink :to="{ name: 'ReserveCar' }"
                          class="flex items-center justify-center rounded-md bg-black hover:bg-orange px-5 py-2.5 text-center text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-blue-300">
                          <svg id="thisicon" class="mr-4 h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg"
                            height="1em" viewBox="0 0 512 512">


                            <path
                              d="M184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H96c-35.3 0-64 28.7-64 64v16 48V448c0 35.3 28.7 64 64 64H416c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H376V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H184V24zM80 192H432V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V192zm176 40c-13.3 0-24 10.7-24 24v48H184c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24V352h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V256c0-13.3-10.7-24-24-24z" />
                          </svg>
                          Reserve
                        </RouterLink>
                      </div>
                    </div>
                    <div
                      class="relative md:m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                      <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href=" #">
                        <img loading="lazy" class="object-cover" :src="car" alt="product image" />

                      </a>
                      <div class="mt-4 px-5 pb-5">
                        <div>
                          <h5 class=" font-bold text-xl tracking-tight text-slate-900">Toyota
                            Camry
                          </h5>
                        </div>
                        <div class="mt-2 mb-5 flex items-center justify-between">
                          <p>
                            <span class="text-3xl font-bold text-slate-900">100.00 </span>

                          </p>

                          <div class="flex items-center">
                            <svg aria-hidden="true" class="h-5 w-5 text-pr-300" fill="currentColor" viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                              </path>
                            </svg>

                            <span class="mr-2 ml-3 rounded bg-pr-300 px-2.5 py-0.5 text-xs font-semibold">4.5</span>
                          </div>
                        </div>
                        <RouterLink :to="{ name: 'ReserveCar' }"
                          class="flex items-center justify-center rounded-md bg-black hover:bg-orange px-5 py-2.5 text-center text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-blue-300">
                          <svg id="thisicon" class="mr-4 h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg"
                            height="1em" viewBox="0 0 512 512">


                            <path
                              d="M184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H96c-35.3 0-64 28.7-64 64v16 48V448c0 35.3 28.7 64 64 64H416c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H376V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H184V24zM80 192H432V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V192zm176 40c-13.3 0-24 10.7-24 24v48H184c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24V352h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V256c0-13.3-10.7-24-24-24z" />
                          </svg>
                          Reserve
                        </RouterLink>
                      </div>
                    </div>
                    <div
                      class="relative md:m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                      <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href=" #">
                        <img loading="lazy" class="object-cover" :src="car" alt="product image" />

                      </a>
                      <div class="mt-4 px-5 pb-5">
                        <div>
                          <h5 class=" font-bold text-xl tracking-tight text-slate-900">Toyota
                            Camry
                          </h5>
                        </div>
                        <div class="mt-2 mb-5 flex items-center justify-between">
                          <p>
                            <span class="text-3xl font-bold text-slate-900">100.00 </span>

                          </p>

                          <div class="flex items-center">
                            <svg aria-hidden="true" class="h-5 w-5 text-pr-300" fill="currentColor" viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                              </path>
                            </svg>

                            <span class="mr-2 ml-3 rounded bg-pr-300 px-2.5 py-0.5 text-xs font-semibold">4.5</span>
                          </div>
                        </div>
                        <RouterLink :to="{ name: 'ReserveCar' }"
                          class="flex items-center justify-center rounded-md bg-black hover:bg-orange px-5 py-2.5 text-center text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-blue-300">
                          <svg id="thisicon" class="mr-4 h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg"
                            height="1em" viewBox="0 0 512 512">


                            <path
                              d="M184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H96c-35.3 0-64 28.7-64 64v16 48V448c0 35.3 28.7 64 64 64H416c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H376V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H184V24zM80 192H432V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V192zm176 40c-13.3 0-24 10.7-24 24v48H184c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24V352h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V256c0-13.3-10.7-24-24-24z" />
                          </svg>
                          Reserve
                        </RouterLink>
                      </div>
                    </div>
                    <div
                      class="relative md:m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                      <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href=" #">
                        <img loading="lazy" class="object-cover" :src="car" alt="product image" />

                      </a>
                      <div class="mt-4 px-5 pb-5">
                        <div>
                          <h5 class=" font-bold text-xl tracking-tight text-slate-900">Toyota
                            Camry
                          </h5>
                        </div>
                        <div class="mt-2 mb-5 flex items-center justify-between">
                          <p>
                            <span class="text-3xl font-bold text-slate-900">100.00 </span>

                          </p>

                          <div class="flex items-center">
                            <svg aria-hidden="true" class="h-5 w-5 text-pr-300" fill="currentColor" viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                              </path>
                            </svg>

                            <span class="mr-2 ml-3 rounded bg-pr-300 px-2.5 py-0.5 text-xs font-semibold">4.5</span>
                          </div>
                        </div>
                        <RouterLink :to="{ name: 'ReserveCar' }"
                          class="flex items-center justify-center rounded-md bg-black hover:bg-orange px-5 py-2.5 text-center text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-blue-300">
                          <svg id="thisicon" class="mr-4 h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg"
                            height="1em" viewBox="0 0 512 512">


                            <path
                              d="M184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H96c-35.3 0-64 28.7-64 64v16 48V448c0 35.3 28.7 64 64 64H416c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H376V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H184V24zM80 192H432V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V192zm176 40c-13.3 0-24 10.7-24 24v48H184c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24V352h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V256c0-13.3-10.7-24-24-24z" />
                          </svg>
                          Reserve
                        </RouterLink>
                      </div>
                    </div>
                  </div>



                </section>

              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </UserLayout>
</template>
