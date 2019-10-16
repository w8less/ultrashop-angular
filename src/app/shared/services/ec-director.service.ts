import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EcDirectorService {

  constructor(private http: HttpClient) { }

  newUser(user) {
    return this.http.post(`users/`,user);
  }

  getUsers(queryString: string = '') {
    return this.http.get(`users/${queryString}`);
  }

  getUser(id) {
    return this.http.get(`users/${id}/`);
  }

  putUser(id, user) {
   return this.http.put(`users/${id}/`, user);
  }

  deleteUser(id) {
    return this.http.delete(`users/${id}`);
  }

  getGroups(queryString: string = '') {
    return this.http.get(`groups/${queryString}`);
  }

  getGroup(id) {
    return this.http.get(`groups/${id}`);
  }

  getInfo() {
    return this.http.get(`information/`);
  }

  putInfo(info) {
    return this.http.put(`information/`, info);
  }

  getSocials() {
    return this.http.get(`socials/`);
  }

  getSocial(id) {
    return this.http.get(`socials/${id}/`);
  }

  putSocial(id, data) {
    return this.http.put(`socials/${id}/`, data);
  }

  deleteSocial(id) {
    return this.http.delete(`socials/${id}/`);
  }

  getNotification(url) {
    return this.http.get(`notification/${url}/`);
  }

  putNotification(url, data) {
    return this.http.put(`notification/${url}/`, data);
  }

  postShop(data) {
    return this.http.post(`shops/`, data);
  } 

  getAddresses(queryString: string = '') {
    return this.http.get(`shops/${queryString}`);
  }

  getAddress(id) {
    return this.http.get(`shops/${id}/`);
  }

  putAddress(id, data) {
    return this.http.put(`shops/${id}/`, data);
  }
}
