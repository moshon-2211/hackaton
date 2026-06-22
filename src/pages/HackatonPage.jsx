import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './hackaton.css';

const LOGO_ILMHONA = '/img/logo/ilmhonaa.png';

const day1 = [
  { time: '8:30 – 9:00',   event: 'Регистрация команд',                   detail: '',                                                                          type: 'normal'    },
  { time: '9:00 – 9:30',   event: 'Церемония открытия',                    detail: '',                                                                          type: 'highlight' },
  { time: '9:30 – 10:00',  event: 'Брифинг по челленджам',                 detail: 'Презентация 3 SDG-треков и правил хакатона',                                type: 'normal'    },
  { time: '10:00 – 10:30', event: 'Воркшоп: Определение проблемы',         detail: 'Design thinking — карта первопричин',                                       type: 'normal'    },
  { time: '10:30 – 11:00', event: 'Формирование команд',                   detail: 'Распределение кейсов по командам',                                          type: 'normal'    },
  { time: '11:00 – 12:00', event: 'Работа с менторами',                    detail: 'Ротация менторов по командам',                                              type: 'normal'    },
  { time: '12:00 – 13:00', event: 'Обед',                                  detail: '',                                                                          type: 'break'     },
  { time: '13:00 – 15:30', event: 'Идеация и разработка решений',          detail: 'Брейнсторм → ранжирование → первичный прототип',                           type: 'normal'    },
  { time: '15:30 – 16:00', event: 'Кофе-брейк',                            detail: '',                                                                          type: 'break'     },
  { time: '16:00 – 17:30', event: 'Промежуточная презентация + доработка', detail: '3-мин. концепт-питч каждой команды внутри группы, обратная связь ментора', type: 'normal'    },
  { time: '17:30 – 17:40', event: 'Итоги Дня 1',                           detail: '',                                                                          type: 'highlight' },
];

