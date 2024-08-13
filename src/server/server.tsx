import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
const port = 3000;
const token = '234389294:AAH-G8DjcTzTNrh2GfiiwXp_DxfVm7QDCMc'; // Replace with your bot token
const webhookUrl = 'YOUR_NGROK_PUBLIC_URL/path'; // Replace with your ngrok public URL

app.use(bodyParser.json());

app.post('/path', (req, res) => {
  console.log('Received update:', req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Set webhook
axios.post(`https://api.telegram.org/bot${token}/setWebhook`, {
  url: webhookUrl
})
  .then(response => {
    console.log('Webhook set:', response.data);
  })
  .catch(error => {
    console.error('Error setting webhook:', error);
  });
