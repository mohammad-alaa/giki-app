import './App.css'
import { Box, Button, Heading, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Stack, Text } from '@chakra-ui/react'
import Welcome from './components/Welcome'
import { useEffect, useRef } from 'react'
import Settings from './components/Settings'
import Interests from "./components/Interests"
import { useRecoilState } from 'recoil'
import { formStepState, showModal, showSuccessModal } from './stores/ModalStateStore';
import '@dotlottie/player-component';
import StepperDots from './components/StepperDots'

function App() {
  const [isOpen, setIsOpen] = useRecoilState(showModal);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useRecoilState(showSuccessModal);
  const [stepNo, setStepNo] = useRecoilState(formStepState);
  const prevStepNo = useRef(1);
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (stepNo == prevStepNo.current) return;
    if (!ref.current) {
      alert('ref is null');
      return
    }
    const dir = (stepNo - prevStepNo.current) / Math.abs((stepNo - prevStepNo.current))
    ref.current.scrollBy({
      left: ref.current.scrollWidth / 3 * dir,
      behavior: 'smooth',
    });
    prevStepNo.current = stepNo;
  }, [stepNo])

  return (
    <>

      <Image src='/logo.png' alt='giki logo' className='px-4 sm:px-0' />
      <Button variant={'with-drop-shadow'} onClick={() => setIsOpen(true)} mt={100} w={'min(90%, 409px)'} textTransform='uppercase'>open model</Button>

      <Modal isOpen={isOpen} closeOnOverlayClick={false} onClose={() => { setIsOpen(false); setStepNo(1) }} isCentered>
        <ModalOverlay />
        <ModalContent height={'min(90%, 612px)'} maxW={'min(90%, 612px)'}>
          <ModalBody py={0} overflowY={'auto'} >
            <Box ref={ref} className="flex overflow-x-hidden" >
              <Box className='shrink-0 basis-full'><Welcome /></Box>
              <Box className='shrink-0 basis-full'><Settings /></Box>
              <Box className='shrink-0 basis-full'><Interests /></Box>
            </Box>
            {/* {stepNo == 1 && <Welcome />}
            {stepNo == 2 && <Settings />}
            {stepNo == 3 && <Interests />} */}
            {/* <Box mt={4}>
              <StepperDots total={3} step={stepNo} />
            </Box> */}
          </ModalBody>
          <ModalFooter justifyContent={'center'} height={'fit-content'} pt={0}>
            <Box mt={4}>
              <StepperDots total={3} step={stepNo} />
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)} isCentered>
        <ModalOverlay />
        <ModalContent maxH={'612px'} maxW={'min(90%, 612px)'} overflowY={'auto'}>
          <ModalBody>
            <Stack alignItems={'center'}>

              <dotlottie-player
                src="/success1.lottie"
                autoplay
                speed={.6}
                style={{ height: '200px', width: '200px' }}
              />
              <Heading className="app-h2 text-gray-600 text-center" textTransform={'capitalize'}>awesome!</Heading>
              <Text textTransform={'capitalize'}>your submission has been sent</Text>
            </Stack>
          </ModalBody>
          <ModalFooter justifyContent={'center'}>
            <Button onClick={() => setIsSuccessModalOpen(false)} my={4}>Continue</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


    </>
  )
}

export default App
