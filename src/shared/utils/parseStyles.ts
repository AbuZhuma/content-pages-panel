import type { ContentType } from "../../types/content.types"

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

export const extractStylesWithLines = (obj: ContentType): string =>  {
  let result = "";
  function recurse(current: any) {
    if (typeof current !== "object" || current === null) return;

    for (const key in current) {
      if (!current.hasOwnProperty(key)) continue;

      const value = current[key];

      if (value && typeof value === "object") {
        if ("styles" in value) {
          result += `${key}: ${value.styles}\n`;  
        }
        recurse(value);
      }
    }
  }
  
  recurse(obj);
  return result.trim();
}
