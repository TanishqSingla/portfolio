import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <nav class=''>
        <ul class='flex'>
          <li><a href=""></a>About</li>
          <li><a href=""></a>Blog</li>
          <li><a href=""></a>Contact</li>
        </ul>
      </nav>
    </header>
  );
});
