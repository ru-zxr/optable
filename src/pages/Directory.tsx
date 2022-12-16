import React, { useState, useEffect } from 'react'
import {
  Flex,
  Box,
  Text,
  Input,
  Img,
  Image,
  Divider,
  Avatar,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import styled from 'styled-components'
import { COLORS } from '../constants/constants'
import MOCK_USER from '../constants/randonUser.json'
import { UserAssets } from '../constants/assets'
import UserCard from '../components/UserCard'

function Directory() {
  const [value, setValue] = React.useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)

  const userArr = MOCK_USER.map((user: any, idx: number) => {
    return {
      id: idx,
      ...user,
    }
  })
  const [users, setUsers] = useState<App.User[]>(userArr)

  const [currUser, setCurrUser] = useState<App.User>(users[0])
  const setUser = (user: App.User) => {
    setCurrUser(user)
  }

  // construct a dictionary where keys are letters from A to Z, values are empty array
  const nameDict: Record<string, App.User[]> = {}
  const startIndex = 'A'.charCodeAt(0)
  for (let i = 0; i < 26; i++) {
    const key = String.fromCharCode(i + startIndex)
    nameDict[key] = []
  }
  // iterate through the userArr, sort and push user to the nameDict according to the first letter of their last_name
  // jump over if the first letter of user's last_name is a letter from A to Z
  for (let i = 0; i < userArr.length; i++) {
    const user = userArr[i]
    const firstLetter = user.last_name[0].toUpperCase()
    if (!(firstLetter in nameDict)) continue
    nameDict[firstLetter].push(user)
  }

  return (
    <Flex>
      <Flex>
        <Flex direction="column" align="center" p="3vh 0 ">
          <Flex direction="column" w="100%" p="0 2vh" mb="2vh">
            <Text textStyle="title">Directory</Text>
            <Text textStyle="body" mb="10px">
              Search directory of {users.length} employees
            </Text>
            <Input placeholder="Search" size="sm" value={value} onChange={handleChange}></Input>
          </Flex>
          <Box w="100%" h="85vh" display="flex" flexDirection="column" overflowY="scroll">
            <Accordion allowToggle w="300px">
              {Object.entries(nameDict).map(([key, value]) => {
                return (
                  <AccordionItem key={key}>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" fontSize="xs" color="font.secondary">
                        {key}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel p="0">
                      {value.map((user) => (
                        <Flex
                          key={user.id}
                          align="center"
                          justifyContent="flex-start"
                          w="100%"
                          p="8px 1vh"
                          cursor="pointer"
                          _hover={{ background: COLORS.gray200 }}
                          background={user.id === currUser.id ? COLORS.gray200 : 'transparent'}
                          onClick={() => setUser(user)}
                        >
                          <Avatar size="sm" name={user.username} mr="15px" />
                          <Flex direction="column">
                            <Text textStyle="subtitle">{user.first_name + ' ' + user.last_name}</Text>
                            <Text textStyle="body">{user.email}</Text>
                          </Flex>
                        </Flex>
                      ))}
                    </AccordionPanel>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </Box>
        </Flex>
      </Flex>
      <Flex direction="column" w="70%">
        <Flex pos="relative">
          <Img src={UserAssets.DefaultCover} w="100%" h="18vh" objectFit="cover" />
          <Flex pos="absolute" bottom="-35px" left="35px">
            <Avatar size="xl" name={currUser.username} mr="15px" />
          </Flex>
        </Flex>
        <Flex justifyContent="flex-end" mt="2vh">
          <Button variant="outline" size="sm" mr="15px">
            Message
          </Button>
          <Button variant="outline" size="sm">
            Call
          </Button>
        </Flex>
        <Flex direction="column" mt={2} p="0 2vw">
          <Text fontSize="lg" color="font.primary" fontWeight="bold">
            {currUser.username}
          </Text>
          <Tabs mt={4} size="sm" colorScheme={'pink'}>
            <TabList>
              <Tab>Profile</Tab>
              <Tab>Calendar</Tab>
              <Tab>Recognition</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                  <GridItem w="100%" h="10">
                    <Text fontStyle="subtitle">Phone</Text>
                    <Text textStyle="description" mb="10px">
                      {currUser.phone_number}
                    </Text>
                  </GridItem>
                  <GridItem w="100%" h="10">
                    <Text fontStyle="subtitle">Email</Text>
                    <Text textStyle="description" mb="10px">
                      {currUser.email}
                    </Text>
                  </GridItem>
                  <GridItem w="100%" h="10">
                    <Text fontStyle="subtitle">Title</Text>
                    <Text textStyle="description" mb="10px">
                      {currUser.title}
                    </Text>
                  </GridItem>
                  <GridItem w="100%" h="10">
                    <Text fontStyle="subtitle">Team</Text>
                    <Text textStyle="description" mb="10px">
                      {currUser.last_name}
                    </Text>
                  </GridItem>
                  <GridItem w="100%" h="10">
                    <Text fontStyle="subtitle">Location</Text>
                    <Text textStyle="description" mb="10px">
                      {currUser.location.city}
                    </Text>
                  </GridItem>
                  <GridItem w="100%" h="10">
                    <Text fontStyle="subtitle">Birthday</Text>
                    <Text textStyle="description" mb="10px">
                      {currUser.birthday}
                    </Text>
                  </GridItem>
                </Grid>
                <Flex direction="column" mt={5}>
                  <Text fontStyle="subtitle">About</Text>
                  <Text textStyle="description" mb="10px">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                  </Text>
                  <Text textStyle="description" mb="10px">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae modi
                    molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                  </Text>
                </Flex>
                <Text fontStyle="subtitle" mt={2}>
                  Team
                </Text>
                <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                  <GridItem w="100%" h="10">
                    <UserCard currUser={currUser} />
                  </GridItem>{' '}
                  <GridItem w="100%" h="10">
                    <UserCard currUser={currUser} />
                  </GridItem>{' '}
                  <GridItem w="100%" h="10">
                    <UserCard currUser={currUser} />
                  </GridItem>{' '}
                  <GridItem w="100%" h="10">
                    <UserCard currUser={currUser} />
                  </GridItem>
                </Grid>
              </TabPanel>
              <TabPanel>Calendar</TabPanel>
              <TabPanel>Recognition</TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Directory
