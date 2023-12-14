import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISModul_ucheta_BPДирОтдПоРабСКлLForm from './forms/i-i-s-modul-ucheta-b-p-дир-отд-по-раб-с-кл-l';
import IISModul_ucheta_BPДлительностьLForm from './forms/i-i-s-modul-ucheta-b-p-длительность-l';
import IISModul_ucheta_BPДоговорLForm from './forms/i-i-s-modul-ucheta-b-p-договор-l';
import IISModul_ucheta_BPЗатрВремяLForm from './forms/i-i-s-modul-ucheta-b-p-затр-время-l';
import IISModul_ucheta_BPКлиентLForm from './forms/i-i-s-modul-ucheta-b-p-клиент-l';
import IISModul_ucheta_BPРасчетОстВремLForm from './forms/i-i-s-modul-ucheta-b-p-расчет-ост-врем-l';
import IISModul_ucheta_BPУслугиLForm from './forms/i-i-s-modul-ucheta-b-p-услуги-l';
import IISModul_ucheta_BPДирОтдПоРабСКлEForm from './forms/i-i-s-modul-ucheta-b-p-дир-отд-по-раб-с-кл-e';
import IISModul_ucheta_BPДлительностьEForm from './forms/i-i-s-modul-ucheta-b-p-длительность-e';
import IISModul_ucheta_BPДоговорEForm from './forms/i-i-s-modul-ucheta-b-p-договор-e';
import IISModul_ucheta_BPЗатрВремяEForm from './forms/i-i-s-modul-ucheta-b-p-затр-время-e';
import IISModul_ucheta_BPКлиентEForm from './forms/i-i-s-modul-ucheta-b-p-клиент-e';
import IISModul_ucheta_BPРасчетОстВремEForm from './forms/i-i-s-modul-ucheta-b-p-расчет-ост-врем-e';
import IISModul_ucheta_BPУслугиEForm from './forms/i-i-s-modul-ucheta-b-p-услуги-e';
import IISModul_ucheta_BPДлительностьModel from './models/i-i-s-modul-ucheta-b-p-длительность';
import IISModul_ucheta_BPДоговорModel from './models/i-i-s-modul-ucheta-b-p-договор';
import IISModul_ucheta_BPКлиентModel from './models/i-i-s-modul-ucheta-b-p-клиент';
import IISModul_ucheta_BPОказУслугModel from './models/i-i-s-modul-ucheta-b-p-оказ-услуг';
import IISModul_ucheta_BPРасчетОстВремModel from './models/i-i-s-modul-ucheta-b-p-расчет-ост-врем';
import IISModul_ucheta_BPУслугиModel from './models/i-i-s-modul-ucheta-b-p-услуги';
import ДиректорModel from './models/директор';
import Затраченное времяModel from './models/затраченное-время';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-modul-ucheta-b-p-длительность': IISModul_ucheta_BPДлительностьModel,
    'i-i-s-modul-ucheta-b-p-договор': IISModul_ucheta_BPДоговорModel,
    'i-i-s-modul-ucheta-b-p-клиент': IISModul_ucheta_BPКлиентModel,
    'i-i-s-modul-ucheta-b-p-оказ-услуг': IISModul_ucheta_BPОказУслугModel,
    'i-i-s-modul-ucheta-b-p-расчет-ост-врем': IISModul_ucheta_BPРасчетОстВремModel,
    'i-i-s-modul-ucheta-b-p-услуги': IISModul_ucheta_BPУслугиModel,
    'директор': ДиректорModel,
    'затраченное-время': Затраченное времяModel
  },

  'application-name': 'Modul_ucheta_ BP',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Modul_ucheta_ BP',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Modul_ucheta_ BP',
          title: 'Modul_ucheta_ BP'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-modul-ucheta-b-p-дир-отд-по-раб-с-кл-l': {
            caption: 'Дир отд по раб с кл',
            title: ''
          },
          'i-i-s-modul-ucheta-b-p-клиент-l': {
            caption: 'Клиент',
            title: ''
          }
        },
        документы: {
          caption: 'Документы',
          title: 'Документы',
          'i-i-s-modul-ucheta-b-p-расчет-ост-врем-l': {
            caption: 'Расчет ост врем',
            title: ''
          },
          'i-i-s-modul-ucheta-b-p-договор-l': {
            caption: 'Договор',
            title: ''
          }
        },
        прочее: {
          caption: 'Прочее',
          title: 'Прочее',
          'i-i-s-modul-ucheta-b-p-длительность-l': {
            caption: 'Длительность',
            title: ''
          },
          'i-i-s-modul-ucheta-b-p-затр-время-l': {
            caption: 'Затр время',
            title: ''
          },
          'i-i-s-modul-ucheta-b-p-услуги-l': {
            caption: 'Услуги',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-modul-ucheta-b-p-дир-отд-по-раб-с-кл-l': IISModul_ucheta_BPДирОтдПоРабСКлLForm,
    'i-i-s-modul-ucheta-b-p-длительность-l': IISModul_ucheta_BPДлительностьLForm,
    'i-i-s-modul-ucheta-b-p-договор-l': IISModul_ucheta_BPДоговорLForm,
    'i-i-s-modul-ucheta-b-p-затр-время-l': IISModul_ucheta_BPЗатрВремяLForm,
    'i-i-s-modul-ucheta-b-p-клиент-l': IISModul_ucheta_BPКлиентLForm,
    'i-i-s-modul-ucheta-b-p-расчет-ост-врем-l': IISModul_ucheta_BPРасчетОстВремLForm,
    'i-i-s-modul-ucheta-b-p-услуги-l': IISModul_ucheta_BPУслугиLForm,
    'i-i-s-modul-ucheta-b-p-дир-отд-по-раб-с-кл-e': IISModul_ucheta_BPДирОтдПоРабСКлEForm,
    'i-i-s-modul-ucheta-b-p-длительность-e': IISModul_ucheta_BPДлительностьEForm,
    'i-i-s-modul-ucheta-b-p-договор-e': IISModul_ucheta_BPДоговорEForm,
    'i-i-s-modul-ucheta-b-p-затр-время-e': IISModul_ucheta_BPЗатрВремяEForm,
    'i-i-s-modul-ucheta-b-p-клиент-e': IISModul_ucheta_BPКлиентEForm,
    'i-i-s-modul-ucheta-b-p-расчет-ост-врем-e': IISModul_ucheta_BPРасчетОстВремEForm,
    'i-i-s-modul-ucheta-b-p-услуги-e': IISModul_ucheta_BPУслугиEForm
  },

});

export default translations;
