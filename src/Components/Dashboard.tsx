import { AddIcon } from '@chakra-ui/icons'
import { Button, Stack } from '@chakra-ui/react'

export default function Homepage() {
  return (
      <>

        <Stack direction='row' spacing={4} mt="50px" ml="300px">
          <Button leftIcon={<AddIcon />} background="#F2A143" color='White' variant='solid' >
          Plan An Audit
          </Button>
        </Stack>

      </>
  )
}
