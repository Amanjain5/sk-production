// Home page motion layer: smooth scroll, reveals, hovers, cursor visuals, fact slider.
type Cleanup = () => void

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))
const lerp = (a: number, b: number, t: number) => a + (b - a) * t

const EASE_RELAXED = 'cubic-bezier(0.7, 0, 0.3, 1)'
const EASE_FACT = 'cubic-bezier(0.239, 1.4, 0.6001, 0.95)'
const EASE_BACK = 'cubic-bezier(0.34, 1.56, 0.64, 1)'
const EASE_P3OUT = 'cubic-bezier(0.215, 0.61, 0.355, 1)'

function onceInView(el: Element, cb: () => void, rootMargin = '0px 0px -5% 0px') {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        cb()
        io.disconnect()
      }
    })
  }, { rootMargin })
  io.observe(el)
  return () => io.disconnect()
}

/* ---------- Smooth (lerp) wheel scrolling ---------- */
function initSmoothScroll(): Cleanup {
  if (reduced() || window.matchMedia('(pointer: coarse)').matches) return () => {}
  let target = window.scrollY
  let current = window.scrollY
  let running = false
  let raf = 0
  const max = () => document.documentElement.scrollHeight - window.innerHeight

  const tick = () => {
    current = lerp(current, target, 0.14)
    if (Math.abs(target - current) < 0.5) {
      current = target
      running = false
    }
    window.scrollTo(0, current)
    if (running) raf = requestAnimationFrame(tick)
  }
  const onWheel = (e: WheelEvent) => {
    if (e.ctrlKey || document.documentElement.classList.contains('is-loading')) return
    if ((e.target as HTMLElement).closest?.('[data-lenis-prevent]')) return
    e.preventDefault()
    if (!running) current = target = window.scrollY
    target = clamp(target + e.deltaY * 0.95, 0, max())
    if (!running) {
      running = true
      raf = requestAnimationFrame(tick)
    }
  }
  const onScroll = () => {
    if (!running) current = target = window.scrollY
  }
  window.addEventListener('wheel', onWheel, { passive: false })
  window.addEventListener('scroll', onScroll, { passive: true })
  return () => {
    cancelAnimationFrame(raf)
    window.removeEventListener('wheel', onWheel)
    window.removeEventListener('scroll', onScroll)
  }
}

/* ---------- Bracket tag flicker reveal ---------- */
function flicker(el: HTMLElement, delay = 0) {
  el.animate(
    [
      { opacity: 0, offset: 0 },
      { opacity: 1, offset: 0.16 },
      { opacity: 0, offset: 0.32 },
      { opacity: 1, offset: 0.48 },
      { opacity: 0.4, offset: 0.68 },
      { opacity: 1, offset: 1 },
    ],
    { duration: 250, delay, fill: 'both', easing: 'steps(1, end)' },
  )
}

function initTagReveal(): Cleanup {
  const cleanups: Cleanup[] = []
  document.querySelectorAll<HTMLElement>('.tag_layout').forEach((tag) => {
    const parts = tag.querySelectorAll<HTMLElement>(':scope > .tag_text')
    const left = parts[0]
    const right = parts[parts.length - 1]
    tag.style.opacity = '0'
    if (left && right && parts.length > 1) {
      left.style.transform = 'translateX(0.5rem)'
      right.style.transform = 'translateX(-0.5rem)'
    }
    cleanups.push(onceInView(tag, () => {
      tag.style.opacity = ''
      flicker(tag)
      if (left && right && parts.length > 1) {
        ;[left, right].forEach((b) => {
          b.style.transition = `transform 0.5s ${EASE_P3OUT}`
          b.style.transform = 'translateX(0)'
        })
      }
    }))
  })
  // Footer link items flicker in, staggered
  const footerItems = Array.from(document.querySelectorAll<HTMLElement>('.footer_group_item, footer [role="listitem"]'))
  footerItems.forEach((item, i) => {
    item.style.opacity = '0'
    cleanups.push(onceInView(item, () => {
      item.style.opacity = ''
      flicker(item, (i % 8) * 100)
    }))
  })
  return () => cleanups.forEach((c) => c())
}

/* ---------- Scroll-scrubbed word reveal (blur + rise) ---------- */
function splitWords(el: HTMLElement): HTMLElement[] {
  if (el.dataset.split === 'words') return Array.from(el.querySelectorAll<HTMLElement>('.anim-word'))
  const words: HTMLElement[] = []
  const walk = (node: Node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const text = child.textContent ?? ''
        if (!text.trim()) return
        const frag = document.createDocumentFragment()
        text.split(/(\s+)/).forEach((part) => {
          if (!part) return
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(part))
          } else {
            const s = document.createElement('span')
            s.className = 'anim-word'
            s.textContent = part
            frag.appendChild(s)
            words.push(s)
          }
        })
        child.parentNode?.replaceChild(frag, child)
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        walk(child)
      }
    })
  }
  walk(el)
  el.dataset.split = 'words'
  return words
}

