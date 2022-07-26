import Card from "../components/card";
import Carroussel from "../components/carousel";
import { useQuery } from "@apollo/client";
import { QUERY_DEVELOPERS } from "../utils/queries";
let cards = [];
function UserCards() {
  const { data } = useQuery(QUERY_DEVELOPERS);
  const developers = data?.developers || [];
  for (let i = 0; i < developers.length; i++) {
    console.log(developers);
    // cards.push({ content: <Card developers={developers[i]} /> });
  }
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

export default UserCards;
