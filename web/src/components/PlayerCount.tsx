import { useContext } from "react";
import { LocaleContext } from "./Scoreboard";
import {
  Text,
  Tag,
  TagLeftIcon,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import { FaUserFriends } from "react-icons/fa";

interface Props {
  playerCount: number;
  maxPlayers: number;
}

const PlayerCount: React.FC<Props> = (props: Props) => {
  const locales = useContext(LocaleContext);

  return (
    <Stack>
      <Tooltip closeOnClick={false} label={locales["ui_player_count"]}>
        <Tag>
          <TagLeftIcon as={FaUserFriends} boxSize={4} />
          <Text>
            {props.playerCount} / {props.maxPlayers}
          </Text>
        </Tag>
      </Tooltip>
    </Stack>
  );
};

export default PlayerCount;
