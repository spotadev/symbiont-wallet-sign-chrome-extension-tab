
export const IS_PROD = false;
export const BOOT_PROD_BASE_URL = 'http://symbiontmessaging.com:8080';
export const BOOT_DEV_BASE_URL = 'http://localhost:8080';
export const TIMEOUT_PROD = 5000;
export const TIMEOUT_DEV = 10000000;

export const getBaseUrl = () => {
  let baseUrl = BOOT_PROD_BASE_URL;

  if (!IS_PROD) {
    baseUrl = BOOT_DEV_BASE_URL;
  }

  return baseUrl;
}

export const getTimeout = () => {
  let timeout = TIMEOUT_PROD;

  if (!IS_PROD) {
    timeout = TIMEOUT_DEV;
  }

  return timeout;
}