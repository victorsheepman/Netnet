import "./style/main.scss";
import start from "./utils/api";
import tv from "./utils/series";
import play from "./utils/top-rated";

import router from "./routes";

window.addEventListener('load', router);

window.addEventListener('hashchange', router);