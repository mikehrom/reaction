import { Save_artwork } from "__generated__/Save_artwork.graphql"
import { SaveArtworkMutation } from "__generated__/SaveArtworkMutation.graphql"
import * as Artsy from "Artsy"
import { track } from "Artsy/Analytics"
import * as SchemaV2 from "Artsy/Analytics/v2/Schema"
import { extend, isNull } from "lodash"
import React from "react"
import {
  commitMutation,
  createFragmentContainer,
  graphql,
  RelayProp,
} from "react-relay"
import { TrackingProp } from "react-tracking"
import * as RelayRuntimeTypes from "relay-runtime"
import styled from "styled-components"
import { openAuthToFollowSave } from "Utils/openAuthModal"
import colors from "../../Assets/Colors"
import Icon from "../Icon"

const SIZE = 40

export interface SaveTrackingProps {
  context_page?: string
}

export interface SaveProps
  extends Artsy.SystemContextProps,
    React.HTMLProps<React.ComponentType> {
  artwork: Save_artwork
  contextModule: SchemaV2.AuthContextModule
  style?: any
  relay?: RelayProp
  relayEnvironment?: RelayRuntimeTypes.Environment
  mediator?: Artsy.Mediator
  render?: (props, state) => JSX.Element
  trackingData?: SaveTrackingProps
  tracking?: TrackingProp
}

// TODO: This will be refactored out once Artworks / Grids are full Relay in Force
// and intermediate local state becomes unnecessary
export interface SaveState {
  is_saved: boolean
  isHovered: boolean
}

@track()
export class SaveButton extends React.Component<SaveProps, SaveState> {
  state = {
    is_saved: null,
    isHovered: false,
  }

  get isSaved() {
    const isSaved = isNull(this.state.is_saved)
      ? this.props.artwork.is_saved
      : this.state.is_saved

    return isSaved
  }

  trackSave = () => {
    const {
      tracking,
      artwork: { is_saved, slug, internalID },
    } = this.props
    const trackingData: SaveTrackingProps = this.props.trackingData || {}
    const action = is_saved ? "Removed Artwork" : "Saved Artwork"
    const entityInfo = {
      entity_slug: slug,
      entity_id: internalID,
    }

    if (tracking) {
      tracking.trackEvent(extend({ action }, entityInfo, trackingData))
    }
  }

  handleSave() {
    const { user, artwork, relay, relayEnvironment } = this.props
    const environment = (relay && relay.environment) || relayEnvironment

    if (environment && user && user.id) {
      commitMutation<SaveArtworkMutation>(environment, {
        // TODO: Inputs to the mutation might have changed case of the keys!
        mutation: graphql`
          mutation SaveArtworkMutation($input: SaveArtworkInput!) {
            saveArtwork(input: $input) {
              artwork {
                id
                slug
                is_saved: isSaved
              }
            }
          }
        `,
        variables: {
          input: {
            artworkID: artwork.internalID,
            remove: this.isSaved,
          },
        },
        optimisticResponse: {
          saveArtwork: {
            artwork: {
              id: artwork.id,
              slug: artwork.slug,
              is_saved: !this.isSaved,
            },
          },
        },
        onError: error => {
          // Revert optimistic update
          if (this.props.render) {
            this.setState({
              is_saved: this.isSaved,
            })
          }

          console.error("Artwork/Save Error saving artwork: ", error)
        },
        onCompleted: ({ saveArtwork }) => {
          if (this.props.render) {
            this.setState({
              is_saved: saveArtwork.artwork.is_saved,
            })
          }
        },
      })
      this.trackSave()
    } else {
      openAuthToFollowSave(this.props.mediator, {
        contextModule: this.props.contextModule,
        entity: {
          slug: this.props.artwork.slug,
          name: this.props.artwork.title,
        },
        intent: SchemaV2.AuthIntent.saveArtwork,
      })
    }
  }

  mixinButtonActions() {
    return {
      onClick: () => this.handleSave(),
      onMouseEnter: () => {
        this.setState({
          isHovered: true,
        })
      },
      onMouseLeave: () => {
        this.setState({
          isHovered: false,
        })
      },
    }
  }

  renderDefaultButton() {
    const { style } = this.props
    const saveStyle = this.isSaved ? { opacity: 1.0 } : {}
    const fullStyle = { ...style, ...saveStyle }
    const iconName =
      this.isSaved && this.state.isHovered ? "remove-small" : "heart"
    const iconFontSize = iconName === "heart" ? "24px" : "16px"

    return (
      <div
        className={this.props.className}
        style={fullStyle}
        {...this.mixinButtonActions()}
      >
        <Container data-saved={this.isSaved}>
          <Icon
            name={iconName}
            height={SIZE}
            color="white"
            fontSize={iconFontSize}
            style={{ verticalAlign: "middle" }}
          />
        </Container>
      </div>
    )
  }

  renderCustomButton() {
    return (
      <div {...this.mixinButtonActions()}>
        {this.props.render(this.props, this.state)}
      </div>
    )
  }

  render() {
    return this.props.render
      ? this.renderCustomButton()
      : this.renderDefaultButton()
  }
}

export const Container = styled.div`
  display: block;
  width: ${SIZE}px;
  height: ${SIZE}px;
  text-align: center;
  cursor: pointer;
  color: white;
  background-color: ${colors.gray};
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  font-size: 16px;
  line-height: ${SIZE}px;

  &:hover {
    background-color: black;
  }

  &[data-saved="true"] {
    background-color: ${colors.purpleRegular};

    &:hover {
      background-color: ${colors.redMedium};
    }
  }
`

export default createFragmentContainer(Artsy.withSystemContext(SaveButton), {
  artwork: graphql`
    fragment Save_artwork on Artwork {
      id
      internalID
      slug
      is_saved: isSaved
      title
    }
  `,
})
