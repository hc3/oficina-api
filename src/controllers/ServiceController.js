import callback from './callback-controller';
import httpStatus from 'http-status';

class ServiceController {

    construct(model) {
        this.model = model;
    };

    listAll() {
        return this.model.findAll({})
            .then(result => callback.defaultResponse(result))
            .catch(error => callback.errorResponse(error))
    };

    getById(params) {
        return this.model.findOne({where:params})
            .then(result => callback.defaultResponse(result))
            .catch(error => callback.errorResponse(error))
    };

    getByCode(params) {
        return this.model.findAll({
            where: {
                code:params
            }
        })
        .then(result => callback.defaultResponse(result))
        .catch(error => callback.errorResponse(error))
    };

    create(data) {
        return this.model.create(data)
            .then(result => callback.defaultResponse(result))
            .catch(error => callback.errorResponse(error.message,httpStatus.UNPROCESSABLE_ENTITY));
    };

    update(data, params) {
        return this.model.update(data, {where:params})
            .then(result => callback.defaultResponse(result))
            .catch(error => callback.errorResponse(error.message,httpStatus.UNPROCESSABLE_ENTITY));
    };

    remove(params) {
        return this.model.destroy({where:params})
            .then(result => callback.defaultResponse(result))
            .catch(error => callback.errorResponse(error.message,httpStatus.UNPROCESSABLE_ENTITY));
    }
}

export default ServiceController;