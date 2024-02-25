//const { ConflictException, NotFoundException } = require('../packages/cosmos-service-builder').HTTPErrors
const { SequelizeBaseService } = require('../packages/cosmos-common-db-sequelize').Services
const { SequelizeErrors } = require('../packages/cosmos-common-db-sequelize').Errors
const config = require('../config')
const filename = __filename

class MedicineItemsService extends SequelizeBaseService {
  constructor({ models, logger, log }) {
    super({
      baseExcludes: ['deletedAt', 'version'],
      updateableFields: ['itemName', 'itemCode', 'batchNo', 'expiryDate', 'manufacturingDate', 'quantity', 'lastUdatedBy'],
      models,
      logger,
      model: models.ItemsModel,
      modelName: 'items'
    })
    this.log = log
  }

  async create(attributes, req) {
    const { user = {} } = req
    const { name } = attributes
    try {
      // Ensure we don't have an existing deviceType with the same name
      // const existingDeviceType = await this.model.findOne({
      //   where: { name },
      //   paranoid: true,
      //   attributes: { include: ['version', 'deletedAt'] }
      // })
      // if (existingDeviceType) {
      //   user.tenantId
      //     ? this.log('error', { name: config.source, env: config.env, tenantId: user.tenantId, user: user.email, src: { filename, func: 'create' }, context: `Attributes: ${JSON.stringify(attributes)}`, message: config.getLanguage().DEVICE_TYPE_ALREADY_EXISTS })
      //     : this.log('error', { name: config.source, env: config.env, group: user.groups, user: user.email, src: { filename, func: 'create' }, context: `Attributes: ${JSON.stringify(attributes)}`, message: config.getLanguage().DEVICE_TYPE_ALREADY_EXISTS })
      //   throw new ConflictException(undefined, undefined, config.getLanguage().DEVICE_TYPE_ALREADY_EXISTS)
      // }
      attributes.createdBy = req.user.name
      attributes.lastUpdatedBy = req.user.name

      return await super.create(attributes)
    } catch (err) {
      const { code, message, stack, ...restError } = err
      user.tenantId
        ? config.STACKTRACE
          ? this.log('error', { name: config.source, env: config.env, tenantId: user.tenantId, user: user.email, src: { filename, func: 'create' }, context: `DeviceType attributes: ${JSON.stringify(attributes)}`, err: { code, message, stack, ...restError }, message: config.getLanguage().DEVICETYPE_CREATE_ERROR })
          : this.log('error', { name: config.source, env: config.env, tenantId: user.tenantId, user: user.email, src: { filename, func: 'create' }, context: `DeviceType attributes: ${JSON.stringify(attributes)}`, err: { code, message }, message: config.getLanguage().DEVICETYPE_CREATE_ERROR })
        : config.STACKTRACE
          ? this.log('error', { name: config.source, env: config.env, group: user.groups, user: user.email, src: { filename, func: 'create' }, context: `DeviceType attributes: ${JSON.stringify(attributes)}`, err: { code, message, stack, ...restError }, message: config.getLanguage().DEVICETYPE_CREATE_ERROR })
          : this.log('error', { name: config.source, env: config.env, group: user.groups, user: user.email, src: { filename, func: 'create' }, context: `DeviceType attributes: ${JSON.stringify(attributes)}`, err: { code, message }, message: config.getLanguage().DEVICETYPE_CREATE_ERROR })
      throw SequelizeErrors.handleSequelizeError(err, { modelName: this.modelName })
    }
  }

  async getAll(req) {
    const { user = {} } = req
    try {
      return await super.readAll(req)
    } catch (err) {
      const { code, message, stack, ...restError } = err
      user.tenantId
        ? config.STACKTRACE
          ? this.log('error', { name: config.source, env: config.env, tenantId: user.tenantId, user: user.email, src: { filename, func: 'create' }, context: `DeviceType attributes: ${JSON.stringify(attributes)}`, err: { code, message, stack, ...restError }, message: config.getLanguage().DEVICETYPE_CREATE_ERROR })
          : this.log('error', { name: config.source, env: config.env, tenantId: user.tenantId, user: user.email, src: { filename, func: 'create' }, context: `DeviceType attributes: ${JSON.stringify(attributes)}`, err: { code, message }, message: config.getLanguage().DEVICETYPE_CREATE_ERROR })
        : config.STACKTRACE
          ? this.log('error', { name: config.source, env: config.env, group: user.groups, user: user.email, src: { filename, func: 'create' }, context: `DeviceType attributes: ${JSON.stringify(attributes)}`, err: { code, message, stack, ...restError }, message: config.getLanguage().DEVICETYPE_CREATE_ERROR })
          : this.log('error', { name: config.source, env: config.env, group: user.groups, user: user.email, src: { filename, func: 'create' }, context: `DeviceType attributes: ${JSON.stringify(attributes)}`, err: { code, message }, message: config.getLanguage().DEVICETYPE_CREATE_ERROR })
      throw SequelizeErrors.handleSequelizeError(err, { modelName: this.modelName })
    }
  }
}

module.exports = MedicineItemsService
