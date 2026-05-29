import { projectAsset } from './assetUrl'

const PROJECT_SLUGS = ['ratnik-tactic', 'jupiter', 'skylux', 'jobapply-duo']

const META_KEYS = ['github', 'live', 'stage', 'tech', 'cover', 'gallery', 'video', 'previewColor']

function pickMeta(json) {
  if (!json) return null
  const meta = {}
  for (const key of META_KEYS) {
    if (json[key] !== undefined) meta[key] = json[key]
  }
  return meta
}

/** Загружает public/projects/{slug}/project.json и мерджит поверх registry. */
export async function loadProjectConfigs() {
  const base = import.meta.env.BASE_URL || './'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`

  const entries = await Promise.all(
    PROJECT_SLUGS.map(async (slug) => {
      try {
        const url = new URL(`${normalizedBase}projects/${slug}/project.json`, window.location.href).href
        const response = await fetch(url)
        if (!response.ok) return [slug, null]
        const json = await response.json()
        return [slug, pickMeta(json)]
      } catch {
        return [slug, null]
      }
    }),
  )

  return Object.fromEntries(entries.filter(([, meta]) => meta))
}

export function mergeProjectMeta(project, override) {
  if (!override) return project
  return { ...project, ...override }
}

function resolveCardCover(project) {
  const hasCustomCover = project.cover && project.cover !== 'cover.svg'
  if (hasCustomCover) {
    return projectAsset(project.slug, project.cover)
  }
  if (project.gallery?.length) {
    return projectAsset(project.slug, project.gallery[0])
  }
  return project.cover ? projectAsset(project.slug, project.cover) : ''
}

export function localizeProject(project, locale) {
  const copy = project.i18n[locale] ?? project.i18n.en
  const coverUrl = resolveCardCover(project)
  const galleryFiles = project.gallery?.length ? project.gallery : project.cover ? [project.cover] : []
  const galleryUrls = galleryFiles.map((file) => projectAsset(project.slug, file))
  const videoUrl = project.video ? projectAsset(project.slug, `videos/${project.video}`) : null

  return {
    id: project.id,
    slug: project.slug,
    title: copy.title,
    tagline: copy.tagline,
    description: copy.description,
    longDescription: copy.longDescription,
    highlights: copy.highlights,
    tech: project.tech,
    stage: project.stage,
    github: project.github,
    live: project.live,
    coverUrl,
    galleryUrls,
    videoUrl,
    previewColor: project.previewColor,
  }
}
