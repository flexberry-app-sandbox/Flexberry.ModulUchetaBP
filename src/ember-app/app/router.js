import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-modul-ucheta-b-p-дир-отд-по-раб-с-кл-l');
  this.route('i-i-s-modul-ucheta-b-p-дир-отд-по-раб-с-кл-e',
  { path: 'i-i-s-modul-ucheta-b-p-дир-отд-по-раб-с-кл-e/:id' });
  this.route('i-i-s-modul-ucheta-b-p-дир-отд-по-раб-с-кл-e.new',
  { path: 'i-i-s-modul-ucheta-b-p-дир-отд-по-раб-с-кл-e/new' });
  this.route('i-i-s-modul-ucheta-b-p-длительность-l');
  this.route('i-i-s-modul-ucheta-b-p-длительность-e',
  { path: 'i-i-s-modul-ucheta-b-p-длительность-e/:id' });
  this.route('i-i-s-modul-ucheta-b-p-длительность-e.new',
  { path: 'i-i-s-modul-ucheta-b-p-длительность-e/new' });
  this.route('i-i-s-modul-ucheta-b-p-договор-l');
  this.route('i-i-s-modul-ucheta-b-p-договор-e',
  { path: 'i-i-s-modul-ucheta-b-p-договор-e/:id' });
  this.route('i-i-s-modul-ucheta-b-p-договор-e.new',
  { path: 'i-i-s-modul-ucheta-b-p-договор-e/new' });
  this.route('i-i-s-modul-ucheta-b-p-затр-время-l');
  this.route('i-i-s-modul-ucheta-b-p-затр-время-e',
  { path: 'i-i-s-modul-ucheta-b-p-затр-время-e/:id' });
  this.route('i-i-s-modul-ucheta-b-p-затр-время-e.new',
  { path: 'i-i-s-modul-ucheta-b-p-затр-время-e/new' });
  this.route('i-i-s-modul-ucheta-b-p-клиент-l');
  this.route('i-i-s-modul-ucheta-b-p-клиент-e',
  { path: 'i-i-s-modul-ucheta-b-p-клиент-e/:id' });
  this.route('i-i-s-modul-ucheta-b-p-клиент-e.new',
  { path: 'i-i-s-modul-ucheta-b-p-клиент-e/new' });
  this.route('i-i-s-modul-ucheta-b-p-расчет-ост-врем-l');
  this.route('i-i-s-modul-ucheta-b-p-расчет-ост-врем-e',
  { path: 'i-i-s-modul-ucheta-b-p-расчет-ост-врем-e/:id' });
  this.route('i-i-s-modul-ucheta-b-p-расчет-ост-врем-e.new',
  { path: 'i-i-s-modul-ucheta-b-p-расчет-ост-врем-e/new' });
  this.route('i-i-s-modul-ucheta-b-p-услуги-l');
  this.route('i-i-s-modul-ucheta-b-p-услуги-e',
  { path: 'i-i-s-modul-ucheta-b-p-услуги-e/:id' });
  this.route('i-i-s-modul-ucheta-b-p-услуги-e.new',
  { path: 'i-i-s-modul-ucheta-b-p-услуги-e/new' });
});

export default Router;
