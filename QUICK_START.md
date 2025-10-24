# 🚀 Quick Start Guide

## ⚡ Get Started in 3 Steps

### Step 1: View the Demo

The development server is already running! Open your browser to:

```
http://localhost:5173
```

You'll see the Figma design implementation with three examples:
- Samuel is **7** hours old (small number)
- Samuel is **100** hours old (medium number)
- Samuel is **1 000 000** hours old (large number with formatting)

### Step 2: Try It Yourself

Scroll down to the "Try it yourself" section on the page and:

1. Click in the input field
2. Type some numbers (e.g., `1442`)
3. Watch it automatically format to `1 442`
4. Try pasting text with numbers (e.g., "abc123def")
5. See how it extracts only the digits: `123`

### Step 3: Use in Your Code

Copy this code to use the component:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import NumericInput from '@/components/NumericInput.vue'

const hours = ref('7')
</script>

<template>
  <div class="flex items-center gap-3">
    <span class="text-xl font-bold text-indigo-600">SAMUEL IS</span>
    <NumericInput
      v-model="hours"
      :min-width="72"
      aria-label="Age in hours"
    />
    <span class="text-xl">hours old</span>
  </div>
</template>
```

## 📦 What You Get

### Component File Structure

```
src/
├── components/
│   ├── NumericInput.vue          ← Main component
│   ├── NumericInput.types.ts     ← TypeScript types
│   ├── index.ts                  ← Easy imports
│   └── README.md                 ← Component docs
│
├── utils/
│   └── formatNumber.ts           ← Utility functions
│
├── views/
│   └── NumericInputDemo.vue      ← Comprehensive demo
│
└── App.vue                       ← Figma implementation
```

### Documentation Files

```
📄 README_NUMERIC_INPUT.md        ← Complete project guide
📄 COMPONENT_USAGE.md             ← Usage examples
📄 IMPLEMENTATION_SUMMARY.md      ← What was built
📄 QUICK_START.md                 ← This file
```

## 🎯 Key Features

| Feature | Description | Example |
|---------|-------------|---------|
| **Digit-only** | Only numbers allowed | Try typing "abc123" → shows "123" |
| **Auto-format** | Spaces every 3 digits | Type "1000000" → shows "1 000 000" |
| **Dynamic width** | Grows with content | Starts at 72px, expands as needed |
| **Smart cursor** | Position maintained | Edit middle of number - cursor stays put |
| **Paste support** | Extracts digits | Paste "A1B2C3" → shows "123" |

## 💻 Development Commands

```bash
# Start dev server (already running)
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Type check
npm run type-check

# Preview production build
npm run preview
```

## 📚 Learn More

### For Usage Examples
👉 Read `COMPONENT_USAGE.md`

### For Technical Details
👉 Read `README_NUMERIC_INPUT.md`

### For Component API
👉 Read `src/components/README.md`

### For Implementation Details
👉 Read `IMPLEMENTATION_SUMMARY.md`

## 🎨 Customization

### Change Border Color

```vue
<NumericInput
  v-model="value"
  class="!border-blue-500"
/>
```

### Change Minimum Width

```vue
<NumericInput
  v-model="value"
  :min-width="120"
/>
```

### Change Text Size

```vue
<NumericInput
  v-model="value"
  class="!text-xl"
/>
```

## 🧪 Try These Tests

Open the demo page and try:

1. ✅ Type only numbers → works
2. ✅ Type letters → blocked
3. ✅ Type `1442` → shows `1 442`
4. ✅ Type `1000000` → shows `1 000 000`
5. ✅ Use Ctrl+A, Ctrl+C, Ctrl+V → all work
6. ✅ Use arrow keys → navigate normally
7. ✅ Paste "A1B2C3" → shows `123`
8. ✅ Watch input grow wider

## 📱 View on Mobile

The component works great on mobile devices:

1. Open `http://localhost:5173` on your phone
2. Tap the input
3. See the numeric keyboard appear
4. Type numbers easily

## ✨ Example Outputs

| Input | Display | Raw Value |
|-------|---------|-----------|
| `7` | `7` | `"7"` |
| `100` | `100` | `"100"` |
| `1442` | `1 442` | `"1442"` |
| `10000` | `10 000` | `"10000"` |
| `100000` | `100 000` | `"100000"` |
| `1000000` | `1 000 000` | `"1000000"` |

## 🎯 Next Actions

1. **View the demo** at `http://localhost:5173`
2. **Read** `COMPONENT_USAGE.md` for more examples
3. **Import** the component in your project
4. **Customize** as needed for your use case

## ⚡ Ultra-Quick Usage

For the impatient:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import NumericInput from '@/components/NumericInput.vue'
const value = ref('')
</script>

<template>
  <NumericInput v-model="value" />
</template>
```

That's it! 🎉

## 🆘 Need Help?

1. Check the demo at `http://localhost:5173`
2. Read `COMPONENT_USAGE.md`
3. Read `README_NUMERIC_INPUT.md`
4. Inspect `src/components/NumericInput.vue`

---

**Happy coding! 🚀**

The NumericInput component is production-ready and waiting for you to use it!

