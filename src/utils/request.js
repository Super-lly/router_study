import axios from 'axios'

export function request(config){
  const instance = axios.create({
    method:'get',
    baseURL:'http://localhost:3000'
  })
  instance.interceptors.request.use(config=>{

    return config
  })

  instance.interceptors.response.use(res=>{

    return res
  },err=>{
    return Promise.reject(err)
  })

  return instance(config)
}

