import "./style/main.scss";
import start from "./utils/api";
import tv from "./utils/series";
import play from "./utils/top-rated";

window.addEventListener('load',start);
window.addEventListener('load', tv);
window.addEventListener('load', play);