import { addFrame } from "./Create/metadata";

// const api = "http://localhost:8000/";
const api = "https://bitmemoirapi.herokuapp.com/";
// const api = "http://43.205.120.84:8000/";

export const addAdmin = async (name, designation, account, addedBy) => {
  const endpoint = "addAdmin";
  const url = api + endpoint;
  let formData = new FormData();
  formData.append("name", name);
  formData.append("account", account);
  formData.append("designation", designation);
  formData.append("addedBy", addedBy);

  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });

  return response;
};
export const checkAdmin = async (account) => {
  const endpoint = "checkAdmin";
  const url = api + endpoint;
  let formData = new FormData();
  formData.append("account", account);
  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
  return response;
};
export const addIssuer = async (name, description, account, addedBy) => {
  const endpoint = "addIssuer";
  const url = api + endpoint;
  let formData = new FormData();
  formData.append("account", account);
  formData.append("name", name);
  formData.append("description", description);
  formData.append("addedBy", addedBy);
  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
  return response;
};
export const addDestination = async (
  name,
  description,
  account,
  frame,
  addedBy
) => {
  const endpoint = "addDestination";
  const url = api + endpoint;
  const frameURL = await addFrame(frame);
  let formData = new FormData();
  formData.append("account", account);
  formData.append("name", name);
  formData.append("description", description);
  formData.append("frame", frameURL);
  formData.append("addedBy", addedBy);
  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
  return response;
};
export const checkDestination = async (account) => {
  const endpoint = "checkDestination";
  const url = api + endpoint;
  let formData = new FormData();
  formData.append("account", account);
  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
  return response;
};
export const addSouvenir = async (
  account,
  name,
  description,
  metadata,
  image,
  addedBy
) => {
  const endpoint = "addSouvenir";
  const url = api + endpoint;
  let formData = new FormData();
  formData.append("account", account);
  formData.append("name", name);
  formData.append("description", description);
  formData.append("metadata", metadata);
  formData.append("image", image);
  formData.append("addedBy", addedBy);

  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
  return response;
};

export const getCertificates = async (account) => {
  let formData = new FormData();
  formData.append("account", account);
  const endPoint = "getcertificates";
  const url = api + endPoint;
  return await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
};
export const getIssuerDetails = async (address) => {
  let formData = new FormData();
  formData.append("address", address);
  const endPoint = "getIssuerDetails";
  const url = api + endPoint;
  return await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
};
export const getNumberOfCertificates = async () => {
  const endPoint = "getNumberOfCertificates";
  const url = api + endPoint;
  return await fetch(url, { method: "GET" })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
};
export const createSouvenir = async (file, frameURL) => {
  let formData = new FormData();
  formData.append("image", file);
  formData.append("frame_url", frameURL);
  const endPoint = "createSouvenir";
  const url = api + endPoint;
  return await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return "Server error";
    });
};
