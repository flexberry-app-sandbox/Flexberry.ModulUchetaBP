import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяПоДоговору: DS.attr('number'),
  доступно: DS.attr('number'),
  использовано: DS.attr('number'),
  оказУсл: DS.hasMany('i-i-s-modul-ucheta-b-p-оказ-услуг', { inverse: 'расчетОстВрем', async: false })
});

export let ValidationRules = {
  времяПоДоговору: {
    descriptionKey: 'models.i-i-s-modul-ucheta-b-p-расчет-ост-врем.validations.времяПоДоговору.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  доступно: {
    descriptionKey: 'models.i-i-s-modul-ucheta-b-p-расчет-ост-врем.validations.доступно.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  использовано: {
    descriptionKey: 'models.i-i-s-modul-ucheta-b-p-расчет-ост-врем.validations.использовано.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  оказУсл: {
    descriptionKey: 'models.i-i-s-modul-ucheta-b-p-расчет-ост-врем.validations.оказУсл.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетОстВремE', 'i-i-s-modul-ucheta-b-p-расчет-ост-врем', {
    времяПоДоговору: attr('Время по договору', { index: 0 }),
    доступно: attr('Доступно', { index: 1 }),
    использовано: attr('Использовано', { index: 2 }),
    оказУсл: hasMany('i-i-s-modul-ucheta-b-p-оказ-услуг', 'Оказанные услуги', {
      дата: attr('Дата', { index: 0 }),
      времяКонсульт: attr('Время консультаций', { index: 1 })
    })
  });

  modelClass.defineProjection('РасчетОстВремL', 'i-i-s-modul-ucheta-b-p-расчет-ост-врем', {
    времяПоДоговору: attr('Время по договору', { index: 0 }),
    доступно: attr('Доступно', { index: 1 }),
    использовано: attr('Использовано', { index: 2 })
  });
};
