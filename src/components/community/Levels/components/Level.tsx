import { Center, Flex, Image, Heading, Stack, Button, Text } from "@chakra-ui/react"
import { useState } from "react"
import type { Level as LevelType, Token } from "temporaryData/types"
import InfoTags from "./InfoTags"

type Props = {
  data: LevelType
  token: Token
}

const Level = ({ data, token }: Props): JSX.Element => {
  const [state, setState] = useState("todo")

  return (
    <Flex justifyContent="space-between">
      <Stack direction="row" spacing="6">
        <Image src={`${data.imageUrl}`} boxSize="45px" alt="Level logo" />
        <Stack>
          <Heading size="sm">{data.name}</Heading>
          <InfoTags
            data={data.accessRequirement}
            membersCount={data.membersCount}
            tokenSymbol={token.symbol}
          />
          {data.desc && <Text pt="4">{data.desc}</Text>}
        </Stack>
      </Stack>
      <Center>
        <Button colorScheme="primary" fontWeight="medium">
          Stake to join
        </Button>
      </Center>
    </Flex>
  )
}

export default Level