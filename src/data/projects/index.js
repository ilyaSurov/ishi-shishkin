import ratnikTactic from './ratnik-tactic'
import jupiter from './jupiter'
import skylux from './skylux'
import jobapplyDuo from './jobapply-duo'
import { mergeProjectMeta, localizeProject } from './loadConfigs'

const registry = [ratnikTactic, jupiter, skylux, jobapplyDuo]

export const PROJECT_STAGES = ['pre-mvp', 'mvp', 'beta', 'production']

export function getProjects(locale, overrides = {}) {
  return registry.map((project) => {
    const merged = mergeProjectMeta(project, overrides[project.slug])
    return localizeProject(merged, locale)
  })
}

export function getProjectById(id, locale, overrides = {}) {
  const project = registry.find((p) => p.id === id)
  if (!project) return null
  const merged = mergeProjectMeta(project, overrides[project.slug])
  return localizeProject(merged, locale)
}
