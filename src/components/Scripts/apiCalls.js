// const BASE_URL = "https://bitmemoir.org/";
const BASE_URL = "http://127.0.0.1:8000/";
// const BASE_URL = "http://3.7.212.160:8000/";
// const BASE_URL = "http://localhost:8000/";

export const userApi = async (data) => {
  const endpoint = "user";
  const url = BASE_URL + endpoint;
  let formData = new FormData();
  Object.keys(data).map((item) => {
    formData.append(item, data[item]);
    return null;
  });
  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .catch((err) => {
      console.log(err);
      return "Server error";
    });
  console.log(data);
  console.log(response);
  if (response.status !== "Success")
    throw Object.assign(new Error("Server error"), { code: 402 });
  return response.response;
};

export const nftApi = async (data) => {
  const endpoint = "nft";
  const url = BASE_URL + endpoint;
  let formData = new FormData();
  Object.keys(data).map((item) => {
    formData.append(item, data[item]);
    return null;
  });
  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
  console.log(response)
  if (response.status !== "Success")
    throw Object.assign(new Error("Server error"), { code: 402 });
  return response.response;
};
export const kpiApi = async (data) => {
  const endpoint = "kpi";
  const url = BASE_URL + endpoint;
  const response = await fetch(url, { method: "POST" })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });

  if (response.status !== "Success")
    throw Object.assign(new Error("Server error"), { code: 402 });
  return response.response;
};
export const adminApi = async (data) => {
  const endpoint = "admin";
  const url = BASE_URL + endpoint;
  let formData = new FormData();
  Object.keys(data).map((item) => {
    formData.append(item, data[item]);
    return null;
  });
  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
  console.log(response);
  if (response.status !== "Success")
    throw Object.assign(new Error("Server error"), { code: 402 });
  return response.response;
};
export const verifyApi = async (data) => {
  const endpoint = "verify";
  const url = BASE_URL + endpoint;
  let formData = new FormData();
  Object.keys(data).map((item) => {
    formData.append(item, data[item]);
    return null;
  });
  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
  console.log(response);
  if (response.status !== "Success")
    throw Object.assign(new Error("Server error"), { code: 402 });
  return response.response;
};

export const issueNftreward = async (data) => {
  const endpoint = "issueNftreward";
  const url = BASE_URL + endpoint;
  let formData = new FormData();
  Object.keys(data).map((item) => {
    formData.append(item, data[item]);
    return null;
  });
  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
  console.log(response);
  if (response.status !== "Success")
    throw Object.assign(new Error("Server error"), { code: 402 });
  return response.status;
};

export const claim_reward = async (data) => {
  const endpoint = "claimreward";
  const url = BASE_URL + endpoint;
  let formData = new FormData();
  Object.keys(data).map((item) => {
    formData.append(item, data[item]);
    return null;
  });
  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
  console.log(response);
  if (response.status !== "Success")
    throw Object.assign(new Error("Server error"), { code: 402 });
  return response.status;
};

export const updateNftreward = async (data) => {
  const endpoint = "updatenft";
  const url = BASE_URL + endpoint;
  let formData = new FormData();
  Object.keys(data).map((item) => {
    formData.append(item, data[item]);
    return null;
  }
  );
  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    }
    )
    .catch((err) => {
      return "Server error";
    }
    );  
  console.log(response);
  if (response.status !== "Success")
    throw Object.assign(new Error("Server error"), { code: 402 });
  return response.status;
};

export const view_nft = async (data) => {
  const endpoint = "viewnft";
  const url = BASE_URL + endpoint;
  let formData = new FormData();
  Object.keys(data).map((item) => {
    formData.append(item, data[item]);
    return null;
  });
  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
  // console.log(response);
  if (response.status !== "Success")
    throw Object.assign(new Error("Server error"), { code: 402 });
  return response.response;
};

