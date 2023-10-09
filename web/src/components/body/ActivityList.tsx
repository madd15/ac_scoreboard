import { useContext } from "react";
import { LocaleContext } from "../Scoreboard";
import { Stack, Flex, Text, Tag, Icon } from "@chakra-ui/react";
import SectionHeader from "./SectionHeader";
import type { Activity } from "../../interfaces/activity";
import type { Group } from "../../interfaces/group";
import { FaTimes, FaCheck } from "react-icons/fa";

interface Props {
  activities: Array<Activity>;
  groups: Array<Group>;
}

const ActivityList: React.FC<Props> = (props: Props) => {
  const locales = useContext(LocaleContext);

  const Activities = props.activities.map((activity, index) => {
    let group = props.groups.filter((group) => {
      if (group.label == activity.groupLabel) {
        return true;
      } });
    console.log(activity.label)
    console.log(activity.minNumber)
    return {
      index: index,
      label: activity.label,
      minNumber: activity.minNumber,
      groupCount: group,
      separator: activity.separator
    };
  });
  return (
    <Stack direction="column" spacing="1">
      <SectionHeader left={locales["ui_activities"]} right="" />
      {Activities.map((activity, index) => (
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
              {activity.label}
            </Text>
            <Tag colorScheme={activity.minNumber > activity.groupCount[0].count ? "red" : "green"}>
              <Icon as={activity.minNumber > activity.groupCount[0].count ? FaTimes : FaCheck} boxSize={4} />
            </Tag>
          </Flex>
          {activity.separator && (
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

export default ActivityList;
