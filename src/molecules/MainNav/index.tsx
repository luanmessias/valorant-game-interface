import NavLink from '@/atoms/NavLink';
import ValorantGameLink from '@/atoms/ValorantGameLink';
import SettingsLink from '@/atoms/SettingsLink';
import ApiData from '@/hooks/SwrFetchHook';
import ClockIconSvg from '@/svg/clock-icon.svg';
import MainNavCenterSvg from '@/svg/main-nav-center.svg';
import ValorantPointsSvg from '@/svg/valorant-points.svg';
import RadiantPointsSvg from '@/svg/radiant-points.svg';
import { Container, SvgPlay } from './Styles';

export default function MainNav(): JSX.Element {
  const { data, isLoading, isError } = ApiData('categories');

  if (isLoading) return <h1>carregando</h1>;
  if (isError) return <h1>deu ruim</h1>;

  return (
    <Container>
      <ul>
        <li className="website">
          <ValorantGameLink />
        </li>

        <li className="clock">
          <ClockIconSvg width="18" height="18" />
          <span>1/2</span>
        </li>

        {data.map(category => {
          return (
            <li key={category.id} className={category.id}>
              <NavLink href={category.url}>{category.title}</NavLink>

              {category.id === 'play' ? (
                <SvgPlay>
                  <MainNavCenterSvg width="354" height="55" />
                </SvgPlay>
              ) : (
                ''
              )}
            </li>
          );
        })}

        <li className="points">
          <div>
            <ValorantPointsSvg width="18" height="18" />
            <span>135</span>
          </div>
          <div>
            <RadiantPointsSvg width="18" height="18" />
            <span>60</span>
          </div>
        </li>

        <li className="settings">
          <SettingsLink />
        </li>
      </ul>
    </Container>
  );
}
