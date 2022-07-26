import { v4 as uuidv4 } from "uuid";
import Card from "../components/card";
import Carroussel from "../components/carousel";
import { QUERY_DEVELOPERS } from "../utils/queries";
import { useQuery } from "@apollo/client";

function DevCarousel() {
  const { loading, data } = useQuery(QUERY_DEVELOPERS);

  const devs = data?.developers || [];
  console.log(devs);
  const mappedDev = devs.map((dev) => {
    return {
      key: dev._id,
      content: (
        <Card
          imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg"
          name={dev.name}
          position={dev.position}
          job_status={dev.job_status}
          bio={dev.bio}
        />
      ),
    };
  });
  console.log(mappedDev);
  let cards = mappedDev;
  console.log(cards);

  return (
    <div className="">
      <Carroussel
        cards={cards}
        height="450px"
        width="80%"
        margin="80px auto"
        offset={2}
        showArrows={true}
      />
    </div>
  );
}

export default DevCarousel;
