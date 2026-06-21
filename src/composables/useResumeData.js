import { reactive, watch } from 'vue'

const STORAGE_KEY = 'resume-coach-data'

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch (e) {
    console.warn('Failed to load resume data:', e)
  }
  return null
}

function createEmpty() {
  return {
    basic: { name: '', phone: '', email: '', age: '', hometown: '' },
    education: [],
    experience: [],
    projects: [],
    campus: [],
    skills: [],
    selfEvaluation: ''
  }
}

const saved = loadFromStorage()
const data = reactive(saved || createEmpty())

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (e) {
    console.warn('Failed to save resume data:', e)
  }
}

// Auto-save
watch(data, persist, { deep: true })

let nextId = 1

function genId() { return `item_${Date.now()}_${nextId++}` }

function addEntry(section, defaults = {}) {
  const entry = { id: genId(), ...defaults }
  data[section].push(entry)
}

function removeEntry(section, id) {
  const idx = data[section].findIndex(e => e.id === id)
  if (idx !== -1) data[section].splice(idx, 1)
}

function addSkill(name) {
  if (name && !data.skills.includes(name)) {
    data.skills.push(name)
    return true
  }
  return false
}

function removeSkill(name) {
  const idx = data.skills.indexOf(name)
  if (idx !== -1) data.skills.splice(idx, 1)
}

function clearAll() {
  Object.assign(data, createEmpty())
}

export function useResumeData() {
  return {
    data,
    addEntry,
    removeEntry,
    addSkill,
    removeSkill,
    clearAll
  }
}
