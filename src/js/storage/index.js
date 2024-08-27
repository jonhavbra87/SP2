export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function load(key) {
  try {
    const value = localStorage.getItem(key)
    return JSON.parse(value)
  } catch {
    return null
  }
}

export function remove(key) {
  if (localStorage.getItem(key) !== null) {
    localStorage.removeItem(key)
  } else {
    console.warn(`Key "${key}" does not exist in localStorage.`)
  }
}
