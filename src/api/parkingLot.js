import request from '@/utils/request'

export async function loadParkingLots() {
  return request({
    url: '/admin/parkingLots',
    method: 'get'
  })
}

export async function loadParkingLotsWithoutManager() {
  return request({
    url: '/parkingLots',
    method: 'get'
  })
}

export function createParkingLot(data) {
  return request({
    url: '/parkingLots',
    method: 'post',
    data
  })
}

export function loadConditionalParkingLots(parkingLotName, lowerLimit, upperLimit) {
  return request({
    url: `/parkingLots?parkingLotName=${parkingLotName}&lowerLimit=${lowerLimit}&upperLimit=${upperLimit}`,
    method: 'get'
  })
}

export function loadParkingLotDashboard() {
  return request({
    url: '/parkingLotDashboard',
    method: 'get'
  })
}

export function updateParkingLotManagedBy(id, data) {
  return request({
    url: `/parkingLots/${id}`,
    method: 'patch',
    data
  })
}

export function findParkingLotById(id) {
  return request({
    url: `/parkingLots/${id}`,
    method: 'get'
  })
}

export function logoutOrActivateParkingLot(parkingLot) {
  return request({
    url: `/parkingLots/${parkingLot.parkingLotId}/logout`,
    method: 'patch'
  })
}

export function alterParkingLot(parkingLotId, data) {
  return request({
    url: `/parkingLots?parkingLotId=${parkingLotId}`,
    method: 'patch',
    data
  })
}
