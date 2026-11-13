"use strict";
const BASE = "https://widespread-bridge.widespread.workers.dev";

module.exports = {
  description: {
    displayName: "Widespread",
    name: "widespread",
    icon: "file:widespread.svg",
    group: ["transform"],
    version: 1,
    subtitle: '={{$parameter["operation"]}}',
    description: "Verified-work bounty discovery on the Widespread protocol (non-custodial; read surface)",
    defaults: { name: "Widespread" },
    inputs: ["main"],
    outputs: ["main"],
    properties: [
      {
        displayName: "Operation",
        name: "operation",
        type: "options",
        noDataExpression: true,
        options: [
          { name: "List Bounties", value: "bounties", description: "Open bounty postings", action: "List open bounties", routing: { request: { method: "GET", url: `=${"$parameter.baseUrl"}/api/state` } } },
          { name: "List Markets", value: "markets", description: "Open escrowed work markets", action: "List open markets", routing: { request: { method: "GET", url: `=${"$parameter.baseUrl"}/api/markets` } } },
          { name: "Feed Search", value: "feed", description: "Search the cross-forge work feed", action: "Search the work feed", routing: { request: { method: "GET", url: `=${"$parameter.baseUrl"}/api/feed` } } },
          { name: "List Runners", value: "runners", description: "Sealed execution runners", action: "List runners", routing: { request: { method: "GET", url: `=${"$parameter.baseUrl"}/api/runners` } } },
          { name: "Get State", value: "state", description: "Claims + bounties dashboard snapshot", action: "Get state", routing: { request: { method: "GET", url: `=${"$parameter.baseUrl"}/api/state` } } },
        ],
        default: "bounties",
      },
      {
        displayName: "Base URL",
        name: "baseUrl",
        type: "string",
        default: BASE,
        description: "Bridge base URL — override for a self-hosted deployment",
      },
      {
        displayName: "Query",
        name: "query",
        type: "string",
        default: "",
        displayOptions: { show: { operation: ["feed"] } },
        routing: { send: { type: "query", property: "q" } },
      },
      {
        displayName: "Source",
        name: "source",
        type: "string",
        default: "",
        displayOptions: { show: { operation: ["feed"] } },
        routing: { send: { type: "query", property: "source" } },
      },
      {
        displayName: "Limit",
        name: "limit",
        type: "number",
        default: 25,
        displayOptions: { show: { operation: ["feed"] } },
        routing: { send: { type: "query", property: "limit" } },
      },
    ],
  },
};
