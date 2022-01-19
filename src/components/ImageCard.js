import { Card, CardMedia, H5, Subtitle2, CardContent } from "ui-neumorphism";
import LikeButton from "./LikeButton";

export default function ImageCard({ photo, index }) {
  return (
    <div
      style={{
        display: "inline-block"
      }}
    >
      <Card
        width={300}
        style={{
          margin: "2vw",
          marginBottom: "3rem",
          paddingBottom: "0.75rem",
          display: "inline-block"
        }}
        elevation={5}
      >
        <CardMedia
          dark
          src={photo.img_src}
          title={`#${index + 1} - NASA Mars Rover`}
          style={{
            borderRadius: "8px !important",
            overflow: "clip !important"
          }}
        />
        <div
          style={{
            display: "flex"
          }}
        >
          <CardContent>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <Subtitle2 secondary style={{ marginBottom: "4px" }}>
                  By Rover : {photo.rover.name}
                </Subtitle2>
                <H5>{photo.camera.name + " - " + photo.sol}</H5>
                <Subtitle2 secondary style={{ marginBottom: "12px" }}>
                  Camera : {photo.camera.name}
                  <br />
                  Sol : {photo.sol}
                </Subtitle2>
              </div>
              <LikeButton />
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
