const Profiles = require('../../../../src/controllers/profiles');
const models = require('../../../../src/models');

describe('Profiles controller', () => {
  let instance;

  beforeEach(() => {
    instance = new Profiles({});
  });

  describe('all method', () => {
    let stub;

    beforeEach(() => {
      stub = sinon.stub(models.Profiles, 'findAll', () => 'test');
    });

    afterEach(() => {
      stub.restore();
    });

    it('executes search for all profiles', async () => {
      const result = await instance.all();

      expect(result).to.equal('test');
    });
  });

  describe('get method', () => {
    let stub;

    beforeEach(() => {
      stub = sinon.stub(models.Profiles, 'findOne', () => 'test');
    });

    afterEach(() => {
      stub.restore();
    });

    it('executes search for specifc profile', async () => {
      const result = await instance.get('markelog');

      expect(result).to.equal('test');
      expect(stub).to.have.been.calledWith({
        where: {
          handle: 'markelog'
        }
      });
    });
  });

  describe('delete method', () => {
    let stub;

    beforeEach(() => {
      stub = sinon.stub(models.Profiles, 'destroy', () => 'test');
    });

    afterEach(() => {
      stub.restore();
    });

    it('executes search for specifc profile', async () => {
      const result = await instance.delete('markelog');

      expect(result).to.equal('test');
      expect(stub).to.have.been.calledWith({
        where: {
          handle: 'markelog'
        }
      });
    });
  });

  describe('create method', () => {
    let stub;
    const fixture = {
      id: 2,
      bossId: 1,
      name: 'Andrés C. Viesca Ruiz',
      title: 'Taco developer',
      about: 'Sexy turtle',
      handle: 'Viestat',
      contacts: JSON.stringify({}),
      social: JSON.stringify({}),
      createdAt: new Date(),
      updatedAt: new Date()
    };

    beforeEach(() => {
      stub = sinon.stub(models.Profiles, 'create', () => 'test');
    });

    afterEach(() => {
      stub.restore();
    });

    it('creates profile', async () => {
      const result = await instance.create(fixture);

      expect(result).to.equal('test');
      expect(stub).to.have.been.calledWith(fixture);
    });
  });
});
