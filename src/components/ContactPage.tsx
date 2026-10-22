import React, { useState } from 'react'
import '../stylesheets/contact.css'

const CDN = 'https://cdn.prod.website-files.com/6a017aab5e6bd1ba8a0e742e'
const HERO = `${CDN}/6a040d54a2255cb3dc05012a_contact-hero`
const TEXTURE = `${CDN}/6a326684e20ccff14d1f110b_615341e4ea439979f5325bf20556ac98_texture`

function Arrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className="u-svg">
      <path d="M4.16663 10H15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M10 4.16602L15.8333 9.99935L10 15.8327" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  )
}

function ItemHeading({ children }: { children: React.ReactNode }) {
  return (
    <div data-number="20" className="c-heading w-variant-74a3180a-e505-b452-032f-599c8e557249 w-richtext u-text-trim-on u-weight-bold u-line-height-2 u-letter-spacing-tight-4">
      <h2>{children}</h2>
    </div>
  )
}

function TextLink({ href, text }: { href: string; text: string }) {
  return (
    <div data-button=" " data-trigger="hover focus" data-chars-stagger-wrapper="" className="button_link_wrap">
      <div className="clickable_wrap u-cover-absolute">
        <a aria-label="" href={href} className="clickable_link w-inline-block"></a>
      </div>
      <div className="button_link_element">
        <div data-chars-stagger="" aria-hidden="true" className="button_link_text">{text}</div>
        <div className="button_link_line"></div>
      </div>
    </div>
  )
}

function Field({ label, hidden, children }: { label: string; hidden?: boolean; children: React.ReactNode }) {
  return (
    <label data-trigger="focus" className="form_label_wrap">
      <span className={`form_main_label_text${hidden ? ' w-variant-7a7e1430-cb84-4e7e-fddc-4d66784e148c' : ''} u-text-trim-on`}>{label}</span>
      {children}
      <span data-input-form="error-msg" className="form_main_label_error">Error</span>
    </label>
  )
}

export default function ContactPage() {
  const [done, setDone] = useState(false)
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setDone(true)
  }

  return (
    <main className="page_main">
      <section className="contact_wrap u-section">
        <div className="contact_contain u-container">
          <div className="contact_bg_wrap">
            <img
              loading="lazy"
              sizes="100vw"
              srcSet={`${HERO}-p-500.avif 500w, ${HERO}-p-800.avif 800w, ${HERO}-p-1080.avif 1080w, ${HERO}.avif 2880w`}
              alt="Person riding a bicycle in a dark forest with tree branches in the foreground."
              className="contact_bg_img"
              src={`${HERO}.avif`}
            />
            <div className="contact_bg_overlay"></div>
            <div className="contact_bg_blur">
              <div className="progressive-blur">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div key={n} className={`progressive-blur__layer is--${n}`}></div>
                ))}
              </div>
            </div>
          </div>
          <div className="contact_layout">
            <div data-number="20" className="c-heading w-variant-41c609dc-9c80-9eef-75df-03bf0eea00b4 w-richtext u-text-trim-on u-weight-bold u-mix-blend-difference">
              <h1>Shall we begin?</h1>
            </div>
            <div className="contact_line_wrap">
              <div data-element-line="horizontal" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} className="g_line"></div>
            </div>
            <div className="contact_grid_wrap u-grid-custom">
              <div className="contact_col-1">
                <div className="contact_item">
                  <ItemHeading>Mobile</ItemHeading>
                  <TextLink href="tel:+918818881005" text="+ 91 881 888 1005" />
                </div>
                <div className="contact_item">
                  <ItemHeading>Our email</ItemHeading>
                  <TextLink href="mailto:skypcreativestudio@gmail.com" text="skypcreativestudio@gmail.com" />
                </div>
                <div className="contact_item">
                  <ItemHeading>Adress</ItemHeading>
                  <div data-number="20" className="c-paragraph w-variant-fdb8e663-01e0-aae6-13eb-e6dfca16b689 w-richtext u-rich-text u-weight-medium u-line-height-6 u-letter-spacing-loose-2 u-color-faded u-max-width-none-mobile">
                    <p>SKYP studio<br />102-kalindi square behind lotus electronics mr9 indore,<br />India</p>
                  </div>
                </div>
              </div>
              <div className="contact_col-2">
                <div className="contact_form_block w-form">
                  <form
                    id="wf-form-Contact-Form"
                    name="wf-form-Contact-Form"
                    data-name="Contact Form"
                    method="get"
                    className="contact_form_wrap"
                    aria-label="Contact Form"
                    onSubmit={onSubmit}
                    style={done ? { display: 'none' } : undefined}
                  >
                    <div className="contact_form_col u-grid-autofill">
                      <Field label="Name">
                        <input type="text" name="First name" placeholder="First name" required inputMode="text" className="form_main_field" defaultValue="" />
                      </Field>
                      <Field label="Name" hidden>
                        <input type="text" name="Last name" placeholder="Last name" required inputMode="text" className="form_main_field" defaultValue="" />
                      </Field>
                    </div>
                    <Field label="E-Mail">
                      <input type="email" name="E-Mail" placeholder="Your email address" required inputMode="text" className="form_main_field" defaultValue="" />
                    </Field>
                    <Field label="Project Description">
                      <textarea name="Project Description" placeholder="Project Description" required className="form_main_field is-textarea" defaultValue=""></textarea>
                    </Field>
                    <div data-button=" " data-trigger="hover focus" data-hover-btn-40="true" className="button_main_wrap">
                      <div data-button-icon="left" className="button_main_icon_wrap">
                        <div className="button_main_icon"><Arrow /></div>
                      </div>
                      <div className="button_main_element">
                        <div aria-hidden="true" className="button_main_text">PROJECT INQUIRY</div>
                      </div>
                      <div className="clickable_wrap u-cover-absolute">
                        <button type="submit" aria-label="PROJECT INQUIRY" className="clickable_btn"></button>
                      </div>
                      <div data-button-icon="right" className="button_main_icon_wrap">
                        <div className="button_main_icon"><Arrow /></div>
                      </div>
                    </div>
                  </form>
                  <div className="contact_form_success_wrap w-form-done" tabIndex={-1} role="region" aria-label="Contact Form success" style={done ? { display: 'block' } : undefined}>
                    <div className="contact_form_success_text_wrap">
                      <div className="contact_form_success_text u-text-style-large">Thank you! We'll get back to you soon.</div>
                    </div>
                  </div>
                  <div className="form_main_error_wrap w-form-fail" tabIndex={-1} role="region" aria-label="Contact Form failure">
                    <div className="form_main_error_text">Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero_overlay">
          <img
            loading="eager"
            sizes="(max-width: 2880px) 100vw, 2880px"
            srcSet={`${TEXTURE}-p-500.avif 500w, ${TEXTURE}-p-800.png 800w, ${TEXTURE}-p-1080.avif 1080w, ${TEXTURE}-p-1600.avif 1600w, ${TEXTURE}.avif 2880w`}
            alt=""
            className="hero_overlay-img"
            src={`${TEXTURE}.avif`}
          />
        </div>
      </section>
    </main>
  )
}
