import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочники.caption'),
          title: i18n.t('forms.application.sitemap.справочники.title'),
          children: [{
            link: 'i-i-s-modul-ucheta-b-p-дир-отд-по-раб-с-кл-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-modul-ucheta-b-p-дир-отд-по-раб-с-кл-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-modul-ucheta-b-p-дир-отд-по-раб-с-кл-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-modul-ucheta-b-p-клиент-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-modul-ucheta-b-p-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-modul-ucheta-b-p-клиент-l.title'),
            icon: 'phone',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.документы.caption'),
          title: i18n.t('forms.application.sitemap.документы.title'),
          children: [{
            link: 'i-i-s-modul-ucheta-b-p-расчет-ост-врем-l',
            caption: i18n.t('forms.application.sitemap.документы.i-i-s-modul-ucheta-b-p-расчет-ост-врем-l.caption'),
            title: i18n.t('forms.application.sitemap.документы.i-i-s-modul-ucheta-b-p-расчет-ост-врем-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-modul-ucheta-b-p-договор-l',
            caption: i18n.t('forms.application.sitemap.документы.i-i-s-modul-ucheta-b-p-договор-l.caption'),
            title: i18n.t('forms.application.sitemap.документы.i-i-s-modul-ucheta-b-p-договор-l.title'),
            icon: 'table',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.прочее.caption'),
          title: i18n.t('forms.application.sitemap.прочее.title'),
          children: [{
            link: 'i-i-s-modul-ucheta-b-p-длительность-l',
            caption: i18n.t('forms.application.sitemap.прочее.i-i-s-modul-ucheta-b-p-длительность-l.caption'),
            title: i18n.t('forms.application.sitemap.прочее.i-i-s-modul-ucheta-b-p-длительность-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-modul-ucheta-b-p-затр-время-l',
            caption: i18n.t('forms.application.sitemap.прочее.i-i-s-modul-ucheta-b-p-затр-время-l.caption'),
            title: i18n.t('forms.application.sitemap.прочее.i-i-s-modul-ucheta-b-p-затр-время-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-modul-ucheta-b-p-услуги-l',
            caption: i18n.t('forms.application.sitemap.прочее.i-i-s-modul-ucheta-b-p-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.прочее.i-i-s-modul-ucheta-b-p-услуги-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})