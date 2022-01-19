import { useEffect, useState } from "react";
import { overrideThemeVariables, Divider } from "ui-neumorphism";
import { RevolvingDot } from "react-loader-spinner";
import "ui-neumorphism/dist/index.css";
import "./styles.css";
import ImageCard from "./components/ImageCard";
import Header from "./components/Header";
export default function App() {
  const [photos, setPhotos] = useState([]);

  const availableDates = [
    "2015-12-25",
    "2015-12-24",
    "2015-12-23",
    "2015-12-21",
    "2015-12-19",
    "2015-12-18",
    "2015-12-15",
    "2015-12-12",
    "2015-12-09",
    "2015-12-07"
  ];

  const getRandomDate = () => {
    return availableDates[Math.floor(Math.random() * availableDates.length)];
  };

  const getNasaInfo = async () => {
    const NASA_API_KEY = "zOqrugAh44YGGj6k6zQCv6Ua4Njec7FkOa50I4gC";
    const BASE_URL =
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";
    var nasaPhotosQueryURL = new URL(BASE_URL),
      params = { api_key: NASA_API_KEY, earth_date: getRandomDate() };
    Object.keys(params).forEach((key) =>
      nasaPhotosQueryURL.searchParams.append(key, params[key])
    );
    console.log("URL: ", nasaPhotosQueryURL);

    return await fetch(nasaPhotosQueryURL)
      .then(async (res) => {
        const data = await res.json();

        return data.photos;
      })
      .catch((err) => {
        throw err;
      });
  };

  const setupDetails = async () => {
    const results = await getNasaInfo();
    console.log("RESULTS: ", results);
    setPhotos(results);
  };

  useEffect(() => {
    overrideThemeVariables({
      "--light-bg": "#D6DEFA",
      "--light-bg-dark-shadow": "#ba9294",
      "--light-bg-light-shadow": "#ffdcde",
      "--dark-bg": "#292E35",
      "--dark-bg-dark-shadow": "#21252a",
      "--dark-bg-light-shadow": "#313740",
      "--primary": "#8672FB",
      "--primary-dark": "#4526f9",
      "--primary-light": "#c7befd"
    });
    setupDetails();
  }, []);

  return (
    <div className="App">
      <Header />
      <Divider />
      {photos?.length > 0 ? (
        photos.map((photo, index) => (
          <ImageCard photo={photo} index={index} key={index} />
        ))
      ) : (
        <div
          className="loader-box"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <RevolvingDot color="#00BFFF" width={"100"} height={"100"} />
        </div>
      )}
    </div>
  );
}
