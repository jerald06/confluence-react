import{j as n}from"./index-IbF6I9J_.js";function a(){return n.jsxs(n.Fragment,{children:[n.jsx("title",{children:"XeniApp : FRD - Seat map implementation - MVP1"}),n.jsx("link",{rel:"stylesheet",href:"styles/site.css",type:"text/css"}),n.jsx("meta",{httpEquiv:"Content-Type",content:"text/html; charset=UTF-8"}),n.jsxs("div",{id:"page",children:[n.jsxs("div",{id:"main",className:"aui-page-panel",children:[n.jsxs("div",{id:"main-header",children:[n.jsx("div",{id:"breadcrumb-section",children:n.jsxs("ol",{id:"breadcrumbs",children:[n.jsx("li",{className:"first",children:n.jsx("span",{children:n.jsx("a",{href:"index.html",children:"XeniApp"})})}),n.jsx("li",{children:n.jsx("span",{children:n.jsx("a",{href:"XeniApp_542179373.html",children:"XeniApp"})})}),n.jsx("li",{children:n.jsx("span",{children:n.jsx("a",{href:"Projects_583761921.html",children:"Projects"})})}),n.jsx("li",{children:n.jsx("span",{children:n.jsx("a",{href:"Seat-map_585433090.html",children:"Seat map"})})})]})}),n.jsx("h1",{id:"title-heading",className:"pagetitle",children:n.jsx("span",{id:"title-text",children:"XeniApp : FRD - Seat map implementation - MVP1"})})]}),n.jsxs("div",{id:"content",className:"view",children:[n.jsxs("div",{className:"page-metadata",children:["Created by ",n.jsx("span",{className:"author",children:" Gerardo Nizetich"}),", last modified on Nov 27, 2023"]}),n.jsxs("div",{id:"main-content",className:"wiki-content group",children:[n.jsx("style",{type:"text/css",dangerouslySetInnerHTML:{__html:`/*<![CDATA[*/
div.rbtoc1720512155786 {padding: 0px;}
div.rbtoc1720512155786 ul {list-style: disc;margin-left: 0px;}
div.rbtoc1720512155786 li {margin-left: 0px;padding-left: 0px;}

/*]]>*/`}}),n.jsx("div",{className:"toc-macro rbtoc1720512155786",children:n.jsx("ul",{className:"toc-indentation",children:n.jsxs("li",{children:[n.jsx("a",{href:"#FRD-Seatmapimplementation-MVP1-Functionalobjective",children:"Functional objective"}),n.jsxs("ul",{className:"toc-indentation",children:[n.jsx("li",{children:n.jsx("a",{href:"#FRD-Seatmapimplementation-MVP1-Prerequisites",children:"Prerequisites"})}),n.jsx("li",{children:n.jsx("a",{href:"#FRD-Seatmapimplementation-MVP1-Functionalflow",children:"Functional flow"})}),n.jsxs("li",{children:[n.jsx("a",{href:"#FRD-Seatmapimplementation-MVP1-Technicalrequirements",children:"Technical requirements"}),n.jsxs("ul",{className:"toc-indentation",children:[n.jsx("li",{children:n.jsx("a",{href:"#FRD-Seatmapimplementation-MVP1-Prerequisites.1",children:"Prerequisites"})}),n.jsx("li",{children:n.jsx("a",{href:"#FRD-Seatmapimplementation-MVP1-GetseatMapInformation",children:"Get seat Map Information"})})]})]}),n.jsx("li",{children:n.jsx("a",{href:"#FRD-Seatmapimplementation-MVP1-Design",children:"Design"})})]})]})})}),n.jsx("hr",{}),n.jsx("h1",{id:"FRD-Seatmapimplementation-MVP1-Functionalobjective",children:"Functional objective"}),n.jsx("p",{children:"Offer to the consumer to select and pre-reserve the seats for their flight segments booked."}),n.jsx("hr",{}),n.jsx("h2",{id:"FRD-Seatmapimplementation-MVP1-Prerequisites",children:"Prerequisites"}),n.jsx("ul",{children:n.jsxs("li",{children:[n.jsx("p",{children:"Reservation Created"}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx("p",{children:"Itinerary segments"})}),n.jsx("li",{children:n.jsx("p",{children:"Fare Segments"})}),n.jsx("li",{children:n.jsx("p",{children:"List of passengers"})}),n.jsx("li",{children:n.jsx("p",{children:"Passenger Types"})}),n.jsx("li",{children:n.jsx("p",{children:"Fared booked (allow pre-reserved seats)"})})]})]})}),n.jsx("hr",{}),n.jsx("h2",{id:"FRD-Seatmapimplementation-MVP1-Functionalflow",children:"Functional flow"}),n.jsx("div",{className:"table-wrap",children:n.jsxs("table",{"data-table-width":1196,"data-layout":"default","data-local-id":"5bd18828-d36f-41a3-aa2a-6ad8eae71235",className:"confluenceTable",children:[n.jsxs("colgroup",{children:[n.jsx("col",{style:{width:"205.0px"}}),n.jsx("col",{style:{width:"991.0px"}})]}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("th",{className:"confluenceTh",children:n.jsx("p",{children:n.jsx("strong",{children:"Actor"})})}),n.jsx("th",{className:"confluenceTh",children:n.jsx("p",{children:n.jsx("strong",{children:"Action"})})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Authenticated User"})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Select an Itinerary"})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Book the itinerary"})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Complete the passenger’s information"})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Identify each passenger with the proper PTC (Passenger Type code)."})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Below Passenger Information - Create a section “Select seats”"})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Passengers expand the section and see the Seats component by flight Segment and a Dropdown list with each passenger’s Name and PTC"})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"In the passenger’s Dropdown, grey-out - PTC = INF (Infant not occupying a seat)"})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Identify available seats and greyed-out occupied seats.|"})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"Mouse over a seat, and display a description tip, with the characteristic and price of the seat."})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"The user has to select each seat for each passenger on the list."})})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{})}),n.jsxs("td",{className:"confluenceTd",children:[n.jsx("p",{children:"If the itinerary has more than one segment:"}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx("p",{children:"Create tabs by segments."})}),n.jsx("li",{children:n.jsx("p",{children:"Each segment should resolve the seat map."})}),n.jsx("li",{children:n.jsx("p",{children:"The passenger dropdown has to be the same list of passengers."})}),n.jsx("li",{children:n.jsx("p",{children:"The passenger should select only 1 seat passenger per segment."})}),n.jsx("li",{children:n.jsx("p",{children:"Each seat selected with the associated price must appear on the trip summary and update the total price of the trip."})})]})]})]}),n.jsxs("tr",{children:[n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{})}),n.jsx("td",{className:"confluenceTd",children:n.jsx("p",{children:"The user continues with the Booking flow"})})]})]})]})}),n.jsx("hr",{}),n.jsx("h2",{id:"FRD-Seatmapimplementation-MVP1-Technicalrequirements",children:"Technical requirements"}),n.jsx("h3",{id:"FRD-Seatmapimplementation-MVP1-Prerequisites.1",children:"Prerequisites"}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsxs("p",{children:[n.jsx("strong",{children:"Provider"}),": Thomalex"]})}),n.jsx("li",{children:n.jsxs("p",{children:["Flight segments must be present in Shopping Cart (Thomalex)",n.jsx("br",{})]})})]}),n.jsxs("div",{id:"expander-247361459",className:"expand-container",children:[n.jsxs("div",{id:"expander-control-247361459",className:"expand-control",children:[n.jsx("span",{className:"expand-control-icon",children:n.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"/src/images/icons/grey_arrow_down.png"})}),n.jsx("span",{className:"expand-control-text",children:"Request example:"})]}),n.jsx("div",{id:"expander-content-247361459",className:"expand-content",children:n.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:n.jsx("div",{className:"codeContent panelContent pdl",children:n.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["curl --location 'http://rest.resvoyage.com/api/v1/cart/air/add' \\",`
`,"--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6IlhlbmkiLCJDbGllbnRJZCI6IjM5ODYiLCJyb2xlIjoiQjJDIiwiVHJhdmVsR3JvdXBJZCI6IjQyMTkiLCJpc3MiOiJodHRwOi8vcmVzdm95YWdlLmNvbSIsImF1ZCI6InJlc3ZveWFnZSIsImV4cCI6MTY5ODEwMzE1NCwibmJmIjoxNjk4MDg1MTU0fQ.jjufC2jZWg0aMVdiHv4ww7TKgdGFcLwOCnXTX0_nUmE' \\",`
`,"--header 'Content-Type: application/json' \\",`
`,"--data '","{",`
`,"    ",'"ItemId": "',"{","{","itineraryItem","}","}",'",',`
`,"    ",'"SessionId": "',"{","{","ThomalexSessionId","}","}",'"',`
`,"}","'"]})})})})]}),n.jsx("p",{}),n.jsxs("div",{id:"expander-41600481",className:"expand-container",children:[n.jsxs("div",{id:"expander-control-41600481",className:"expand-control",children:[n.jsx("span",{className:"expand-control-icon",children:n.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"/src/images/icons/grey_arrow_down.png"})}),n.jsx("span",{className:"expand-control-text",children:"Response example:"})]}),n.jsxs("div",{id:"expander-content-41600481",className:"expand-content",children:[n.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:n.jsx("div",{className:"codeContent panelContent pdl",children:n.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["{",`
`,"    ",'"SessionId": "0b7da6df-61a8-4a49-b626-84cd49ea3123",',`
`,"    ",'"ShoppingCart": ',"{",`
`,"        ",'"Warning": null,',`
`,"        ",'"ReservationStatus": "",',`
`,"        ",'"InsuranceInfo": null,',`
`,"        ",'"Air": ',"{",`
`,"            ",'"AirItinerary": ',"{",`
`,"                ",'"DirectionInd": "OneWay",',`
`,"                ",'"OriginDestinationOptions": [',`
`,"                    ","{",`
`,"                        ",'"SectorSequence": 1,',`
`,"                        ",'"FlightSegments": [',`
`,"                            ","{",`
`,"                                ",'"RouteNumber": "B62293",',`
`,"                                ",'"MarketingAirlineName": "Jetblue Airways",',`
`,"                                ",'"OperatingAirlineName": "Jetblue Airways",',`
`,"                                ",'"Duration": "03:19:00",',`
`,"                                ",'"DepartureCountryCode": "US",',`
`,"                                ",'"ArrivalCountryCode": "US",',`
`,"                                ",'"Aircraft": null,',`
`,"                                ",'"BookingClass": "L",',`
`,"                                ",'"ArrivalAirportName": "Miami-Miami Intl, FL, United States",',`
`,"                                ",'"DepartureAirportName": "New York-John F Kennedy, NY, United States",',`
`,"                                ",'"BaggageFeeUrl": "https://bags.amadeus.com/Display.aspx?a=B6",',`
`,"                                ",'"FreeBaggages": null,',`
`,"                                ",'"Cabin": "Economy",',`
`,"                                ",'"AirlineLogo": "content/airline-logos/B6.png",',`
`,"                                ",'"DepartureTerminal": null,',`
`,"                                ",'"ArrivalTerminal": null,',`
`,"                                ",'"DepartureCityName": null,',`
`,"                                ",'"ArrivalCityName": null,',`
`,"                                ",'"SeatsLeft": null,',`
`,"                                ",'"FlightNumber": "2293",',`
`,"                                ",'"MarketingAirlineCode": "B6",',`
`,"                                ",'"OperatingAirlineCode": "B6",',`
`,"                                ",'"DepartureDate": "2023-12-20T05:59:00",',`
`,"                                ",'"ArrivalDate": "2023-12-20T09:18:00",',`
`,"                                ",'"DepartureAirport": "JFK",',`
`,"                                ",'"ArrivalAirport": "MIA"',`
`,"                            ","}",`
`,"                        ","],",`
`,"                        ",'"Cabin": "Economy",',`
`,"                        ",'"JourneyTotalDuration": "03:19:00"',`
`,"                    ","}",`
`,"                ","],",`
`,"                ",'"TicketTimeLimit": "2023-11-28T23:00:00"',`
`,"            ","}",",",`
`,"            ",'"AirItineraryPricingInfo": ',"{",`
`,"                ",'"TotalPrice": 78.89,',`
`,"                ",'"BasePrice": 59.53,',`
`,"                ",'"Tax": 19.36,',`
`,"                ",'"Markup": 0.0,',`
`,"                ",'"ServiceFee": 0.0,',`
`,"                ",'"ItinerarySurchargePrice": 0.0,',`
`,"                ",'"Discount": 0.0,',`
`,"                ",'"PromotionalDiscount": 0.0,',`
`,"                ",'"CurrencyCode": "USD",',`
`,"                ",'"PTC_FareBreakdowns": [',`
`,"                    ","{",`
`,"                        ",'"PTCIdentifier": null,',`
`,"                        ",'"Baggages": [',`
`,"                            ","{",`
`,"                                ",'"SequenceNumber": 1,',`
`,"                                ",'"FlightNumber": "2293",',`
`,"                                ",'"FreeQuantity": 0.0,',`
`,"                                ",'"Id": null,',`
`,"                                ",'"PassengerId": null,',`
`,"                                ",'"Title": null,',`
`,"                                ",'"Description": null,',`
`,"                                ",'"Amount": null,',`
`,"                                ",'"PassengerCode": "ADT",',`
`,"                                ",'"BagAllowanceType": "Piece",',`
`,"                                ",'"BagAllowanceUnit": "K"',`
`,"                            ","}",`
`,"                        ","],",`
`,"                        ",'"FlightExtrasInfo": null,',`
`,"                        ",'"BasePriceFromItinerary": 59.53,',`
`,"                        ",'"BasePrice": 59.53,',`
`,"                        ",'"Markup": 0.0,',`
`,"                        ",'"Discount": 0.0,',`
`,"                        ",'"Tax": 19.36,',`
`,"                        ",'"Surcharge": 0.0,',`
`,"                        ",'"DiscountAmountFromContract": 0.0,',`
`,"                        ",'"PromotionalDiscount": 0.0,',`
`,"                        ",'"TotalDiscount": 0.0,',`
`,"                        ",'"TotalPrice": 78.89,',`
`,"                        ",'"PassengerCount": 1,',`
`,"                        ",'"PassengerType": "ADT",',`
`,"                        ",'"CodeContext": null,',`
`,"                        ",'"MarkupBreakdown": [],',`
`,"                        ",'"DiscountBreakdown": [],',`
`,"                        ",'"PromotionalDiscountBreakdown": [],',`
`,"                        ",'"ContractManagerDiscountBreakdown": null,',`
`,"                        ",'"AllDiscountBreakdowns": [],',`
`,"                        ",'"FareBasisCodes": [',`
`,"                            ",'"PI2ABEL1"',`
`,"                        ","]",`
`,"                    ","}",`
`,"                ","],",`
`,"                ",'"PricingSource": null,',`
`,"                ",'"IsNegotiatedPrice": false,',`
`,"                ",'"FareType": "Published",',`
`,"                ",'"FareFamily": "BLUE BASIC-DN-220077",',`
`,"                ",'"ValidatingAirlineCode": "B6",',`
`,"                ",'"AdditionalFareInfos": [',`
`,"                    ","{",`
`,"                        ",'"FareReference": "PI2ABEL1",',`
`,"                        ",'"ValidatingAirlineCode": "",',`
`,"                        ",'"FareFamily": null,',`
`,"                        ",'"Cabin": "",',`
`,"                        ",'"DepartureAirport": "JFK",',`
`,"                        ",'"DepartureDate": "2023-12-20T05:59:00",',`
`,"                        ",'"ArrivalAirport": "MIA",',`
`,"                        ",'"Penalty": null',`
`,"                    ","}",`
`,"                ","],",`
`,"                ",'"TaxBreakdown": null',`
`,"            ","}",",",`
`,"            ",'"Id": "64295a7d-a6ba-46b5-8615-c3ee4b9cbdd4",',`
`,"            ",'"PolicyType": null,',`
`,"            ",'"DeepLinkUrl": "",',`
`,"            ",'"Provider": "Sabre",',`
`,"            ",'"OfficeId": "5YAI",',`
`,"            ",'"UseTravelFusionTFPay": false,',`
`,"            ",'"TravelFusionReferenceNumber": null',`
`,"        ","}",",",`
`,"        ",'"Flights": [',`
`,"            ","{",`
`,"                ",'"AirItinerary": ',"{",`
`,"                    ",'"DirectionInd": "OneWay",',`
`,"                    ",'"OriginDestinationOptions": [',`
`,"                        ","{",`
`,"                            ",'"SectorSequence": 1,',`
`,"                            ",'"FlightSegments": [',`
`,"                                ","{",`
`,"                                    ",'"RouteNumber": "B62293",',`
`,"                                    ",'"MarketingAirlineName": "Jetblue Airways",',`
`,"                                    ",'"OperatingAirlineName": "Jetblue Airways",',`
`,"                                    ",'"Duration": "03:19:00",',`
`,"                                    ",'"DepartureCountryCode": "US",',`
`,"                                    ",'"ArrivalCountryCode": "US",',`
`,"                                    ",'"Aircraft": null,',`
`,"                                    ",'"BookingClass": "L",',`
`,"                                    ",'"ArrivalAirportName": "Miami-Miami Intl, FL, United States",',`
`,"                                    ",'"DepartureAirportName": "New York-John F Kennedy, NY, United States",',`
`,"                                    ",'"BaggageFeeUrl": "https://bags.amadeus.com/Display.aspx?a=B6",',`
`,"                                    ",'"FreeBaggages": null,',`
`,"                                    ",'"Cabin": "Economy",',`
`,"                                    ",'"AirlineLogo": "content/airline-logos/B6.png",',`
`,"                                    ",'"DepartureTerminal": null,',`
`,"                                    ",'"ArrivalTerminal": null,',`
`,"                                    ",'"DepartureCityName": null,',`
`,"                                    ",'"ArrivalCityName": null,',`
`,"                                    ",'"SeatsLeft": null,',`
`,"                                    ",'"FlightNumber": "2293",',`
`,"                                    ",'"MarketingAirlineCode": "B6",',`
`,"                                    ",'"OperatingAirlineCode": "B6",',`
`,"                                    ",'"DepartureDate": "2023-12-20T05:59:00",',`
`,"                                    ",'"ArrivalDate": "2023-12-20T09:18:00",',`
`,"                                    ",'"DepartureAirport": "JFK",',`
`,"                                    ",'"ArrivalAirport": "MIA"',`
`,"                                ","}",`
`,"                            ","],",`
`,"                            ",'"Cabin": "Economy",',`
`,"                            ",'"JourneyTotalDuration": "03:19:00"',`
`,"                        ","}",`
`,"                    ","],",`
`,"                    ",'"TicketTimeLimit": "2023-11-28T23:00:00"',`
`,"                ","}",",",`
`,"                ",'"AirItineraryPricingInfo": ',"{",`
`,"                    ",'"TotalPrice": 78.89,',`
`,"                    ",'"BasePrice": 59.53,',`
`,"                    ",'"Tax": 19.36,',`
`,"                    ",'"Markup": 0.0,',`
`,"                    ",'"ServiceFee": 0.0,',`
`,"                    ",'"ItinerarySurchargePrice": 0.0,',`
`,"                    ",'"Discount": 0.0,',`
`,"                    ",'"PromotionalDiscount": 0.0,',`
`,"                    ",'"CurrencyCode": "USD",',`
`,"                    ",'"PTC_FareBreakdowns": [',`
`,"                        ","{",`
`,"                            ",'"PTCIdentifier": null,',`
`,"                            ",'"Baggages": [',`
`,"                                ","{",`
`,"                                    ",'"SequenceNumber": 1,',`
`,"                                    ",'"FlightNumber": "2293",',`
`,"                                    ",'"FreeQuantity": 0.0,',`
`,"                                    ",'"Id": null,',`
`,"                                    ",'"PassengerId": null,',`
`,"                                    ",'"Title": null,',`
`,"                                    ",'"Description": null,',`
`,"                                    ",'"Amount": null,',`
`,"                                    ",'"PassengerCode": "ADT",',`
`,"                                    ",'"BagAllowanceType": "Piece",',`
`,"                                    ",'"BagAllowanceUnit": "K"',`
`,"                                ","}",`
`,"                            ","],",`
`,"                            ",'"FlightExtrasInfo": null,',`
`,"                            ",'"BasePriceFromItinerary": 59.53,',`
`,"                            ",'"BasePrice": 59.53,',`
`,"                            ",'"Markup": 0.0,',`
`,"                            ",'"Discount": 0.0,',`
`,"                            ",'"Tax": 19.36,',`
`,"                            ",'"Surcharge": 0.0,',`
`,"                            ",'"DiscountAmountFromContract": 0.0,',`
`,"                            ",'"PromotionalDiscount": 0.0,',`
`,"                            ",'"TotalDiscount": 0.0,',`
`,"                            ",'"TotalPrice": 78.89,',`
`,"                            ",'"PassengerCount": 1,',`
`,"                            ",'"PassengerType": "ADT",',`
`,"                            ",'"CodeContext": null,',`
`,"                            ",'"MarkupBreakdown": [],',`
`,"                            ",'"DiscountBreakdown": [],',`
`,"                            ",'"PromotionalDiscountBreakdown": [],',`
`,"                            ",'"ContractManagerDiscountBreakdown": null,',`
`,"                            ",'"AllDiscountBreakdowns": [],',`
`,"                            ",'"FareBasisCodes": [',`
`,"                                ",'"PI2ABEL1"',`
`,"                            ","]",`
`,"                        ","}",`
`,"                    ","],",`
`,"                    ",'"PricingSource": null,',`
`,"                    ",'"IsNegotiatedPrice": false,',`
`,"                    ",'"FareType": "Published",',`
`,"                    ",'"FareFamily": "BLUE BASIC-DN-220077",',`
`,"                    ",'"ValidatingAirlineCode": "B6",',`
`,"                    ",'"AdditionalFareInfos": [',`
`,"                        ","{",`
`,"                            ",'"FareReference": "PI2ABEL1",',`
`,"                            ",'"ValidatingAirlineCode": "",',`
`,"                            ",'"FareFamily": null,',`
`,"                            ",'"Cabin": "",',`
`,"                            ",'"DepartureAirport": "JFK",',`
`,"                            ",'"DepartureDate": "2023-12-20T05:59:00",',`
`,"                            ",'"ArrivalAirport": "MIA",',`
`,"                            ",'"Penalty": null',`
`,"                        ","}",`
`,"                    ","],",`
`,"                    ",'"TaxBreakdown": null',`
`,"                ","}",",",`
`,"                ",'"Id": "64295a7d-a6ba-46b5-8615-c3ee4b9cbdd4",',`
`,"                ",'"PolicyType": null,',`
`,"                ",'"DeepLinkUrl": "",',`
`,"                ",'"Provider": "Sabre",',`
`,"                ",'"OfficeId": "5YAI",',`
`,"                ",'"UseTravelFusionTFPay": false,',`
`,"                ",'"TravelFusionReferenceNumber": null',`
`,"            ","}",`
`,"        ","],",`
`,"        ",'"Hotels": [],',`
`,"        ",'"Cars": [],',`
`,"        ",'"Travellers": [',`
`,"            ","{",`
`,"                ",'"Id": "b8e37703-0747-4360-9e44-fff2c933f2a1",',`
`,"                ",'"Title": null,',`
`,"                ",'"TypeCode": "ADT",',`
`,"                ",'"FirstName": null,',`
`,"                ",'"MiddleName": null,',`
`,"                ",'"LastName": null,',`
`,"                ",'"Email": null,',`
`,"                ",'"CountryCode": null,',`
`,"                ",'"Phone": null,',`
`,"                ",'"PhoneCode": null,',`
`,"                ",'"PhoneAreaCode": null,',`
`,"                ",'"DriversLicence": null,',`
`,"                ",'"NationalIdentity": null,',`
`,"                ",'"LocallyDefinedIDNumber": null,',`
`,"                ",'"MobilePhone": null,',`
`,"                ",'"MobilePhoneCode": null,',`
`,"                ",'"TicketNumber": null,',`
`,"                ",'"JetSmartPassengerData": null,',`
`,"                ",'"EmployeeUsername": null,',`
`,"                ",'"LoyalityProgram": null,',`
`,"                ",'"ReducedMobilityAssistanceInfo": null,',`
`,"                ",'"ChoosenSpeedyBoardingInfo": null,',`
`,"                ",'"CarLoyalityProgram": null,',`
`,"                ",'"HotelLoyalityProgram": null,',`
`,"                ",'"Rank": 0,',`
`,"                ",'"AgeGroup": null,',`
`,"                ",'"TrainSeasonTickets": null,',`
`,"                ",'"SelectedTrainTicketNumber": null,',`
`,"                ",'"TrainLoyaltyCard": null,',`
`,"                ",'"RoomSchedule": null,',`
`,"                ",'"MealsNSeatReq": null,',`
`,"                ",'"Gender": null,',`
`,"                ",'"PassportNumber2": null,',`
`,"                ",'"CountryOfIssuance2": null,',`
`,"                ",'"CountryOfNationality2": null,',`
`,"                ",'"ExpirationDate2": null,',`
`,"                ",'"IssueDate2": null,',`
`,"                ",'"TypeOfUSADocument": null,',`
`,"                ",'"USADocumentNumber": null,',`
`,"                ",'"USADocumentExpirationDate": null,',`
`,"                ",'"CubanDocumentNumber": null,',`
`,"                ",'"CubanDocumentExpirationDate": null,',`
`,"                ",'"CubanAddress": null,',`
`,"                ",'"Neighborhood": null,',`
`,"                ",'"CubanTelephone": null,',`
`,"                ",'"Province": null,',`
`,"                ",'"Town": null,',`
`,"                ",'"DateOfBirthString": null,',`
`,"                ",'"PassportExpDateString2": null,',`
`,"                ",'"PassportIssuingDateString2": null,',`
`,"                ",'"PassportExpDateString": null,',`
`,"                ",'"PassportIssuingDateString": null,',`
`,"                ",'"FlightsSeatMap": null,',`
`,"                ",'"PaymentInfoObject": null,',`
`,"                ",'"BaggagePiecesQty": null,',`
`,"                ",'"ChosenCostCenterId": null,',`
`,"                ",'"ChosenCostCenter": null,',`
`,"                ",'"DateOfBirth": null,',`
`,"                ",'"PassportExpDate": null,',`
`,"                ",'"PassportIssuingDate": null,',`
`,"                ",'"AncillaryServiceIds": null,',`
`,"                ",'"ExcessBaggageWeightQuantity": null,',`
`,"                ",'"AncillaryServiceInfos": null,',`
`,"                ",'"UserRole": null,',`
`,"                ",'"EmployeeId": null,',`
`,"                ",'"CorporateEmpId": null,',`
`,"                ",'"EmployeeJobTitle": null,',`
`,"                ",'"EmployeeCostCenter": null,',`
`,"                ",'"EmployeeRecordLocator": null,',`
`,"                ",'"AmadeusRecordLocator": null,',`
`,"                ",'"SabreRecordLocator": null,',`
`,"                ",'"TravelPortRecordLocator": null,',`
`,"                ",'"RedressNumber": null,',`
`,"                ",'"KnownTravellerId": null,',`
`,"                ",'"EmployeeIdentifier": null,',`
`,"                ",'"PassportNo": null,',`
`,"                ",'"PassportIssuingCountry": null,',`
`,"                ",'"PassportIssuingCountryCode": null,',`
`,"                ",'"CountryOfNationality": null,',`
`,"                ",'"NationalityCountryCode": null,',`
`,"                ",'"PassportIssuingCountryName": null,',`
`,"                ",'"VisaPurchased": false,',`
`,"                ",'"SpecialServiceRequestCodes": null,',`
`,"                ",'"IsGuestTraveller": false,',`
`,"                ",'"B2CPassword": null,',`
`,"                ",'"NdcBaggageInfoPerFlight": null,',`
`,"                ",'"SelectedNdcBaggagePrice": 0.0,',`
`,"                ",'"NdcServiceListOfferId": null,',`
`,"                ",'"ResidentDiscountCode": null,',`
`,"                ",'"ResidentDiscountAreaCode": null,',`
`,"                ",'"ResidentDiscountCityCode": null,',`
`,"                ",'"ResidentCountryCode": null,',`
`,"                ",'"SelectedPrepaidBaggage": null,',`
`,"                ",'"SelectedFlightExtras": null',`
`,"            ","}",`
`,"        ","],",`
`,"        ",'"NeedJustification": false,',`
`,"        ",'"PersonalCreditCards": null,',`
`,"        ",'"TravelName": null,',`
`,"        ",'"Meta": null,',`
`,"        ",'"TravelReason": null,',`
`,"        ",'"UniqueTripIdentifier": "cqwgny051uk",',`
`,"        ",'"ThirdPartyBookingReferenceNumber": null,',`
`,"        ",'"EnableTravelGuard": false,',`
`,"        ",'"EnableBlueRibbonBags": false,',`
`,"        ",'"BookingReferenceNumber": null,',`
`,"        ",'"StripeClientSecret": null,',`
`,"        ",'"IsShoppingCartEmpty": false,',`
`,"        ",'"AirlineBookingReferences": null,',`
`,"        ",'"AvailablePaymentOptions": [',`
`,"            ","{",`
`,"                ",'"TravelType": "AIR",',`
`,"                ",'"PaymentOptions": [',`
`,"                    ",'"CreditCard"',`
`,"                ","]",`
`,"            ","}",`
`,"        ","],",`
`,"        ",'"PaymentGateway": null,',`
`,"        ",'"TotalPrice": 78.89,',`
`,"        ",'"TermsUrl": null,',`
`,"        ",'"PaymentInfos": null',`
`,"    ","}",`
`,"}"]})})}),n.jsx("p",{})]})]}),n.jsx("p",{}),n.jsx("hr",{}),n.jsx("h3",{id:"FRD-Seatmapimplementation-MVP1-GetseatMapInformation",children:"Get seat Map Information"}),n.jsxs("div",{id:"expander-1628489132",className:"expand-container",children:[n.jsxs("div",{id:"expander-control-1628489132",className:"expand-control",children:[n.jsx("span",{className:"expand-control-icon",children:n.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"/src/images/icons/grey_arrow_down.png"})}),n.jsx("span",{className:"expand-control-text",children:"Request"})]}),n.jsxs("div",{id:"expander-content-1628489132",className:"expand-content",children:[n.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:n.jsx("div",{className:"codeContent panelContent pdl",children:n.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["curl --location 'http://rest.resvoyage.com/api/v1/cart/seatmap?sessionId=0b7da6df-61a8-4a49-b626-84cd49ea3123' \\",`
`,"--header 'Content-Type: Application/json' \\",`
`,"--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6IlhlbmkgVGVzdCIsIkNsaWVudElkIjoiMzk3NyIsInJvbGUiOiJCMkMiLCJUcmF2ZWxHcm91cElkIjoiNDIwOCIsImlzcyI6Imh0dHA6Ly9yZXN2b3lhZ2UuY29tIiwiYXVkIjoicmVzdm95YWdlIiwiZXhwIjoxNzAxMTI2NjcxLCJuYmYiOjE3MDExMDg2NzF9.vMqgVlIj3p0kTd04by8gDr_DVuqrFLB1FHANJhFJZKM' \\",`
`,"--header 'Cookie: ARRAffinity=0f934038fa87e90eb992a83facec7a5a1ba6d85c0e53ab05afbf34221994a4ed'"]})})}),n.jsx("p",{})]})]}),n.jsx("p",{children:n.jsx("br",{})}),n.jsxs("div",{id:"expander-1238336538",className:"expand-container",children:[n.jsxs("div",{id:"expander-control-1238336538",className:"expand-control",children:[n.jsx("span",{className:"expand-control-icon",children:n.jsx("img",{style:{verticalAlign:"middle"},className:"expand-control-image",src:"/src/images/icons/grey_arrow_down.png"})}),n.jsx("span",{className:"expand-control-text",children:"Response"})]}),n.jsxs("div",{id:"expander-content-1238336538",className:"expand-content",children:[n.jsx("div",{className:"code panel pdl",style:{borderWidth:1},children:n.jsx("div",{className:"codeContent panelContent pdl",children:n.jsxs("pre",{className:"syntaxhighlighter-pre","data-syntaxhighlighter-params":"brush: java; gutter: false; theme: Confluence","data-theme":"Confluence",children:["{",`
`,"    ",'"SeatMaps": [',`
`,"        ","{",`
`,"            ",'"FlightSegmentInfo": ',"{",`
`,"                ",'"DepartureAirport": ',"{",`
`,"                    ",'"LocationCode": "JFK",',`
`,"                    ",'"CodeContext": "IATA",',`
`,"                    ",'"Value": "New York-John F Kennedy, NY, United States"',`
`,"                ","}",",",`
`,"                ",'"ArrivalAirport": ',"{",`
`,"                    ",'"LocationCode": "MIA",',`
`,"                    ",'"CodeContext": "IATA",',`
`,"                    ",'"Value": "Miami-Miami Intl, FL, United States"',`
`,"                ","}",",",`
`,"                ",'"OperatingAirline": null,',`
`,"                ",'"Equipment": [',`
`,"                    ","{",`
`,"                        ",'"AirEquipType": "220",',`
`,"                        ",'"ChangeofGauge": false,',`
`,"                        ",'"Value": null',`
`,"                    ","}",`
`,"                ","],",`
`,"                ",'"MarketingAirline": ',"{",`
`,"                    ",'"CompanyShortName": null,',`
`,"                    ",'"TravelSector": null,',`
`,"                    ",'"Code": "B6",',`
`,"                    ",'"CodeContext": null,',`
`,"                    ",'"Value": "Jetblue Airways"',`
`,"                ","}",",",`
`,"                ",'"MarriageGrp": null,',`
`,"                ",'"DepartureDateTime": "2023-12-20T00:00:00",',`
`,"                ",'"ArrivalDateTime": null,',`
`,"                ",'"StopQuantitySpecified": false,',`
`,"                ",'"RPH": null,',`
`,"                ",'"InfoSource": null,',`
`,"                ",'"FlightNumber": "2293",',`
`,"                ",'"TourOperatorFlightID": null',`
`,"            ","}",",",`
`,"            ",'"SeatMapDetails": [',`
`,"                ","{",`
`,"                    ",'"CabinClass": [',`
`,"                        ","{",`
`,"                            ",'"TPA_Extensions": ',"{",`
`,"                                ",'"SeatColHeadings": [',`
`,"                                    ","{",`
`,"                                        ",'"ColumnHeadings": "AC DEF",',`
`,"                                        ",'"Value": null',`
`,"                                    ","}",`
`,"                                ","],",`
`,"                                ",'"Discounts": null,',`
`,"                                ",'"Text": null',`
`,"                            ","}",",",`
`,"                            ",'"AirRows": [',`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "9000"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "9000"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle OfferedLast AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "9000"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " OfferedLast AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "8600"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window OfferedLast AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "9000"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": "None"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 1,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "9000"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "9000"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "9000"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "8600"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "9000"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": "None"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 2,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "9000"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "9000"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Occupied",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": null',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "8600"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "9000"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": "None"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 3,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "9000"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "9000"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "9000"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "8600"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "9000"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": "None"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 4,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window OfferedLast AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle OfferedLast AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle OfferedLast AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " OfferedLast AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "2100"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window OfferedLast AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": "None"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 5,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "PreferredChargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "PreferredChargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "PreferredChargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "2100"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "PreferredChargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": "None"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 6,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "PreferredChargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "PreferredChargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "PreferredChargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "2100"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "PreferredChargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": "None"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 7,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "PreferredChargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "PreferredChargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "PreferredChargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "2100"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "PreferredChargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": "None"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 8,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "PreferredChargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "PreferredChargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "PreferredChargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "2100"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "PreferredChargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": "None"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 9,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "2100"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": "None"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 10,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "2100"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": " Overwing"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 11,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "8800"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "8800"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "8800"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "8400"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "8800"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": " Overwing Exit"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 12,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "8600"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "8600"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "8600"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "8200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "8600"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": " Overwing"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 13,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1300"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": " Overwing"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 14,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1300"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": " Overwing"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 15,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1300"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": "None"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 16,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1300"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": "None"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 17,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1300"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": "None"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 18,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1300"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": "None"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 19,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1300"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": "None"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 20,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1300"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": "None"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 21,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1300"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1700"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": "None"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 22,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1100"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": "None"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 23,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1100"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": "None"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 24,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1100"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": "None"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 25,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1100"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": "None"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 26,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1100"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": "None"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 27,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",",",`
`,"                                ","{",`
`,"                                    ",'"AirSeats": [',`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "A",',`
`,"                                            ",'"SeatCharacteristics": "Window OfferedLast AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "C",',`
`,"                                            ",'"SeatCharacteristics": "Aisle OfferedLast AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "D",',`
`,"                                            ",'"SeatCharacteristics": "Aisle OfferedLast AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "E",',`
`,"                                            ",'"SeatCharacteristics": " OfferedLast AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1100"',`
`,"                                        ","}",",",`
`,"                                        ","{",`
`,"                                            ",'"SeatAvailability": "Chargeable",',`
`,"                                            ",'"SeatNumber": "F",',`
`,"                                            ",'"SeatCharacteristics": "Window OfferedLast AdultWithInfant",',`
`,"                                            ",'"AirBookDesigCode": null,',`
`,"                                            ",'"RPH": null,',`
`,"                                            ",'"DiscountCode": "1200"',`
`,"                                        ","}",`
`,"                                    ","],",`
`,"                                    ",'"AirRowCharacteristics": ',"{",`
`,"                                        ",'"CharacteristicList": "None"',`
`,"                                    ","}",",",`
`,"                                    ",'"MaxNumberOfSeatsSpecified": false,',`
`,"                                    ",'"RowNumber": 28,',`
`,"                                    ",'"AirBookDesigCode": null',`
`,"                                ","}",`
`,"                            ","],",`
`,"                            ",'"CabinType": "Economy",',`
`,"                            ",'"Name": null',`
`,"                        ","}",`
`,"                    ","],",`
`,"                    ",'"TPA_Extensions": ',"{",`
`,"                        ",'"SeatColHeadings": null,',`
`,"                        ",'"Discounts": [',`
`,"                            ","{",`
`,"                                ",'"Taxes": ',"{",`
`,"                                    ",'"Amount": 0.0',`
`,"                                ","}",",",`
`,"                                ",'"Go_Discount_ID": "1100",',`
`,"                                ",'"Go_Discount_Name": "1100",',`
`,"                                ",'"Code": "1100",',`
`,"                                ",'"Amount": 11.0,',`
`,"                                ",'"Description": "",',`
`,"                                ",'"Is_Substract": false,',`
`,"                                ",'"CurrencyCode": "USD"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"Taxes": ',"{",`
`,"                                    ",'"Amount": 0.0',`
`,"                                ","}",",",`
`,"                                ",'"Go_Discount_ID": "1200",',`
`,"                                ",'"Go_Discount_Name": "1200",',`
`,"                                ",'"Code": "1200",',`
`,"                                ",'"Amount": 12.0,',`
`,"                                ",'"Description": "",',`
`,"                                ",'"Is_Substract": false,',`
`,"                                ",'"CurrencyCode": "USD"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"Taxes": ',"{",`
`,"                                    ",'"Amount": 0.0',`
`,"                                ","}",",",`
`,"                                ",'"Go_Discount_ID": "1300",',`
`,"                                ",'"Go_Discount_Name": "1300",',`
`,"                                ",'"Code": "1300",',`
`,"                                ",'"Amount": 13.0,',`
`,"                                ",'"Description": "",',`
`,"                                ",'"Is_Substract": false,',`
`,"                                ",'"CurrencyCode": "USD"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"Taxes": ',"{",`
`,"                                    ",'"Amount": 0.0',`
`,"                                ","}",",",`
`,"                                ",'"Go_Discount_ID": "1700",',`
`,"                                ",'"Go_Discount_Name": "1700",',`
`,"                                ",'"Code": "1700",',`
`,"                                ",'"Amount": 17.0,',`
`,"                                ",'"Description": "",',`
`,"                                ",'"Is_Substract": false,',`
`,"                                ",'"CurrencyCode": "USD"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"Taxes": ',"{",`
`,"                                    ",'"Amount": 0.0',`
`,"                                ","}",",",`
`,"                                ",'"Go_Discount_ID": "2100",',`
`,"                                ",'"Go_Discount_Name": "2100",',`
`,"                                ",'"Code": "2100",',`
`,"                                ",'"Amount": 21.0,',`
`,"                                ",'"Description": "",',`
`,"                                ",'"Is_Substract": false,',`
`,"                                ",'"CurrencyCode": "USD"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"Taxes": ',"{",`
`,"                                    ",'"Amount": 0.0',`
`,"                                ","}",",",`
`,"                                ",'"Go_Discount_ID": "8200",',`
`,"                                ",'"Go_Discount_Name": "8200",',`
`,"                                ",'"Code": "8200",',`
`,"                                ",'"Amount": 82.0,',`
`,"                                ",'"Description": "",',`
`,"                                ",'"Is_Substract": false,',`
`,"                                ",'"CurrencyCode": "USD"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"Taxes": ',"{",`
`,"                                    ",'"Amount": 0.0',`
`,"                                ","}",",",`
`,"                                ",'"Go_Discount_ID": "8400",',`
`,"                                ",'"Go_Discount_Name": "8400",',`
`,"                                ",'"Code": "8400",',`
`,"                                ",'"Amount": 84.0,',`
`,"                                ",'"Description": "",',`
`,"                                ",'"Is_Substract": false,',`
`,"                                ",'"CurrencyCode": "USD"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"Taxes": ',"{",`
`,"                                    ",'"Amount": 0.0',`
`,"                                ","}",",",`
`,"                                ",'"Go_Discount_ID": "8600",',`
`,"                                ",'"Go_Discount_Name": "8600",',`
`,"                                ",'"Code": "8600",',`
`,"                                ",'"Amount": 86.0,',`
`,"                                ",'"Description": "",',`
`,"                                ",'"Is_Substract": false,',`
`,"                                ",'"CurrencyCode": "USD"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"Taxes": ',"{",`
`,"                                    ",'"Amount": 0.0',`
`,"                                ","}",",",`
`,"                                ",'"Go_Discount_ID": "8800",',`
`,"                                ",'"Go_Discount_Name": "8800",',`
`,"                                ",'"Code": "8800",',`
`,"                                ",'"Amount": 88.0,',`
`,"                                ",'"Description": "",',`
`,"                                ",'"Is_Substract": false,',`
`,"                                ",'"CurrencyCode": "USD"',`
`,"                            ","}",",",`
`,"                            ","{",`
`,"                                ",'"Taxes": ',"{",`
`,"                                    ",'"Amount": 0.0',`
`,"                                ","}",",",`
`,"                                ",'"Go_Discount_ID": "9000",',`
`,"                                ",'"Go_Discount_Name": "9000",',`
`,"                                ",'"Code": "9000",',`
`,"                                ",'"Amount": 90.0,',`
`,"                                ",'"Description": "",',`
`,"                                ",'"Is_Substract": false,',`
`,"                                ",'"CurrencyCode": "USD"',`
`,"                            ","}",`
`,"                        ","],",`
`,"                        ",'"Text": null',`
`,"                    ","}",",",`
`,"                    ",'"TravelerRefNumberRPHs": null',`
`,"                ","}",`
`,"            ","],",`
`,"            ",'"BookingReferenceID": null,',`
`,"            ",'"SeatUpgradeApplied": false',`
`,"        ","}",`
`,"    ","],",`
`,"    ",'"Passengers": [',`
`,"        ","{",`
`,"            ",'"Id": "b8e37703-0747-4360-9e44-fff2c933f2a1",',`
`,"            ",'"Title": null,',`
`,"            ",'"TypeCode": "ADT",',`
`,"            ",'"FirstName": "Passenger 1",',`
`,"            ",'"MiddleName": null,',`
`,"            ",'"LastName": null,',`
`,"            ",'"Email": null,',`
`,"            ",'"CountryCode": null,',`
`,"            ",'"Phone": null,',`
`,"            ",'"PhoneCode": null,',`
`,"            ",'"PhoneAreaCode": null,',`
`,"            ",'"DriversLicence": null,',`
`,"            ",'"NationalIdentity": null,',`
`,"            ",'"LocallyDefinedIDNumber": null,',`
`,"            ",'"MobilePhone": null,',`
`,"            ",'"MobilePhoneCode": null,',`
`,"            ",'"TicketNumber": null,',`
`,"            ",'"JetSmartPassengerData": null,',`
`,"            ",'"EmployeeUsername": null,',`
`,"            ",'"LoyalityProgram": null,',`
`,"            ",'"ReducedMobilityAssistanceInfo": null,',`
`,"            ",'"ChoosenSpeedyBoardingInfo": null,',`
`,"            ",'"CarLoyalityProgram": null,',`
`,"            ",'"HotelLoyalityProgram": null,',`
`,"            ",'"Rank": 0,',`
`,"            ",'"AgeGroup": null,',`
`,"            ",'"TrainSeasonTickets": null,',`
`,"            ",'"SelectedTrainTicketNumber": null,',`
`,"            ",'"TrainLoyaltyCard": null,',`
`,"            ",'"RoomSchedule": null,',`
`,"            ",'"MealsNSeatReq": null,',`
`,"            ",'"Gender": null,',`
`,"            ",'"PassportNumber2": null,',`
`,"            ",'"CountryOfIssuance2": null,',`
`,"            ",'"CountryOfNationality2": null,',`
`,"            ",'"ExpirationDate2": null,',`
`,"            ",'"IssueDate2": null,',`
`,"            ",'"TypeOfUSADocument": null,',`
`,"            ",'"USADocumentNumber": null,',`
`,"            ",'"USADocumentExpirationDate": null,',`
`,"            ",'"CubanDocumentNumber": null,',`
`,"            ",'"CubanDocumentExpirationDate": null,',`
`,"            ",'"CubanAddress": null,',`
`,"            ",'"Neighborhood": null,',`
`,"            ",'"CubanTelephone": null,',`
`,"            ",'"Province": null,',`
`,"            ",'"Town": null,',`
`,"            ",'"DateOfBirthString": null,',`
`,"            ",'"PassportExpDateString2": null,',`
`,"            ",'"PassportIssuingDateString2": null,',`
`,"            ",'"PassportExpDateString": null,',`
`,"            ",'"PassportIssuingDateString": null,',`
`,"            ",'"FlightsSeatMap": null,',`
`,"            ",'"PaymentInfoObject": null,',`
`,"            ",'"BaggagePiecesQty": null,',`
`,"            ",'"ChosenCostCenterId": null,',`
`,"            ",'"ChosenCostCenter": null,',`
`,"            ",'"DateOfBirth": null,',`
`,"            ",'"PassportExpDate": null,',`
`,"            ",'"PassportIssuingDate": null,',`
`,"            ",'"AncillaryServiceIds": null,',`
`,"            ",'"ExcessBaggageWeightQuantity": null,',`
`,"            ",'"AncillaryServiceInfos": null,',`
`,"            ",'"UserRole": null,',`
`,"            ",'"EmployeeId": null,',`
`,"            ",'"CorporateEmpId": null,',`
`,"            ",'"EmployeeJobTitle": null,',`
`,"            ",'"EmployeeCostCenter": null,',`
`,"            ",'"EmployeeRecordLocator": null,',`
`,"            ",'"AmadeusRecordLocator": null,',`
`,"            ",'"SabreRecordLocator": null,',`
`,"            ",'"TravelPortRecordLocator": null,',`
`,"            ",'"RedressNumber": null,',`
`,"            ",'"KnownTravellerId": null,',`
`,"            ",'"EmployeeIdentifier": null,',`
`,"            ",'"PassportNo": null,',`
`,"            ",'"PassportIssuingCountry": null,',`
`,"            ",'"PassportIssuingCountryCode": null,',`
`,"            ",'"CountryOfNationality": null,',`
`,"            ",'"NationalityCountryCode": null,',`
`,"            ",'"PassportIssuingCountryName": null,',`
`,"            ",'"VisaPurchased": false,',`
`,"            ",'"SpecialServiceRequestCodes": null,',`
`,"            ",'"IsGuestTraveller": false,',`
`,"            ",'"B2CPassword": null,',`
`,"            ",'"NdcBaggageInfoPerFlight": null,',`
`,"            ",'"SelectedNdcBaggagePrice": 0.0,',`
`,"            ",'"NdcServiceListOfferId": null,',`
`,"            ",'"ResidentDiscountCode": null,',`
`,"            ",'"ResidentDiscountAreaCode": null,',`
`,"            ",'"ResidentDiscountCityCode": null,',`
`,"            ",'"ResidentCountryCode": null,',`
`,"            ",'"SelectedPrepaidBaggage": null,',`
`,"            ",'"SelectedFlightExtras": null',`
`,"        ","}",`
`,"    ","],",`
`,"    ",'"Error": null,',`
`,"    ",'"Warnings": null',`
`,"}"]})})}),n.jsx("p",{})]})]}),n.jsx("hr",{}),n.jsx("h2",{id:"FRD-Seatmapimplementation-MVP1-Design",children:"Design"}),n.jsx("p",{children:"At the presentation level in the UI booking flow, this should be an Collapsed section where the user can click and display the proper seat map component"}),n.jsx("p",{children:n.jsx("strong",{children:"Examples of components:"})}),n.jsxs("p",{children:[n.jsx("a",{className:"external-link","data-card-appearance":"inline",href:"https://www.infragistics.com/resources/sample-applications/infragistics-wpf-airline",rel:"nofollow",children:"https://www.infragistics.com/resources/sample-applications/infragistics-wpf-airline"})," "]}),n.jsx("p",{children:n.jsx("a",{className:"external-link",href:"https://stock.adobe.com/ar/images/aircraft-seat-map-scheme-seats-and-tickets-flat-design-vector/119992382",rel:"nofollow",children:"https://stock.adobe.com/ar/images/aircraft-seat-map-scheme-seats-and-tickets-flat-design-vector/119992382"})}),n.jsx("p",{}),n.jsx("p",{children:n.jsx("br",{})}),n.jsx("p",{style:{marginLeft:"60.0px"}})]})]})," "]}),n.jsx("div",{id:"footer",role:"contentinfo",children:n.jsxs("section",{className:"footer-body",children:[n.jsx("p",{children:"Document generated by Confluence on Jul 09, 2024 08:02"}),n.jsx("div",{id:"footer-logo",children:n.jsx("a",{href:"http://www.atlassian.com/",children:"Atlassian"})})]})})]})]})}export{a as default};
