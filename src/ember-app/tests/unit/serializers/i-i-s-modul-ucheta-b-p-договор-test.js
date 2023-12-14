import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-modul-ucheta-b-p-договор', 'Unit | Serializer | i-i-s-modul-ucheta-b-p-договор', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-modul-ucheta-b-p-договор',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-modul-ucheta-b-p-статус',
    'transform:i-i-s-modul-ucheta-b-p-тип-договора',
    'transform:i-i-s-modul-ucheta-b-p-услуга',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
