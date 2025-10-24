# NumericInput Component - Usage Guide

## Quick Start

### Installation

The component is already available in the project. Simply import it:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import NumericInput from '@/components/NumericInput.vue'
// Or using the index export:
// import { NumericInput } from '@/components'

const myValue = ref('')
</script>

<template>
  <NumericInput v-model="myValue" />
</template>
```

## Examples

### Basic Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import NumericInput from '@/components/NumericInput.vue'

const age = ref('25')
</script>

<template>
  <div>
    <label>Enter your age:</label>
    <NumericInput v-model="age" />
  </div>
</template>
```

### Custom Minimum Width

```vue
<template>
  <NumericInput
    v-model="amount"
    :min-width="100"
  />
</template>
```

### With Accessibility

```vue
<template>
  <NumericInput
    v-model="phoneNumber"
    :min-width="72"
    aria-label="Phone number"
    aria-describedby="phone-help"
  />
  <span id="phone-help">Enter digits only</span>
</template>
```

### Form Integration

```vue
<script setup lang="ts">
import { ref } from 'vue'
import NumericInput from '@/components/NumericInput.vue'

const formData = ref({
  hours: '',
  minutes: '',
  seconds: ''
})

const handleSubmit = () => {
  console.log('Form data:', formData.value)
  // All values are raw digits (no spaces)
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label>Hours:</label>
      <NumericInput v-model="formData.hours" />
    </div>

    <div class="form-group">
      <label>Minutes:</label>
      <NumericInput v-model="formData.minutes" />
    </div>

    <div class="form-group">
      <label>Seconds:</label>
      <NumericInput v-model="formData.seconds" />
    </div>

    <button type="submit">Submit</button>
  </form>
</template>
```

### Reactive Calculations

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'
import NumericInput from '@/components/NumericInput.vue'

const hours = ref('24')

// Calculate days from hours
const days = computed(() => {
  const h = parseInt(hours.value) || 0
  return Math.floor(h / 24)
})
</script>

<template>
  <div>
    <NumericInput v-model="hours" />
    <p>That's {{ days }} day(s)</p>
  </div>
</template>
```

### Multiple Inputs

```vue
<script setup lang="ts">
import { ref } from 'vue'
import NumericInput from '@/components/NumericInput.vue'

const person = ref({
  name: 'Samuel',
  age: '7',
  weight: '3500',
  height: '50'
})
</script>

<template>
  <div class="person-form">
    <div class="flex items-center gap-3">
      <span>{{ person.name }} is</span>
      <NumericInput v-model="person.age" />
      <span>hours old</span>
    </div>

    <div class="flex items-center gap-3">
      <span>Weight:</span>
      <NumericInput v-model="person.weight" />
      <span>grams</span>
    </div>

    <div class="flex items-center gap-3">
      <span>Height:</span>
      <NumericInput v-model="person.height" />
      <span>cm</span>
    </div>
  </div>
</template>
```

### Validation Example

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'
import NumericInput from '@/components/NumericInput.vue'

const value = ref('')

const isValid = computed(() => {
  const num = parseInt(value.value)
  return num >= 0 && num <= 999999
})

const errorMessage = computed(() => {
  if (!value.value) return ''
  if (!isValid.value) return 'Value must be between 0 and 999,999'
  return ''
})
</script>

<template>
  <div>
    <NumericInput
      v-model="value"
      :class="{ 'border-red-500': errorMessage }"
    />
    <p v-if="errorMessage" class="text-red-500 text-sm mt-1">
      {{ errorMessage }}
    </p>
  </div>
</template>
```

### Dynamic Styling

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'
import NumericInput from '@/components/NumericInput.vue'

const value = ref('1000')

const inputSize = computed(() => {
  const length = value.value.length
  if (length < 4) return 72
  if (length < 7) return 100
  return 150
})
</script>

<template>
  <NumericInput
    v-model="value"
    :min-width="inputSize"
  />
</template>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string \| number` | `''` | The value to bind (use with v-model) |
| `minWidth` | `number` | `72` | Minimum width in pixels |

### Events

| Event | Type | Description |
|-------|------|-------------|
| `update:modelValue` | `(value: string) => void` | Emitted when value changes |

### Value Format

**Important**: The component stores and emits values as **raw digits only** (no spaces).

```vue
<script setup>
const value = ref('1000000') // Raw value: '1000000'
// Displays as: '1 000 000'
</script>
```

## Styling Tips

### Using Tailwind CSS

```vue
<template>
  <!-- Custom border color -->
  <NumericInput
    v-model="value"
    class="!border-blue-500"
  />

  <!-- Custom focus ring -->
  <NumericInput
    v-model="value"
    class="focus:!ring-green-500"
  />

  <!-- Larger text -->
  <NumericInput
    v-model="value"
    class="!text-xl"
  />
</template>
```

### Custom CSS

```vue
<template>
  <NumericInput
    v-model="value"
    class="my-custom-input"
  />
</template>

<style>
.my-custom-input {
  font-family: 'Courier New', monospace;
  font-weight: bold;
  letter-spacing: 2px;
}
</style>
```

## TypeScript Support

The component has full TypeScript support:

```typescript
import type { NumericInputProps, NumericInputEmits } from '@/components/NumericInput.types'

// Use in your component
interface MyFormData {
  hours: string
  minutes: string
}
```

## Testing

Example unit test structure:

```typescript
import { mount } from '@vue/test-utils'
import NumericInput from '@/components/NumericInput.vue'

describe('NumericInput', () => {
  it('formats numbers with spaces', async () => {
    const wrapper = mount(NumericInput, {
      props: { modelValue: '1000' }
    })

    const input = wrapper.find('input')
    expect(input.element.value).toBe('1 000')
  })

  it('only accepts digits', async () => {
    const wrapper = mount(NumericInput)
    const input = wrapper.find('input')

    await input.setValue('abc123')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['123'])
  })
})
```

## Common Issues

### Issue: Value not updating

**Problem**: The value prop is passed but not using v-model

```vue
<!-- ❌ Wrong -->
<NumericInput :modelValue="myValue" />

<!-- ✅ Correct -->
<NumericInput v-model="myValue" />
```

### Issue: Getting formatted value

**Problem**: Need to display formatted value separately

```vue
<script setup>
import { computed } from 'vue'
import { formatNumberWithSpaces } from '@/utils/formatNumber'

const rawValue = ref('1000000')
const displayValue = computed(() => formatNumberWithSpaces(rawValue.value))
</script>
```

### Issue: Initial value not showing

**Problem**: Passing undefined or null

```vue
<script setup>
// ❌ Wrong
const value = ref(null)

// ✅ Correct
const value = ref('')
// or
const value = ref('0')
</script>
```

## Performance Considerations

The component is optimized for performance:

- ✅ Uses `nextTick` for DOM updates
- ✅ Efficient width calculation with hidden span
- ✅ Minimal re-renders with computed properties
- ✅ Event delegation for keyboard handling

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS/Android)

## Contributing

If you find issues or have suggestions:

1. Check existing issues
2. Create a detailed bug report
3. Propose enhancements with use cases
4. Submit pull requests with tests

## License

Part of the front-task project.

