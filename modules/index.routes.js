import userRoutes from './user/user.routes.js';
export const bootstrap = (app)=>{
    app.use('/api/v1/users',userRoutes);

    app.use('*',(req, res, next) => {
        res.status(404).json({message:'Sorry, that route does not exist.'});
    });
}