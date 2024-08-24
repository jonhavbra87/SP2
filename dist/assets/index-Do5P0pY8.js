(function () {
  const r = document.createElement('link').relList
  if (r && r.supports && r.supports('modulepreload')) return
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) d(e)
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === 'childList')
        for (const i of t.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && d(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function a(e) {
    const t = {}
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === 'use-credentials'
        ? (t.credentials = 'include')
        : e.crossOrigin === 'anonymous'
          ? (t.credentials = 'omit')
          : (t.credentials = 'same-origin'),
      t
    )
  }
  function d(e) {
    if (e.ep) return
    e.ep = !0
    const t = a(e)
    fetch(e.href, t)
  }
})()
console.log(
  'Hello from custom.js. This is a custom JavaScript file that I will create all my custom JavaScript! I will import this file into main.js.',
)
const l = document.getElementById('themeToggle'),
  s = document.body,
  c = document.querySelector('.navbar'),
  n = localStorage.getItem('theme') || 'light-mode'
s.classList.add(n)
c.classList.add(n)
l.textContent = n === 'dark-mode' ? 'Light Mode' : 'Dark Mode'
l.addEventListener('click', () => {
  const o = s.classList.contains('dark-mode')
  s.classList.toggle('dark-mode', !o),
    s.classList.toggle('light-mode', o),
    c.classList.toggle('dark-mode', !o),
    c.classList.toggle('light-mode', o),
    (l.textContent = o ? 'Dark Mode' : 'Light Mode')
  const r = o ? 'light-mode' : 'dark-mode'
  localStorage.setItem('theme', r)
})