function initTextScroll(): Cleanup {
  const selectors = [
    '.partner_top_wrap .c-heading p',
    '.partner_center_wrap h2',
    'main h2.u-text-style-h2',
    '.problem_wrap h2',
    '.services_wrap h2',
    '.fact_layout .c-paragraph p',
    '[data-text-animation="true"]',
    '.team_wrap .c-paragraph p',
  ]
  const els = Array.from(new Set(Array.from(document.querySelectorAll<HTMLElement>(selectors.join(','))))).filter(
    (el) => !el.closest('.hero_wrap') && !el.closest('.clients_wrap, .testimonial_wrap, .services_item'),
  )
  const items = els.map((el) => ({ el, words: splitWords(el) }))
  let raf = 0
  const update = () => {
    raf = 0
    const vh = window.innerHeight
    items.forEach(({ el, words }) => {
      const r = el.getBoundingClientRect()
      // start: top hits 90% of viewport; end: element center hits 40%
      const start = r.top - vh * 0.9
      const end = r.top + r.height / 2 - vh * 0.4
      const p = clamp(start >= 0 ? 0 : -start / Math.max(1, -start + end))
      const n = words.length
      const stagger = 0.09
      const total = 1 + stagger * (n - 1)
      words.forEach((w, i) => {
        const t = clamp(p * total - i * stagger)
        const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
        w.style.opacity = String(e)
        w.style.transform = `translateY(${20 * (1 - e)}px)`
        w.style.filter = e >= 1 ? 'none' : `blur(${10 * (1 - e)}px)`
      })
    })
  }
  const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  return () => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
    cancelAnimationFrame(raf)
  }
}

/* ---------- Character roll on hover ---------- */
function initCharStagger(): Cleanup {
  document.querySelectorAll<HTMLElement>('[data-chars-stagger]').forEach((el) => {
    if (el.dataset.split === 'chars') return
    const text = el.textContent ?? ''
    el.textContent = ''
    Array.from(text.trim()).forEach((ch, i) => {
      const s = document.createElement('span')
      s.textContent = ch
      if (ch === ' ') s.style.whiteSpace = 'pre'
      s.style.transitionDelay = `${0.01 * i}s`
      el.appendChild(s)
    })
    el.dataset.split = 'chars'
    const wrapper = el.closest('[data-trigger]') ?? el.parentElement
    wrapper?.setAttribute('data-chars-stagger-wrapper', '')
  })
  return () => {}
}

/* ---------- Fact ruler slide ---------- */
function initFact(): Cleanup {
  const wrap = document.querySelector<HTMLElement>('.fact_center_wrap')
  const list = wrap?.querySelector<HTMLElement>('.fact_center_number_list')
  if (!wrap || !list) return () => {}
  const items = Array.from(list.querySelectorAll<HTMLElement>('.fact_center_number_text_wrap'))
  const final = items.find((i) => i.textContent?.trim() === '1,7s') ?? items[items.length - 1]
  const rulers = wrap.querySelectorAll<HTMLElement>('.fact_center_ruler')
  let done = false
  const offset = () => {
    const prev = list.style.transform
    list.style.transition = 'none'
    list.style.transform = 'none'
    const w = wrap.getBoundingClientRect()
    const f = final.getBoundingClientRect()
    list.style.transform = prev
    return w.left + w.width / 2 - (f.left + f.width / 2)
  }
  const apply = (animate: boolean) => {
    const x = offset()
    const dur = animate ? `2s ${EASE_FACT}` : 'none'
    void list.offsetWidth
    list.style.transition = animate ? `transform ${dur}` : 'none'
    list.style.transform = `translateX(${x}px)`
    rulers.forEach((r) => {
      r.style.transition = animate ? `background-position ${dur}` : 'none'
      r.style.backgroundPositionX = `${x}px`
    })
  }
  items.forEach((i) => i.style.transition = 'opacity 0.6s ease')
  const stop = onceInView(wrap, () => {
    done = true
    apply(true)
    setTimeout(() => items.forEach((i) => (i.style.opacity = i === final ? '1' : '')), 1200)
  }, '0px')
  const onResize = () => done && apply(false)
  window.addEventListener('resize', onResize)
  return () => {
    stop()
    window.removeEventListener('resize', onResize)
  }
}

