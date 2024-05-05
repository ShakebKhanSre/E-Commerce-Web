import { instance } from "./axios";

export const sendGetRequest = async (url, body) => {
  return instance
    .get(url, {
      validateStatus: () => {
        return true;
      },
      ...body,
    })
    .then((response) => {
      return response?.data;
    })
    .catch((err) => {
      if (err.response === undefined) {
        throw new Error("something went wrong");
      }
      return err?.response?.data;
    })
    .finally(() => {});
};

export const sendPostRequest = async (url, body, config) => {
  return instance
    .post(url, body, { validateStatus: () => true, ...config })
    .then((response) => {
      return response?.data;
    })
    .catch((err) => {
      if (err?.response === undefined) {
        throw new Error("something went wrong");
      }
      return err?.response?.data ?? err?.response;
    })
    .finally(() => {});
};

export const deleteRequestAuthenticated = async (path, params, accessToken) => {
  console.log(`[ RequestType: DELETE AUTHENTICATED, API URL: ${path}]`);
  try {
    const response = await instance.delete(path, {
      validateStatus: () => true,
      data: params,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    return await response.data;
  } catch (error) {
    console.log(error, "error");
    throw error;
  }
};

export const postRequestAuthenticated = async (
  path,
  params,
  accessToken,
  showToast = true
) => {
  console.log(`[ RequestType: POST AUTHENTICATED,  API URL: ${path}]`);
  try {
    const response = await instance.post(path /* url */, params, {
      validateStatus: () => true,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response?.data;
  } catch (err) {
    console.log(err, "error");

    return err?.response?.data ?? err?.response;
  }
};

export const getRequestAuthenticated = async (
  path,
  params,
  accessToken,
  showToast = true
) => {
  console.log(`[ RequestType: GET AUTHENTICATED,  API URL: ${path}]`);
  try {
    const response = await instance.get(path, {
      validateStatus: () => true,
      params,
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response?.status >= 200 && response?.status < 300) {
      return await response.data;
    } else {
      throw new Error(`${response?.status}`);
    }
  } catch (error) {
    console.error(error, "error");

    throw error;
  }
};

export const putRequestAuthenticated = async (path, data, accessToken) => {
  try {
    const response = await instance.put(path /* url */, data, {
      validateStatus: () => true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return await response.data;
  } catch (error) {
    console.log("error put authenticated request", error);

    throw error;
  }
};
