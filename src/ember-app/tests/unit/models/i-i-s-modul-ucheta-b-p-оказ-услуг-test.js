import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-modul-ucheta-b-p-оказ-услуг', 'Unit | Model | i-i-s-modul-ucheta-b-p-оказ-услуг', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-modul-ucheta-b-p-длительность',
    'model:i-i-s-modul-ucheta-b-p-договор',
    'model:i-i-s-modul-ucheta-b-p-клиент',
    'model:i-i-s-modul-ucheta-b-p-оказ-услуг',
    'model:i-i-s-modul-ucheta-b-p-расчет-ост-врем',
    'model:i-i-s-modul-ucheta-b-p-услуги',
    'model:директор',
    'model:затраченное-время',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
