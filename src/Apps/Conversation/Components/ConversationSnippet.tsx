import {
  ArrowRightCircleIcon,
  Box,
  Flex,
  Image,
  Link,
  Serif,
  StackableBorderBox,
} from "@artsy/palette"
import { ConversationSnippet_conversation } from "__generated__/ConversationSnippet_conversation.graphql"
import { DateTime } from "luxon"
import React from "react"
import { createFragmentContainer } from "react-relay"
import { graphql } from "relay-runtime"

interface ConversationSnippetProps {
  conversation: ConversationSnippet_conversation
}

const ConversationSnippet: React.FC<ConversationSnippetProps> = props => {
  const conversation = props.conversation
  // If we cannot resolve items in the conversation, such as deleted fair booths
  // prior to snapshotting them at time of inquiry (generally older conversations),
  // just skip over the entire conversation.
  if (conversation.items.length === 0) {
    console.warn(
      `Unable to load items for conversation with ID ${conversation.internalID}`
    )
    return null
  }

  const item = conversation.items[0].item

  let imageURL
  let title
  if (item.__typename === "Artwork") {
    imageURL = item.image && item.image.url
    title = item.title
  } else if (item.__typename === "Show") {
    imageURL = item.coverImage && item.coverImage.url
    title = item.name
  }
  const date = DateTime.fromISO(conversation.lastMessageAt).toRelative()

  const partnerName = conversation.to.name

  const conversationText =
    conversation.lastMessage && conversation.lastMessage.replace(/\n/g, " ")

  return (
    <Box py={1}>
      <StackableBorderBox
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex>
          <Flex height="auto" alignItems="center" mr={2}>
            <Image src={imageURL} width="55px" />
          </Flex>
          <Flex flexDirection="column" justifyContent="center">
            <Link
              href={`/user/conversations/${conversation.internalID}`}
              underlineBehavior="hover"
            >
              <Flex flexDirection="row">
                <Serif size="2">{partnerName}</Serif>
                <Serif size="2" ml={0.5} mr={0.5}>
                  -
                </Serif>
                <Serif italic size="2" color="black60">
                  {title && title.trim()}, {date}
                </Serif>
              </Flex>
            </Link>
            {conversationText}
          </Flex>
        </Flex>
        <Flex>
          <Link
            href={`/user/conversations/${conversation.internalID}`}
            underlineBehavior="hover"
          >
            <ArrowRightCircleIcon height="28px" width="24px" />
          </Link>
        </Flex>
      </StackableBorderBox>
    </Box>
  )
}

export const ConversationSnippetFragmentContainer = createFragmentContainer(
  ConversationSnippet,
  {
    conversation: graphql`
      fragment ConversationSnippet_conversation on Conversation {
        internalID
        to {
          name
        }
        lastMessage
        lastMessageAt
        unread
        items {
          item {
            __typename
            ... on Artwork {
              date
              title
              artistNames
              image {
                url
              }
            }
            ... on Show {
              fair {
                name
              }
              name
              coverImage {
                url
              }
            }
          }
        }
      }
    `,
  }
)
