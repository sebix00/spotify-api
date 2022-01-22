import { StyledTrackList } from "./styles/TrackList.styled";
import Track from "./Track";

const DUMMY_TRACK = [
  { title: "Krzysztof Krawczyk - Trudno Być" },
  { title: "Krzysztof Krawczyk - Chciałbym Być" },
  { title: "Krzysztof Krawczyk - Ile bym dał" },
  { title: "Krzysztof Krawczyk - To nie to samo" },
];

const TrackList = () => {
  const element = DUMMY_TRACK.map((track) => <Track title={track.title} />);

  return <StyledTrackList>{element}</StyledTrackList>;
};

export default TrackList;
