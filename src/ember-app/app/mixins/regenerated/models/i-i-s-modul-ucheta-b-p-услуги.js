import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('i-i-s-modul-ucheta-b-p-услуга'),
  затрВремя: DS.belongsTo('затраченное-время', { inverse: null, async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-modul-ucheta-b-p-услуги.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  затрВремя: {
    descriptionKey: 'models.i-i-s-modul-ucheta-b-p-услуги.validations.затрВремя.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПереченьУслугE', 'i-i-s-modul-ucheta-b-p-услуги', {
    наименование: attr('Наименование', { index: 0 })
  });

  modelClass.defineProjection('ПереченьУслугL', 'i-i-s-modul-ucheta-b-p-услуги', {
    наименование: attr('Наименование', { index: 0 })
  });

  modelClass.defineProjection('УслугиE', 'i-i-s-modul-ucheta-b-p-услуги', {
    наименование: attr('Наименование', { index: 0 })
  });

  modelClass.defineProjection('УслугиL', 'i-i-s-modul-ucheta-b-p-услуги', {
    наименование: attr('Наименование', { index: 0 })
  });
};
