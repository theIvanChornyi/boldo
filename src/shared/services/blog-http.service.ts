import axios, { Axios, AxiosResponse } from 'axios';
import { BLOG } from '../const/back-end-routes.const';

class BlogHttpService {
  private readonly axios: Axios;
  private readonly API_KEY: string;
  constructor() {
    this.API_KEY = process.env.REACT_APP_API_KEY ?? '';
    this.axios = axios.create({
      baseURL: `https://${this.API_KEY}.mockapi.io/boldo/`,
    });
  }

  public async getPosts<T>(
    page: number = 1,
    limit: number = 3
  ): Promise<AxiosResponse<Array<T>>> {
    return this.axios.get(BLOG.LIST, {
      params: { page, limit },
    });
  }
}

export default new BlogHttpService();