/* ---------- Cursor-following visual (services + CTA) ---------- */
function cursorVisual(container: HTMLElement, visual: HTMLElement): Cleanup {
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  if (!fine) return () => {}
  if (getComputedStyle(container).position === 'static') container.style.position = 'relative'
  Object.assign(visual.style, {
    position: 'absolute',
    left: '0px',
    top: '0px',
    pointerEvents: 'none',
    zIndex: '5',
    willChange: 'transform',
  })
  let x = 0, y = 0, cx = 0, cy = 0, s = 0, ts = 0
  let raf = 0
  let scaleStart = 0, scaleFrom = 0, scaleDur = 500
  const easeBack = (t: number) => { const c1 = 1.5, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2) }
  const easeOut = (t: number) => 1 - Math.pow(1 - t, 2)
  const tick = (now: number) => {
    cx = lerp(cx, x, 0.12)
    cy = lerp(cy, y, 0.12)
    const t = clamp((now - scaleStart) / scaleDur)
    s = scaleFrom + (ts - scaleFrom) * (ts === 1 ? easeBack(t) : easeOut(t))
    visual.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%) scale(${s})`
    if (t < 1 || Math.abs(cx - x) > 0.3 || Math.abs(cy - y) > 0.3) raf = requestAnimationFrame(tick)
    else raf = 0
  }
  const kick = () => { if (!raf) raf = requestAnimationFrame(tick) }
  const pos = (e: MouseEvent) => {
    const r = container.getBoundingClientRect()
    x = e.clientX - r.left
    y = e.clientY - r.top
  }
  const setScale = (to: number, dur: number) => {
    scaleFrom = s; ts = to; scaleDur = dur; scaleStart = performance.now(); kick()
  }
  const enter = (e: MouseEvent) => { pos(e); if (s === 0) { cx = x; cy = y } setScale(1, 500); container.querySelectorAll('video').forEach(v => v.play().catch(() => {})) }
  const move = (e: MouseEvent) => { pos(e); kick() }
  const leave = () => setScale(0, 400)
  visual.style.transform = 'translate(0,0) scale(0)'
  container.addEventListener('mouseenter', enter)
  container.addEventListener('mousemove', move)
  container.addEventListener('mouseleave', leave)
  return () => {
    cancelAnimationFrame(raf)
    container.removeEventListener('mouseenter', enter)
    container.removeEventListener('mousemove', move)
    container.removeEventListener('mouseleave', leave)
  }
}

function initCursorVisuals(): Cleanup {
  const cleanups: Cleanup[] = []
  document.querySelectorAll<HTMLElement>('.services_item').forEach((item) => {
    const v = item.querySelector<HTMLElement>('.services_visual_wrap')
    if (v) {
      v.classList.remove('u-position-relative')
      v.style.width = '15rem'
      cleanups.push(cursorVisual(item, v))
    }
  })
  const cta = document.querySelector<HTMLElement>('.cta_layout')
  const ctaVisual = cta?.querySelector<HTMLElement>('.cta_visual_wrap')
  if (cta && ctaVisual) cleanups.push(cursorVisual(cta, ctaVisual))
  return () => cleanups.forEach((c) => c())
}

/* ---------- Partner logo marquee ---------- */
function initMarquee(): Cleanup {
  document.querySelectorAll<HTMLElement>('.partner_logo_list').forEach((l) => {
    l.style.animation = 'translateX 60s linear infinite'
    l.style.flexShrink = '0'
  })
  return () => {}
}

/* ---------- Live Berlin clock with blinking colon ---------- */
function initClock(): Cleanup {
  const p = document.querySelector<HTMLElement>('.hero_time_text')
  const span = p?.querySelector<HTMLElement>('[data-hero-element="time"]') ?? p?.querySelector<HTMLElement>('span')
  if (!span) return () => {}
  const render = () => {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Berlin', hour: '2-digit', minute: '2-digit', hour12: true,
    }).formatToParts(new Date())
    const h = parts.find((x) => x.type === 'hour')?.value ?? '00'
    const m = parts.find((x) => x.type === 'minute')?.value ?? '00'
    const ap = (parts.find((x) => x.type === 'dayPeriod')?.value ?? '').toUpperCase()
    span.innerHTML = `${h}<span class="anim-colon">:</span>${m} ${ap}`
  }
  render()
  const id = setInterval(render, 15000)
  return () => clearInterval(id)
}

/* ---------- Videos play only while in view ---------- */
function initVideos(): Cleanup {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const v = e.target as HTMLVideoElement
      if (e.isIntersecting) v.play().catch(() => {})
      else v.pause()
    })
  }, { threshold: 0.3 })
  document.querySelectorAll<HTMLVideoElement>('main video').forEach((v) => {
    v.muted = true
    io.observe(v)
  })
  return () => io.disconnect()
}

/* ---------- Hero background video that travels into the partner box ---------- */
const HERO_VIDEO_SRC = 'https://cdn.jsdelivr.net/gh/INSYNC-Development/asset@main/snacked-studios/videos/vimeo-1206773516.mp4'

function initHeroVideo(): Cleanup {
  const hero = document.querySelector<HTMLElement>('.hero_visual_target')
  const box = document.querySelector<HTMLElement>('.partner_center_visual')
  const trigger = document.querySelector<HTMLElement>('.partner_wrap')
  if (!hero || !box || !trigger) return () => {}

  // Visual element: video with the existing hero image as poster/fallback
  const el = document.createElement('div')
  el.className = 'hero-travel'
  const poster = hero.querySelector('img')?.getAttribute('src') ?? ''
  const video = document.createElement('video')
  Object.assign(video, { src: HERO_VIDEO_SRC, muted: true, loop: true, autoplay: true, playsInline: true, poster })
  video.setAttribute('muted', '')
  video.setAttribute('playsinline', '')
  el.appendChild(video)
  hero.querySelectorAll<HTMLElement>(':scope > *').forEach((c) => (c.style.opacity = '0'))
  box.querySelectorAll<HTMLElement>(':scope > *:not(.hero_bg_wrap)').forEach((c) => (c.style.opacity = '0'))
  box.querySelectorAll<HTMLElement>('.hero_bg_visual_wrap').forEach((c) => (c.style.opacity = '0'))
  const playBtn = box.querySelector<HTMLElement>('.partner_center_play_btn')
  if (playBtn) { playBtn.style.opacity = '0'; playBtn.style.zIndex = '3'; playBtn.style.transition = 'opacity 0.3s ease' }
  hero.appendChild(el)
  video.play().catch(() => {})

  let inBox = false
  let anim: Animation | null = null
  const move = (toBox: boolean) => {
    if (toBox === inBox) return
    inBox = toBox
    const first = el.getBoundingClientRect()
    const firstRadius = getComputedStyle(el).borderRadius
    ;(toBox ? box : hero).appendChild(el)
    el.classList.toggle('is-in-box', toBox)
    const last = el.getBoundingClientRect()
    anim?.cancel()
    if (playBtn) playBtn.style.opacity = '0'
    if (reduced()) { if (toBox && playBtn) playBtn.style.opacity = '1'; return }
    const dx = first.left - last.left
    const dy = first.top - last.top
    const sx = first.width / last.width
    const sy = first.height / last.height
    el.style.zIndex = '50'
    anim = el.animate(
      [
        { transformOrigin: '0 0', transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`, borderRadius: firstRadius },
        { transformOrigin: '0 0', transform: 'none' },
      ],
      { duration: 1200, easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)' },
    )
    anim.onfinish = () => {
      el.style.zIndex = ''
      if (inBox && playBtn) playBtn.style.opacity = '1'
    }
    video.play().catch(() => {})
  }

  const check = () => {
    const r = trigger.getBoundingClientRect()
    const vh = window.innerHeight
    // enter when partner section top passes 20% of viewport; leave back above it
    move(r.top <= vh * 0.2)
  }
  let raf = 0
  const onScroll = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; check() }) }
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  check()
  return () => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
    el.remove()
  }
}

