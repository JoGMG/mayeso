export class CustomResponse {
  constructor(message, error, data, page, limit) {
    this.message = message;
    this.error = error;
    this.data = data;
    this.page = page;
    this.limit = limit;
  }
}
