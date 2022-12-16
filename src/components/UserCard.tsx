import React, { useState, useEffect } from 'react'
import { Flex, Text, Avatar } from '@chakra-ui/react'

const UserCard = ({ currUser }: { currUser: App.User }) => {
  return (
    <Flex align="center" justifyContent="flex-start" w="100%" p="8px 2vh">
      <Avatar size="sm" name={currUser.username} mr="15px" />
      <Flex direction="column">
        <Text textStyle="subtitle">{currUser.username}</Text>
        <Text textStyle="description">{currUser.email}</Text>
      </Flex>
    </Flex>
  )
}

export default UserCard
