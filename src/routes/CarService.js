import controller from '../controllers/CarController';
import callback from './callback-service';


export default(app) => {

    const defaultController = new controller(app.datasource.models.Car);

    app.route('/carsByCode/:code')
        .get((req, res) => {
            defaultController.getByCode(req.params.code)
                .then(response => callback.defaultResponse(response))
                .catch(error => callback.errorReponse(error))
        });
    
    app.route('/cars')
        .get((req, res) => {
            defaultController.listAll()
                .then(response => callback.defaultResponse(response))
                .catch(error => callback.errorReponse(error))          
        })
        .post((req, res) => {
            defaultController.create(req.body)
                .then(response => callback.defaultResponse(response))
                .catch(error => callback.errorReponse(error))
        });

    app.route('/cars/:id')
        .get((req,res) => {
            defaultController.getById(req.params)
                .then(response => callback.defaultResponse(response))
                .catch(error => callback.errorReponse(error)) 
        })
        .put((req, res) => {
            defaultController.update(req.body, req.params)
                .then(response => callback.defaultResponse(response))
                .catch(error => callback.errorReponse(error)) 
        })
}