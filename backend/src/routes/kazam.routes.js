const express = require("express");
const CartRoute = express.Router();
const cors = require("cors");
const cartModel = require("../model/cart.model");
const checkToken = require("../middlewares/user.middleware");
CartRoute.use(cors());
// CartRoute.use(checkToken);

// Post Request
CartRoute.get("/", async (req, res) => {
  try {
    // const allCartItems = await cartModel.find({
    //   userID: req.body.id,
    //   productID: req.body.productID,
    // }).populate("productID");
    // if (allCartItems.length >= 1 ) {
    //   const UpdatedCart = await cartModel.findByIdAndUpdate(
    //     allCartItems[0]._id,
    //     { quantity: allCartItems[0].quantity + 1 }
    //   );
    //   res.status(200).json({
    //     newItem_added: UpdatedCart,
    //   });
    // } else {
    //   const cartItems = await cartModel.create({userID:req.body.id,productID:req.body.productID});
    //   if (cartItems) {
    //     res.status(201).json({
    //       newItem_added: cartItems,
    //     });
    //   } else {
        res.status(200).json({
            "context": {
              "domain": "dent:0.1.0",
              "action": "on_search",
              "location": {
                "country": {
                  "name": "India",
                  "code": "IND"
                }
              },
              "city": "std:080",
              "version": "1.1.0",
              "bap_id": "example-bap.com",
              "bap_uri": "https://api.example-bap.com/pilot/bap/energy/v1",
              "bpp_id": "example-bpp.com",
              "bpp_uri": "https://api.example-bpp.com/pilot/bpp/",
              "transaction_id": "6743e9e2-4fb5-487c-92b7-13ba8018f176",
              "message_id": "6743e9e2-4fb5-487c-92b7-13ba8018f176",
              "timestamp": "2023-07-16T04:41:16Z"
            },
            "message": {
              "catalog": {
                "providers": [
                  {
                    "id": "chargezone.in",
                    "descriptor": {
                      "name": "Chargezone",
                      "short_desc": "Chargezone Technologies Pvt Ltd",
                      "images": [
                        {
                          "url": "https://chargezone.in/images/logo.png"
                        }
                      ]
                    },
                    "categories": [
                      {
                        "id": "1",
                        "descriptor": {
                          "code": "green-tariff",
                          "name": "green tariff"
                        }
                      }
                    ],
                    "locations": [
                      {
                        "id": "1",
                        "gps": "12.345345,77.389754"
                      },
                      {
                        "id": "2",
                        "gps": "12.247934,77.876987"
                      }
                    ],
                    "items": [
                      {
                        "id": "pe-charging-01",
                        "descriptor": {
                          "code": "energy"
                        },
                        "price": {
                          "value": "8",
                          "currency": "INR / kWH"
                        },
                        "quantity": {
                          "available": {
                            "measure": {
                              "value": "100",
                              "unit": "kWH"
                            }
                          }
                        },
                        "category_ids": ["1"],
                        "location_ids": ["1", "2"],
                        "fulfillment_ids": ["1", "2"],
                        "add_ons": [
                          {
                            "id": "pe-charging-01-addon-1",
                            "descriptor": {
                              "name": "Free car wash"
                            },
                            "price": {
                              "value": "0",
                              "currency": "INR"
                            }
                          }
                        ]
                      }
                    ],
                    "fulfillments": [
                      {
                        "id": "1",
                        "type": "CHARGING",
                        "stops": [
                          {
                            "type": "start",
                            "time": {
                              "timestamp": "01-06-2023 10:00:00"
                            }
                          },
                          {
                            "type": "end",
                            "time": {
                              "timestamp": "01-06-2023 10:30:00"
                            }
                          }
                        ],
                        "tags": [
                          {
                            "descriptor": {
                              "name": "Charging Point Specifications"
                            },
                            "list": [
                              {
                                "descriptor": {
                                  "name": "Charger type",
                                  "code": "charger-type"
                                },
                                "value": "AC"
                              },
                              {
                                "descriptor": {
                                  "name": "Connector type",
                                  "code": "connector-type"
                                },
                                "value": "CCS2"
                              },
                              {
                                "descriptor": {
                                  "name": "Power Rating"
                                },
                                "value": "greater than 50kW"
                              },
                              {
                                "descriptor": {
                                  "name": "Availability"
                                },
                                "value": "Available"
                              }
                            ],
                            "display": true
                          }
                        ]
                      },
                      {
                        "id": "2",
                        "type": "CHARGING",
                        "stops": [
                          {
                            "type": "start",
                            "time": {
                              "timestamp": "01-06-2023 10:00:00"
                            }
                          },
                          {
                            "type": "end",
                            "time": {
                              "timestamp": "01-06-2023 10:30:00"
                            }
                          }
                        ],
                        "tags": [
                          {
                            "descriptor": {
                              "name": "Charging Point"
                            },
                            "list": [
                              {
                                "descriptor": {
                                  "name": "Charger type"
                                },
                                "value": "AC"
                              },
                              {
                                "descriptor": {
                                  "name": "Connector type"
                                },
                                "value": "CCS2"
                              },
                              {
                                "descriptor": {
                                  "name": "Power Rating"
                                },
                                "value": "greater than 50kW"
                              },
                              {
                                "descriptor": {
                                  "name": "Availability"
                                },
                                "value": "Available"
                              }
                            ],
                            "display": true
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "id": "log9.in",
                    "descriptor": {
                      "name": "Log9 Inc"
                    },
                    "categories": [
                      {
                        "id": "1",
                        "descriptor": {
                          "code": "green-tariff",
                          "name": "green tariff"
                        }
                      }
                    ],
                    "items": [
                      {
                        "id": "pe-charging-01",
                        "descriptor": {
                          "code": "energy"
                        },
                        "price": {
                          "value": "10",
                          "currency": "INR / kWH"
                        },
                        "quantity": {
                          "available": "1000"
                        },
                        "category_ids": ["1"],
                        "fulfillment_ids": ["3", "4"],
                        "add_ons": [
                          {
                            "id": "pe-charging-01-addon-1",
                            "descriptor": {
                              "name": "Free tyre pressure check"
                            },
                            "price": {
                              "value": "0",
                              "currency": "INR"
                            }
                          }
                        ]
                      }
                    ],
                    "fulfillments": [
                      {
                        "id": "3",
                        "type": "BATTERY-SWAP",
                        "stops": [
                          {
                            "location": {
                              "gps": "12.745675, 77.987393"
                            }
                          }
                        ]
                      },
                      {
                        "id": "4",
                        "type": "MOBILE-BATTERY-SWAP",
                        "stops": [
                          {
                            "location": {
                              "url": "https://log9.in/track/bswap/3234242"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            }
          });
    //   }
    // }
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
});



module.exports = CartRoute;
