import { useEffect, useState } from 'react';
import NavLink from '../../atoms/NavLink';

interface ICategories {
  id: string;
  title: string;
  url: string;
}

function MainNav(): JSX.Element {
  const [categories, setCategories] = useState<ICategories[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/categories').then(response => {
      response.json().then(data => {
        setCategories(data);
      });
    });
  }, []);

  return (
    <nav>
      <ul>
        {categories.map(categorie => {
          return (
            <li key={categorie.id}>
              <NavLink href={categorie.url}>{categorie.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MainNav;
