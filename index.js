const express = require('express');
const ejs = require('ejs');
const moongose = require('moongose');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
require('dotenv').config();

let data;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_PROD_URL)
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));


const Sem1 = new mongoose.Schema({
    sem:
      [
        {
          subjects:
            [{
              subjectName: String,
              units:
                [
                  {
                    unitName: String,
                    topics:
                      [
                        {
                          name: String,
                          content: String,
                        },
                      ]
                  },
                ]
            },
            ]
        },
      ]
  })
  
  const Sem1Notes = mongoose.model('Sem1Notes', Sem1);
  async function fetchData() {
   data = await Sem1Notes.find({});
   console.log(data);
  }

  fetchData();

  app.listen('8080', () => {
    console.log('Running on port 8080');
  })
