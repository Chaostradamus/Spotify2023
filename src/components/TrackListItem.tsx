import { Text } from "react-native";

export default function TrackListItem({track}) {
  return <Text style={{ color: "white" }}>{track.name}</Text>;
}