const day2 = [
  { time: '9:00 – 9:30',   event: 'Открытие и чекин',              detail: 'Резюме Дня 1',                                                                      type: 'highlight' },
  { time: '9:30 – 11:00',  event: 'Разработка + ротация менторов', detail: 'Работа над прототипами',                                                            type: 'normal'    },
  { time: '11:00 – 12:30', event: 'Воркшоп: Питчинг',              detail: 'Сторителлинг, визуализация данных, дизайн питч-деков, работа с вопросами жюри',    type: 'normal'    },
  { time: '12:00 – 13:00', event: 'Обед + финальная подготовка',   detail: 'Финализация материалов, питч-деков, тезисов',                                      type: 'break'     },
  { time: '13:00 – 14:00', event: 'Презентации жюри',              detail: '6 команд × 5 мин + 2 мин Q&A',                                                     type: 'highlight' },
  { time: '14:00 – 14:30', event: 'Кофе-брейк',                    detail: 'Совещание жюри',                                                                    type: 'break'     },
  { time: '14:30 – 14:50', event: 'Объявление финалистов',         detail: '',                                                                                  type: 'highlight' },
  { time: '15:00 – 16:00', event: 'Нетворкинг-приём',              detail: '',                                                                                  type: 'normal'    },
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
  { num: '06', title: 'Design Thinking',  desc: 'Воркшопы по дизайн-мышлению, питчингу и визуализации данных.' },
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

function FreedomITHubIcon() {
  return (
    <svg viewBox="0 0 52 64" xmlns="http://www.w3.org/2000/svg" className="hk-fih-icon">
      <path d="M6,2 L6,28 Q46,28 46,15 Q46,2 6,2 Z" fill="white" />
      <path d="M6,36 L6,58 Q40,58 40,47 Q40,36 6,36 Z" fill="white" />
    </svg>
  );
}

export default function HackatonPage() {
  const [activeDay, setActiveDay] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="hk-root">

      {/* ── NAV ── */}
      <nav className="hk-nav">
        <Link to="/" className="hk-nav-logo">
          <img src={LOGO_ILMHONA} alt="ilmhona" />
          <span className="hk-nav-badge">Хакатон</span>
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

      {/* ── MOBILE MENU ── */}
      <div className={'hk-mobile-menu' + (menuOpen ? ' open' : '')}>
        <a href="#tracks" onClick={() => setMenuOpen(false)}>Треки</a>
        <a href="#program" onClick={() => setMenuOpen(false)}>Программа</a>
        <a href="#why" onClick={() => setMenuOpen(false)}>Почему участвовать</a>
      </div>

      {/* ── HERO ── */}
      <section className="hk-hero">
        <p className="hk-hero-eyebrow">Душанбе · 25–26 июня 2026 · Freedom IT Hub</p>

        <div className="hk-title-oval">
          <h1 className="hk-hero-title">
            Хакатон<br />Инноваций
          </h1>
        </div>

        <div className="hk-sticker">
          <span className="hk-sticker-main">РЕШЕНИЯ МОЛОДЁЖИ</span>
          <span className="hk-sticker-sub">За равенство, занятость и искоренение бедности</span>
        </div>

        <div className="hk-meta-row">
          <div className="hk-meta-item">
            <span className="hk-meta-label">Дата</span>
            <span className="hk-meta-value">25–26 июня</span>
          </div>
          <div className="hk-meta-item">
            <span className="hk-meta-label">Место</span>
            <span className="hk-meta-value">Freedom IT Hub</span>
          </div>
          <div className="hk-meta-item">
            <span className="hk-meta-label">Формат</span>
            <span className="hk-meta-value">2 дня · 3 трека</span>
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
              <div className="hk-partner-acted ">
                <span className="hk-partner-acted-main">acted</span>
                <span className="hk-partner-acted-sub">Zero Exclusion · Carbon · Poverty</span>
              </div>
            </div>

            <div className="hk-partners-sep" />

            <div className="hk-partner-card">
              <div className="hk-partner-fih">
                <FreedomITHubIcon />
                <span className="hk-partner-fih-text">freedom it hub</span>
              </div>
            </div>

            <div className="hk-partners-sep" />

            <div className="hk-partner-card">
              <img src={LOGO_ILMHONA} alt="ilmhona" className="hk-partner-ilm-img" />
            </div>

          </div>
        </div>
      </section>

      <hr className="hk-divider" />

      {/* ── SDG TRACKS ── */}
      <section className="hk-tracks-bg" id="tracks">
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <div className="hk-section">
            <p className="hk-section-eyebrow">3 SDG-трека</p>
            <h2 className="hk-section-title">Выберите свою тему</h2>
            <p className="hk-section-sub">
              Каждая команда работает над одним из трёх треков Целей устойчивого развития ООН.
            </p>
            <div className="hk-tracks-grid">
              {tracks.map((t, i) => (
                <div className="hk-track-card" key={i}>
                  <h3 className="hk-track-title">{t.title}</h3>
                  <p className="hk-track-desc">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="hk-divider" />

      {/* ── PROGRAM ── */}
      <section className="hk-program-bg" id="program">
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <div className="hk-section">
            <p className="hk-section-eyebrow">2 дня интенсива</p>
            <h2 className="hk-section-title">Программа хакатона</h2>
            <p className="hk-section-sub">
              Воркшопы, ментор-сессии и финальные питчи перед жюри.
            </p>
            <div className="hk-day-tabs">
              <button
                className={'hk-day-tab' + (activeDay === 1 ? ' active' : '')}
                onClick={() => setActiveDay(1)}
              >
                День 1 · 25 июня
              </button>
              <button
                className={'hk-day-tab' + (activeDay === 2 ? ' active' : '')}
                onClick={() => setActiveDay(2)}
              >
                День 2 · 26 июня
              </button>
            </div>
            <ProgramTable items={activeDay === 1 ? day1 : day2} />
          </div>
        </div>
      </section>

      <hr className="hk-divider" />

      {/* ── WHY JOIN ── */}
      <section className="hk-why-bg" id="why">
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <div className="hk-section">
            <p className="hk-section-eyebrow">Зачем участвовать</p>
            <h2 className="hk-section-title">Что вы получите</h2>
            <p className="hk-section-sub">
              Два дня интенсивного обучения, нетворкинга и профессионального роста.
            </p>
            <div className="hk-why-grid">
              {whyJoin.map((item, i) => (
                <div className="hk-why-card" key={i}>
                  <div className="hk-why-num">{item.num}</div>
                  <div className="hk-why-title">{item.title}</div>
                  <div className="hk-why-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="hk-footer">
        <span className="hk-footer-copy">© 2026 Ilmhona · Хакатон Инноваций · Душанбе</span>
        <div className="hk-footer-links">
          <Link to="/">Ilmhona.org</Link>
          <a href="#tracks">Треки</a>
          <a href="#program">Программа</a>
        </div>
      </footer>

    </div>
  );
}
