import {UserRouter, AuthRouter} from './user/user.routes.js';
import noteRoutes from './note/note.routes.js';
export const bootstrap = (app)=>{
    app.use('/api/v1',AuthRouter);
    app.use('/api/v1/users',UserRouter);
    app.use('/api/v1/notes',noteRoutes);

    app.use('*',(req, res, next) => {
        res.status(404).json({message:'Sorry, that route does not exist.'});
    });
}