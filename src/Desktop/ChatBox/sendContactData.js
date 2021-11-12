async function sendContactData(vn, ve, vc) {
  const data = {
    visitorName: vn,
    visitorEmail: ve,
    visitorComment: vc,
  };

  const result = await fetch(
    "https://dwalesskaapi.azurewebsites.net/api/email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => {
      if (response.status >= 400 && response.status < 600) {
        throw new Error(response.statusText);
      }

      return response;
    })
    .then((returnedResponse) => returnedResponse.json())
    .catch((error) => {
      console.log(`SendGrid Error: ${error}`);
      return;
    });

  console.log(result);
  return result;
}

export default sendContactData;
