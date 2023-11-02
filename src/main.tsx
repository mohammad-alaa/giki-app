import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider, defineStyleConfig, extendTheme } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'


const theme = extendTheme({

  fonts: {
    heading: `"Montserrat", sans-serif`,
    body: `"Montserrat", sans-serif`,
  },
  colors: {
    giki: {
      100: "#ffe5cc",
      200: "#ffca99",
      300: "#ffb066",
      400: "#ff9633",
      500: "#ff8c1e",
      600: "#cc6300",
      700: "#994a00",
      800: "#663100",
      900: "#331900",
    },
  },


  components: {
    Heading: defineStyleConfig({
      baseStyle: {

      }
    }),


    Button: {
      baseStyle: () => {
        // console.log(props);
        return {
          borderRadius: '8px',
          width: '245px',
          fontSize: '14px',
          fontWeight: 600,
          _disabled: {
            backgroundColor: '#B3B3B3',
            _hover: {
              backgroundColor: '#B3B3B3 !important',
            }
          }
        }
      },

      sizes: {
        md: {
          h: '41.138px',

        },
      },

      variants: {
        'with-shadow': (props: any) => ({
          ...theme.components.Button.variants.solid(props),
          boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        }),
        'with-drop-shadow': (props: any) => ({
          ...theme.components.Button.variants.solid(props),
          filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        }),

      },

      defaultProps: {
        colorScheme: 'giki',
      },
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ChakraProvider>
  </React.StrictMode>,
)
