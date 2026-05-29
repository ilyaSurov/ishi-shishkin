/** Абсолютный URL ассета проекта относительно BASE_URL (GitHub Pages / локально). */
export function projectAsset(slug, filename) {
  if (!filename) return ''
  const base = import.meta.env.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  return `${normalizedBase}projects/${slug}/${filename}`.replace(/([^:]\/)\/+/g, '$1')
}

export function projectGalleryUrls(slug, gallery, cover) {
  const files = gallery?.length ? gallery : cover ? [cover] : []
  return files.map((file) => projectAsset(slug, file))
}
