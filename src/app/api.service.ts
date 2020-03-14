import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private client = axios.create({
    baseURL: 'https://foxy-paypal-burst-converter.herokuapp.com',
  });

  constructor() {}

  async getRates() {
    const { data } = await this.client.get('/rates');

    return data;
  }

  async getBalance() {
    const { data } = await this.client.get('/balance');

    return data;
  }
}
