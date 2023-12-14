import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяКонсульт: DS.attr('number'),
  дата: DS.attr('date'),
  договор: DS.belongsTo('i-i-s-modul-ucheta-b-p-договор', { inverse: null, async: false }),
  услуги: DS.belongsTo('i-i-s-modul-ucheta-b-p-услуги', { inverse: null, async: false }),
  расчетОстВрем: DS.belongsTo('i-i-s-modul-ucheta-b-p-расчет-ост-врем', { inverse: 'оказУсл', async: false })
});

export let ValidationRules = {
  времяКонсульт: {
    descriptionKey: 'models.i-i-s-modul-ucheta-b-p-оказ-услуг.validations.времяКонсульт.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-modul-ucheta-b-p-оказ-услуг.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  договор: {
    descriptionKey: 'models.i-i-s-modul-ucheta-b-p-оказ-услуг.validations.договор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуги: {
    descriptionKey: 'models.i-i-s-modul-ucheta-b-p-оказ-услуг.validations.услуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  расчетОстВрем: {
    descriptionKey: 'models.i-i-s-modul-ucheta-b-p-оказ-услуг.validations.расчетОстВрем.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОказУслугE', 'i-i-s-modul-ucheta-b-p-оказ-услуг', {
    дата: attr('Дата', { index: 0 }),
    времяКонсульт: attr('Время консультаций', { index: 1 })
  });
};