/* ---------- Clients slider: 8s autoplay with progress line ---------- */
const VID = 'https://cdn.jsdelivr.net/gh/INSYNC-Development/asset@main/snacked-studios/videos/'
const CLIENT_VIDEOS = ['1206780227', '1206780311', '1206780178', '1206780272', '1206780191', '1206780253'].map((id) => `${VID}vimeo-${id}.mp4`)
const PROBLEM_VIDEOS = ['1206777953', '1206777990', '1206778021'].map((id) => `${VID}vimeo-${id}.mp4`)

function setVideoSrc(v: HTMLVideoElement, src: string) {
  if (v.dataset.srcSet) return
  v.dataset.srcSet = '1'
  v.querySelectorAll('source').forEach((s) => s.remove())
  v.src = src
  v.muted = true
  v.preload = 'auto'
}

function initClientsSlider(): Cleanup {
  const wrap = document.querySelector<HTMLElement>('.clients_wrap')
  if (!wrap) return () => {}
  const items = Array.from(wrap.querySelectorAll<HTMLElement>('.clients_top_item'))
  const logos = Array.from(wrap.querySelectorAll<HTMLElement>('.clients_bottom_item'))
  const logoList = wrap.querySelector<HTMLElement>('.clients_logo_list')
  const [prevBtn, nextBtn] = Array.from(wrap.querySelectorAll<HTMLElement>('.clients_nav_wrap .button_arrow_wrap'))
  if (!items.length) return () => {}
  items.forEach((it, i) => {
    const v = it.querySelector('video')
    if (v && CLIENT_VIDEOS[i]) setVideoSrc(v, CLIENT_VIDEOS[i])
  })
  let index = 0
  let timer = 0
  let lineAnim: Animation | null = null

  const splitLines = (p: HTMLElement) => splitWords(p)

  const show = (next: number, first = false) => {
    const prev = index
    index = (next + items.length) % items.length
    items.forEach((it, i) => {
      const active = i === index
      it.style.pointerEvents = active ? 'auto' : 'none'
      it.style.zIndex = active ? '2' : '1'
      const visual = it.querySelector<HTMLElement>('.clients_top_visual_wrap')
      const card = it.querySelector<HTMLElement>('.clients_card_wrap')
      const v = it.querySelector('video')
      if (active) {
        v?.play().catch(() => {})
        if (first) { if (visual) visual.style.opacity = '1'; if (card) card.style.opacity = '1'; return }
        visual?.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 800, delay: 200, easing: 'ease-out', fill: 'both' })
        if (card) {
          card.style.opacity = '1'
          const p = card.querySelector<HTMLElement>('p')
          if (p) splitLines(p).forEach((w, k) => w.animate(
            [{ opacity: 0, transform: 'translateY(100%)' }, { opacity: 1, transform: 'none' }],
            { duration: 800, delay: 300 + k * 15, easing: EASE_P3OUT, fill: 'both' }))
          card.querySelectorAll<HTMLElement>('.clients_card_info_wrap > *').forEach((c, k) => c.animate(
            [{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }],
            { duration: 600, delay: 500 + k * 100, easing: 'ease-out', fill: 'both' }))
        }
      } else {
        if (i === prev && !first) visual?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 600, easing: 'cubic-bezier(0.45,0,0.55,1)', fill: 'both' })
        else if (visual) { visual.getAnimations().forEach((a) => a.cancel()); visual.style.opacity = '0' }
        if (card) card.style.opacity = '0'
        v?.pause()
      }
    })
    logos.forEach((l, i) => {
      l.style.opacity = i === index ? '1' : ''
      const line = l.querySelector<HTMLElement>('.clients_bottom_line_active')
      if (line) { line.getAnimations().forEach((a) => a.cancel()); line.style.width = '0%' }
    })
    // keep active logo in view (4 visible)
    if (logoList && logos.length > 4) {
      const shift = Math.max(0, Math.min(index - 1, logos.length - 4))
      logoList.style.transition = `transform 0.6s ${EASE_P3OUT}`
      logoList.style.transform = `translateX(${-shift * 25}%)`
    }
    const line = logos[index]?.querySelector<HTMLElement>('.clients_bottom_line_active')
    lineAnim?.cancel()
    if (line) {
      lineAnim = line.animate([{ width: '0%' }, { width: '100%' }], { duration: 8000, easing: 'linear', fill: 'forwards' })
    }
    clearTimeout(timer)
    timer = window.setTimeout(() => show(index + 1), 8000)
  }
  const onPrev = () => show(index - 1)
  const onNext = () => show(index + 1)
  prevBtn?.addEventListener('click', onPrev)
  nextBtn?.addEventListener('click', onNext)
  const logoHandlers = logos.map((l, i) => { const h = () => show(i); l.addEventListener('click', h); return h })
  show(0, true)
  return () => {
    clearTimeout(timer)
    prevBtn?.removeEventListener('click', onPrev)
    nextBtn?.removeEventListener('click', onNext)
    logos.forEach((l, i) => l.removeEventListener('click', logoHandlers[i]))
  }
}

