export default class 後端網址  {
  static 主機() {

    // return 'http://localhost:8000';
    return 'https://xn--kbr112a4oa73rtw5adwqr1d.xn--v0qr21b.xn--kpry57d';
  }

  static 全部資料() {
    return this.主機();
  }

  static 看書面(pian1ho7) {
    return this.主機() + '/看書面/' + pian1ho7;
  }

  static 原始檔案(檔案) {
    return this.主機() + 檔案;
  }

  static 登入()  {
    return this.主機() + '/accounts/facebook/login/?process=login';
  }

  static 登入無()  {
    return this.主機() + '/accounts/登入無/';
  }

  static 算字數()  {
    return this.主機() + '/算字數/';
  }

  static 斷詞狀態()  {
    return this.主機() + '/斷詞狀態/';
  }

  static 對齊() {
    return 'https://xn--lhrz38b.xn--v0qr21b.xn--kpry57d/漢字音標對齊';
  }

}
