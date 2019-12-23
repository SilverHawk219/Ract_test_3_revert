const baseurl = "http://localhost:8200/";

export default class axios {
  static post(url, data) {
    if (url.indexOf(baseurl + "api/token/") > -1) {
      if (data.username === "test" && data.password === "test") {
        return Promise.resolve({
          data: {
            access: "asldkfllskdjlfshkchxvioukbcxhskhf",
            refresh: "sdkjfaivuxkcjvhksufyksdjfkasjfhk"
          }
        });
      }
    }
  }
}
