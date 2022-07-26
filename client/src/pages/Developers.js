import { useState } from "react";
import Card from "../components/card";
import Carroussel from "../components/carousel";
import { QUERY_DEVELOPERS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import profPic from "../assets/img/profile.jpeg";
import DevProject from "../components/devProject";

function DevCarousel() {
  const { loading, data } = useQuery(QUERY_DEVELOPERS);

  const devs = data?.developers || [];
  const [currentDev, setCurrentDev] = useState(0);

  const mappedDev = devs.map((dev) => {
    return {
      key: dev._id,
      content: (
        <Card
          imagen={profPic}
          name={dev.name}
          position={dev.position}
          job_status={dev.job_status}
          bio={dev.bio}
          email={dev.email}
          _id={dev._id}
        />
      ),
    };
  });

  let cards = mappedDev;

  return (
    <>
      <div className="">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <Carroussel
              cards={cards}
              height="450px"
              width="80%"
              margin="80px auto"
              offset={2}
              showArrows={true}
              currentDev={currentDev}
              updateDev={setCurrentDev}
            />
            <div>
              <DevProject dev={devs[currentDev]} num={currentDev} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default DevCarousel;
