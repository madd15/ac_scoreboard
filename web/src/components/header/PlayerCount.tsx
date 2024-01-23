import { useContext } from "react";
import { LocaleContext } from "../Scoreboard";
import {
  Text,
  Tag,
  TagLeftIcon,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import { FaPeopleGroup } from "react-icons/fa6";

interface Props {
  playerCount: number;
  maxPlayers: number;
  visibleMaxPlayers: boolean;
}

const PlayerCount: React.FC<Props> = (props: Props) => {
  const locales = useContext(LocaleContext);
  let players = props.playerCount.toString()
  if (props.visibleMaxPlayers) {
    players = props.playerCount+' / '+props.maxPlayers
  }
  return (
    <Stack>
      <Tooltip closeOnClick={false} label={locales["ui_player_count"]}>
        <Tag>
          <TagLeftIcon as={FaPeopleGroup} boxSize={4} />
          <Text>
            {players}
          </Text>
        </Tag>
      </Tooltip>
    </Stack>
  );
};

export default PlayerCount;
