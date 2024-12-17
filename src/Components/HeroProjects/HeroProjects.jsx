import React from 'react'
import { Box, Button } from '@chakra-ui/react'

export const CircularButtonWithText = () => {
  return (
    <Box position='relative' w='200px' h='200px' mx='auto'>
      {/* Rotating Text */}
      <svg
        viewBox='0 0 200 200'
        xmlns='http://www.w3.org/2000/svg'
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <path
          id='circlePath'
          d='M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0'
          fill='none'
        />
        <text>
          <textPath
            href='#circlePath'
            startOffset='50%'
            textAnchor='middle'
            style={{
              fill: 'teal',
              fontSize: '14px',
              animation: 'rotateText 6s linear infinite',
              textTransform: 'uppercase'
            }}
          >
            Take a look at my projects Take a look at my projects
          </textPath>
        </text>
      </svg>

      {/* Circular Button */}
      <Button
        w='100px'
        h='100px'
        borderRadius='50%'
        bg='teal.500'
        color='white'
        position='absolute'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
        _hover={{ bg: 'teal.600' }}
      >
        Click Me
      </Button>

      <style>
        {`
          @keyframes rotateText {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          textPath {
            transform-origin: center;
            display: block;
          }
        `}
      </style>
    </Box>
  )
}

export default CircularButtonWithText
