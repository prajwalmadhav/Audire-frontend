import { AddIcon } from '@chakra-ui/icons'
import { Button, Stack } from '@chakra-ui/react'
import React from 'react'

export default function Homepage() {
  return (
      <>

        <Stack direction='row' spacing={4} mt="50px" ml="300px">
          <Button leftIcon={<AddIcon />} background="#F2A143" color='White' variant='solid'>
          Plan an Audit
          </Button>
        </Stack>

      </>
  )
}
