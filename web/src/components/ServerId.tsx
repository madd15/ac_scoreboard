import { useContext } from "react";
import { LocaleContext } from "./Scoreboard";
import {
  Text,
  Tag,
  TagLeftIcon,
  Stack,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";
import { FaIdBadge } from "react-icons/fa";

interface Props {
  serverId: number;
}

const ServerId: React.FC<Props> = (props: Props) => {
  const locales = useContext(LocaleContext);
  const { hasCopied, onCopy } = useClipboard(props.serverId.toString(), 2500);

  return (
    <Stack>
      <Tooltip
        closeOnClick={false}
        label={hasCopied ? locales["ui_copied"] : locales["ui_your_id"]}
      >
        <Tag onClick={onCopy} cursor="pointer">
          <TagLeftIcon as={FaIdBadge} boxSize={4} />
          <Text>{props.serverId}</Text>
        </Tag>
      </Tooltip>
    </Stack>
  );
};

export default ServerId;
