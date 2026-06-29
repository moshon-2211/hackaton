import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './hackaton.css';
import euroLogo from './EUpng.png';
import actedLogo from './acted.png';
import swedLogo from './swed.png';
import alifLogo from './alifff.png';

const LOGO_ILMHONA = '/img/logo/ilmhonaa.png';

const program = [
  { time: '12:30 – 13:00', event: 'Регистрация и нетворкинг',               detail: '',                                                                                          type: 'break'     },
  { time: '13:00 – 13:30', event: 'Официальная церемония открытия',          detail: '',                                                                                          type: 'highlight' },
  { time: '13:30 – 14:10', event: 'Youth Asks',                              detail: 'Диалог молодёжи с лидерами перемен',                                                        type: 'normal'    },
  { time: '14:10 – 14:50', event: 'Панельная дискуссия',                     detail: 'ЦУР в действии: данные, цифровые инновации и достойная занятость для устойчивого развития', type: 'normal'    },
  { time: '14:50 – 15:30', event: 'Кофе-брейк и нетворкинг',                detail: '',                                                                                          type: 'break'     },
  { time: '15:30 – 16:10', event: 'Молодёжная панель',                       detail: 'Роль молодёжи в формировании будущего Таджикистана',                                        type: 'normal'    },
  { time: '16:10 – 16:40', event: 'Шоукейс решений финалистов',             detail: 'Презентации команд-финалистов и Q&A',                                                       type: 'normal'    },
  { time: '16:45 – 17:00', event: 'Церемония награждения',                   detail: 'Объявление победителей хакатона и розыгрыша',                                              type: 'highlight' },
  { time: '17:00 – 17:05', event: 'Общее фото',                              detail: '',                                                                                          type: 'normal'    },
  { time: '17:05 – 17:30', event: 'Заключение, нетворкинг',                  detail: 'Заключительное слово ACTED × Ilmhona',                                                     type: 'highlight' },
];

const tracks = [
  {
    color: '#e74c8b',
    title: 'Гендерное равенство',
    desc: 'Решения, устраняющие барьеры для женщин в образовании, занятости и предпринимательстве. Цифровые инструменты, расширяющие возможности и доступность ресурсов.',
  },
  {
    color: '#00d5b5',
    title: 'Занятость молодёжи',
    desc: 'Платформы и инструменты для помощи молодым людям в поиске работы, развитии навыков, создании собственного дела или удалённой карьеры.',
  },
  {
    color: '#f5a623',
    title: 'Искоренение бедности',
    desc: 'Решения, повышающие финансовую грамотность, открывающие доступ к ресурсам и создающие устойчивые источники дохода для уязвимых сообществ.',
  },
];

const whyJoin = [
  { num: '01', title: 'Менторы-практики', desc: 'Работа с опытными наставниками из бизнеса, технологий и социальной сферы.' },
  { num: '02', title: 'Реальные задачи',  desc: 'Вы решаете не учебные кейсы, а реальные социальные проблемы.' },
  { num: '03', title: 'Нетворкинг',       desc: 'Познакомьтесь с единомышленниками, инвесторами и партнёрами.' },
  { num: '04', title: 'Питч перед жюри',  desc: 'Представьте решение профессиональному жюри и получите обратную связь.' },
  { num: '05', title: 'Поддержка ЕС',     desc: 'Мероприятие финансируется Европейским Союзом.' },
  { num: '06', title: 'Data & SDGs',      desc: 'Данные, цифровые инновации и достойная занятость для устойчивого развития.' },
];

