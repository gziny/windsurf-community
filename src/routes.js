import { Route, IndexRoute } from 'react-router';
import h from 'react-hyperscript';
import { App } from './app/components/app/app';
import { HomePage } from './app/components/home/homePage';
import { ReportFormContainer } from './app/components/report/reportFormContainer';
import { StatisticsContainer } from './app/components/statistics/statisticsContainer';
import { GalleryContainer } from './app/components/gallery/galleryContainer';
import { AdminContainer } from './app/components/admin/adminContainer';
import { AboutContainer } from './app/components/about/aboutContainer';

export default (
  h(Route, { path: '/', component: App }, [
    h(IndexRoute, { component: HomePage }),
    h(Route, { path: 'report', component: ReportFormContainer }),
    h(Route, { path: 'statistics', component: StatisticsContainer }),
    h(Route, { path: 'gallery', component: GalleryContainer }),
    h(Route, { path: 'admin', component: AdminContainer }),
    h(Route, { path: 'about', component: AboutContainer }),
  ])
);