/* ---------- Insights carousel: centered active slide, looped arrows ---------- */
function initInsightCarousel(): Cleanup {
  const slider = document.querySelector<HTMLElement>('.insight_slider')
  const track = slider?.querySelector<HTMLElement>('.swiper-wrapper')
  if (!slider || !track) return () => {}
  const slides = Array.from(track.querySelectorAll<HTMLElement>('.insight_item'))
  const [prevBtn, nextBtn] = Array.from(document.querySelectorAll<HTMLElement>('.insight_nav_wrap .button_arrow_wrap'))
  const sources: (string | null)[] = ['eriot-madeira']
  slides.forEach((s, i) => { const v = s.querySelector('video'); const src = sources[i]; if (v && src) { setVideoSrc(v, `${VID}${src}.mp4`); v.loop = true } })
  let index = Math.min(1, slides.length - 1)
  const apply = (animate: boolean) => {
    const sr = slider.getBoundingClientRect()
    const prev = track.style.transform
    track.style.transition = 'none'
    track.style.transform = 'none'
    const a = slides[index].getBoundingClientRect()
    track.style.transform = prev
    const x = sr.left + sr.width / 2 - (a.left + a.width / 2)
    void track.offsetWidth
    track.style.transition = animate ? `transform 0.8s ${EASE_RELAXED}` : 'none'
    track.style.transform = `translate3d(${x}px,0,0)`
    slides.forEach((s, i) => {
      s.classList.toggle('is-active', i === index)
      const v = s.querySelector('video')
      if (i === index) v?.play().catch(() => {})
      else v?.pause()
    })
  }
  const go = (d: number) => { index = (index + d + slides.length) % slides.length; apply(true) }
  const onPrev = () => go(-1)
  const onNext = () => go(1)
  prevBtn?.addEventListener('click', onPrev)
  nextBtn?.addEventListener('click', onNext)
  const clickSlide = slides.map((s, i) => { const h = () => { if (i !== index) { index = i; apply(true) } }; s.addEventListener('click', h); return h })
  const onResize = () => apply(false)
  window.addEventListener('resize', onResize)
  apply(false)
  return () => {
    prevBtn?.removeEventListener('click', onPrev)
    nextBtn?.removeEventListener('click', onNext)
    slides.forEach((s, i) => s.removeEventListener('click', clickSlide[i]))
    window.removeEventListener('resize', onResize)
  }
}

