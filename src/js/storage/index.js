export function save(key, value) {
  if (key && value !== undefined) {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(`Saved ${key}:`, value);
  } else {
    console.warn(`Attempted to save invalid key or value: ${key}, ${value}`);
  }
}

export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error(`Error loading ${key} from localStorage: ${error.message}`);
    return null;
  }
}

export function remove(key) {
  if (localStorage.getItem(key) !== null) {
    localStorage.removeItem(key);
  } else {
    console.warn(`Key "${key}" does not exist in localStorage.`);
  }
}

// export function save(key, value) {
//   if (key && value !== undefined) {
//     localStorage.setItem(key, JSON.stringify(value));
//     console.log(`Saved ${key}:`, value);
//   } else {
//     console.warn(`Attempted to save invalid key or value: ${key}, ${value}`);
//   }
// }

// export function load(key) {
//   try {
//     const value = localStorage.getItem(key);
//     return JSON.parse(value);
//   } catch {
//     return null;
//   }
// }

// export function remove(key) {
//   if (localStorage.getItem(key) !== null) {
//     localStorage.removeItem(key);
//   } else {
//     console.warn(`Key "${key}" does not exist in localStorage.`);
//   }
// }
