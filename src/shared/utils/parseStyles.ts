export const parseStyles = (styles: string): Record<string, string> => {
    return styles
        .split("\n")
        .map(line => line.trim())
        .filter(Boolean)
        .reduce<Record<string, string>>((acc, line) => {
            const [key, ...valueParts] = line.split(":")

            if (!key || valueParts.length === 0) return acc

            acc[key.trim()] = valueParts.join(":").trim()
            return acc
        }, {})
}