/* ---------- Problem phone + service background videos ---------- */
function initSectionVideos(): Cleanup {
  document.querySelectorAll<HTMLVideoElement>('.problem_wrap video').forEach((v, i) => {
    if (PROBLEM_VIDEOS[i]) { setVideoSrc(v, PROBLEM_VIDEOS[i]); v.loop = true }
  })
  return () => {}
}

/* ---------- Corner stroke grows on hover ---------- */
function initCornerHover(): Cleanup {
  const cleanups: Cleanup[] = []
  document.querySelectorAll<HTMLElement>('[data-stroke="corner-hover"]').forEach((el) => {
    const corner = el.querySelector<HTMLElement>('[data-stroke="corner"]')
    if (!corner) return
    corner.style.setProperty('--fill', '0%')
    const enter = () => corner.animate([{ '--fill': '0%' } as Keyframe, { '--fill': '5%' } as Keyframe], { duration: 600, easing: 'cubic-bezier(0.645,0.045,0.355,1)', fill: 'forwards' })
    const leave = () => corner.animate([{ '--fill': '5%' } as Keyframe, { '--fill': '0%' } as Keyframe], { duration: 600, easing: 'cubic-bezier(0.645,0.045,0.355,1)', fill: 'forwards' })
    el.addEventListener('mouseenter', enter)
    el.addEventListener('mouseleave', leave)
    cleanups.push(() => { el.removeEventListener('mouseenter', enter); el.removeEventListener('mouseleave', leave) })
  })
  return () => cleanups.forEach((c) => c())
}

/* ---------- Footer link brackets tighten on hover ---------- */
function initFooterLinkHover(): Cleanup {
  const cleanups: Cleanup[] = []
  document.querySelectorAll<HTMLElement>('footer [role="listitem"]').forEach((item) => {
    const kids = Array.from(item.querySelectorAll<HTMLElement>(':scope > * > *'))
    if (kids.length < 3) return
    const l = kids[0], r = kids[kids.length - 1]
    ;[l, r].forEach((b) => (b.style.transition = `transform 0.4s ${EASE_P3OUT}`))
    const enter = () => { l.style.transform = 'translateX(0.25rem)'; r.style.transform = 'translateX(-0.25rem)' }
    const leave = () => { l.style.transform = ''; r.style.transform = '' }
    item.addEventListener('mouseenter', enter)
    item.addEventListener('mouseleave', leave)
    cleanups.push(() => { item.removeEventListener('mouseenter', enter); item.removeEventListener('mouseleave', leave) })
  })
  return () => cleanups.forEach((c) => c())
}

