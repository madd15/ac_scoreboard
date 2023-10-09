import { Img, Text } from "@chakra-ui/react";

interface Props {
    visibleImage: boolean;
    serverImage?: string;
    serverName?: string;
}

const MainHeader: React.FC<Props> = (props: Props) => {
    return props.visibleImage ? <Img src={props.serverImage} alt={props.serverName} /> : <Text>{props.serverName}</Text>;
};

export default MainHeader;
