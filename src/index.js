require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const port = 8080;

app.post('/system/restartDocker', (req, res) => {
  const { exec } = require('child_process');

  exec('cd /Users/tsetszchun/Documents/MasterConcept/GWIN/emsd-gwin-dashboard/deploy; docker-compose restart dra_system', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });

  res.send('restartDocker');
});

app.post('/system/bashCommand', (req, res) => {
  const { exec } = require('child_process');
  const { command } = req.body;

  exec(`${command}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });

  res.send('bashCommand');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
