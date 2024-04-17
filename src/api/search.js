import request from '@/utils/request'
export function searchPPT(filterWords) {
  return request({
    url: '/ppt/search',
    method: 'get',
    params: {
      filter_words: filterWords,
    }
  })
}

export function searchUserPPT(filterWords) {
  return request({
    url: '/ppt/search/user',
    method: 'get',
    params: {
      filter_words: filterWords,
    }
  })
}

// export function searchProjects(filterWords) {
//   return request({
//     url: '/project',
//     method: 'get',
//     // params: {
//     //   filter_words: filterWords
//     // }
//   })
// }
