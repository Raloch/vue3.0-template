import fetch from './config'

export const operatorInfo = params => fetch({
  url: '/bips/user/get-company-info',
  params: params,
  method: 'post'
})