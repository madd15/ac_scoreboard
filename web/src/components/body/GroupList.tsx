import { useContext } from "react";
import { LocaleContext } from "../Scoreboard";
import { Stack, Flex, Text, Tag, Icon } from "@chakra-ui/react";
import type { Group } from "../../interfaces/group";
import SectionHeader from "./SectionHeader";
import * as FA6 from "react-icons/fa6";
import * as FA from "react-icons/fa";

interface Props {
  groups: Array<Group>;
}

const GroupList: React.FC<Props> = (props: Props) => {
  const locales = useContext(LocaleContext);

  const DynamicIcon = ({ name, colorScheme }) => {
    let FAIconComponent = FA[name];
    let FA6IconComponent = FA6[name];

    if (FAIconComponent) {
      return <Icon as={FAIconComponent} color={colorScheme} boxSize={6}/>;
    }else if (FA6IconComponent) {
      return <Icon as={FA6IconComponent} color={colorScheme} boxSize={6}/>;
    } else {
      return <Icon as={FA6.FaCircle} color={colorScheme} boxSize={6}/>;
    }

  };

  return (
    <Stack direction="column" spacing="1">
      <SectionHeader left={locales["ui_group"]} right={locales["ui_count"]} />
      {props.groups.filter((group)=>group.display == true).map((group, index) => (
        <>
          <Flex
            key={index}
            w="2xs"
            p={2}
            justifyContent="space-between"
            bg="gray.800"
            borderRadius={4}
            alignItems="bottom"
            opacity={group.count > 0 ? "1" : "0.5"}
          >
            {!!group.icon && <DynamicIcon name={group.icon} colorScheme={group.count <= 0 ? "red.500" : "green.500"}/> }
            <Text noOfLines={1} casing="capitalize" fontWeight="medium">
            {group.label}
            </Text>
            <Tag colorScheme={group.count <= 0 ? "red" : "green"}>
              {group.count > 0 ? group.count : "-"}
            </Tag>
          </Flex>
          {group.separator && (
            <div
              style={{
                margin: "8px 0 4px 0",
                border: "1px solid #ffffff28",
              }}
            />
          )}
        </>
      ))}
    </Stack>
  );
};

export default GroupList;
