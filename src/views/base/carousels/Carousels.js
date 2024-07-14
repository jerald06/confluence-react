import React from 'react'

const Carousels = () => {
  return (
    <div className="theme-default aui-theme-default">
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
                    <a href="Split-payment_585728003.html">Split payment</a>
                  </span>
                </li>
                <li>
                  <span>
                    <a href="BRD---Split-payments---2023-11-15_585957377.html">
                      BRD - Split payments - 2023-11-15
                    </a>
                  </span>
                </li>
              </ol>
            </div>
            <h1 id="title-heading" className="pagetitle">
              <span id="title-text">XeniApp : POC - Split payment Skybird</span>
            </h1>
          </div>

          <div id="content" className="view">
            <div className="page-metadata">
              Created by <span className="author">Gerardo Nizetich</span>, last modified on Dec 07,
              2023
            </div>
            <div id="main-content" className="wiki-content group">
              <style type="text/css">{`
                div.rbtoc1720512150529 {padding: 0px;}
                div.rbtoc1720512150529 ul {list-style: disc;margin-left: 0px;}
                div.rbtoc1720512150529 li {margin-left: 0px;padding-left: 0px;}
              `}</style>
              <div className="toc-macro rbtoc1720512150529">
                <ul className="toc-indentation">
                  <li>
                    <a href="#POC-SplitpaymentSkybird-Context">Context</a>
                    <ul className="toc-indentation">
                      <li>
                        <a href="#POC-SplitpaymentSkybird-Proposalflow">Proposal flow</a>
                      </li>
                      <li>
                        <a href="#POC-SplitpaymentSkybird-TechnicalRequirements">
                          Technical Requirements
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#POC-SplitpaymentSkybird-Checklist">Check list</a>
                  </li>
                </ul>
              </div>
              <hr />
              <h1 id="POC-SplitpaymentSkybird-Context">Context</h1>
              <p>
                Skybird vendor confirmed that they can manage the payment through the merchant id of
                the validating carrier. This is the best option to create a PoC for the flow
                proposed and analyze the data of 1 vendor.
              </p>
              <hr />
              <h2 id="POC-SplitpaymentSkybird-Proposalflow">Proposal flow</h2>
              <span className="confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-left"
                  width="1011"
                  loading="lazy"
                  src="/src/attachments/589627496/592805892.png?width=1011"
                  alt="Proposal Flow"
                />
              </span>
              <hr />
              <h2 id="POC-SplitpaymentSkybird-TechnicalRequirements">Technical Requirements</h2>
              <ul>
                <li>
                  <p>Identify the Bookings to process from Skybird</p>
                </li>
                <li>
                  <p>Avoid the debit of the Booking through Xeni Payment gateway</p>
                </li>
                {/* <li>
                  <p>Send a request to Thomalex (POST: /api/v1/pnr/{pnr}/ticket/issue)</p>
                </li> */}
                <li>
                  <p>Thomalex resend to the vendor (Skybird) and wait for the response.</p>
                </li>
                <li>
                  <p>Received the transaction response.</p>
                </li>
                <li>
                  <p>Send a notification to customer to advice the status of the transaction</p>
                  <ul>
                    <li>
                      <p>
                        In case Transaction OK: Advise consumer that the debit will be enter in his
                        Credit Card with the Validating carrier name.
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
              <p>
                <strong>Proposal Technical Flow</strong>
              </p>
              <span className="confluence-embedded-file-wrapper image-left-wrapper confluence-embedded-manual-size">
                <img
                  className="confluence-embedded-image image-left"
                  width="745"
                  loading="lazy"
                  src="/src/attachments/589627496/592805931.png?width=745"
                  alt="Technical Flow"
                />
              </span>
              <p />
              <hr />
              <h1 id="POC-SplitpaymentSkybird-Checklist">Check list</h1>
              <ul>
                <li>
                  <p>
                    <strong>Thomalex</strong>: Validating flow with them
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Skybird</strong>: Create the right environment for testing
                  </p>
                  <ul>
                    <li>
                      <p>Do we have the API documentation of Skybird?</p>
                    </li>
                    <li>
                      <p>
                        Is it possible to connect directly with them without Thomalex in the middle?
                        (Not now, this is for the future)
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>How to build the prototype in Xeni for this project?</p>
                  <ul>
                    <li>
                      <p>
                        <a
                          className="confluence-userlink user-mention"
                          href="https://xeni-workspace.atlassian.net/wiki/people/63bc5b4a04b5f5c7b5ecee8b?ref=confluence"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Rajesh
                        </a>{' '}
                        and{' '}
                        <a
                          className="confluence-userlink user-mention"
                          href="https://xeni-workspace.atlassian.net/wiki/people/5f97a08244658b007112ee94?ref=confluence"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ayush Kumar
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>How can we detach the flight services from our Checkout logic</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="pageSection group">
              <div className="pageSectionHeader">
                <h2 id="attachments" className="pageSectionTitle">
                  Attachments:
                </h2>
              </div>

              <div className="greybox" align="left">
                <img src="images/icons/bullet_blue.gif" height="8" width="8" alt="" />
                <a href="https://xeni-workspace.atlassian.net/wiki/download/attachments/589627496/592773126.png">
                  PocSkybird_SplitPayment.png
                </a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height="8" width="8" alt="" />
                <a href="https://xeni-workspace.atlassian.net/wiki/download/attachments/589627496/592805892.png">
                  PocSkybird_SplitPayment.png
                </a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height="8" width="8" alt="" />
                <a href="https://xeni-workspace.atlassian.net/wiki/download/attachments/589627496/593133579.png">
                  SplitPymntTicketingFlow.png
                </a>{' '}
                (image/png)
                <br />
                <img src="images/icons/bullet_blue.gif" height="8" width="8" alt="" />
                <a href="https://xeni-workspace.atlassian.net/wiki/download/attachments/589627496/592805931.png">
                  SplitPymntTicketingFlow.png
                </a>{' '}
                (image/png)
                <br />
              </div>
            </div>
          </div>
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
    </div>
  )
}

export default Carousels
