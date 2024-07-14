import React from 'react'

function FRDSeatMap() {
  return (
    <>
      <title>XeniApp : FRD - Seat map implementation - MVP1</title>
      <link rel="stylesheet" href="styles/site.css" type="text/css" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <div id="page">
        <div id="main" className="aui-page-panel">
          <div id="main-header">
            <div id="breadcrumb-section">
              <ol id="breadcrumbs">
                <li className="first">
                  <span>
                    <a href="index.html">XeniApp</a>
                  </span>
                </li>
                <li>
                  <span>
                    <a href="XeniApp_542179373.html">XeniApp</a>
                  </span>
                </li>
                <li>
                  <span>
                    <a href="Projects_583761921.html">Projects</a>
                  </span>
                </li>
                <li>
                  <span>
                    <a href="Seat-map_585433090.html">Seat map</a>
                  </span>
                </li>
              </ol>
            </div>
            <h1 id="title-heading" className="pagetitle">
              <span id="title-text">XeniApp : FRD - Seat map implementation - MVP1</span>
            </h1>
          </div>
          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author"> Gerardo Nizetich</span>, last modified on Nov 27,
              2023
            </div>
            <div id="main-content" className="wiki-content group">
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    '/*<![CDATA[*/\ndiv.rbtoc1720512155786 {padding: 0px;}\ndiv.rbtoc1720512155786 ul {list-style: disc;margin-left: 0px;}\ndiv.rbtoc1720512155786 li {margin-left: 0px;padding-left: 0px;}\n\n/*]]>*/',
                }}
              />
              <div className="toc-macro rbtoc1720512155786">
                <ul className="toc-indentation">
                  <li>
                    <a href="#FRD-Seatmapimplementation-MVP1-Functionalobjective">
                      Functional objective
                    </a>
                    <ul className="toc-indentation">
                      <li>
                        <a href="#FRD-Seatmapimplementation-MVP1-Prerequisites">Prerequisites</a>
                      </li>
                      <li>
                        <a href="#FRD-Seatmapimplementation-MVP1-Functionalflow">Functional flow</a>
                      </li>
                      <li>
                        <a href="#FRD-Seatmapimplementation-MVP1-Technicalrequirements">
                          Technical requirements
                        </a>
                        <ul className="toc-indentation">
                          <li>
                            <a href="#FRD-Seatmapimplementation-MVP1-Prerequisites.1">
                              Prerequisites
                            </a>
                          </li>
                          <li>
                            <a href="#FRD-Seatmapimplementation-MVP1-GetseatMapInformation">
                              Get seat Map Information
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#FRD-Seatmapimplementation-MVP1-Design">Design</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <hr />
              <h1 id="FRD-Seatmapimplementation-MVP1-Functionalobjective">Functional objective</h1>
              <p>
                Offer to the consumer to select and pre-reserve the seats for their flight segments
                booked.
              </p>
              <hr />
              <h2 id="FRD-Seatmapimplementation-MVP1-Prerequisites">Prerequisites</h2>
              <ul>
                <li>
                  <p>Reservation Created</p>
                  <ul>
                    <li>
                      <p>Itinerary segments</p>
                    </li>
                    <li>
                      <p>Fare Segments</p>
                    </li>
                    <li>
                      <p>List of passengers</p>
                    </li>
                    <li>
                      <p>Passenger Types</p>
                    </li>
                    <li>
                      <p>Fared booked (allow pre-reserved seats)</p>
                    </li>
                  </ul>
                </li>
              </ul>
              <hr />
              <h2 id="FRD-Seatmapimplementation-MVP1-Functionalflow">Functional flow</h2>
              <div className="table-wrap">
                <table
                  data-table-width={1196}
                  data-layout="default"
                  data-local-id="5bd18828-d36f-41a3-aa2a-6ad8eae71235"
                  className="confluenceTable"
                >
                  <colgroup>
                    <col style={{ width: '205.0px' }} />
                    <col style={{ width: '991.0px' }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th className="confluenceTh">
                        <p>
                          <strong>Actor</strong>
                        </p>
                      </th>
                      <th className="confluenceTh">
                        <p>
                          <strong>Action</strong>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p>Authenticated User</p>
                      </td>
                      <td className="confluenceTd">
                        <p>Select an Itinerary</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>Book the itinerary</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>Complete the passenger’s information</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>Identify each passenger with the proper PTC (Passenger Type code).</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>Below Passenger Information - Create a section “Select seats”</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          Passengers expand the section and see the Seats component by flight
                          Segment and a Dropdown list with each passenger’s Name and PTC
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          In the passenger’s Dropdown, grey-out - PTC = INF (Infant not occupying a
                          seat)
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>Identify available seats and greyed-out occupied seats.|</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>
                          Mouse over a seat, and display a description tip, with the characteristic
                          and price of the seat.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>The user has to select each seat for each passenger on the list.</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>If the itinerary has more than one segment:</p>
                        <ul>
                          <li>
                            <p>Create tabs by segments.</p>
                          </li>
                          <li>
                            <p>Each segment should resolve the seat map.</p>
                          </li>
                          <li>
                            <p>The passenger dropdown has to be the same list of passengers.</p>
                          </li>
                          <li>
                            <p>The passenger should select only 1 seat passenger per segment.</p>
                          </li>
                          <li>
                            <p>
                              Each seat selected with the associated price must appear on the trip
                              summary and update the total price of the trip.
                            </p>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="confluenceTd">
                        <p />
                      </td>
                      <td className="confluenceTd">
                        <p>The user continues with the Booking flow</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
              <h2 id="FRD-Seatmapimplementation-MVP1-Technicalrequirements">
                Technical requirements
              </h2>
              <h3 id="FRD-Seatmapimplementation-MVP1-Prerequisites.1">Prerequisites</h3>
              <ul>
                <li>
                  <p>
                    <strong>Provider</strong>: Thomalex
                  </p>
                </li>
                <li>
                  <p>
                    Flight segments must be present in Shopping Cart (Thomalex)
                    <br />
                  </p>
                </li>
              </ul>
              <div id="expander-247361459" className="expand-container">
                <div id="expander-control-247361459" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="/src/images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Request example:</span>
                </div>
                <div id="expander-content-247361459" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        curl --location 'http://rest.resvoyage.com/api/v1/cart/air/add' \{'\n'}
                        --header 'Authorization: Bearer
                        eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6IlhlbmkiLCJDbGllbnRJZCI6IjM5ODYiLCJyb2xlIjoiQjJDIiwiVHJhdmVsR3JvdXBJZCI6IjQyMTkiLCJpc3MiOiJodHRwOi8vcmVzdm95YWdlLmNvbSIsImF1ZCI6InJlc3ZveWFnZSIsImV4cCI6MTY5ODEwMzE1NCwibmJmIjoxNjk4MDg1MTU0fQ.jjufC2jZWg0aMVdiHv4ww7TKgdGFcLwOCnXTX0_nUmE'
                        \{'\n'}--header 'Content-Type: application/json' \{'\n'}
                        --data '{'{'}
                        {'\n'}
                        {'    '}"ItemId": "{'{'}
                        {'{'}itineraryItem{'}'}
                        {'}'}",{'\n'}
                        {'    '}"SessionId": "{'{'}
                        {'{'}ThomalexSessionId{'}'}
                        {'}'}"{'\n'}
                        {'}'}'
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              <p />
              <div id="expander-41600481" className="expand-container">
                <div id="expander-control-41600481" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="/src/images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Response example:</span>
                </div>
                <div id="expander-content-41600481" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        {'{'}
                        {'\n'}
                        {'    '}"SessionId": "0b7da6df-61a8-4a49-b626-84cd49ea3123",
                        {'\n'}
                        {'    '}"ShoppingCart": {'{'}
                        {'\n'}
                        {'        '}"Warning": null,{'\n'}
                        {'        '}"ReservationStatus": "",{'\n'}
                        {'        '}"InsuranceInfo": null,{'\n'}
                        {'        '}"Air": {'{'}
                        {'\n'}
                        {'            '}"AirItinerary": {'{'}
                        {'\n'}
                        {'                '}"DirectionInd": "OneWay",{'\n'}
                        {'                '}"OriginDestinationOptions": [{'\n'}
                        {'                    '}
                        {'{'}
                        {'\n'}
                        {'                        '}"SectorSequence": 1,{'\n'}
                        {'                        '}"FlightSegments": [{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"RouteNumber": "B62293",
                        {'\n'}
                        {'                                '}"MarketingAirlineName": "Jetblue
                        Airways",{'\n'}
                        {'                                '}"OperatingAirlineName": "Jetblue
                        Airways",{'\n'}
                        {'                                '}"Duration": "03:19:00",
                        {'\n'}
                        {'                                '}"DepartureCountryCode": "US",{'\n'}
                        {'                                '}"ArrivalCountryCode": "US",{'\n'}
                        {'                                '}"Aircraft": null,{'\n'}
                        {'                                '}"BookingClass": "L",
                        {'\n'}
                        {'                                '}"ArrivalAirportName": "Miami-Miami Intl,
                        FL, United States",{'\n'}
                        {'                                '}"DepartureAirportName": "New York-John F
                        Kennedy, NY, United States",{'\n'}
                        {'                                '}"BaggageFeeUrl":
                        "https://bags.amadeus.com/Display.aspx?a=B6",{'\n'}
                        {'                                '}"FreeBaggages": null,
                        {'\n'}
                        {'                                '}"Cabin": "Economy",
                        {'\n'}
                        {'                                '}"AirlineLogo":
                        "content/airline-logos/B6.png",{'\n'}
                        {'                                '}"DepartureTerminal": null,{'\n'}
                        {'                                '}"ArrivalTerminal": null,
                        {'\n'}
                        {'                                '}"DepartureCityName": null,{'\n'}
                        {'                                '}"ArrivalCityName": null,
                        {'\n'}
                        {'                                '}"SeatsLeft": null,{'\n'}
                        {'                                '}"FlightNumber": "2293",
                        {'\n'}
                        {'                                '}"MarketingAirlineCode": "B6",{'\n'}
                        {'                                '}"OperatingAirlineCode": "B6",{'\n'}
                        {'                                '}"DepartureDate": "2023-12-20T05:59:00",
                        {'\n'}
                        {'                                '}"ArrivalDate": "2023-12-20T09:18:00",
                        {'\n'}
                        {'                                '}"DepartureAirport": "JFK",{'\n'}
                        {'                                '}"ArrivalAirport": "MIA"
                        {'\n'}
                        {'                            '}
                        {'}'}
                        {'\n'}
                        {'                        '}],{'\n'}
                        {'                        '}"Cabin": "Economy",{'\n'}
                        {'                        '}"JourneyTotalDuration": "03:19:00"{'\n'}
                        {'                    '}
                        {'}'}
                        {'\n'}
                        {'                '}],{'\n'}
                        {'                '}"TicketTimeLimit": "2023-11-28T23:00:00"
                        {'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}"AirItineraryPricingInfo": {'{'}
                        {'\n'}
                        {'                '}"TotalPrice": 78.89,{'\n'}
                        {'                '}"BasePrice": 59.53,{'\n'}
                        {'                '}"Tax": 19.36,{'\n'}
                        {'                '}"Markup": 0.0,{'\n'}
                        {'                '}"ServiceFee": 0.0,{'\n'}
                        {'                '}"ItinerarySurchargePrice": 0.0,{'\n'}
                        {'                '}"Discount": 0.0,{'\n'}
                        {'                '}"PromotionalDiscount": 0.0,{'\n'}
                        {'                '}"CurrencyCode": "USD",{'\n'}
                        {'                '}"PTC_FareBreakdowns": [{'\n'}
                        {'                    '}
                        {'{'}
                        {'\n'}
                        {'                        '}"PTCIdentifier": null,{'\n'}
                        {'                        '}"Baggages": [{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"SequenceNumber": 1,
                        {'\n'}
                        {'                                '}"FlightNumber": "2293",
                        {'\n'}
                        {'                                '}"FreeQuantity": 0.0,
                        {'\n'}
                        {'                                '}"Id": null,{'\n'}
                        {'                                '}"PassengerId": null,
                        {'\n'}
                        {'                                '}"Title": null,{'\n'}
                        {'                                '}"Description": null,
                        {'\n'}
                        {'                                '}"Amount": null,{'\n'}
                        {'                                '}"PassengerCode": "ADT",
                        {'\n'}
                        {'                                '}"BagAllowanceType": "Piece",{'\n'}
                        {'                                '}"BagAllowanceUnit": "K"
                        {'\n'}
                        {'                            '}
                        {'}'}
                        {'\n'}
                        {'                        '}],{'\n'}
                        {'                        '}"FlightExtrasInfo": null,{'\n'}
                        {'                        '}"BasePriceFromItinerary": 59.53,
                        {'\n'}
                        {'                        '}"BasePrice": 59.53,{'\n'}
                        {'                        '}"Markup": 0.0,{'\n'}
                        {'                        '}"Discount": 0.0,{'\n'}
                        {'                        '}"Tax": 19.36,{'\n'}
                        {'                        '}"Surcharge": 0.0,{'\n'}
                        {'                        '}"DiscountAmountFromContract": 0.0,{'\n'}
                        {'                        '}"PromotionalDiscount": 0.0,
                        {'\n'}
                        {'                        '}"TotalDiscount": 0.0,{'\n'}
                        {'                        '}"TotalPrice": 78.89,{'\n'}
                        {'                        '}"PassengerCount": 1,{'\n'}
                        {'                        '}"PassengerType": "ADT",{'\n'}
                        {'                        '}"CodeContext": null,{'\n'}
                        {'                        '}"MarkupBreakdown": [],{'\n'}
                        {'                        '}"DiscountBreakdown": [],{'\n'}
                        {'                        '}"PromotionalDiscountBreakdown": [],{'\n'}
                        {'                        '}
                        "ContractManagerDiscountBreakdown": null,{'\n'}
                        {'                        '}"AllDiscountBreakdowns": [],
                        {'\n'}
                        {'                        '}"FareBasisCodes": [{'\n'}
                        {'                            '}"PI2ABEL1"{'\n'}
                        {'                        '}]{'\n'}
                        {'                    '}
                        {'}'}
                        {'\n'}
                        {'                '}],{'\n'}
                        {'                '}"PricingSource": null,{'\n'}
                        {'                '}"IsNegotiatedPrice": false,{'\n'}
                        {'                '}"FareType": "Published",{'\n'}
                        {'                '}"FareFamily": "BLUE BASIC-DN-220077",
                        {'\n'}
                        {'                '}"ValidatingAirlineCode": "B6",{'\n'}
                        {'                '}"AdditionalFareInfos": [{'\n'}
                        {'                    '}
                        {'{'}
                        {'\n'}
                        {'                        '}"FareReference": "PI2ABEL1",
                        {'\n'}
                        {'                        '}"ValidatingAirlineCode": "",
                        {'\n'}
                        {'                        '}"FareFamily": null,{'\n'}
                        {'                        '}"Cabin": "",{'\n'}
                        {'                        '}"DepartureAirport": "JFK",{'\n'}
                        {'                        '}"DepartureDate": "2023-12-20T05:59:00",{'\n'}
                        {'                        '}"ArrivalAirport": "MIA",{'\n'}
                        {'                        '}"Penalty": null{'\n'}
                        {'                    '}
                        {'}'}
                        {'\n'}
                        {'                '}],{'\n'}
                        {'                '}"TaxBreakdown": null{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}"Id": "64295a7d-a6ba-46b5-8615-c3ee4b9cbdd4",{'\n'}
                        {'            '}"PolicyType": null,{'\n'}
                        {'            '}"DeepLinkUrl": "",{'\n'}
                        {'            '}"Provider": "Sabre",{'\n'}
                        {'            '}"OfficeId": "5YAI",{'\n'}
                        {'            '}"UseTravelFusionTFPay": false,{'\n'}
                        {'            '}"TravelFusionReferenceNumber": null{'\n'}
                        {'        '}
                        {'}'},{'\n'}
                        {'        '}"Flights": [{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"AirItinerary": {'{'}
                        {'\n'}
                        {'                    '}"DirectionInd": "OneWay",{'\n'}
                        {'                    '}"OriginDestinationOptions": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"SectorSequence": 1,{'\n'}
                        {'                            '}"FlightSegments": [{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"RouteNumber": "B62293",{'\n'}
                        {'                                    '}
                        "MarketingAirlineName": "Jetblue Airways",{'\n'}
                        {'                                    '}
                        "OperatingAirlineName": "Jetblue Airways",{'\n'}
                        {'                                    '}"Duration": "03:19:00",{'\n'}
                        {'                                    '}
                        "DepartureCountryCode": "US",{'\n'}
                        {'                                    '}
                        "ArrivalCountryCode": "US",{'\n'}
                        {'                                    '}"Aircraft": null,
                        {'\n'}
                        {'                                    '}"BookingClass": "L",
                        {'\n'}
                        {'                                    '}
                        "ArrivalAirportName": "Miami-Miami Intl, FL, United States",
                        {'\n'}
                        {'                                    '}
                        "DepartureAirportName": "New York-John F Kennedy, NY, United States",{'\n'}
                        {'                                    '}"BaggageFeeUrl":
                        "https://bags.amadeus.com/Display.aspx?a=B6",{'\n'}
                        {'                                    '}"FreeBaggages": null,{'\n'}
                        {'                                    '}"Cabin": "Economy",
                        {'\n'}
                        {'                                    '}"AirlineLogo":
                        "content/airline-logos/B6.png",{'\n'}
                        {'                                    '}"DepartureTerminal": null,{'\n'}
                        {'                                    '}"ArrivalTerminal": null,{'\n'}
                        {'                                    '}"DepartureCityName": null,{'\n'}
                        {'                                    '}"ArrivalCityName": null,{'\n'}
                        {'                                    '}"SeatsLeft": null,
                        {'\n'}
                        {'                                    '}"FlightNumber": "2293",{'\n'}
                        {'                                    '}
                        "MarketingAirlineCode": "B6",{'\n'}
                        {'                                    '}
                        "OperatingAirlineCode": "B6",{'\n'}
                        {'                                    '}"DepartureDate":
                        "2023-12-20T05:59:00",{'\n'}
                        {'                                    '}"ArrivalDate":
                        "2023-12-20T09:18:00",{'\n'}
                        {'                                    '}"DepartureAirport": "JFK",{'\n'}
                        {'                                    '}"ArrivalAirport": "MIA"{'\n'}
                        {'                                '}
                        {'}'}
                        {'\n'}
                        {'                            '}],{'\n'}
                        {'                            '}"Cabin": "Economy",{'\n'}
                        {'                            '}"JourneyTotalDuration": "03:19:00"{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}],{'\n'}
                        {'                    '}"TicketTimeLimit": "2023-11-28T23:00:00"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}"AirItineraryPricingInfo": {'{'}
                        {'\n'}
                        {'                    '}"TotalPrice": 78.89,{'\n'}
                        {'                    '}"BasePrice": 59.53,{'\n'}
                        {'                    '}"Tax": 19.36,{'\n'}
                        {'                    '}"Markup": 0.0,{'\n'}
                        {'                    '}"ServiceFee": 0.0,{'\n'}
                        {'                    '}"ItinerarySurchargePrice": 0.0,
                        {'\n'}
                        {'                    '}"Discount": 0.0,{'\n'}
                        {'                    '}"PromotionalDiscount": 0.0,{'\n'}
                        {'                    '}"CurrencyCode": "USD",{'\n'}
                        {'                    '}"PTC_FareBreakdowns": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"PTCIdentifier": null,{'\n'}
                        {'                            '}"Baggages": [{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"SequenceNumber": 1,
                        {'\n'}
                        {'                                    '}"FlightNumber": "2293",{'\n'}
                        {'                                    '}"FreeQuantity": 0.0,
                        {'\n'}
                        {'                                    '}"Id": null,{'\n'}
                        {'                                    '}"PassengerId": null,
                        {'\n'}
                        {'                                    '}"Title": null,{'\n'}
                        {'                                    '}"Description": null,
                        {'\n'}
                        {'                                    '}"Amount": null,
                        {'\n'}
                        {'                                    '}"PassengerCode": "ADT",{'\n'}
                        {'                                    '}"BagAllowanceType": "Piece",{'\n'}
                        {'                                    '}"BagAllowanceUnit": "K"{'\n'}
                        {'                                '}
                        {'}'}
                        {'\n'}
                        {'                            '}],{'\n'}
                        {'                            '}"FlightExtrasInfo": null,
                        {'\n'}
                        {'                            '}"BasePriceFromItinerary": 59.53,{'\n'}
                        {'                            '}"BasePrice": 59.53,{'\n'}
                        {'                            '}"Markup": 0.0,{'\n'}
                        {'                            '}"Discount": 0.0,{'\n'}
                        {'                            '}"Tax": 19.36,{'\n'}
                        {'                            '}"Surcharge": 0.0,{'\n'}
                        {'                            '}
                        "DiscountAmountFromContract": 0.0,{'\n'}
                        {'                            '}"PromotionalDiscount": 0.0,
                        {'\n'}
                        {'                            '}"TotalDiscount": 0.0,{'\n'}
                        {'                            '}"TotalPrice": 78.89,{'\n'}
                        {'                            '}"PassengerCount": 1,{'\n'}
                        {'                            '}"PassengerType": "ADT",
                        {'\n'}
                        {'                            '}"CodeContext": null,{'\n'}
                        {'                            '}"MarkupBreakdown": [],{'\n'}
                        {'                            '}"DiscountBreakdown": [],
                        {'\n'}
                        {'                            '}
                        "PromotionalDiscountBreakdown": [],{'\n'}
                        {'                            '}
                        "ContractManagerDiscountBreakdown": null,{'\n'}
                        {'                            '}"AllDiscountBreakdowns": [],
                        {'\n'}
                        {'                            '}"FareBasisCodes": [{'\n'}
                        {'                                '}"PI2ABEL1"{'\n'}
                        {'                            '}]{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}],{'\n'}
                        {'                    '}"PricingSource": null,{'\n'}
                        {'                    '}"IsNegotiatedPrice": false,{'\n'}
                        {'                    '}"FareType": "Published",{'\n'}
                        {'                    '}"FareFamily": "BLUE BASIC-DN-220077",{'\n'}
                        {'                    '}"ValidatingAirlineCode": "B6",{'\n'}
                        {'                    '}"AdditionalFareInfos": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"FareReference": "PI2ABEL1",
                        {'\n'}
                        {'                            '}"ValidatingAirlineCode": "",
                        {'\n'}
                        {'                            '}"FareFamily": null,{'\n'}
                        {'                            '}"Cabin": "",{'\n'}
                        {'                            '}"DepartureAirport": "JFK",
                        {'\n'}
                        {'                            '}"DepartureDate": "2023-12-20T05:59:00",
                        {'\n'}
                        {'                            '}"ArrivalAirport": "MIA",
                        {'\n'}
                        {'                            '}"Penalty": null{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}],{'\n'}
                        {'                    '}"TaxBreakdown": null{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}"Id": "64295a7d-a6ba-46b5-8615-c3ee4b9cbdd4",{'\n'}
                        {'                '}"PolicyType": null,{'\n'}
                        {'                '}"DeepLinkUrl": "",{'\n'}
                        {'                '}"Provider": "Sabre",{'\n'}
                        {'                '}"OfficeId": "5YAI",{'\n'}
                        {'                '}"UseTravelFusionTFPay": false,{'\n'}
                        {'                '}"TravelFusionReferenceNumber": null
                        {'\n'}
                        {'            '}
                        {'}'}
                        {'\n'}
                        {'        '}],{'\n'}
                        {'        '}"Hotels": [],{'\n'}
                        {'        '}"Cars": [],{'\n'}
                        {'        '}"Travellers": [{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"Id": "b8e37703-0747-4360-9e44-fff2c933f2a1",{'\n'}
                        {'                '}"Title": null,{'\n'}
                        {'                '}"TypeCode": "ADT",{'\n'}
                        {'                '}"FirstName": null,{'\n'}
                        {'                '}"MiddleName": null,{'\n'}
                        {'                '}"LastName": null,{'\n'}
                        {'                '}"Email": null,{'\n'}
                        {'                '}"CountryCode": null,{'\n'}
                        {'                '}"Phone": null,{'\n'}
                        {'                '}"PhoneCode": null,{'\n'}
                        {'                '}"PhoneAreaCode": null,{'\n'}
                        {'                '}"DriversLicence": null,{'\n'}
                        {'                '}"NationalIdentity": null,{'\n'}
                        {'                '}"LocallyDefinedIDNumber": null,{'\n'}
                        {'                '}"MobilePhone": null,{'\n'}
                        {'                '}"MobilePhoneCode": null,{'\n'}
                        {'                '}"TicketNumber": null,{'\n'}
                        {'                '}"JetSmartPassengerData": null,{'\n'}
                        {'                '}"EmployeeUsername": null,{'\n'}
                        {'                '}"LoyalityProgram": null,{'\n'}
                        {'                '}"ReducedMobilityAssistanceInfo": null,
                        {'\n'}
                        {'                '}"ChoosenSpeedyBoardingInfo": null,{'\n'}
                        {'                '}"CarLoyalityProgram": null,{'\n'}
                        {'                '}"HotelLoyalityProgram": null,{'\n'}
                        {'                '}"Rank": 0,{'\n'}
                        {'                '}"AgeGroup": null,{'\n'}
                        {'                '}"TrainSeasonTickets": null,{'\n'}
                        {'                '}"SelectedTrainTicketNumber": null,{'\n'}
                        {'                '}"TrainLoyaltyCard": null,{'\n'}
                        {'                '}"RoomSchedule": null,{'\n'}
                        {'                '}"MealsNSeatReq": null,{'\n'}
                        {'                '}"Gender": null,{'\n'}
                        {'                '}"PassportNumber2": null,{'\n'}
                        {'                '}"CountryOfIssuance2": null,{'\n'}
                        {'                '}"CountryOfNationality2": null,{'\n'}
                        {'                '}"ExpirationDate2": null,{'\n'}
                        {'                '}"IssueDate2": null,{'\n'}
                        {'                '}"TypeOfUSADocument": null,{'\n'}
                        {'                '}"USADocumentNumber": null,{'\n'}
                        {'                '}"USADocumentExpirationDate": null,{'\n'}
                        {'                '}"CubanDocumentNumber": null,{'\n'}
                        {'                '}"CubanDocumentExpirationDate": null,
                        {'\n'}
                        {'                '}"CubanAddress": null,{'\n'}
                        {'                '}"Neighborhood": null,{'\n'}
                        {'                '}"CubanTelephone": null,{'\n'}
                        {'                '}"Province": null,{'\n'}
                        {'                '}"Town": null,{'\n'}
                        {'                '}"DateOfBirthString": null,{'\n'}
                        {'                '}"PassportExpDateString2": null,{'\n'}
                        {'                '}"PassportIssuingDateString2": null,
                        {'\n'}
                        {'                '}"PassportExpDateString": null,{'\n'}
                        {'                '}"PassportIssuingDateString": null,{'\n'}
                        {'                '}"FlightsSeatMap": null,{'\n'}
                        {'                '}"PaymentInfoObject": null,{'\n'}
                        {'                '}"BaggagePiecesQty": null,{'\n'}
                        {'                '}"ChosenCostCenterId": null,{'\n'}
                        {'                '}"ChosenCostCenter": null,{'\n'}
                        {'                '}"DateOfBirth": null,{'\n'}
                        {'                '}"PassportExpDate": null,{'\n'}
                        {'                '}"PassportIssuingDate": null,{'\n'}
                        {'                '}"AncillaryServiceIds": null,{'\n'}
                        {'                '}"ExcessBaggageWeightQuantity": null,
                        {'\n'}
                        {'                '}"AncillaryServiceInfos": null,{'\n'}
                        {'                '}"UserRole": null,{'\n'}
                        {'                '}"EmployeeId": null,{'\n'}
                        {'                '}"CorporateEmpId": null,{'\n'}
                        {'                '}"EmployeeJobTitle": null,{'\n'}
                        {'                '}"EmployeeCostCenter": null,{'\n'}
                        {'                '}"EmployeeRecordLocator": null,{'\n'}
                        {'                '}"AmadeusRecordLocator": null,{'\n'}
                        {'                '}"SabreRecordLocator": null,{'\n'}
                        {'                '}"TravelPortRecordLocator": null,{'\n'}
                        {'                '}"RedressNumber": null,{'\n'}
                        {'                '}"KnownTravellerId": null,{'\n'}
                        {'                '}"EmployeeIdentifier": null,{'\n'}
                        {'                '}"PassportNo": null,{'\n'}
                        {'                '}"PassportIssuingCountry": null,{'\n'}
                        {'                '}"PassportIssuingCountryCode": null,
                        {'\n'}
                        {'                '}"CountryOfNationality": null,{'\n'}
                        {'                '}"NationalityCountryCode": null,{'\n'}
                        {'                '}"PassportIssuingCountryName": null,
                        {'\n'}
                        {'                '}"VisaPurchased": false,{'\n'}
                        {'                '}"SpecialServiceRequestCodes": null,
                        {'\n'}
                        {'                '}"IsGuestTraveller": false,{'\n'}
                        {'                '}"B2CPassword": null,{'\n'}
                        {'                '}"NdcBaggageInfoPerFlight": null,{'\n'}
                        {'                '}"SelectedNdcBaggagePrice": 0.0,{'\n'}
                        {'                '}"NdcServiceListOfferId": null,{'\n'}
                        {'                '}"ResidentDiscountCode": null,{'\n'}
                        {'                '}"ResidentDiscountAreaCode": null,{'\n'}
                        {'                '}"ResidentDiscountCityCode": null,{'\n'}
                        {'                '}"ResidentCountryCode": null,{'\n'}
                        {'                '}"SelectedPrepaidBaggage": null,{'\n'}
                        {'                '}"SelectedFlightExtras": null{'\n'}
                        {'            '}
                        {'}'}
                        {'\n'}
                        {'        '}],{'\n'}
                        {'        '}"NeedJustification": false,{'\n'}
                        {'        '}"PersonalCreditCards": null,{'\n'}
                        {'        '}"TravelName": null,{'\n'}
                        {'        '}"Meta": null,{'\n'}
                        {'        '}"TravelReason": null,{'\n'}
                        {'        '}"UniqueTripIdentifier": "cqwgny051uk",{'\n'}
                        {'        '}"ThirdPartyBookingReferenceNumber": null,{'\n'}
                        {'        '}"EnableTravelGuard": false,{'\n'}
                        {'        '}"EnableBlueRibbonBags": false,{'\n'}
                        {'        '}"BookingReferenceNumber": null,{'\n'}
                        {'        '}"StripeClientSecret": null,{'\n'}
                        {'        '}"IsShoppingCartEmpty": false,{'\n'}
                        {'        '}"AirlineBookingReferences": null,{'\n'}
                        {'        '}"AvailablePaymentOptions": [{'\n'}
                        {'            '}
                        {'{'}
                        {'\n'}
                        {'                '}"TravelType": "AIR",{'\n'}
                        {'                '}"PaymentOptions": [{'\n'}
                        {'                    '}"CreditCard"{'\n'}
                        {'                '}]{'\n'}
                        {'            '}
                        {'}'}
                        {'\n'}
                        {'        '}],{'\n'}
                        {'        '}"PaymentGateway": null,{'\n'}
                        {'        '}"TotalPrice": 78.89,{'\n'}
                        {'        '}"TermsUrl": null,{'\n'}
                        {'        '}"PaymentInfos": null{'\n'}
                        {'    '}
                        {'}'}
                        {'\n'}
                        {'}'}
                      </pre>
                    </div>
                  </div>
                  <p />
                </div>
              </div>
              <p />
              <hr />
              <h3 id="FRD-Seatmapimplementation-MVP1-GetseatMapInformation">
                Get seat Map Information
              </h3>
              <div id="expander-1628489132" className="expand-container">
                <div id="expander-control-1628489132" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="/src/images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Request</span>
                </div>
                <div id="expander-content-1628489132" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        curl --location
                        'http://rest.resvoyage.com/api/v1/cart/seatmap?sessionId=0b7da6df-61a8-4a49-b626-84cd49ea3123'
                        \{'\n'}--header 'Content-Type: Application/json' \{'\n'}
                        --header 'Authorization: Bearer
                        eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6IlhlbmkgVGVzdCIsIkNsaWVudElkIjoiMzk3NyIsInJvbGUiOiJCMkMiLCJUcmF2ZWxHcm91cElkIjoiNDIwOCIsImlzcyI6Imh0dHA6Ly9yZXN2b3lhZ2UuY29tIiwiYXVkIjoicmVzdm95YWdlIiwiZXhwIjoxNzAxMTI2NjcxLCJuYmYiOjE3MDExMDg2NzF9.vMqgVlIj3p0kTd04by8gDr_DVuqrFLB1FHANJhFJZKM'
                        \{'\n'}--header 'Cookie:
                        ARRAffinity=0f934038fa87e90eb992a83facec7a5a1ba6d85c0e53ab05afbf34221994a4ed'
                      </pre>
                    </div>
                  </div>
                  <p />
                </div>
              </div>
              <p>
                <br />
              </p>
              <div id="expander-1238336538" className="expand-container">
                <div id="expander-control-1238336538" className="expand-control">
                  <span className="expand-control-icon">
                    <img
                      style={{ verticalAlign: 'middle' }}
                      className="expand-control-image"
                      src="/src/images/icons/grey_arrow_down.png"
                    />
                  </span>
                  <span className="expand-control-text">Response</span>
                </div>
                <div id="expander-content-1238336538" className="expand-content">
                  <div className="code panel pdl" style={{ borderWidth: 1 }}>
                    <div className="codeContent panelContent pdl">
                      <pre
                        className="syntaxhighlighter-pre"
                        data-syntaxhighlighter-params="brush: java; gutter: false; theme: Confluence"
                        data-theme="Confluence"
                      >
                        {'{'}
                        {'\n'}
                        {'    '}"SeatMaps": [{'\n'}
                        {'        '}
                        {'{'}
                        {'\n'}
                        {'            '}"FlightSegmentInfo": {'{'}
                        {'\n'}
                        {'                '}"DepartureAirport": {'{'}
                        {'\n'}
                        {'                    '}"LocationCode": "JFK",{'\n'}
                        {'                    '}"CodeContext": "IATA",{'\n'}
                        {'                    '}"Value": "New York-John F Kennedy, NY, United
                        States"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}"ArrivalAirport": {'{'}
                        {'\n'}
                        {'                    '}"LocationCode": "MIA",{'\n'}
                        {'                    '}"CodeContext": "IATA",{'\n'}
                        {'                    '}"Value": "Miami-Miami Intl, FL, United States"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}"OperatingAirline": null,{'\n'}
                        {'                '}"Equipment": [{'\n'}
                        {'                    '}
                        {'{'}
                        {'\n'}
                        {'                        '}"AirEquipType": "220",{'\n'}
                        {'                        '}"ChangeofGauge": false,{'\n'}
                        {'                        '}"Value": null{'\n'}
                        {'                    '}
                        {'}'}
                        {'\n'}
                        {'                '}],{'\n'}
                        {'                '}"MarketingAirline": {'{'}
                        {'\n'}
                        {'                    '}"CompanyShortName": null,{'\n'}
                        {'                    '}"TravelSector": null,{'\n'}
                        {'                    '}"Code": "B6",{'\n'}
                        {'                    '}"CodeContext": null,{'\n'}
                        {'                    '}"Value": "Jetblue Airways"{'\n'}
                        {'                '}
                        {'}'},{'\n'}
                        {'                '}"MarriageGrp": null,{'\n'}
                        {'                '}"DepartureDateTime": "2023-12-20T00:00:00",{'\n'}
                        {'                '}"ArrivalDateTime": null,{'\n'}
                        {'                '}"StopQuantitySpecified": false,{'\n'}
                        {'                '}"RPH": null,{'\n'}
                        {'                '}"InfoSource": null,{'\n'}
                        {'                '}"FlightNumber": "2293",{'\n'}
                        {'                '}"TourOperatorFlightID": null{'\n'}
                        {'            '}
                        {'}'},{'\n'}
                        {'            '}"SeatMapDetails": [{'\n'}
                        {'                '}
                        {'{'}
                        {'\n'}
                        {'                    '}"CabinClass": [{'\n'}
                        {'                        '}
                        {'{'}
                        {'\n'}
                        {'                            '}"TPA_Extensions": {'{'}
                        {'\n'}
                        {'                                '}"SeatColHeadings": [{'\n'}
                        {'                                    '}
                        {'{'}
                        {'\n'}
                        {'                                        '}
                        "ColumnHeadings": "AC DEF",{'\n'}
                        {'                                        '}"Value": null
                        {'\n'}
                        {'                                    '}
                        {'}'}
                        {'\n'}
                        {'                                '}],{'\n'}
                        {'                                '}"Discounts": null,{'\n'}
                        {'                                '}"Text": null{'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}"AirRows": [{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "9000"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "9000"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle OfferedLast AdultWithInfant",
                        {'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "9000"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " OfferedLast AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "8600"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window OfferedLast AdultWithInfant",
                        {'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "9000"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": "None"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 1,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "9000"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "9000"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "9000"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "8600"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "9000"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": "None"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 2,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "9000"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "9000"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Occupied",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": null{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "8600"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "9000"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": "None"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 3,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "9000"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "9000"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "9000"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "8600"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "9000"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": "None"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 4,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window OfferedLast AdultWithInfant",
                        {'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle OfferedLast AdultWithInfant",
                        {'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle OfferedLast AdultWithInfant",
                        {'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " OfferedLast AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "2100"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window OfferedLast AdultWithInfant",
                        {'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": "None"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 5,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "PreferredChargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "PreferredChargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "PreferredChargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "2100"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "PreferredChargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": "None"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 6,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "PreferredChargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "PreferredChargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "PreferredChargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "2100"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "PreferredChargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": "None"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 7,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "PreferredChargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "PreferredChargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "PreferredChargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "2100"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "PreferredChargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": "None"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 8,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "PreferredChargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "PreferredChargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "PreferredChargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "2100"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "PreferredChargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": "None"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 9,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "2100"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": "None"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 10,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "2100"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": " Overwing"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 11,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "8800"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "8800"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "8800"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "8400"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "8800"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": " Overwing Exit"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 12,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "8600"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "8600"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "8600"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "8200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "8600"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": " Overwing"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 13,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1300"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": " Overwing"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 14,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1300"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": " Overwing"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 15,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1300"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": "None"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 16,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1300"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": "None"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 17,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1300"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": "None"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 18,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1300"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": "None"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 19,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1300"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": "None"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 20,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1300"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": "None"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 21,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1300"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1700"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": "None"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 22,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1100"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": "None"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 23,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1100"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": "None"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 24,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1100"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": "None"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 25,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1100"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": "None"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 26,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1100"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": "None"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 27,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}
                        {'{'}
                        {'\n'}
                        {'                                    '}"AirSeats": [{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "A",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window OfferedLast AdultWithInfant",
                        {'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "C",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle OfferedLast AdultWithInfant",
                        {'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "D",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Aisle OfferedLast AdultWithInfant",
                        {'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "E",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": " OfferedLast AdultWithInfant",{'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1100"{'\n'}
                        {'                                        '}
                        {'}'},{'\n'}
                        {'                                        '}
                        {'{'}
                        {'\n'}
                        {'                                            '}
                        "SeatAvailability": "Chargeable",{'\n'}
                        {'                                            '}
                        "SeatNumber": "F",{'\n'}
                        {'                                            '}
                        "SeatCharacteristics": "Window OfferedLast AdultWithInfant",
                        {'\n'}
                        {'                                            '}
                        "AirBookDesigCode": null,{'\n'}
                        {'                                            '}"RPH": null,
                        {'\n'}
                        {'                                            '}
                        "DiscountCode": "1200"{'\n'}
                        {'                                        '}
                        {'}'}
                        {'\n'}
                        {'                                    '}],{'\n'}
                        {'                                    '}
                        "AirRowCharacteristics": {'{'}
                        {'\n'}
                        {'                                        '}
                        "CharacteristicList": "None"{'\n'}
                        {'                                    '}
                        {'}'},{'\n'}
                        {'                                    '}
                        "MaxNumberOfSeatsSpecified": false,{'\n'}
                        {'                                    '}"RowNumber": 28,
                        {'\n'}
                        {'                                    '}"AirBookDesigCode": null{'\n'}
                        {'                                '}
                        {'}'}
                        {'\n'}
                        {'                            '}],{'\n'}
                        {'                            '}"CabinType": "Economy",
                        {'\n'}
                        {'                            '}"Name": null{'\n'}
                        {'                        '}
                        {'}'}
                        {'\n'}
                        {'                    '}],{'\n'}
                        {'                    '}"TPA_Extensions": {'{'}
                        {'\n'}
                        {'                        '}"SeatColHeadings": null,{'\n'}
                        {'                        '}"Discounts": [{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"Taxes": {'{'}
                        {'\n'}
                        {'                                    '}"Amount": 0.0{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}"Go_Discount_ID": "1100",{'\n'}
                        {'                                '}"Go_Discount_Name": "1100",{'\n'}
                        {'                                '}"Code": "1100",{'\n'}
                        {'                                '}"Amount": 11.0,{'\n'}
                        {'                                '}"Description": "",{'\n'}
                        {'                                '}"Is_Substract": false,
                        {'\n'}
                        {'                                '}"CurrencyCode": "USD"
                        {'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"Taxes": {'{'}
                        {'\n'}
                        {'                                    '}"Amount": 0.0{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}"Go_Discount_ID": "1200",{'\n'}
                        {'                                '}"Go_Discount_Name": "1200",{'\n'}
                        {'                                '}"Code": "1200",{'\n'}
                        {'                                '}"Amount": 12.0,{'\n'}
                        {'                                '}"Description": "",{'\n'}
                        {'                                '}"Is_Substract": false,
                        {'\n'}
                        {'                                '}"CurrencyCode": "USD"
                        {'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"Taxes": {'{'}
                        {'\n'}
                        {'                                    '}"Amount": 0.0{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}"Go_Discount_ID": "1300",{'\n'}
                        {'                                '}"Go_Discount_Name": "1300",{'\n'}
                        {'                                '}"Code": "1300",{'\n'}
                        {'                                '}"Amount": 13.0,{'\n'}
                        {'                                '}"Description": "",{'\n'}
                        {'                                '}"Is_Substract": false,
                        {'\n'}
                        {'                                '}"CurrencyCode": "USD"
                        {'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"Taxes": {'{'}
                        {'\n'}
                        {'                                    '}"Amount": 0.0{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}"Go_Discount_ID": "1700",{'\n'}
                        {'                                '}"Go_Discount_Name": "1700",{'\n'}
                        {'                                '}"Code": "1700",{'\n'}
                        {'                                '}"Amount": 17.0,{'\n'}
                        {'                                '}"Description": "",{'\n'}
                        {'                                '}"Is_Substract": false,
                        {'\n'}
                        {'                                '}"CurrencyCode": "USD"
                        {'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"Taxes": {'{'}
                        {'\n'}
                        {'                                    '}"Amount": 0.0{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}"Go_Discount_ID": "2100",{'\n'}
                        {'                                '}"Go_Discount_Name": "2100",{'\n'}
                        {'                                '}"Code": "2100",{'\n'}
                        {'                                '}"Amount": 21.0,{'\n'}
                        {'                                '}"Description": "",{'\n'}
                        {'                                '}"Is_Substract": false,
                        {'\n'}
                        {'                                '}"CurrencyCode": "USD"
                        {'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"Taxes": {'{'}
                        {'\n'}
                        {'                                    '}"Amount": 0.0{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}"Go_Discount_ID": "8200",{'\n'}
                        {'                                '}"Go_Discount_Name": "8200",{'\n'}
                        {'                                '}"Code": "8200",{'\n'}
                        {'                                '}"Amount": 82.0,{'\n'}
                        {'                                '}"Description": "",{'\n'}
                        {'                                '}"Is_Substract": false,
                        {'\n'}
                        {'                                '}"CurrencyCode": "USD"
                        {'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"Taxes": {'{'}
                        {'\n'}
                        {'                                    '}"Amount": 0.0{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}"Go_Discount_ID": "8400",{'\n'}
                        {'                                '}"Go_Discount_Name": "8400",{'\n'}
                        {'                                '}"Code": "8400",{'\n'}
                        {'                                '}"Amount": 84.0,{'\n'}
                        {'                                '}"Description": "",{'\n'}
                        {'                                '}"Is_Substract": false,
                        {'\n'}
                        {'                                '}"CurrencyCode": "USD"
                        {'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"Taxes": {'{'}
                        {'\n'}
                        {'                                    '}"Amount": 0.0{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}"Go_Discount_ID": "8600",{'\n'}
                        {'                                '}"Go_Discount_Name": "8600",{'\n'}
                        {'                                '}"Code": "8600",{'\n'}
                        {'                                '}"Amount": 86.0,{'\n'}
                        {'                                '}"Description": "",{'\n'}
                        {'                                '}"Is_Substract": false,
                        {'\n'}
                        {'                                '}"CurrencyCode": "USD"
                        {'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"Taxes": {'{'}
                        {'\n'}
                        {'                                    '}"Amount": 0.0{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}"Go_Discount_ID": "8800",{'\n'}
                        {'                                '}"Go_Discount_Name": "8800",{'\n'}
                        {'                                '}"Code": "8800",{'\n'}
                        {'                                '}"Amount": 88.0,{'\n'}
                        {'                                '}"Description": "",{'\n'}
                        {'                                '}"Is_Substract": false,
                        {'\n'}
                        {'                                '}"CurrencyCode": "USD"
                        {'\n'}
                        {'                            '}
                        {'}'},{'\n'}
                        {'                            '}
                        {'{'}
                        {'\n'}
                        {'                                '}"Taxes": {'{'}
                        {'\n'}
                        {'                                    '}"Amount": 0.0{'\n'}
                        {'                                '}
                        {'}'},{'\n'}
                        {'                                '}"Go_Discount_ID": "9000",{'\n'}
                        {'                                '}"Go_Discount_Name": "9000",{'\n'}
                        {'                                '}"Code": "9000",{'\n'}
                        {'                                '}"Amount": 90.0,{'\n'}
                        {'                                '}"Description": "",{'\n'}
                        {'                                '}"Is_Substract": false,
                        {'\n'}
                        {'                                '}"CurrencyCode": "USD"
                        {'\n'}
                        {'                            '}
                        {'}'}
                        {'\n'}
                        {'                        '}],{'\n'}
                        {'                        '}"Text": null{'\n'}
                        {'                    '}
                        {'}'},{'\n'}
                        {'                    '}"TravelerRefNumberRPHs": null{'\n'}
                        {'                '}
                        {'}'}
                        {'\n'}
                        {'            '}],{'\n'}
                        {'            '}"BookingReferenceID": null,{'\n'}
                        {'            '}"SeatUpgradeApplied": false{'\n'}
                        {'        '}
                        {'}'}
                        {'\n'}
                        {'    '}],{'\n'}
                        {'    '}"Passengers": [{'\n'}
                        {'        '}
                        {'{'}
                        {'\n'}
                        {'            '}"Id": "b8e37703-0747-4360-9e44-fff2c933f2a1",{'\n'}
                        {'            '}"Title": null,{'\n'}
                        {'            '}"TypeCode": "ADT",{'\n'}
                        {'            '}"FirstName": "Passenger 1",{'\n'}
                        {'            '}"MiddleName": null,{'\n'}
                        {'            '}"LastName": null,{'\n'}
                        {'            '}"Email": null,{'\n'}
                        {'            '}"CountryCode": null,{'\n'}
                        {'            '}"Phone": null,{'\n'}
                        {'            '}"PhoneCode": null,{'\n'}
                        {'            '}"PhoneAreaCode": null,{'\n'}
                        {'            '}"DriversLicence": null,{'\n'}
                        {'            '}"NationalIdentity": null,{'\n'}
                        {'            '}"LocallyDefinedIDNumber": null,{'\n'}
                        {'            '}"MobilePhone": null,{'\n'}
                        {'            '}"MobilePhoneCode": null,{'\n'}
                        {'            '}"TicketNumber": null,{'\n'}
                        {'            '}"JetSmartPassengerData": null,{'\n'}
                        {'            '}"EmployeeUsername": null,{'\n'}
                        {'            '}"LoyalityProgram": null,{'\n'}
                        {'            '}"ReducedMobilityAssistanceInfo": null,{'\n'}
                        {'            '}"ChoosenSpeedyBoardingInfo": null,{'\n'}
                        {'            '}"CarLoyalityProgram": null,{'\n'}
                        {'            '}"HotelLoyalityProgram": null,{'\n'}
                        {'            '}"Rank": 0,{'\n'}
                        {'            '}"AgeGroup": null,{'\n'}
                        {'            '}"TrainSeasonTickets": null,{'\n'}
                        {'            '}"SelectedTrainTicketNumber": null,{'\n'}
                        {'            '}"TrainLoyaltyCard": null,{'\n'}
                        {'            '}"RoomSchedule": null,{'\n'}
                        {'            '}"MealsNSeatReq": null,{'\n'}
                        {'            '}"Gender": null,{'\n'}
                        {'            '}"PassportNumber2": null,{'\n'}
                        {'            '}"CountryOfIssuance2": null,{'\n'}
                        {'            '}"CountryOfNationality2": null,{'\n'}
                        {'            '}"ExpirationDate2": null,{'\n'}
                        {'            '}"IssueDate2": null,{'\n'}
                        {'            '}"TypeOfUSADocument": null,{'\n'}
                        {'            '}"USADocumentNumber": null,{'\n'}
                        {'            '}"USADocumentExpirationDate": null,{'\n'}
                        {'            '}"CubanDocumentNumber": null,{'\n'}
                        {'            '}"CubanDocumentExpirationDate": null,{'\n'}
                        {'            '}"CubanAddress": null,{'\n'}
                        {'            '}"Neighborhood": null,{'\n'}
                        {'            '}"CubanTelephone": null,{'\n'}
                        {'            '}"Province": null,{'\n'}
                        {'            '}"Town": null,{'\n'}
                        {'            '}"DateOfBirthString": null,{'\n'}
                        {'            '}"PassportExpDateString2": null,{'\n'}
                        {'            '}"PassportIssuingDateString2": null,{'\n'}
                        {'            '}"PassportExpDateString": null,{'\n'}
                        {'            '}"PassportIssuingDateString": null,{'\n'}
                        {'            '}"FlightsSeatMap": null,{'\n'}
                        {'            '}"PaymentInfoObject": null,{'\n'}
                        {'            '}"BaggagePiecesQty": null,{'\n'}
                        {'            '}"ChosenCostCenterId": null,{'\n'}
                        {'            '}"ChosenCostCenter": null,{'\n'}
                        {'            '}"DateOfBirth": null,{'\n'}
                        {'            '}"PassportExpDate": null,{'\n'}
                        {'            '}"PassportIssuingDate": null,{'\n'}
                        {'            '}"AncillaryServiceIds": null,{'\n'}
                        {'            '}"ExcessBaggageWeightQuantity": null,{'\n'}
                        {'            '}"AncillaryServiceInfos": null,{'\n'}
                        {'            '}"UserRole": null,{'\n'}
                        {'            '}"EmployeeId": null,{'\n'}
                        {'            '}"CorporateEmpId": null,{'\n'}
                        {'            '}"EmployeeJobTitle": null,{'\n'}
                        {'            '}"EmployeeCostCenter": null,{'\n'}
                        {'            '}"EmployeeRecordLocator": null,{'\n'}
                        {'            '}"AmadeusRecordLocator": null,{'\n'}
                        {'            '}"SabreRecordLocator": null,{'\n'}
                        {'            '}"TravelPortRecordLocator": null,{'\n'}
                        {'            '}"RedressNumber": null,{'\n'}
                        {'            '}"KnownTravellerId": null,{'\n'}
                        {'            '}"EmployeeIdentifier": null,{'\n'}
                        {'            '}"PassportNo": null,{'\n'}
                        {'            '}"PassportIssuingCountry": null,{'\n'}
                        {'            '}"PassportIssuingCountryCode": null,{'\n'}
                        {'            '}"CountryOfNationality": null,{'\n'}
                        {'            '}"NationalityCountryCode": null,{'\n'}
                        {'            '}"PassportIssuingCountryName": null,{'\n'}
                        {'            '}"VisaPurchased": false,{'\n'}
                        {'            '}"SpecialServiceRequestCodes": null,{'\n'}
                        {'            '}"IsGuestTraveller": false,{'\n'}
                        {'            '}"B2CPassword": null,{'\n'}
                        {'            '}"NdcBaggageInfoPerFlight": null,{'\n'}
                        {'            '}"SelectedNdcBaggagePrice": 0.0,{'\n'}
                        {'            '}"NdcServiceListOfferId": null,{'\n'}
                        {'            '}"ResidentDiscountCode": null,{'\n'}
                        {'            '}"ResidentDiscountAreaCode": null,{'\n'}
                        {'            '}"ResidentDiscountCityCode": null,{'\n'}
                        {'            '}"ResidentCountryCode": null,{'\n'}
                        {'            '}"SelectedPrepaidBaggage": null,{'\n'}
                        {'            '}"SelectedFlightExtras": null{'\n'}
                        {'        '}
                        {'}'}
                        {'\n'}
                        {'    '}],{'\n'}
                        {'    '}"Error": null,{'\n'}
                        {'    '}"Warnings": null{'\n'}
                        {'}'}
                      </pre>
                    </div>
                  </div>
                  <p />
                </div>
              </div>
              <hr />
              <h2 id="FRD-Seatmapimplementation-MVP1-Design">Design</h2>
              <p>
                At the presentation level in the UI booking flow, this should be an Collapsed
                section where the user can click and display the proper seat map component
              </p>
              <p>
                <strong>Examples of components:</strong>
              </p>
              <p>
                <a
                  className="external-link"
                  data-card-appearance="inline"
                  href="https://www.infragistics.com/resources/sample-applications/infragistics-wpf-airline"
                  rel="nofollow"
                >
                  https://www.infragistics.com/resources/sample-applications/infragistics-wpf-airline
                </a>{' '}
              </p>
              <p>
                <a
                  className="external-link"
                  href="https://stock.adobe.com/ar/images/aircraft-seat-map-scheme-seats-and-tickets-flat-design-vector/119992382"
                  rel="nofollow"
                >
                  https://stock.adobe.com/ar/images/aircraft-seat-map-scheme-seats-and-tickets-flat-design-vector/119992382
                </a>
              </p>
              <p />
              <p>
                <br />
              </p>
              <p style={{ marginLeft: '60.0px' }} />
            </div>
          </div>{' '}
        </div>
        <div id="footer" role="contentinfo">
          <section className="footer-body">
            <p>Document generated by Confluence on Jul 09, 2024 08:02</p>
            <div id="footer-logo">
              <a href="http://www.atlassian.com/">Atlassian</a>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default FRDSeatMap
