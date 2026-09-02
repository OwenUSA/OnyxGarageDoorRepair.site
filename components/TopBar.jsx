import { Icon } from './Icons';
import { site, topbarNotes } from '../data/site';

const SOCIAL = ['facebook', 'instagram', 'x'];

export default function TopBar() {
  return (
    <div className="topbar" id="top">
      <div className="container topbar__inner">
        <ul className="topbar__notes">
          {topbarNotes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>

        <div className="topbar__right">
          <a className="topbar__phone" href={site.phone.href}>
            <Icon name="phone" />
            {site.phone.display}
          </a>
          <div className="topbar__social">
            {SOCIAL.map((n) => (
              <a key={n} href="#" aria-label={n === 'x' ? 'X' : n[0].toUpperCase() + n.slice(1)}>
                <Icon name={n} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
