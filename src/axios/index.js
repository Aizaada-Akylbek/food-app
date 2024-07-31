import axios from "axios";

const axiosCopy = axios.create({
  baseURL: "https://www.themealdb.com",
});
export default axiosCopy;

//Ушул axios ту колдонуп эле запрос кетире беребиз, а бул болсо баш жагына base url коюп кете берет
