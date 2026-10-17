import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/gallery.css'

const CDN = 'https://cdn.prod.website-files.com/6a017aab5e6bd1ba8a0e742e'
const CMS = 'https://cdn.prod.website-files.com/6a017aaf5e6bd1ba8a0e74f5'
const VIDEOS = 'https://cdn.jsdelivr.net/gh/INSYNC-Development/asset@main/snacked-studios/videos'

const SHOT_WIDTHS = [500, 800, 1080, 1600, 2000, 2600, 3200]

function srcSet(base: string, ext: string, widths: number[], full: number) {
  return [...widths.map((w) => `${base}-p-${w}.${ext} ${w}w`), `${base}.${ext} ${full}w`].join(', ')
}

type Project = {
  slug: string
  variant?: string
  base: string
  ext: string
  widths: number[]
  full: number
  video: string
  name: string
}

const PROJECTS: Project[] = [
  { slug: 'dt-swiss-fr', base: `${CMS}/6a0db5951679dbc6df2babd1_Screenshot%202026-05-20%20at%2020.10.38`, ext: 'png', widths: SHOT_WIDTHS, full: 3360, video: 'dt-swiss-fr.mp4', name: 'DT Swiss Silver Lining Launch Campaign' },
  { slug: 'whynot', variant: 'w-variant-2c2717e7-e577-3385-0191-cd4bca0914a0', base: `${CMS}/6a0db6279918f9a3f565ab11_Screenshot%202026-05-20%20at%2020.11.17`, ext: 'png', widths: SHOT_WIDTHS, full: 3360, video: 'whynot.mp4', name: 'WHY NOT feat. Korbinian Engstler - FULL MTB MOVIE' },
  { slug: 'whynot-teaser-spitting', variant: 'w-variant-0ad676cc-9d49-5d4b-30df-dd27f0de633d', base: `${CMS}/6a0db67b4e83aedd2450da80_Screenshot%202026-05-20%20at%2020.11.06`, ext: 'png', widths: SHOT_WIDTHS, full: 3360, video: 'whynot-teaser-4x5.mp4', name: 'WHYNOT Teaser' },
  { slug: 'sl-vanlife-campaign-full', base: `${CMS}/6a0db6ae6ab784a41741da57_Screenshot%202026-05-20%20at%2020.10.12`, ext: 'png', widths: SHOT_WIDTHS, full: 3360, video: 'sl-vanlife-campaign.mp4', name: 'SUNLIGHT Vanlife Launch Campaign' },
  { slug: 'raymon-tarok-mainclip', variant: 'w-variant-4caaf0cc-c190-4663-6652-95a01f6e701d', base: `${CMS}/6a0db6f6498288599f9059f8_Screenshot%202026-05-20%20at%2020.10.55`, ext: 'png', widths: SHOT_WIDTHS, full: 3360, video: 'raymon-tarok-16x9.mp4', name: 'RAYMON TAROK Launch Campaign' },
  { slug: 'eriot-madeira-mainclip-social', base: `${CMS}/6a0eb2e1053efebac078d0a2_eriot_thumb`, ext: 'jpg', widths: [500, 800, 1080], full: 1350, video: 'eriot-madeira.mp4', name: 'GHOST E-RIOT Madeira Production' },
]

