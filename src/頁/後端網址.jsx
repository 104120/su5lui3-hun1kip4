export default class 後端網址  {
  static 全部資料() {
    return 'http://localhost:8000/';
  }

  static 看書面(pian1ho7) {
    return 'http://localhost:8000/看書面/' + pian1ho7;
  }

  static 原始檔案(檔案) {
    return 'http://localhost:8000' + 檔案;
  }
}
