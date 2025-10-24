export interface NumericInputProps {
  modelValue?: string | number
  minWidth?: number
}

export type NumericInputEmits = {
  (event: 'update:modelValue', value: string): void
}