const CORNER_VARIANTS = [
  '',
  ' w-variant-184d5821-e27e-4abc-3885-0c4d5f7ac467',
  ' w-variant-63d23aba-50cc-94f6-ccbc-3a304f1f9855',
  ' w-variant-dc7e8987-a344-b981-5809-84a480bbcb55',
]

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className="u-svg">
      <path d="M4.16663 10H15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 4.16602L15.8333 9.99935L10 15.8327" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ProjectItem({ p }: { p: Project }) {
  const v = p.variant ? ` ${p.variant}` : ''
  const img = `${p.base}.${p.ext}`
  const set = srcSet(p.base, p.ext, p.widths, p.full)
  return (
    <div role="listitem" className="projects_item_wrap w-dyn-item">
      <div data-modal-trigger={p.slug} className="projects_item">
        <div className={`projects_item_outer${v}`}>
          <div className="projects_item_visual_wrap">
            <img src={img} loading="lazy" alt="" sizes="(max-width: 1920px) 100vw, 1920px" srcSet={set} className="u-cover" />
            <div className="projects_item_visual_gradient" />
          </div>
          <div className="projects_item_corners">
            <div data-stroke="corner" className="g_corner_wrap">
              {CORNER_VARIANTS.map((cv, i) => (
                <div key={i} style={{ '--corner-size': 'var(--corner--large)' } as React.CSSProperties} className={`g_corner_item${cv}`}>
                  <div className={`g_corner_el${cv}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <dialog data-modal-target={p.slug} data-show-in-designer="false" className="project_dialog">
        <div className="project_dialog_inner">
          <div data-modal-close="" className="project_dialog_backdrop" />
          <div className="project_dialog_content is-fit">
            <div data-modal-scroll="" className="project_dialog_scroll">
              <div className="project_dialog_slot">
                <div className="project_dialog_visuals_wrap">
                  <div className="project_dialog_thumbnail_wrap">
                    <img loading="lazy" src={img} alt="" sizes="100vw" srcSet={set} className="project_dialog_thumbnail_img" />
                  </div>
                  <div className={`project_dialog_video_wrap${v}`}>
                    <video src={`${VIDEOS}/${p.video}`} playsInline autoPlay loop muted preload="metadata" className="u-video" />
                  </div>
                  <div className="project_dialog_visual_overlay is-top" />
                  <div className="project_dialog_visual_overlay" />
                </div>
                <div className="project_dialog_info_wrap">
                  <div className="project_dialog_info_name u-text-style-display u-text-trim-on u-mix-blend-difference u-margin-bottom-6">{p.name}</div>
                  <div data-button=" " data-trigger="hover focus" data-hover-btn-40="true" className="button_main_wrap">
                    <div data-button-icon="left" className="button_main_icon_wrap">
                      <div className="button_main_icon"><ArrowIcon /></div>
                    </div>
                    <div className="button_main_element">
                      <div aria-hidden="true" className="button_main_text">Projekt starten</div>
                    </div>
                    <div className="clickable_wrap u-cover-absolute">
                      <Link aria-label="" to="/contact" className="clickable_link w-inline-block" />
                    </div>
                    <div data-button-icon="right" className="button_main_icon_wrap">
                      <div className="button_main_icon"><ArrowIcon /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  )
}

function GalleryPage() {
  // Lightweight replacement for the lumos modal script: open/close project dialogs.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      const trigger = t.closest<HTMLElement>('[data-modal-trigger]')
      if (trigger) {
        const d = document.querySelector<HTMLDialogElement>(`dialog[data-modal-target="${trigger.dataset.modalTrigger}"]`)
        if (d && !d.open) { d.showModal(); d.querySelector('video')?.play().catch(() => {}) }
        return
      }
      if (t.closest('[data-modal-close]')) {
        const d = t.closest('dialog')
        d?.querySelector('video')?.pause()
        d?.close()
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <main className="page_main">
      <section className="project_hero_wrap u-section">
        <div className="project_hero_contain u-container">
          <div className="project_hero_bg_wrap">
            <img src={`${CDN}/6a06b338579f41d448bcc23a_project-hero.avif`} loading="lazy" alt="Two mountain bikers riding a forest trail, one performing a wheelie on a dirt path with trees around." sizes="(max-width: 1920px) 100vw, 1920px" srcSet={srcSet(`${CDN}/6a06b338579f41d448bcc23a_project-hero`, 'avif', [500, 800, 1080, 1600, 2000, 2600], 2880)} className="u-cover" />
            <div className="hero_bg_overlay">
              <img src={`${CDN}/6a0196a62884cff5bf3ce82a_Rectangle%2013.png`} loading="lazy" alt="Man in a suit speaking and gesturing with hands in a bright office space." sizes="(max-width: 1920px) 100vw, 1920px" srcSet={`${CDN}/6a0196a62884cff5bf3ce82a_Rectangle%2013-p-500.avif 500w, ${CDN}/6a0196a62884cff5bf3ce82a_Rectangle%2013-p-800.avif 800w, ${CDN}/6a0196a62884cff5bf3ce82a_Rectangle%2013-p-1080.png 1080w, ${CDN}/6a0196a62884cff5bf3ce82a_Rectangle%2013.png 1440w`} className="u-cover" />
            </div>
            <div className="hero_bg_texture">
              <img src={`${CDN}/6a0196f662a60379cd3fce15_texture.avif`} loading="lazy" alt="Black and white pixelated abstract pattern with grid and dot texture over a light background." sizes="(max-width: 1920px) 100vw, 1920px" srcSet={`${CDN}/6a0196f662a60379cd3fce15_texture-p-500.png 500w, ${CDN}/6a0196f662a60379cd3fce15_texture-p-800.png 800w, ${CDN}/6a0196f662a60379cd3fce15_texture-p-1080.png 1080w, ${CDN}/6a0196f662a60379cd3fce15_texture.avif 1440w`} className="u-cover" />
            </div>
            <div className="hero_bg_blur_wrap">
              <div className="progressive-blur">
                {[1, 2, 3, 4, 5].map((n) => <div key={n} className={`progressive-blur__layer is--${n}`} />)}
              </div>
            </div>
            <div className="project_hero_bg_gradient" />
          </div>
          <div className="project_hero_layout">
            <div className="project_hero_head_wrap">
              <h1 className="project_hero_heading u-text-style-display u-mix-blend-difference">recent <br />work</h1>
              <div data-number="60" className="c-paragraph w-richtext u-rich-text u-color-faded u-secondary-family u-line-height-2 u-letter-spacing-loose-2">
                <p>some of our favourite recent projects</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero_overlay">
          <img src={`${CDN}/6a326684e20ccff14d1f110b_615341e4ea439979f5325bf20556ac98_texture.avif`} loading="eager" sizes="(max-width: 2880px) 100vw, 2880px" srcSet={`${CDN}/6a326684e20ccff14d1f110b_615341e4ea439979f5325bf20556ac98_texture-p-500.avif 500w, ${CDN}/6a326684e20ccff14d1f110b_615341e4ea439979f5325bf20556ac98_texture-p-800.png 800w, ${CDN}/6a326684e20ccff14d1f110b_615341e4ea439979f5325bf20556ac98_texture-p-1080.avif 1080w, ${CDN}/6a326684e20ccff14d1f110b_615341e4ea439979f5325bf20556ac98_texture-p-1600.avif 1600w, ${CDN}/6a326684e20ccff14d1f110b_615341e4ea439979f5325bf20556ac98_texture.avif 2880w`} alt="" className="hero_overlay-img" />
        </div>
      </section>
      <section className="projects_wrap u-section">
        <div className="u-embed-css w-embed" />
        <div className="projects_contain u-container">
          <div className="projects_layout">
            <div className="projects_list_wrap w-dyn-list">
              <div data-masonry-list="" role="list" className="projects_list w-dyn-items">
                {PROJECTS.map((p) => <ProjectItem key={p.slug} p={p} />)}
              </div>
            </div>
          </div>
        </div>
        <div className="u-embed-js w-embed w-script" />
      </section>
    </main>
  )
}

export default GalleryPage
