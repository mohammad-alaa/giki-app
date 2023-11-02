import { Box, Button, Editable, EditableInput, EditablePreview, Flex, Input, VStack, useEditableControls } from "@chakra-ui/react"
import { Heading, Text } from '@chakra-ui/react'
import PenIcon from "./icons/PenIcon"
import { useRecoilState } from "recoil";
import { formStepState, modalFormState } from "../stores/ModalStateStore";


function Welcome() {

    const [_, setStepNo] = useRecoilState(formStepState);
    const [form, setForm] = useRecoilState(modalFormState);

    function EditableControls() {
        const {
            isEditing,
            getEditButtonProps,
        } = useEditableControls()

        return isEditing ? (
            <></>
        ) : (
            <Flex justifyContent='center'>
                <Box  {...getEditButtonProps()} className="absolute top-1/2 right-[18px]" transform={'translateY(-50%)'}>
                    <PenIcon />
                </Box>
            </Flex>
        )
    }

    return (
        <VStack alignItems={'center'} justifyContent={'center'} mx={'auto'} spacing={0}>
            <Box
                mt={'55px'}
                className="flex justify-center items-center w-[124px] h-[124px] text-[50px] font-bold bg-app-gray rounded text-white"
                textShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}>A</Box>
            <Text
                mt={'11px'}
                className="text-sm text-[#b3b3b3]"
                textShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}
            >alice@wonderland.space</Text>
            <Heading
                mt={'30px'}
                className="app-h2 text-app-gray"
            >Welcome to Giki</Heading>

            <Editable
                defaultValue={form.name}
                isPreviewFocusable={false}
                mt={'6px'}
                className="!text-primary text-[28px] font-bold relative min-w-[245px] rounded-lg text-center !py-1 !px-8 w-auto break-words"
                borderRadius={'md'}
                color='white'
            >
                <EditablePreview />
                {/* Here is the custom input */}
                <Input as={EditableInput} onChange={(e) => setForm(form => ({ ...form, name: e.target.value }))} />
                <EditableControls />
            </Editable>


            <Text
                mt={'25px'}
                className="text-[#262626] text-[12px] text-center"
                maxW={'310px'}
                textShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}

            >Your answers to the next few questions will help us find the right communities for you</Text>
            <Button
                mt={'22px'}
                variant={'with-shadow'} textTransform='uppercase'
                isDisabled={!form.name}
                onClick={() => setStepNo(2)}
            >next</Button>

        </VStack>
    )
}

export default Welcome