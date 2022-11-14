import Link from 'next/link';
import { InstagramVetusta } from '../InstagramVetusta';
import { TwitterVetusta } from '../TwitterVetusta';

export function Footer() {
  return (
    <footer>
      <section>
        <article>
          <header>
            <h4>Mapa del sitio</h4>
          </header>
          <main>
            <nav>
              <ul>
                <li>
                  <Link scroll={false} href="/" title="Página principal">
                    Página Principal
                  </Link>
                </li>
                <li>
                  <Link
                    scroll={false}
                    href="/socios"
                    title="Página para registrarse como socio o acceder a tu cuenta de socio"
                  >
                    Socios
                  </Link>
                </li>
                <li>
                  <Link scroll={false} href="/equipos" title="Equipos del club">
                    Equipos
                  </Link>
                </li>
                <li>
                  <Link
                    scroll={false}
                    href="/practica-balonmano"
                    title="Practica balonmano con el Club Balonmano Vetusta de Oviedo"
                  >
                    Practica balonmano en Oviedo
                  </Link>
                </li>
                <li>
                  <Link
                    scroll={false}
                    href="/quienes-somos"
                    title="Quienes somos y como llegamos a este momento en el club"
                  >
                    Quienes somos
                  </Link>
                </li>
                <li>
                  <Link
                    scroll={false}
                    href="/aviso-legal"
                    title="Cosas que la ley nos obliga a decir o que esta bien mencionar"
                  >
                    Aviso Legal
                  </Link>
                </li>
              </ul>
            </nav>
          </main>
        </article>
        <article className="social-networks">
          <header>
            <h4>¡Siguenos!</h4>
          </header>
          <main>
            <ul className="social-networks">
              <li>
                <InstagramVetusta text={false} />
              </li>
              <li>
                <TwitterVetusta text={false} />
              </li>
            </ul>
          </main>
        </article>
      </section>

      <section>
        <header>
          <h4>Legal</h4>
        </header>
        <main>
          <summary>
            <p>
              Club Balonmano Vetusta es una entidad deportiva localizada en
              Oviedo con CIF G74174277, puede consultar todos los datos legales
              así como el acuerdo de uso y otros datos legales en la página
              <Link href="/aviso-legal" title="Información legal">
                {' '}
                Aviso Legal, condiciones de uso y política de cookies
              </Link>
              .
            </p>
          </summary>
        </main>
      </section>
    </footer>
  );
}
