import request from '@/utils/request'

export function genOutline(data) {
  return request({
    url: '/gpt/gen_outline',
    method: 'post',
    data
  })
}

export function gen_ppt(data) {
  return request({
    url: '/gpt/gen_ppt',
    method: 'post',
    data
  })
}

export function update_outline(outline_id, data) {
  return request({
    url: '/gpt/outline/' + outline_id,
    method: 'post',
    data
  })
}