/* ---------- Testimonial avatar slider (About) ---------- */
function initTestimonialSlider(): Cleanup {
  const wrap = document.querySelector<HTMLElement>('.testimonial_wrap')
  if (!wrap) return () => {}
  const avatars = Array.from(wrap.querySelectorAll<HTMLElement>('.testi_avatar_item'))
  const items = Array.from(wrap.querySelectorAll<HTMLElement>('.testimonial_item'))
  const prev = wrap.querySelector<HTMLElement>('[data-testimonial-slider="prev-btn"]')
  const next = wrap.querySelector<HTMLElement>('[data-testimonial-slider="next-btn"]')
  const n = Math.max(avatars.length, items.length)
  if (!n) return () => {}
  const mobile = () => window.innerWidth < 768
  avatars.forEach((a) => Object.assign(a.style, {
    position: 'absolute', left: '50%', top: '0', transition: `transform 0.6s cubic-bezier(0.645,0.045,0.355,1), opacity 0.6s cubic-bezier(0.645,0.045,0.355,1), filter 0.6s cubic-bezier(0.645,0.045,0.355,1)`,
  }))
  let index = 0
  const render = (dir: number, first = false) => {
    avatars.forEach((a, i) => {
      const rel = (i - index + n) % n
      let x = -50, s = 0.5, o = 0, b = 0.4
      if (rel === 0) { s = 1; o = 1; b = 1 }
      else if (rel === n - 1) { x = mobile() ? -160 : -190; s = mobile() ? 0.6 : 0.8; o = 1 }
      else if (rel === 1) { x = mobile() ? 60 : 90; s = mobile() ? 0.6 : 0.8; o = 1 }
      a.style.transform = `translateX(${x}%) scale(${s})`
      a.style.opacity = String(o)
      a.style.filter = `brightness(${b})`
      a.style.zIndex = rel === 0 ? '3' : '1'
    })
    items.forEach((it, i) => {
      const active = i === index
      it.style.pointerEvents = active ? 'auto' : 'none'
      if (first) { it.style.opacity = active ? '1' : '0'; it.style.visibility = active ? 'visible' : 'hidden'; return }
      if (active) {
        it.style.visibility = 'visible'
        it.animate([{ opacity: 0, transform: `translateY(${15 * dir}px)` }, { opacity: 1, transform: 'none' }], { duration: 600, easing: 'cubic-bezier(0.645,0.045,0.355,1)', fill: 'forwards' })
      } else if (it.style.visibility !== 'hidden') {
        const an = it.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: `translateY(${-15 * dir}px)` }], { duration: 600, easing: 'cubic-bezier(0.645,0.045,0.355,1)', fill: 'forwards' })
        an.onfinish = () => { if (i !== index) it.style.visibility = 'hidden' }
      }
    })
  }
  const go = (d: number) => { index = (index + d + n) % n; render(d) }
  const onPrev = () => go(-1), onNext = () => go(1)
  prev?.addEventListener('click', onPrev)
  next?.addEventListener('click', onNext)
  const onResize = () => render(0, true)
  window.addEventListener('resize', onResize)
  render(1, true)
  return () => {
    prev?.removeEventListener('click', onPrev)
    next?.removeEventListener('click', onNext)
    window.removeEventListener('resize', onResize)
  }
}

/* ---------- Odometer count-up (About stats) ---------- */
function initOdometer(): Cleanup {
  const cleanups: Cleanup[] = []
  document.querySelectorAll<HTMLElement>('[data-odometer-group]').forEach((group) => {
    const els = Array.from(group.querySelectorAll<HTMLElement>('[data-odometer-element]'))
    els.forEach((el) => {
      if (el.dataset.odoInit) return
      el.dataset.odoInit = '1'
      const text = el.textContent ?? ''
      el.dataset.odoText = text
      el.textContent = ''
      el.setAttribute('aria-label', text)
      Array.from(text).forEach((ch) => {
        if (/\d/.test(ch)) {
          const mask = document.createElement('span')
          mask.dataset.odometerPart = 'mask'
          mask.style.height = '1em'
          mask.style.lineHeight = '1'
          const roller = document.createElement('span')
          roller.dataset.odometerPart = 'roller'
          roller.dataset.target = ch
          roller.style.lineHeight = '1'
          roller.textContent = '0\n1\n2\n3\n4\n5\n6\n7\n8\n9'
          mask.appendChild(roller)
          el.appendChild(mask)
        } else {
          const st = document.createElement('span')
          st.dataset.odometerPart = 'static'
          st.textContent = ch
          el.appendChild(st)
        }
      })
    })
    cleanups.push(onceInView(group, () => {
      els.forEach((el, gi) => {
        const rollers = Array.from(el.querySelectorAll<HTMLElement>('[data-odometer-part="roller"]'))
        rollers.reverse().forEach((r, k) => {
          const t = Number(r.dataset.target)
          r.animate([{ transform: 'translateY(0)' }, { transform: `translateY(${-t}em)` }],
            { duration: 1000, delay: gi * 100 + k * 40, easing: 'cubic-bezier(0.215,0.61,0.355,1)', fill: 'forwards' })
        })
      })
    }, '0px 0px -20% 0px'))
  })
  return () => cleanups.forEach((c) => c())
}

