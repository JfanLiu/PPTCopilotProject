import request from '@/utils/request'

export function getProject(id) {
  return request({
    url: '/project/' + id,
    method: 'get',
  })
}

export function getPPTList(id) {
  return request({
    url: '/user/' + id + '/ppt',
    method: 'get',
  })
}

export function getAllProject() {
  return request({
    url: '/project/public',
    method: 'get',
  })
}

export function getFile(id) {
  return request({
    url: '/project/' + id + '/file',
    method: 'get',
  })
}

export function getAllPublic() {
  return request({
    url: '/ppt/get_all_public',
    method: 'get',
  })
}

export function renameFile(id, data) {
  return request({
    url: '/project/' + id + '/file/update_name',
    method: 'post',
    data
  })
}

export function createProject(data) {
  return request({
    url: '/project',
    method: 'post',
    data
  })
}

export function deleteProject(id) {
  return request({
    url: '/project/' + id,
    method: 'delete',
  })
}

export function updateProject(id, data) {
  return request({
    url: '/project/' + id,
    method: 'put',
    data
  })
}

export function uploadFile(id, data) {
  return request({
    url: '/project/' + id + '/file',
    method: 'post',
    data
  })
}

export function deleteFile(id, filename) {
  return request({
    url: '/project/' + id + '/file/' + filename,
    method: 'delete',
  })
}



export function getStaticFile(projectId, fileName) {
  console.log(fileName)
  return request({
    url: '/_static/project/' + projectId + '/' + fileName + '/' + fileName,
    method: 'get',
  })
}

export function saveStaticFile(projectId, fileName, fileBlob) {
  return request({
    url: '/_static/project/' + projectId + '/' + fileName + '/' + fileName,
    method: 'post',
    data: fileBlob,
    headers: {
      'Content-Type': 'plain/text'
    }
  });
}

export function saveCover(id, filename, data) {   
  return request({
    url: '/_static/project/' + id + '/' + filename + '/' + 'cover.png',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'plain/text'
    }
  });
}

export function GetPPTHistory(){
  return request({
    url: '/ppt/history',
    method: 'get',
  })
}

export function checkLikePorject(id) {
  return request({
    url: '/project/' + id + '/star',
    method: 'get',
  })
}

export function likeProject(id) {
  return request({
    url: '/project/' + id + '/star',
    method: 'post',
  })
}

export function unlikeProject(id) {
  return request({
    url: '/project/' + id + '/star',
    method: 'delete',
  })
}

export function cloneProject(id) {
  return request({
    url: '/project/' + id,
    method: 'post',
  })
}

export function getLikedProjects(id) {
  return request({
    url: '/user/' + id + '/favorite',
    method: 'get',
  })
}
