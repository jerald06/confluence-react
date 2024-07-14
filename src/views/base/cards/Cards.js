import React from 'react'

function Cards() {
  return (
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
                  <a href="Flat-amount-of-Markup_592379968.html">Flat amount of Markup</a>
                </span>
              </li>
            </ol>
          </div>
          <h1 id="title-heading" className="pagetitle">
            <span id="title-text">XeniApp : FRD - Markups - Flat amount</span>
          </h1>
        </div>
        <div id="content" className="view">
          <div className="page-metadata">
            Created by <span className="author">Gerardo Nizetich</span>, last modified on Dec 06,
            2023
          </div>
          <div id="main-content" className="wiki-content group">
            <div className="toc-macro rbtoc1720512147975">
              <ul className="toc-indentation">
                <li>
                  <a href="#FRD-Markups-Flatamount-Objective">Objective</a>
                </li>
                <ul className="toc-indentation">
                  <li>
                    <a href="#FRD-Markups-Flatamount-BusinessContext">Business Context</a>
                  </li>
                  <li>
                    <a href="#FRD-Markups-Flatamount-SolutionProposal">Solution Proposal</a>
                  </li>
                  <ul className="toc-indentation">
                    <li>
                      <a href="#FRD-Markups-Flatamount-High-levelrequirement">
                        High-level requirement
                      </a>
                    </li>
                  </ul>
                  <li>
                    <a href="#FRD-Markups-Flatamount-JiraProject">Jira Project</a>
                  </li>
                </ul>
              </ul>
            </div>
            <hr />
            <h1 id="FRD-Markups-Flatamount-Objective">Objective</h1>
            <p>
              This project is for Travel Agency Owners or Site admin users to set the Markup for
              service type with a Fixed Amount in USD.
            </p>
            <hr />
            <h2 id="FRD-Markups-Flatamount-BusinessContext">Business Context</h2>
            <p>
              Our business team received request from several customers to have the capability to
              add a fix amount instead of a percentage rate over the base fare of a flight, that
              could represent a high price of the total cost.
            </p>
            <p>
              Currently, in the Travel Agencies world and in order to reduce costs, the agencies
              charge a fixed fee per transaction to compensate the value of their work. In several
              times this fixed amount is based on a corporate agreement, mostly in the TMCs.
            </p>
            <hr />
            <h2 id="FRD-Markups-Flatamount-SolutionProposal">Solution Proposal</h2>
            <p>
              <strong>Current Functionality:</strong>
              <br />
              Travel Sale agents, could add a fee amount manually above the Agency Markup:
            </p>
            <img
              className="confluence-embedded-image image-left"
              src="/src/attachments/583827459/584220675.png?width=749"
              alt="Current Functionality"
            />
            <p>
              <strong>Proposal:</strong>
              <br />
              The idea is to add the same functionality as an option (<strong>OneOf</strong>) for
              Agency owners and site administrator to set the Markup here:
            </p>
            <p>[SiteUrl]/settings/agency/Agency Markup Settings:</p>
            <img
              className="confluence-embedded-image image-left"
              src="/src/attachments/583827459/584220681.png?width=700"
              alt="Proposal"
            />
            <p>
              This design using the same component above, must be replicated in every type of
              service.
            </p>
            <p>
              Each service type should offer both options. The agency owner can decide to set a
              percentage or fixed amount:
            </p>
            <p>Ex:</p>
            <img
              className="confluence-embedded-image image-left"
              src="/src/attachments/583827459/584220687.png?width=271"
              alt="Example"
            />
            <h3 id="FRD-Markups-Flatamount-High-levelrequirement">
              <strong>High-level requirement</strong>
            </h3>
            <ul>
              <li>
                <p>Add the Fixed Amount component for every single service type</p>
              </li>
              <li>
                <p>The entered amount will be always in USD.</p>
              </li>
              <li>
                <p>The Percentage and Fixed amount is OneOf.</p>
              </li>
              <li>
                <p>
                  Update the in-line help information for the Agency owner to identify the
                  difference between both option
                </p>
              </li>
              <li>
                <p>
                  Add to the Markup Table settings of DB, the proper layout to support the Fixed
                  Amount.
                </p>
              </li>
              <li>
                <p>
                  Implement the logic in the backend to display the Markup fixed amount in the same
                  way that the current percentage fee.
                </p>
              </li>
            </ul>
            <hr />
            <h2 id="FRD-Markups-Flatamount-JiraProject">Jira Project</h2>
            <table className="confluenceTable">
              <thead>
                <tr>
                  <th>Epic</th>
                  <th>User Story</th>
                  <th>Milestone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="https://xeni-workspace.atlassian.net/browse/X3UI-4877">X3UI-4877</a> -
                    Getting issue details...
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <a href="https://xeni-workspace.atlassian.net/browse/X3UI-4878">X3UI-4878</a> -
                    Getting issue details...
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <a href="https://xeni-workspace.atlassian.net/browse/X3UI-4879">X3UI-4879</a> -
                    Getting issue details...
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <a href="https://xeni-workspace.atlassian.net/browse/X3UI-4897">X3UI-4897</a> -
                    Getting issue details...
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
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
  )
}

export default Cards
