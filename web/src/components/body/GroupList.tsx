import { useContext } from "react";
import { LocaleContext } from "../Scoreboard";
import { Stack, Flex, Text, Tag, Icon } from "@chakra-ui/react";
import type { Group } from "../../interfaces/group";
import SectionHeader from "./SectionHeader";

interface Props {
  groups: Array<Group>;
}

const GroupList: React.FC<Props> = (props: Props) => {
  const locales = useContext(LocaleContext);

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
          >
            <Text noOfLines={1} casing="uppercase" fontWeight="medium">
            {group.icon}{group.label}
            </Text>
            <Tag colorScheme={group.count <= 0 ? "red" : "green"}>
              {group.count}
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
