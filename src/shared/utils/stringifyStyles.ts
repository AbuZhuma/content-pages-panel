export const stringifyStyles = (
  styles: Record<string, string>
): string => {
  return Object.entries(styles)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n")
}
