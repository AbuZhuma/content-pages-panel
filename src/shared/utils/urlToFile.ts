export async function urlToFile(url: string, filename = "image.png") {
  const res = await fetch(url)
  const blob = await res.blob()

  return new File([blob], filename, {
    type: blob.type,
  })
}