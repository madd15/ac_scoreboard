import { Img, Text } from "@chakra-ui/react";

interface Props {
    visibleImage: boolean;
    serverImage?: string;
    serverName?: string;
}

const MainHeader: React.FC<Props> = (props: Props) => {
    return props.visibleImage ? <Img src={props.serverImage} alt={props.serverName} pb={1} maxHeight={150} margin={"auto"}/> : <Text>{props.serverName}</Text>;
};

export default MainHeader;
