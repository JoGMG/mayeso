export class CustomResponse {
  constructor(message, error, data, page, limit, total) {
    this.message = message;
    this.error = error;
    this.data = data;
    this.page = page;
    this.limit = limit;
    this.total = total;
  }
}
