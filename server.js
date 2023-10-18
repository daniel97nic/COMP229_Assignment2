import app from './server/express.js';
import productRoutes from './server/routes/product.routes'; // Import product routes
import mongoose from 'mongoose';

mongoose.set("strictQuery", false);
mongoose
  .connect('mongodb+srv://danielmayorga97:TnHrW6f9MxRP7TsJ@cluster0.zdxepku.mongodb.net/Marketplace?retryWrites=true&w=majority&appName=AtlasApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(3000, () => {
      console.log('Server is running on port 3000.');
      app.get("/", (req, res) => {
        res.json({ message: "Welcome to DressStore application." });
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });

  app.use('/api', productRoutes);

