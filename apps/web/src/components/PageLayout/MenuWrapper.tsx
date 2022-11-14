import {
  AccountSearch,
  CardAccount,
  Handball,
  HandShake,
  Home,
  MultiAccount,
  Pencil,
  Store,
} from "@balonmanovetusta/ui";
import Menu from "components/Menu";

// const equiposSubmenuLegacy = [
//   {
//     label: "Primera Nacional",
//     href: "10-primera-nacional",
//     title: "Equipo de la liga Primera Nacional masculina",
//   },
//   {
//     label: "Senior Territorial",
//     href: "20-segunda-nacional-senior-territorial",
//     title:
//       "Equipo de la liga Segunda Nacional masculina o liga territorial masculina de Asturias",
//   },
//   {
//     label: "Juvenil maculino",
//     href: "30-juvenil-masculino",
//     title: "Equipo de la liga Juvenil masculina de Asturias",
//   },
//   {
//     label: "Cadete masculino",
//     href: "40-cadete-masculino",
//     title: "Equipo de la liga Cadete masculina de Asturias",
//   },
//   {
//     label: "Infantil mixto",
//     href: "50-infantil-mixto",
//     title:
//       "Equipo de la liga Infantil masculina de Asturias en el que contamos con niños y niñas",
//   },
//   {
//     label: "Escuelas deportivas",
//     href: "100-escuelas-deportivas",
//     title:
//       "Equipos de niños y niñas comprendidos entre los 7 y los 11 años de las categorías de Benjamínes a Alevines de los distintos colegios de Oviedo",
//   },
// ];

export default function MenuWrapper({ ...props }) {
  return (
    <Menu
      id="menu"
      tabIndex={1}
      items={[
        {
          Icon: () => <Home title="Ir a la página principal" />,
          label: "Inicio",
          href: "/",
          title: "Página principal",
        },
        {
          Icon: () => (
            <AccountSearch title="Accede a la página con información acerca de quien está detrás de Balonmano Vetusta" />
          ),
          label: "Quiénes somos",
          href: "quienes-somos",
          title: "Información acerca del club",
        },
        {
          Icon: () => (
            <CardAccount title="Accede a la página sobre nuestros socios" />
          ),
          label: "Socios",
          href: "socios",
          title: "Apartado para socios y miembros del club",
        },
        {
          Icon: () => (
            <Handball title="Acceso a información de dónde practicar balonmano" />
          ),
          label: "Practica balonmano",
          href: "practica-balonmano",
          title:
            "Cómo, cuándo y dónde venir a practicar balonmano con nosotros",
        },
        {
          Icon: () => (
            <MultiAccount title="Acceso a información sobre nuestros equipos de balonmano" />
          ),
          label: "Equipos",
          href: "equipos",
          title: "Equipos del club",
        },
        {
          Icon: () => (
            <HandShake title="Accede a la página con información sobre como colaborar con el club" />
          ),
          label: "Colabora",
          href: "colabora",
          title:
            "Como colaborar de forma directa e indirecta con el Club Balonmano Vetusta",
        },
        {
          Icon: () => (
            <Store title="Acceso a la tienda del Club Balonmano Vetusta" />
          ),
          label: "Tienda",
          href: "tienda",
          title:
            "Tienda de entradas, socios y artículos del Club Balonmano Vetusta",
        },
        {
          Icon: () => (
            <Pencil title="Acceso a los datos y página de contacto" />
          ),
          label: "Contacto",
          href: "https://forms.gle/hoFNc4ijVAqUxv7P9",
          title: "Contacta con el club de forma personalizada",
          rel: "nofollow noreferrer noopener noindex",
        },
      ]}
      {...props}
    />
  );
}
