import { VStack, Heading, Stack, Select, Button } from "@chakra-ui/react"
import { useRecoilState } from "recoil";
import { formStepState, modalFormState } from "../stores/ModalStateStore";

const LANGUAGES = [
    { id: '', name: "" },
    { id: 'en', name: 'English (US)' },
    { id: 'ar', name: 'Arabic (AR)' },
]

const COUNTRIES = [
    { id: '', name: "" },
    { id: 'sy', name: 'Syria' },
    { id: 'lb', name: 'Lebanon' },
    { id: 'it', name: 'Italy (Italia)' }
]

function Settings() {

    const [, setStepNo] = useRecoilState(formStepState);
    const [form, setForm] = useRecoilState(modalFormState);

    return (
        <VStack alignItems={'center'} justifyContent={'center'} mx={'auto'} maxW={'361px'} spacing={0}>
            <Heading
                as={'h2'}
                mt={'72px'}
                className="app-h2 text-gray-600 text-center"
            >Pick your language and country/region</Heading>

            <Stack spacing={3} width={'100%'} mt={'77px'}>

                <Select placeholder="" size='lg' defaultValue={form.language}
                    onChange={(e) => setForm(form => ({ ...form, language: e.target.value }))}>
                    {LANGUAGES.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
                </Select>
                <Select placeholder="" size='lg' defaultValue={form.country}
                    onChange={(e) => setForm(form => ({ ...form, country: e.target.value }))}>
                    {COUNTRIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </Select>
            </Stack>

            <Stack spacing={3} alignItems={'center'} width={'100%'} mt={'180px'}>

                <Button variant={'with-shadow'} textTransform='uppercase'
                    isDisabled={!form.country || !form.language}
                    onClick={() => setStepNo(3)}>next</Button>
                <Button variant={'link'} color={'#000'} fontSize={'10px'} textTransform='uppercase'
                    onClick={() => setStepNo(1)}>back</Button>
            </Stack>
        </VStack>
    )
}

export default Settings