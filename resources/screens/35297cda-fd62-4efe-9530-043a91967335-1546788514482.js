jQuery("#simulation")
  .on("click", ".s-35297cda-fd62-4efe-9530-043a91967335 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-35297cda-fd62-4efe-9530-043a91967335 #s-Button > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#80B8F1"
                      }
                    }
                  },{
                    "#s-35297cda-fd62-4efe-9530-043a91967335 #s-Button": {
                      "attributes-ie": {
                        "-pie-background": "#80B8F1",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-35297cda-fd62-4efe-9530-043a91967335 #s-Button > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#027AFF"
                      }
                    }
                  },{
                    "#s-35297cda-fd62-4efe-9530-043a91967335 #s-Button": {
                      "attributes-ie": {
                        "-pie-background": "#027AFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/12072a13-bca9-4a5b-a750-79dbbaef7e7f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-35297cda-fd62-4efe-9530-043a91967335 #s-Button_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#80B8F1"
                      }
                    }
                  },{
                    "#s-35297cda-fd62-4efe-9530-043a91967335 #s-Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#80B8F1",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-35297cda-fd62-4efe-9530-043a91967335 #s-Button_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#027AFF"
                      }
                    }
                  },{
                    "#s-35297cda-fd62-4efe-9530-043a91967335 #s-Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#027AFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/12072a13-bca9-4a5b-a750-79dbbaef7e7f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-35297cda-fd62-4efe-9530-043a91967335 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_2" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "action": "jimSystemTime"
                      },"0","5" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });