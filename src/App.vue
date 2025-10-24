<template>
  <div class="min-h-screen bg-white py-20">
    <div class="max-w-4xl mx-auto px-4">
      <div class="flex flex-col items-start">
        <template v-for="(age, index) in ages" :key="index">
          <AgeCard
            v-model="ages[index]"
            :is-focused="isFocused(index)"
            @focus="setFocus(index)"
            @blur="clearFocus"
          />
          <ArrowDivider v-if="index < ages.length - 1" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AgeCard, ArrowDivider } from '@/components'
import { useFocus } from '@/composables/useFocus'
import '@/styles/app.css'

const ages = ref(['7', '100', '1000000'])

const { setFocus, clearFocus, isFocused } = useFocus()
</script>
