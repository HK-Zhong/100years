import { IApi } from "@umijs/types";

export default (api: IApi) => {
  api.addHTMLHeadScripts(() => [
    {
      type: "text/javascript",
      src: "https://webapi.amap.com/maps?v=2.0&key=2fa69209ee5fb1005b605cbb4f91eab4",
    },
  ]);
};
