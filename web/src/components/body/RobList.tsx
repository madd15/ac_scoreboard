import { useContext } from "react";
import { LocaleContext } from "../Scoreboard";
import { Stack, Flex, Text, Tag, Icon } from "@chakra-ui/react";
import SectionHeader from "./SectionHeader";
import type { Robbery } from "../../interfaces/robbery";
import type { Group } from "../../interfaces/group";
import { FaTimes, FaCheck } from "react-icons/fa";

interface Props {
  robberies: Array<Robbery>;
  groups: Array<Group>;
}

const RobberyList: React.FC<Props> = (props: Props) => {
  const locales = useContext(LocaleContext);
  const cops = props.groups.filter((group) => { if (group.label == "Police") { return true } });
  return (
    <Stack direction="column" spacing="1">
      <SectionHeader left={locales["ui_robberies"]} right="" />
      {props.robberies.map((robbery, index) => (
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
              {robbery.label}
            </Text>
            <Tag colorScheme={robbery.minCops > cops[0].count ? "red" : "gray"}>
              <Icon as={robbery.minCops > cops[0].count ? FaTimes : FaCheck} boxSize={4} />
            </Tag>
          </Flex>
          {robbery.separator && (
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

export default RobberyList;
