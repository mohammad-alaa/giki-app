import { Box, Text } from "@chakra-ui/react";
import CheckIcon from "./icons/CheckIcon";
import { Interest } from "../stores/ModalStateStore";

interface InterestCardProps extends Interest {
    onClick: () => void;
}

function InterestCard(props: InterestCardProps) {

    return (
        <Box
            onClick={props.onClick}
            className={"flex flex-col p-2 " + (props.selected ? "outline outline-1 outline-orange-500 outline-offset-2" : '')}
            w={131} h={125} backgroundImage={`url(${props.image})`} borderRadius={'lg'} backgroundSize={'cover'} backgroundPosition={'center'}>
            {props.selected && <Box alignSelf={'end'}>
                <CheckIcon />
            </Box>}
            <Text className="text-sm" color={'white'} mt={'auto'} fontWeight={'semibold'}>{props.name}</Text>
        </Box>
    )

}

export default InterestCard