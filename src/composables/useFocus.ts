import { ref } from 'vue'

export function useFocus() {
  const focusedId = ref<number | string | null>(null)

  const setFocus = (id: number | string) => {
    focusedId.value = id
  }

  const clearFocus = () => {
    focusedId.value = null
  }

  const isFocused = (id: number | string) => {
    return focusedId.value === id
  }

  return {
    focusedId,
    setFocus,
    clearFocus,
    isFocused
  }
}

