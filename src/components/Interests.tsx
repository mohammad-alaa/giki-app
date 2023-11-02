import { Button, Stack, VStack, Heading, SimpleGrid } from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Interest, formStepState, isModalFormValid, modalFormState, showModal, showSuccessModal } from "../stores/ModalStateStore";
import InterestCard from "./InterestCard";

export function Interests() {

    const [, setStepNo] = useRecoilState(formStepState);
    const [form, setForm] = useRecoilState(modalFormState);
    const isFormValid = useRecoilValue(isModalFormValid);
    const [, setIsModalOpen] = useRecoilState(showModal);
    const [, setIsSuccessModalOpen] = useRecoilState(showSuccessModal);

    const onInterestClick = (item: Interest) => {
        setForm(f => ({
            ...f,
            interests: f.interests.map(i => i.id != item.id ? i : ({ ...i, selected: !i.selected }))
        }))
    }

    const onSubmit = () => {
        setIsModalOpen(false);
        setIsSuccessModalOpen(true);
        setStepNo(1);
    }

    return (
        <VStack alignItems={'center'} spacing={0} justifyContent={'center'} mx={'auto'}>
            <Heading
                mt={'93px'}
                maxW={'375px'}
                lineHeight={'normal'}
                className="app-h2 text-gray-600 text-center"
            >Tell us what you're  interested in</Heading>

            <SimpleGrid minChildWidth='125px' spacingY='16px' spacingX='12px' width={'100%'} mt={'16px'}>


                {form.interests.map(item => (
                    <InterestCard key={item.id} onClick={() => onInterestClick(item)} {...item} />
                ))}
            </SimpleGrid>

            <Stack spacing={3} alignItems={'center'} width={'100%'} mt={'40px'}>
                <Button textTransform='uppercase'
                    isDisabled={!isFormValid}
                    onClick={onSubmit}
                >{isFormValid ? 'submit' : 'pick 3 more'}</Button>
                <Button variant={'link'} color={'#000'} fontSize={'10px'} textTransform='uppercase'
                    onClick={() => setStepNo(2)}>back</Button>
            </Stack>

        </VStack>
    );
}



export default Interests