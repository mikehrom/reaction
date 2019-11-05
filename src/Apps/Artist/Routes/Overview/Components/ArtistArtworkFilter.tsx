import { ArtistArtworkFilter_artist } from "__generated__/ArtistArtworkFilter_artist.graphql"
import { Overview_artist } from "__generated__/Overview_artist.graphql"
import { useTracking } from "Artsy"
import * as Schema from "Artsy/Analytics/Schema"
import { BaseArtworkFilter } from "Components/v2/ArtworkFilter"
import { ArtworkFilterContextProvider } from "Components/v2/ArtworkFilter/ArtworkFilterContext"
import { updateUrl } from "Components/v2/ArtworkFilter/Utils/urlBuilder"
import { Location } from "found"
import React from "react"
import { createRefetchContainer, graphql, RelayRefetchProp } from "react-relay"
import { ZeroState } from "./ZeroState"

interface ArtistArtworkFilterProps {
  artist: ArtistArtworkFilter_artist
  relay: RelayRefetchProp
  sidebarAggregations: Overview_artist["sidebarAggregations"]
  location: Location
}

const ArtistArtworkFilter: React.FC<ArtistArtworkFilterProps> = props => {
  const { location, relay, artist, sidebarAggregations } = props
  const tracking = useTracking()
  const { filtered_artworks } = artist

  const hasFilter = filtered_artworks && filtered_artworks.__id

  // If there was an error fetching the filter,
  // we still want to render the rest of the page.
  if (!hasFilter) return null

  return (
    <ArtworkFilterContextProvider
      filters={location.query}
      sortOptions={[
        { value: "-decayed_merch", text: "Default" },
        { value: "-partner_updated_at", text: "Recently updated" },
        { value: "-published_at", text: "Recently added" },
        { value: "-year", text: "Artwork year (desc.)" },
        { value: "year", text: "Artwork year (asc.)" },
      ]}
      aggregations={sidebarAggregations.aggregations as any}
      counts={artist.counts}
      onChange={updateUrl}
      onFilterClick={(key, value, filterState) => {
        tracking.trackEvent({
          action_type: Schema.ActionType.CommercialFilterParamsChanged,
          changed: { [key]: value },
          current: filterState,
        })
      }}
    >
      <BaseArtworkFilter
        relay={relay}
        viewer={artist}
        relayVariables={{
          aggregations: ["TOTAL"],
        }}
      >
        {artist.counts.artworks.length === 0 && (
          <ZeroState artist={artist} is_followed={artist.is_followed} />
        )}
      </BaseArtworkFilter>
    </ArtworkFilterContextProvider>
  )
}

export const ArtistArtworkFilterRefetchContainer = createRefetchContainer(
  ArtistArtworkFilter,
  {
    artist: graphql`
      fragment ArtistArtworkFilter_artist on Artist
        @argumentDefinitions(
          partnerCategory: {
            type: "[String]"
            defaultValue: ["blue-chip", "top-established", "top-emerging"]
          }
          acquireable: { type: "Boolean" }
          aggregations: { type: "[ArtworkAggregation]" }
          artistID: { type: "String" }
          atAuction: { type: "Boolean" }
          attributionClass: { type: "[String]" }
          color: { type: "String" }
          forSale: { type: "Boolean" }
          hasFilter: { type: "Boolean", defaultValue: false }
          height: { type: "String" }
          inquireableOnly: { type: "Boolean" }
          keyword: { type: "String" }
          majorPeriods: { type: "[String]" }
          medium: { type: "String", defaultValue: "*" }
          offerable: { type: "Boolean" }
          page: { type: "Int" }
          partnerID: { type: "ID" }
          priceRange: { type: "String" }
          sort: { type: "String", defaultValue: "-partner_updated_at" }
          width: { type: "String" }
        ) {
        is_followed: isFollowed
        counts {
          partner_shows: partnerShows
          for_sale_artworks: forSaleArtworks
          ecommerce_artworks: ecommerceArtworks
          auction_artworks: auctionArtworks
          artworks
          has_make_offer_artworks: hasMakeOfferArtworks
        }
        filtered_artworks: filterArtworksConnection(
          acquireable: $acquireable
          aggregations: $aggregations
          artistID: $artistID
          atAuction: $atAuction
          attributionClass: $attributionClass
          color: $color
          forSale: $forSale
          height: $height
          inquireableOnly: $inquireableOnly
          keyword: $keyword
          majorPeriods: $majorPeriods
          medium: $medium
          offerable: $offerable
          page: $page
          partnerID: $partnerID
          priceRange: $priceRange
          size: 0
          sort: $sort
          width: $width
        ) {
          id
          ...ArtworkFilterArtworkGrid2_filtered_artworks
        }
      }
    `,
  },
  graphql`
    query ArtistArtworkFilterQuery(
      $acquireable: Boolean
      $aggregations: [ArtworkAggregation] = [
        MEDIUM
        TOTAL
        GALLERY
        INSTITUTION
        MAJOR_PERIOD
      ]
      $artistID: String!
      $atAuction: Boolean
      $attributionClass: [String]
      $color: String
      $forSale: Boolean
      $hasFilter: Boolean!
      $height: String
      $inquireableOnly: Boolean
      $keyword: String
      $majorPeriods: [String]
      $medium: String
      $offerable: Boolean
      $page: Int
      $partnerID: ID
      $priceRange: String
      $sort: String
      $width: String
    ) {
      artist(id: $artistID) {
        ...ArtistArtworkFilter_artist
          @arguments(
            acquireable: $acquireable
            aggregations: $aggregations
            artistID: $artistID
            atAuction: $atAuction
            attributionClass: $attributionClass
            color: $color
            forSale: $forSale
            hasFilter: $hasFilter
            height: $height
            inquireableOnly: $inquireableOnly
            keyword: $keyword
            majorPeriods: $majorPeriods
            medium: $medium
            offerable: $offerable
            page: $page
            partnerID: $partnerID
            priceRange: $priceRange
            sort: $sort
            width: $width
          )
      }
    }
  `
)
