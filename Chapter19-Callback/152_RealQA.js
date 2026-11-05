loginuser("shashi@gmail.com", "password123", function (loginError, user) {
  if (loginError) {
    console.log("Login failed:", loginError);
    return;
  }
  console.log("user logged in:", user.id);
  getuserprofile(user.id, function (profileerror, profile) {
    if (profileerror) {
      console.log("Failed to get profile:", profileerror);
      return;
    }
    console.log("profile received");
    getuserorders(user.id, function (ordererrors, orders) {
      if (ordererrors) {
        console.log("failed get to orders:", ordererrors);
        return;
      }
      console.log("order received");
      getorderdetails(orders[0].id, function (ordererror, order) {
        if (ordererror) {
          console.log("failed to get order:", ordererror);
          return;
        }
        console.log("orders details received");
        getpaymentDetails(order.paymentid, function (paymenterror, payment) {
          if (paymenterror) {
            console.log("Failed to get payment:", paymenterror);
            return;
          }
          console.log("payment details received");
          getshippingdetails(
            order.shippingid,
            function (shippingerror, shipping) {
              if (shippingerror) {
                console.log("Failed to get shipping:", shippingerror);
                return;
              }
              console.log("shipping details received");
              getproductdetails(
                order.productid,
                function (producterror, product) {
                  if (producterror) {
                    console.log("Failed to get product:", producterror);
                    return;
                  }
                  console.log("Product details received");
                  sendconfirmationemail(
                    user.email,
                    order,
                    payment,
                    shipping,
                    product,
                    function (emailerror, emailresult) {
                      if (emailerror) {
                        console.log("failed to send email:", emailerror);
                        return;
                      }
                      console.log("confirmation email sent");
                      updatenotificationsstatus(
                        user.id,
                        function (notificationerror, result) {
                          if (notificationerror) {
                            console.log(
                              "failed to update notification:",
                              notificationerror,
                            );
                            return;
                          }
                          console.log("notification status updated");
                          generatereport(
                            user,
                            profile,
                            order,
                            payment,
                            shipping,
                            product,
                            function (reporterror, report) {
                              if (reporterror) {
                                console.log(
                                  "failed to generate report:",
                                  reporterror,
                                );
                                return;
                              }
                              console.log("everything completed");
                              console.log(report);
                            },
                          );
                        },
                      );
                    },
                  );
                },
              );
            },
          );
        });
      });
    });
  });
});
