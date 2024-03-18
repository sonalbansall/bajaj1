const express = require("express");
app = express();

app.use(express.json());

app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  const full_name_ddmmyyyy = "Sonal_bANSAL_27_09_2002";
  const user_id = `user_id: ${full_name_ddmmyyyy}`;

  const email = "SONAL1379.BE21@CHITKARA.EDU.IN";
  const roll_number = "2110991379";

  const even_numbers = data.filter((num) => num % 2 === 0);
  const odd_numbers = data.filter((num) => num % 2 !== 0);

  let alphabets = [];
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "string") {
      alphabets.push(data[i].toUpperCase());
    }
  }

  
  const response = {
    is_success: true,
    user_id,
    email,
    roll_number,
    odd_numbers,
    even_numbers,
    alphabets,
  };

   
  res.json(response);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
