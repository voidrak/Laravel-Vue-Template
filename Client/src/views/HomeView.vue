<script setup>
import UserLayout from '@/layout/UserLayout.vue';
import car from "/cars.png"
import TipCards from '@/components/User/TipCards.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <UserLayout>
    <div class="">

      <section id="hero">
        <div
          class="container flex flex-col-reverse md:flex-row items-center  px-6 mx-auto mt-10 space-x-0 md:space-y-0">
          <div class='flex flex-col mb-32 space-y-12  md:w-1/2'>
            <div class="lg:px-16">
              <h2 class="mb-4 max-w-md text-3xl font-bold text-center md:text-left lg:mt-24">Plan your trip now</h2>
              <h1 class="mb-10 max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
                Save <span class="text-orange">big</span> with our car rental
              </h1>
              <p class="mb-16 font-sans text-[gray] text-xl text-center md:text-left">Rent the car of your dreams.
                Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
              <div class='flex flex-col-reverse md:flex-row items-center gap-4'>
                <a
                  class=" flex  items-center  gap-x-2 text-white bg-orange font-bold px-14 py-5 rounded opacity-95 hover:opacity-100 hover:shadow-lg">
                  Book Ride
                  <svg class="size-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                </a>
                <a
                  class="text-white border flex items-center gap-x-2 border-black bg-black font-bold px-12 py-5 rounded hover:bg-white hover:text-black">
                  Learn More
                  <svg class="size-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path
                      d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class='hidden md:flex flex-col mb-32 space-y-12  md:w-1/2 '>
            <img class="" :src="car" alt="" />
          </div>
        </div>
      </section>

      <section class="">
        <div class="mx-auto max-w-screen-xl">
          <div class="flex align-middle justify-center">
            <hr class=" mt-8 h-0.5 w-2/5 bg-orange">
            <p class="my-2 mx-8  p-2 font-car font-bold text-orange text-lg ">CARS</p>
            <hr class=" mt-8 h-0.5 w-2/5 bg-orange">
            <hr>
          </div>
        </div>

        <div class=" grid md:grid-cols-3  md:ps-4 justify-center p-2 gap-4 items-center mx-auto max-w-screen-xl ">
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
              <a href=" #"
                class="flex items-center justify-center rounded-md bg-black hover:bg-orange px-5 py-2.5 text-center text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-blue-300">
                <svg id="thisicon" class="mr-4 h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg" height="1em"
                  viewBox="0 0 512 512">


                  <path
                    d="M184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H96c-35.3 0-64 28.7-64 64v16 48V448c0 35.3 28.7 64 64 64H416c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H376V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H184V24zM80 192H432V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V192zm176 40c-13.3 0-24 10.7-24 24v48H184c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24V352h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V256c0-13.3-10.7-24-24-24z" />
                </svg>
                Reserve</a>
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
              <a href=" #"
                class="flex items-center justify-center rounded-md bg-black hover:bg-orange px-5 py-2.5 text-center text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-blue-300">
                <svg id="thisicon" class="mr-4 h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg" height="1em"
                  viewBox="0 0 512 512">


                  <path
                    d="M184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H96c-35.3 0-64 28.7-64 64v16 48V448c0 35.3 28.7 64 64 64H416c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H376V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H184V24zM80 192H432V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V192zm176 40c-13.3 0-24 10.7-24 24v48H184c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24V352h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V256c0-13.3-10.7-24-24-24z" />
                </svg>
                Reserve</a>
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
              <a href=" #"
                class="flex items-center justify-center rounded-md bg-black hover:bg-orange px-5 py-2.5 text-center text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-blue-300">
                <svg id="thisicon" class="mr-4 h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg" height="1em"
                  viewBox="0 0 512 512">


                  <path
                    d="M184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H96c-35.3 0-64 28.7-64 64v16 48V448c0 35.3 28.7 64 64 64H416c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H376V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H184V24zM80 192H432V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V192zm176 40c-13.3 0-24 10.7-24 24v48H184c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24V352h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V256c0-13.3-10.7-24-24-24z" />
                </svg>
                Reserve</a>
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
              <a href=" #"
                class="flex items-center justify-center rounded-md bg-black hover:bg-orange px-5 py-2.5 text-center text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-blue-300">
                <svg id="thisicon" class="mr-4 h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg" height="1em"
                  viewBox="0 0 512 512">


                  <path
                    d="M184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H96c-35.3 0-64 28.7-64 64v16 48V448c0 35.3 28.7 64 64 64H416c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H376V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H184V24zM80 192H432V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V192zm176 40c-13.3 0-24 10.7-24 24v48H184c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24V352h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V256c0-13.3-10.7-24-24-24z" />
                </svg>
                Reserve</a>
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
              <a href=" #"
                class="flex items-center justify-center rounded-md bg-black hover:bg-orange px-5 py-2.5 text-center text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-blue-300">
                <svg id="thisicon" class="mr-4 h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg" height="1em"
                  viewBox="0 0 512 512">


                  <path
                    d="M184 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H96c-35.3 0-64 28.7-64 64v16 48V448c0 35.3 28.7 64 64 64H416c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H376V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H184V24zM80 192H432V448c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V192zm176 40c-13.3 0-24 10.7-24 24v48H184c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24V352h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H280V256c0-13.3-10.7-24-24-24z" />
                </svg>
                Reserve</a>
            </div>
          </div>
        </div>

        <div class="     mt-8 mb-12 flex justify-center">
          <RouterLink :to="{ name: 'AllCars' }">
            <button
              class="border-2 border-orange text-black w-fit text-xl px-1 rounded-md hover:bg-orange hover:text-white">See
              All</button>
          </RouterLink>
        </div>

      </section>

      <TipCards />
    </div>
  </UserLayout>
</template>
