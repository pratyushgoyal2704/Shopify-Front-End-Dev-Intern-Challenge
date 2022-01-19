import { Card } from "ui-neumorphism";
import NasaLogo from "../assets/nasa_logo.png";

export default function Header() {
  return (
    <Card
      style={{
        textAlign: "center",
        fontSize: "2rem"
      }}
    >
      <img
        style={{
          height: "4rem"
        }}
        src={NasaLogo}
        alt="NASA's logo"
      ></img>
      NASA : Mars Rover Image Gallery
    </Card>
  );
}
