# Interneta veikala datu uzskaites automatizētā sistēma

## Projekta apraksts
Relativi vienkārša interneta veikala sistēma līdzīgi Magento 2, bet mazāka, ir admin, kur lietotājs (administrators) var veidot, rediģet, dzēst dažādus datus, un apskatīt kopsavilkumu, un kur ir storefront, kur pircējs (klients) var meklēt, pievienot produktu grozām, veidot savu akauntu un veikt pasutījumus.

## Izmantotās tehnoloģijas
Projektā tiek izmantots:
- JavaScript
- JSS
- React
- Material UI
- React Admin
- Node
- Express
- GraphQL
- PostgreSQL

## Izmantotie avoti
[React dokumentācija](https://reactjs.org/docs/getting-started.html)

[Material UI dokumentācija](https://material-ui.com/)

[React Admin dokumentācija](https://marmelab.com/react-admin/Readme.html)

[GraphQL dokumentācija](https://graphql.org/learn/)

[PostgreSQL dokumentācija](https://www.postgresql.org/docs/)

[React Admin Login](https://github.com/marmelab/react-admin/blob/master/examples/demo/src/layout/Login.tsx) - tika ņemts no šī faila, lai realizētu administrātora autorizāciju.

[React Admin SubMenu](https://github.com/marmelab/react-admin/blob/master/examples/demo/src/layout/SubMenu.tsx) - tika ņemts kods, lai izprastu kā strādā, un daļēji arī tiek izmanots ar modifkācijām.

## Uzstādīšanas instrukcijas
1. Ir nepieciešams strādājošs Node un PostgreSQL setups
2. Konfigurācija atrodas /backend/src/base/Config.js failā
4. git clone https://github.com/rvtprog-kval-21/d41-DenissStrombergs-InternetaVeikals.git
5. cd d41-DenissStrombergs-InternetaVeikals
6. cd backend
7. npm start
8. Atvert jaunu konsoles logu d41-DenissStrombergs-InternetaVeikals direktorijā
9. cd frontend
10. npm start
