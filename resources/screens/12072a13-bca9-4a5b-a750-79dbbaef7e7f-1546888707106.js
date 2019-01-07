jQuery("#simulation")
  .on("click", ".s-12072a13-bca9-4a5b-a750-79dbbaef7e7f .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button-blue")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-12072a13-bca9-4a5b-a750-79dbbaef7e7f #s-Button-blue > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#80B8F1",
                        "border-right-color": "#80B8F1",
                        "border-bottom-color": "#80B8F1",
                        "border-left-color": "#80B8F1"
                      }
                    }
                  },{
                    "#s-12072a13-bca9-4a5b-a750-79dbbaef7e7f #s-Button-blue span": {
                      "attributes": {
                        "color": "#80B8F1"
                      }
                    }
                  },{
                    "#s-12072a13-bca9-4a5b-a750-79dbbaef7e7f #s-Button-blue": {
                      "attributes-ie": {
                        "border-top-color": "#80B8F1",
                        "border-right-color": "#80B8F1",
                        "border-bottom-color": "#80B8F1",
                        "border-left-color": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-12072a13-bca9-4a5b-a750-79dbbaef7e7f #s-Button-blue > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#157EFB",
                        "border-right-color": "#157EFB",
                        "border-bottom-color": "#157EFB",
                        "border-left-color": "#157EFB"
                      }
                    }
                  },{
                    "#s-12072a13-bca9-4a5b-a750-79dbbaef7e7f #s-Button-blue span": {
                      "attributes": {
                        "color": "#157EFB"
                      }
                    }
                  },{
                    "#s-12072a13-bca9-4a5b-a750-79dbbaef7e7f #s-Button-blue": {
                      "attributes-ie": {
                        "border-top-color": "#157EFB",
                        "border-right-color": "#157EFB",
                        "border-bottom-color": "#157EFB",
                        "border-left-color": "#157EFB"
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
                    "target": "screens/50a0c892-4f2e-4ea7-86f2-42b26a088386"
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
    } else if(jFirer.is("#s-Button-blue_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-12072a13-bca9-4a5b-a750-79dbbaef7e7f #s-Button-blue_1 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#80B8F1",
                        "border-right-color": "#80B8F1",
                        "border-bottom-color": "#80B8F1",
                        "border-left-color": "#80B8F1"
                      }
                    }
                  },{
                    "#s-12072a13-bca9-4a5b-a750-79dbbaef7e7f #s-Button-blue_1 span": {
                      "attributes": {
                        "color": "#80B8F1"
                      }
                    }
                  },{
                    "#s-12072a13-bca9-4a5b-a750-79dbbaef7e7f #s-Button-blue_1": {
                      "attributes-ie": {
                        "border-top-color": "#80B8F1",
                        "border-right-color": "#80B8F1",
                        "border-bottom-color": "#80B8F1",
                        "border-left-color": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-12072a13-bca9-4a5b-a750-79dbbaef7e7f #s-Button-blue_1 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#157EFB",
                        "border-right-color": "#157EFB",
                        "border-bottom-color": "#157EFB",
                        "border-left-color": "#157EFB"
                      }
                    }
                  },{
                    "#s-12072a13-bca9-4a5b-a750-79dbbaef7e7f #s-Button-blue_1 span": {
                      "attributes": {
                        "color": "#157EFB"
                      }
                    }
                  },{
                    "#s-12072a13-bca9-4a5b-a750-79dbbaef7e7f #s-Button-blue_1": {
                      "attributes-ie": {
                        "border-top-color": "#157EFB",
                        "border-right-color": "#157EFB",
                        "border-bottom-color": "#157EFB",
                        "border-left-color": "#157EFB"
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
                    "target": "screens/c8ac9a83-b2ca-46da-a83e-50a0aca15cef"
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
    } else if(jFirer.is("#s-Text_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/51628ec7-0c1a-4963-aa15-14fa52b81bf3"
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
  .on("pageload", ".s-12072a13-bca9-4a5b-a750-79dbbaef7e7f .pageload", function(event, data) {
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
  })
  .on("orientationportrait", ".s-12072a13-bca9-4a5b-a750-79dbbaef7e7f .orientationportrait", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Bg_bottom")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Contact_info" ]
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
  .on("orientationlandscape", ".s-12072a13-bca9-4a5b-a750-79dbbaef7e7f .orientationlandscape", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Bg_bottom")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Contact_info" ]
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