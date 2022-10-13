import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <nav>
        <ul className=''>
          <li>About</li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
});
