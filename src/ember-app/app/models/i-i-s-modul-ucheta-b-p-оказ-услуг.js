import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОказУслугMixin
} from '../mixins/regenerated/models/i-i-s-modul-ucheta-b-p-оказ-услуг';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОказУслугMixin, Validations, {
});

defineProjections(Model);

export default Model;