/* ---------- Application modal ---------- */
function initModal(): Cleanup {
  const cleanups: Cleanup[] = []
  document.querySelectorAll<HTMLDialogElement>('dialog[data-modal-target]').forEach((dlg) => {
    const name = dlg.dataset.modalTarget
    const triggers = Array.from(document.querySelectorAll<HTMLElement>(`[data-modal-trigger="${name}"]`))
    const content = dlg.querySelector<HTMLElement>('.modal_content')
    const open = (e: Event) => {
      e.preventDefault()
      if (dlg.open) return
      dlg.showModal()
      dlg.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 400, easing: 'ease-out' })
      content?.animate([{ transform: 'translateY(30px)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 600, easing: EASE_P3OUT })
      document.documentElement.classList.add('is-loading')
    }
    const close = () => {
      const a = dlg.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, easing: 'ease-in' })
      a.onfinish = () => { dlg.querySelectorAll('video').forEach((v) => v.pause()); if (dlg.open) dlg.close(); document.documentElement.classList.remove('is-loading') }
    }
    const closers = Array.from(dlg.querySelectorAll<HTMLElement>('[data-modal-close]'))
    const onKey = (e: Event) => { e.preventDefault(); close() }
    triggers.forEach((t) => t.addEventListener('click', open))
    closers.forEach((c) => c.addEventListener('click', close))
    dlg.addEventListener('cancel', onKey)
    cleanups.push(() => {
      triggers.forEach((t) => t.removeEventListener('click', open))
      closers.forEach((c) => c.removeEventListener('click', close))
      dlg.removeEventListener('cancel', onKey)
    })
  })
  return () => cleanups.forEach((c) => c())
}

/* ---------- Masonry grid (Gallery) ---------- */
function initMasonry(): Cleanup {
  const lists = Array.from(document.querySelectorAll<HTMLElement>('[data-masonry-list]'))
  if (!lists.length) return () => {}
  const layout = () => lists.forEach((list) => {
    const items = Array.from(list.children) as HTMLElement[]
    const w = window.innerWidth
    const cols = w <= 468 ? 1 : w <= 991 ? 2 : 3
    const gap = parseFloat(getComputedStyle(list).columnGap) || 20
    const colW = (list.clientWidth - gap * (cols - 1)) / cols
    const heights = new Array(cols).fill(0)
    list.style.position = 'relative'
    items.forEach((it) => {
      Object.assign(it.style, { position: 'absolute', width: `${colW}px`, margin: '0' })
      const c = heights.indexOf(Math.min(...heights))
      it.style.left = `${c * (colW + gap)}px`
      it.style.top = `${heights[c]}px`
      heights[c] += it.offsetHeight + gap
    })
    list.style.height = `${Math.max(...heights) - gap}px`
  })
  layout()
  const ro = new ResizeObserver(() => layout())
  lists.forEach((l) => l.querySelectorAll('img, video').forEach((m) => m.addEventListener('load', layout)))
  lists.forEach((l) => ro.observe(l))
  window.addEventListener('resize', layout)
  // reveal cards as they enter
  const cleanups = lists.flatMap((l) => (Array.from(l.children) as HTMLElement[]).map((it, i) => {
    it.style.opacity = '0'
    return onceInView(it, () => it.animate([{ opacity: 0, transform: 'translateY(30px)' }, { opacity: 1, transform: 'none' }], { duration: 800, delay: (i % 3) * 100, easing: EASE_P3OUT, fill: 'forwards' }))
  }))
  return () => { ro.disconnect(); window.removeEventListener('resize', layout); cleanups.forEach((c) => c()) }
}

/* ---------- Hero entrance (after preloader) ---------- */
export function playHeroIntro() {
  const h = document.querySelector<HTMLElement>('.hero_content_heading, .project_hero_heading, .contact_layout h1')
  if (h) {
    const words = splitWords(h)
    words.forEach((w, i) => {
      w.style.display = 'inline-block'
      w.animate(
        [
          { opacity: 0, transform: 'translateY(40%)', filter: 'blur(10px)' },
          { opacity: 1, transform: 'translateY(0)', filter: 'blur(0px)' },
        ],
        { duration: 900, delay: 80 * i, easing: EASE_P3OUT, fill: 'both' },
      )
    })
  }
  document.querySelectorAll<HTMLElement>('.hero_content_bottom > *, .hero_time_wrap, .nav_desktop_contain').forEach((el, i) => {
    el.animate(
      [{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }],
      { duration: 800, delay: 400 + i * 120, easing: EASE_RELAXED, fill: 'both' },
    )
  })
}

export function initAnimations(): Cleanup {
  const cleanups = [
    initSmoothScroll(),
    initCharStagger(),
    initMarquee(),
    initClock(),
    initVideos(),
    initCursorVisuals(),
    initHeroVideo(),
    initSectionVideos(),
    initClientsSlider(),
    initInsightCarousel(),
    initCornerHover(),
    initFooterLinkHover(),
    initTestimonialSlider(),
    initOdometer(),
    initModal(),
    initMasonry(),
    ...(reduced() ? [] : [initTagReveal(), initTextScroll(), initFact()]),
  ]
  return () => cleanups.forEach((c) => c())
}
