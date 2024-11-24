const validateTextInput = (text, inputName, formErrors) => {
  if (!text || text.trim() === "") {
    formErrors[inputName] = "Please provide required input";
  }
};

const validateEmail = (email, inputName, formErrors) => {
  const isValid = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  if (!isValid) {
    formErrors[inputName] = "Please provide an existing email address";
  }
};

const validateImage = (img, inputName, formErrors) => {
  if (!img || img.size === 0) {
    formErrors[inputName] = "Please select an image in png or jpeg format";
  }
};

export default {
  validateEmail,
  validateImage,
  validateTextInput,
};
