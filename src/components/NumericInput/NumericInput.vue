<template>
  <input
    ref="inputRef"
    :value="displayValue"
    @input="handleInput"
    @keydown="handleKeydown"
    @paste="handlePaste"
    type="text"
    inputmode="numeric"
    :class="inputClasses"
    :style="inputStyles"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { formatNumberWithSpaces, getDigitsOnly } from '@/utils/formatNumber'
import type { NumericInputProps, NumericInputEmits } from './NumericInput.types'
import './NumericInput.css'

const props = withDefaults(defineProps<NumericInputProps>(), {
  modelValue: '',
  minWidth: 72
})

const emit = defineEmits<NumericInputEmits>()

const inputRef = ref<HTMLInputElement | null>(null)
const inputWidth = ref(props.minWidth)

const displayValue = computed(() => {
  const rawValue = String(props.modelValue || '')
  return formatNumberWithSpaces(rawValue)
})

const inputClasses = computed(() => [
  'numeric-input',
  'text-base font-medium',
  'transition-all duration-200',
  'focus:outline-none',
  'text-center'
])

const inputStyles = computed(() => ({
  minWidth: `${props.minWidth}px`,
  width: `${inputWidth.value}px`,
  height: '44px',
  paddingTop: '8px',
  paddingRight: '16px',
  paddingBottom: '8px',
  paddingLeft: '8px',
  border: '1px solid var(--mid-grey)',
  borderRadius: '6px',
  color: 'var(--dark)',
  opacity: '0.3'
}))

const calculateWidth = () => {
  if (!inputRef.value) return

  const span = document.createElement('span')
  span.style.visibility = 'hidden'
  span.style.position = 'absolute'
  span.style.whiteSpace = 'pre'
  span.style.font = window.getComputedStyle(inputRef.value).font
  span.style.padding = window.getComputedStyle(inputRef.value).padding
  span.textContent = displayValue.value || '0'

  document.body.appendChild(span)
  const measuredWidth = span.offsetWidth
  document.body.removeChild(span)

  const newWidth = Math.max(props.minWidth, measuredWidth + 24)
  inputWidth.value = newWidth
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const cursorPosition = target.selectionStart || 0
  const oldValue = displayValue.value
  const newRawValue = getDigitsOnly(target.value)

  emit('update:modelValue', newRawValue)

  nextTick(() => {
    if (inputRef.value && cursorPosition !== null) {
      const spacesBeforeOld = (oldValue.slice(0, cursorPosition).match(/ /g) || []).length
      const digitsBeforeCursor = cursorPosition - spacesBeforeOld

      let newPosition = 0
      let digitsCount = 0
      const newValue = displayValue.value

      for (let i = 0; i < newValue.length; i++) {
        if (newValue[i] !== ' ') {
          digitsCount++
        }
        if (digitsCount >= digitsBeforeCursor) {
          newPosition = i + 1
          break
        }
      }

      inputRef.value.setSelectionRange(newPosition, newPosition)
    }
    calculateWidth()
  })
}

const handleKeydown = (event: KeyboardEvent) => {
  const allowedKeys = [
    'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
    'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
    'Home', 'End'
  ]

  if (event.ctrlKey || event.metaKey) {
    if (['a', 'c', 'v', 'x'].includes(event.key.toLowerCase())) {
      return
    }
  }

  if (event.key >= '0' && event.key <= '9') {
    return
  }

  if (allowedKeys.includes(event.key)) {
    return
  }

  event.preventDefault()
}

const handlePaste = (event: ClipboardEvent) => {
  event.preventDefault()

  const pastedText = event.clipboardData?.getData('text') || ''
  const digitsOnly = getDigitsOnly(pastedText)

  if (digitsOnly) {
    emit('update:modelValue', digitsOnly)
    nextTick(() => {
      calculateWidth()
    })
  }
}

watch(() => props.modelValue, () => {
  nextTick(() => {
    calculateWidth()
  })
}, { immediate: true })
</script>