function ProgramTable({ items }) {
  return (
    <table className="hk-program-table">
      <tbody>
        {items.map((row, i) => (
          <tr key={i}>
            <td className="hk-program-time">{row.time}</td>
            <td className="hk-program-body">
              <div className={
                'hk-program-event ' +
                (row.type === 'break' ? 'hk-program-break' :
                 row.type === 'highlight' ? 'hk-program-highlight' : '')
              }>
                {row.event}
              </div>
              {row.detail && <div className="hk-program-detail">{row.detail}</div>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function HackatonPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="hk-root">

      {/* ── NAV ── */}
      <nav className="hk-nav">
        <Link to="/" className="hk-nav-logo">
          <img src={LOGO_ILMHONA} alt="ilmhona" />
          <span className="hk-nav-badge">Data Fest</span>
        </Link>
        <div className="hk-nav-links">
          <a href="#tracks">Треки</a>
          <a href="#program">Программа</a>
          <a href="#why">Почему участвовать</a>
        </div>
        <button
          className={'hk-burger' + (menuOpen ? ' open' : '')}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Меню"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={'hk-mobile-menu' + (menuOpen ? ' open' : '')}>
        <a href="#tracks" onClick={() => setMenuOpen(false)}>Треки</a>
        <a href="#program" onClick={() => setMenuOpen(false)}>Программа</a>
        <a href="#why" onClick={() => setMenuOpen(false)}>Почему участвовать</a>
      </div>

      {/* ── HERO ── */}
      <section className="hk-hero hk-hero-fest">
        <p className="hk-hero-eyebrow">Душанбе · 30 июня 2026 · IT Park Tajikistan</p>

        <div className="hk-fest-deco hk-fest-deco-1" />
        <div className="hk-fest-deco hk-fest-deco-2" />
        <div className="hk-fest-deco hk-fest-deco-3" />
        <div className="hk-fest-deco hk-fest-deco-4" />

        <div className="hk-fest-title-wrap">
          <p className="hk-fest-label">3ZERO Data Fest:</p>
          <div className="hk-fest-oval-wrap">
            <h1 className="hk-fest-title">
              <span className="hk-fest-sdgs">SDGs</span>
              <span className="hk-fest-unlocked-wrap">
                <span className="hk-fest-oval-bg" />
                <span className="hk-fest-unlocked">Unlocked</span>
              </span>
            </h1>
          </div>
        </div>

        <div className="hk-meta-row">
          <div className="hk-meta-item">
            <span className="hk-meta-label">Дата</span>
            <span className="hk-meta-value">30 июня</span>
          </div>
          <div className="hk-meta-item">
            <span className="hk-meta-label">Место</span>
            <span className="hk-meta-value">IT Park Tajikistan</span>
          </div>
          <div className="hk-meta-item">
            <span className="hk-meta-label">Начало</span>
            <span className="hk-meta-value">12:30</span>
          </div>
        </div>

        <a className="hk-btn-outline" href="#program">
          Смотреть программу
        </a>
      </section>

      {/* ── PARTNERS ── */}
      <section className="hk-partners-section">
        <div className="hk-partners-inner">
          <p className="hk-partners-center-text">Партнеры форума</p>
          <div className="hk-partners-row">

            <div className="hk-partner-card">
              <img src={swedLogo} alt="SWED" style={{ height: '80px', width: 'auto', objectFit: 'contain', filter: 'invert(1) hue-rotate(180deg)', opacity: 0.9 }} />
            </div>

            <div className="hk-partners-sep" />

            <div className="hk-partner-card">
              <img src={actedLogo} alt="ACTED" style={{ height: '80px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
            </div>

            <div className="hk-partners-sep" />

            <div className="hk-partner-card">
              <img src="/img/logo/image.png" alt="Bactria Cultural Centre" style={{ height: '60px', width: 'auto', opacity: 0.9 }} />
            </div>

            <div className="hk-partners-sep" />

            <div className="hk-partner-card">
              <img src="/img/logo/itpark.jpeg" alt="IT Park" style={{ height: '80px', width: 'auto', mixBlendMode: 'screen' }} />
            </div>

            <div className="hk-partners-sep" />

            <div className="hk-partner-card">
              <img src={alifLogo} alt="Alif Academy" style={{ height: '50px', width: 'auto', objectFit: 'contain', opacity: 0.9 }} />
            </div>

            <div className="hk-partners-sep" />

            <div className="hk-partner-card">
              <img src={LOGO_ILMHONA} alt="ilmhona" className="hk-partner-ilm-img" style={{ height: '140px' }} />
            </div>

            <div className="hk-partners-sep" />

            <div className="hk-partner-card">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                <img src={euroLogo} alt="European Union" style={{ height: '60px', filter: 'none', opacity: 1 }} />
                <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                  Funded by the European Union
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr className="hk-divider" />

      <section className="hk-program-bg" id="program">
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <div className="hk-section">
            <p className="hk-section-eyebrow">30 июня · IT Park Tajikistan</p>
            <h2 className="hk-section-title">Программа фестиваля</h2>
            <p className="hk-section-sub">
              Панели, воркшопы, шоукейс финалистов и церемония награждения.
            </p>
            <ProgramTable items={program} />
          </div>
        </div>
      </section>

      <footer className="hk-footer">
        <span className="hk-footer-copy">© 2026 Ilmhona · 3ZERO Data Fest: SDGs Unlocked · Душанбе</span>
        <div className="hk-footer-links">
          <Link to="/">Ilmhona.org</Link>
          <a href="#tracks">Треки</a>
          <a href="#program">Программа</a>
        </div>
      </footer>

    </div>
  );
}
