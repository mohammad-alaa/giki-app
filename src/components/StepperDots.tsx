import { Box, HStack } from "@chakra-ui/react";

interface StepperDotsProps {
    total: number;
    step: number;
}
function StepperDots({ total, step }: StepperDotsProps) {

    return (
        <HStack justifyContent={'center'}>
            {Array.from({ length: total }, (_, i) => i + 1).map(i => (
                <Box key={i} className={"rounded-full w-[5px] h-[5px] " + (i <= step ? 'bg-primary' : 'bg-gray-600')}></Box>
            ))}
        </HStack>
    );
}

export default StepperDots;