// Los SVG del sitio, en linea. Se usan por nombre: <Icon name="pin" />,
// o con <Icon name="check" strokeWidth={3} /> para ajustar el grosor.
//
// NO hay icono de estrella ni de dolar a proposito: esta landing no lleva
// resenas ni precios.

const stroked = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
const filled = { fill: 'currentColor' };

export const ICONS = {
  check: {
    attrs: { ...stroked, strokeWidth: 2.5 },
    body: <polyline points="20 6 9 17 4 12" />,
  },
  arrowRight: {
    attrs: { ...stroked, strokeWidth: 2.5 },
    body: (
      <>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </>
    ),
  },
  pin: {
    attrs: stroked,
    body: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  phone: {
    attrs: stroked,
    body: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  clock: {
    attrs: stroked,
    body: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
  },
  chevronDown: {
    attrs: { ...stroked, strokeWidth: 3 },
    body: <polyline points="6 9 12 15 18 9" />,
  },
  shieldCheck: {
    attrs: stroked,
    body: (
      <>
        <path d="M12 2 4 6v6c0 5 3.4 9.4 8 10 4.6-.6 8-5 8-10V6l-8-4z" />
        <polyline points="9 12 11 14 15 10" />
      </>
    ),
  },
  opener: {
    attrs: stroked,
    body: (
      <>
        <rect x="2" y="7" width="20" height="12" rx="2" />
        <path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
        <circle cx="12" cy="13" r="2" />
      </>
    ),
  },
  doorHouse: {
    attrs: stroked,
    body: (
      <>
        <path d="M3 21V8l9-5 9 5v13z" />
        <line x1="3" y1="13" x2="21" y2="13" />
        <line x1="3" y1="17" x2="21" y2="17" />
      </>
    ),
  },
  bolt: {
    attrs: stroked,
    body: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  },
  mail: {
    attrs: stroked,
    body: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 14 21 7" />
      </>
    ),
  },
  mailSquare: {
    attrs: stroked,
    body: (
      <>
        <path d="M4 4h16v16H4z" />
        <polyline points="4 6 12 13 20 6" />
      </>
    ),
  },
  wrench: {
    attrs: stroked,
    body: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
  },
  grid: {
    attrs: stroked,
    body: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
        <path d="M7 4v16M17 4v16" />
      </>
    ),
  },
  truck: {
    attrs: stroked,
    body: (
      <>
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </>
    ),
  },
  trophy: {
    attrs: stroked,
    body: (
      <>
        <circle cx="12" cy="8" r="6" />
        <path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" />
      </>
    ),
  },
  gear: {
    attrs: stroked,
    body: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6h.09A1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </>
    ),
  },
  shieldBar: {
    attrs: stroked,
    body: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12h6" />
      </>
    ),
  },
  externalLink: {
    attrs: stroked,
    body: (
      <>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </>
    ),
  },
  facebook: {
    attrs: filled,
    body: <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />,
  },
  instagram: {
    attrs: { fill: 'none', stroke: 'currentColor', strokeWidth: 2 },
    body: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  x: {
    attrs: filled,
    body: <path d="M17.5 3h3l-6.6 7.6L21.8 21h-5.9l-4.3-5.6L6.4 21H3.3l7-8L2.6 3h6l3.9 5.2L17.5 3z" />,
  },
  // Calcado del logo generado (assets/marca/onyx-simbolo.png): el mismo chevron
  // y los mismos tres listones, medidos sobre el original. Va en vectorial y no
  // como PNG porque se pinta a 23px dentro de un circulo y porque asi hereda el
  // color del contenedor: dorado sobre el circulo negro de la cabecera, negro
  // sobre el circulo dorado del pie.
  logoOnyx: {
    attrs: filled,
    body: (
      <>
        <path d="M11.93 2.49 22.85 9.03v2.37L11.93 5.16 1 11.4V9.03z" />
        <path d="M2.49 10.51h2.08v10.93H2.49zM19.28 10.51h2.08v10.93h-2.08z" />
        <path d="M5.61 11.11h12.63v2.45H5.61zM5.61 15.05h12.63v2.45H5.61zM5.61 18.99h12.63v2.45H5.61z" />
      </>
    ),
  },
  navigation: {
    attrs: stroked,
    body: <polygon points="3 11 22 2 13 21 11 13 3 11" />,
  },
  shieldPlain: {
    attrs: stroked,
    body: <path d="M12 2 4 6v6c0 5 3.4 9.4 8 10 4.6-.6 8-5 8-10V6l-8-4z" />,
  },
  timer: {
    attrs: stroked,
    body: (
      <>
        <line x1="10" y1="2" x2="14" y2="2" />
        <circle cx="12" cy="14" r="8" />
        <polyline points="12 10 12 14 15 15" />
      </>
    ),
  },
  calendar: {
    attrs: stroked,
    body: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="8" y1="3" x2="8" y2="7" />
        <line x1="16" y1="3" x2="16" y2="7" />
      </>
    ),
  },
  doc: {
    attrs: stroked,
    body: (
      <>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <polyline points="14 3 14 8 19 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="13" y2="17" />
      </>
    ),
  },
  menu: {
    attrs: stroked,
    body: (
      <>
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </>
    ),
  },
};

export function Icon({ name, className, strokeWidth, ...rest }) {
  const icon = ICONS[name];
  if (!icon) return null;
  const attrs = { ...icon.attrs };
  if (strokeWidth != null) attrs.strokeWidth = strokeWidth;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...attrs} {...rest}>
      {icon.body}
    </svg>
  );
}

export default Icon;
