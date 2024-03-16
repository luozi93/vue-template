const env = process.env

const LOCAL_URL = {
  api: 'http://local.com'
}

const DEV_URL = {
  api: ''
}

const TEST_URL = {
  api: ''
}

const PROD_URL = {
  api: ''
}

export const BASE_URL =
  env.NODE_ENV === 'production'
    ? PROD_URL
    : env.NODE_ENV === 'test'
      ? TEST_URL
      : env.NODE_ENV === 'development'
        ? DEV_URL
        : LOCAL_URL

export const ERR_OK = 0
export const TIME_OUT = 10000
export const ERR_NO = -404
