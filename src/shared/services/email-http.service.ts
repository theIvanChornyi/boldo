import { AxiosResponse } from 'axios';
import { BlogHttpService } from './blog-http.service';
import { BLOG } from '../const/back-end-routes.const';

export class EmailHttpService extends BlogHttpService {
  public async subscribe<T>(email: string): Promise<AxiosResponse<Array<T>>> {
    return this.axios.post(BLOG.SUBSCRIBE, { email });
  }
}

const emailService = new EmailHttpService();
export default emailService;
