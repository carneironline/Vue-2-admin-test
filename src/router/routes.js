import Home from '../shared/components/pages/home/Home'
const Albums = () => System.import('../domain/albums/components/albums/')
const AlbumsNew = () => System.import('../domain/albums/components/new/')

export default [
  { path: '/', name: 'home', title: 'Home', ico: 'home', component: Home, menu: true, props: { contentTitle: 'Home' } },
  { path: '/albums', name: 'albums', title: 'Álbuns', ico: 'album', component: Albums, menu: true, props: { contentTitle: 'Álbuns' } },
  { path: '/albums/new', name: 'albumsCreate', title: 'Novo Álbum', component: AlbumsNew, menu: false, props: { contentTitle: 'Novo Álbum' } },
  { path: '/albums/:id', name: 'albumsUpdate', title: 'Editar Álbum', component: AlbumsNew, menu: false, props: { contentTitle: 'Editar Álbum' } },
  { path: '*', component: Home, menu: false },
]
