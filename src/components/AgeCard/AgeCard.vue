<template>
  <div class="flex items-center gap-4">
    <div
      class="w-20 h-20 rounded-full border transition-colors duration-200 p-1"
      :class="isFocused ? 'border-[var(--primary)]' : 'border-gray-200'"
    >
      <img
        :src="imageSrc"
        :alt="name"
        class="w-full h-full object-cover rounded-full"
      />
    </div>
    <div class="flex flex-col gap-2">
      <span
        class="samuel-text uppercase transition-colors duration-200"
        :class="isFocused ? 'text-[var(--primary)]' : 'text-[var(--dark)]'"
      >
        {{ name }} is
      </span>
      <div class="flex items-center gap-3">
        <NumericInput
          :model-value="modelValue"
          @update:model-value="$emit('update:modelValue', $event)"
          :min-width="minWidth"
          :aria-label="`Age in ${unit}`"
          @focus="$emit('focus')"
          @blur="$emit('blur')"
        />
        <span class="hours-text">{{ unit }} old</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NumericInput from '../NumericInput'

interface Props {
  modelValue: string
  name?: string
  imageSrc?: string
  isFocused?: boolean
  minWidth?: number
  unit?: string
}

withDefaults(defineProps<Props>(), {
  name: 'Samuel',
  imageSrc: '/img.png',
  isFocused: false,
  minWidth: 72,
  unit: 'hours'
})

defineEmits<{
  'update:modelValue': [value: string]
  focus: []
  blur: []
}>()
</script>

