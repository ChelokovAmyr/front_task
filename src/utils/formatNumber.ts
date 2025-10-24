export function formatNumberWithSpaces(value: string): string {
  const cleaned = value.replace(/\D/g, '')

  if (!cleaned) return ''

  const parts: string[] = []
  for (let i = cleaned.length; i > 0; i -= 3) {
    parts.unshift(cleaned.slice(Math.max(0, i - 3), i))
  }

  return parts.join(' ')
}

export function getDigitsOnly(value: string): string {
  return value.replace(/\D/g, '')
}

export function isNumericString(value: string): boolean {
  return /^\d+$/.test(value)
}
