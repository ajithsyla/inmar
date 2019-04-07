import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  private config: any = {};
  private userInfo: any = {};

  questions: any[] = [];
  timeOffset = 0;
  currentEvent: any = {};
  userProfile = {};
  hostApp = 'myjio';
  prizesAndBanners: any = null;

  setUserInfo(info) {
    this.userInfo = info;
    localStorage['userInfo'] = JSON.stringify(info);
  }

  getUserInfo() {
    const userInfo = localStorage['userInfo'];
    if (userInfo) {
      return JSON.parse(userInfo);
    }
    return this.userInfo;
  }

  setAllPrizesAndBanners(p) {
    this.prizesAndBanners = p;
  }

  getAllPrizesAndBanners() {
    return this.prizesAndBanners;
  }

  setConfig(config) {
    this.config = config;
  }

  getConfigParam(param) {
    return this.config[param];
  }

  setUserProfile(profile) {
    Object.assign(this.userProfile, profile);
  }

  getUserProfile() {
    return this.userProfile;
  }

  setCurrentEvent(event) {
    this.currentEvent = event;
  }

  getCurrentEvent() {
    return this.currentEvent;
  }

  logout() {
    this.setUserInfo({});
  }
}
