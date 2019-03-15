import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Checkbox from "@material-ui/core/Checkbox";
//import "./index.css";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  logo: {
    width: "100px",
    height: "70px",
    display: "block",
    margin: "0 auto",
    float: "left",
    paddingRight: "50px",
    [theme.breakpoints.down("xs")]: {
      paddingRight: "10px"
    }
  },
  checkoutHeader: {
    fontSize: "30px",
    color: "#333333",
    [theme.breakpoints.down("xs")]: {
      whiteSpace: "nowrap",
      marginTop: "15px"
    }
  },
  securedCheckout: {
    fontSize: "30px",
    color: "#333333",
    [theme.breakpoints.down("xs")]: {
      whiteSpace: "nowrap",
      paddingTop: "15px"
    }
  },
  paymentHeader: {
    fontSize: "30px",
    color: "#333333",
    [theme.breakpoints.down("xs")]: {
      whiteSpace: "nowrap",
      marginTop: "-20px"
    }
  },

  paddingTop30: {
    padding: "30px 0 0 0"
  },
  addressDetails: {
    marginTop: "20px"
  },
  InputText: {
    width: "100%",
    height: "45px",
    marginTop: "0px",
    margin: "0px 0px 10px 0px"
  },
  InputFirstLastName: {
    width: "100%",
    height: "45px",
    marginTop: "0px",
    margin: "0px 0px 10px 0px",
    [theme.breakpoints.down("sm")]: {
      width: "98%"
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },
  InputTextError: {
    width: "100%",
    height: "45px",
    marginTop: "0px",
    margin: "0px 0px 10px 0px",
    borderBottom: "solid 3px red",
    borderRadius: "5px"
  },
  marginTop5: {
    marginTop: "5px"
  },
  marginTop10: {
    marginTop: "10px"
  },
  marginTop15: {
    marginTop: "15px"
  },
  marginTop40: {
    marginTop: "40px"
  },
  rightNav: {
    backgroundColor: "#e6e6e6",
    width: "100%",
    height: "99%",
    padding: "25px",
    marginTop: "30px",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  bgColorWhite: {
    backgroundColor: "white"
  },
  gridCartItem: {
    backgroundColor: "white",
    padding: "10px"
  },
  gridShipping: {
    backgroundColor: "white",
    padding: "10px",
    marginTop: "20px"
  },
  gridCartHeat: {
    fontSize: "18px",
    color: "#333333"
  },
  gridCartLabel: {
    width: "50%",
    float: "left"
  },
  txtAlignRight: {
    textAlign: "right"
  },
  btnStyle: {
    textTransform: "uppercase",
    backgroundColor: "#0084CD",
    borderRadius: "5px",
    width: "50%",
    margin: "30px 0px 0px 0px",
    fontSize: "12px",
    boxShadow: "none",
    outline: "none",
    color: "#fff",
    border: "none",
    fontWeight: "400",
    fill: "#000",
    "&:hover": {
      backgroundColor: "#0084CD"
    },
    [theme.breakpoints.down("sm")]: {
      whiteSpace: "nowrap",
      width: "100%"
    }
  },
  PlaceOrderBtn: {
    textTransform: "uppercase",
    backgroundColor: "gray",
    borderRadius: "5px",
    width: "68%",
    margin: "30px 0px 0px 0px",
    fontSize: "12px",
    boxShadow: "none",
    outline: "none",
    color: "#fff",
    border: "none",
    fontWeight: "400",
    fill: "#000",
    "&:hover": {
      backgroundColor: "#0084CD"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  },
  radioBtn: {
    height: "30px"
  },
  selectDropDown: {
    width: "100%",
    height: "45px"
  },
  marginLeft10: {
    marginLeft: "10px"
  },
  yearSelect: {
    marginTop: "21px",
    marginLeft: "10px"
  },
  LinkColor: {
    color: "#0088cc",
    fontSize: "14px"
  },
  FirstNamePad: {
    paddingRight: "20px",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0px"
    }
  },
  btnDisabled: {
    opacity: "0.65",
    cursor: "not-allowed",
    textTransform: "uppercase",
    backgroundColor: "gray",
    borderRadius: "5px",
    width: "68%",
    margin: "30px 0px 0px 0px",
    fontSize: "12px",
    boxShadow: "none",
    outline: "none",
    color: "#fff",
    border: "none",
    fontWeight: "400",
    fill: "#000",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  checkoutContainer: {
    marginTop: "30px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px"
    }
  },

  btnViewCart: {
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left"
    }
  },
  shippingHead: {
    paddingTop: "30px",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0px"
    }
  },
  zipCode1: {
    marginTop: "40px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "30px"
    }
  }
});

const AuthUserCheckout = props => {
  const { classes, history, cartItems } = props;

  const orderItems = cartItems ? cartItems.orderItems : "";

  const [totalQuantity, setTotalQuantity] = useState();
  const [totalPrice, setTotalTotalPrice] = useState();

  useEffect(() => {
    if (orderItems) {
      let count = 0;
      let price = 0;
      orderItems.forEach(item => {
        count = count + item.quantity;
        price = price + item.price;
      });

      setTotalQuantity(count);
      setTotalTotalPrice(price);
    }
  });

  const [guestEmail, setguestEmail] = useState("");
  const [errorGuestEmail, setErrorGuestEmail] = useState("");

  const [fName, setFName] = useState("");
  const [errorFName, setErrorFName] = useState("");

  const [lName, setLName] = useState("");
  const [errorLName, setErrorLName] = useState("");

  const [phone, setphone] = useState("");
  const [errorPhone, setErrorPhone] = useState("");

  const [shipping, setShipping] = useState("");
  const [errorShipping, setErrorShipping] = useState("");

  const handleguestEmail = value => {
    setguestEmail(value);
  };
  const handleFName = value => {
    setFName(value);
  };
  const handleLName = value => {
    setLName(value);
  };
  const handlePhone = value => {
    setphone(value);
  };

  const handleShipping = value => {
    setShipping(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (guestEmail.length === 0) {
      setErrorGuestEmail("Please enter your email address");
    } else {
      setErrorGuestEmail("");
    }

    if (fName.length === 0) {
      setErrorFName("Please enter your first name");
    } else {
      setErrorFName("");
    }

    if (lName.length === 0) {
      setErrorLName("Please enter your last name");
    } else {
      setErrorLName("");
    }

    if (phone.length === 0) {
      setErrorPhone("Please enter your phone number");
    } else {
      setErrorPhone("");
    }

    if (shipping.length === 0) {
      setErrorShipping("Please enter shipping address");
    } else {
      setErrorShipping("");
    }
  };

  let userInfo = JSON.parse(localStorage.getItem("userData1"));
  const orderId = cartItems && cartItems.orderId ? cartItems.orderId : 0;
  const memberId = userInfo && userInfo.userLogedId ? userInfo.userLogedId : 0;
  const addressId = userInfo && userInfo.addressId ? userInfo.addressId : 0;

  const checkoutCart = () => {
    if (memberId == 0) {
      props.checkout({
        orderId: orderId,
        email: guestEmail,
        addressId: addressId
      });
    } else {
      props.checkout({
        orderId: orderId,
        memberId: memberId,
        addressId: addressId
      });
    }
  };

  const [monthExpir, setMonthExpir] = useState("");
  const [yearExpir, setYearExpir] = useState("");
  const [btnEnabled, setBtnEnabled] = useState(false);

  const [cardNum, setCardNum] = useState("");
  const handleCardNum = value => {
    setCardNum(value);
  };
  const [cvvNum, setCvvNum] = useState("");
  const handleCVV = value => {
    setCvvNum(value);
  };

  const [cardType, setCardType] = useState("");
  const selectCardType = value => {
    setCardType(value);
  };
  const handleMonthChange = event => {
    const val = event.target.value;
    setMonthExpir(val);
  };
  const handleYearChange = event => {
    const val = event.target.value;
    setYearExpir(val);
  };

  const enabledBtn =
    cardNum != "" &&
    monthExpir != "" &&
    yearExpir != "" &&
    cvvNum != "" &&
    cardType != ""
      ? true
      : false;

  const Months = [
    { month: "01 - January", Value: "1" },
    { month: "02 - February", Value: "2" },
    { month: "03 - March", Value: "3" },
    { month: "04 - April", Value: "4" },
    { month: "05 - May", Value: "5" },
    { month: "06 - June", Value: "6" },
    { month: "07 - July", Value: "7" },
    { month: "08 - August", Value: "8" },
    { month: "09 - September", Value: "9" },
    { month: "10 - October", Value: "10" },
    { month: "11 - November", Value: "11" },
    { month: "12 - December", Value: "12" }
  ].map(months => (
    <MenuItem
      key={months.Value}
      value={months.month}
      style={{ height: "10px" }}
    >
      {months.month}
    </MenuItem>
  ));

  const Years = [
    { year: "2019", Value: "2019" },
    { year: "2020", Value: "2020" },
    { year: "2021", Value: "2021" },
    { year: "2022", Value: "2022" },
    { year: "2023", Value: "2023" },
    { year: "2024", Value: "2024" },
    { year: "2025", Value: "2025" },
    { year: "2026", Value: "2026" }
  ].map(years => (
    <MenuItem key={years.Value} value={years.Value} style={{ height: "10px" }}>
      {years.year}
    </MenuItem>
  ));

  return (
    <>
      <div style={{ padding: "10px" }}>
        <div className={classes.checkoutContainer}>
        <Link to="/">
          <img
            src="/assets/images/logo.png"
            alt="logo"
            className={classes.logo}
          />
          </Link>
          <Typography className={classes.securedCheckout}>
            Secure Checkout
          </Typography>
        </div>

        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item lg={8} sm={8} xs={12}>
              <Grid cotainer>
                <form onSubmit={handleSubmit}>
                  {memberId == 0 ? (
                    <div>
                      <div className={classes.shippingHead}>
                        <Typography className={classes.checkoutHeader}>
                          Shipping
                        </Typography>
                        <Divider
                          variant="left"
                          style={{ backgroundColor: "#bfbfbf" }}
                        />
                      </div>
                      <div
                        className={classes.paddingTop30}
                        style={{ width: "95%" }}
                      >
                        <Grid item lg={12} sm={12} xs={12}>
                          <Grid container>
                            <Grid
                              item
                              lg={6}
                              sm={6}
                              xs={12}
                              className={classes.FirstNamePad}
                            >
                              <div>
                                <Typography>First Name :</Typography>
                              </div>
                              <div className="marginTop10">
                                <TextField
                                  id="outlined-name"
                                  label=""
                                  className={classes.InputFirstLastName}
                                  margin="normal"
                                  variant="outlined"
                                  placeholder="Enter First Name"
                                  value={fName.fName}
                                  onChange={e => handleFName(e.target.value)}
                                />
                              </div>
                              <div>
                                {errorFName && (
                                  <div className="errorCheckout">
                                    {errorFName}
                                  </div>
                                )}
                              </div>
                            </Grid>
                            <Grid item lg={6} sm={6} xs={12}>
                              <div>
                                <Typography>Last Name :</Typography>
                              </div>
                              <div className="marginTop10">
                                <TextField
                                  id="outlined-name"
                                  label=""
                                  className={classes.InputText}
                                  margin="normal"
                                  variant="outlined"
                                  placeholder="Enter Last Name"
                                  value={lName.lName}
                                  onChange={e => handleLName(e.target.value)}
                                />
                              </div>
                              <div>
                                {errorLName && (
                                  <div className="errorCheckout">
                                    {errorLName}
                                  </div>
                                )}
                              </div>
                            </Grid>
                            <Grid
                              item
                              lg={12}
                              sm={12}
                              xs={12}
                              className={classes.marginTop15}
                            >
                              <div>
                                <Typography>Email Address :</Typography>
                              </div>
                              <div className="marginTop10">
                                <TextField
                                  id="outlined-name"
                                  label=""
                                  className={classes.InputText}
                                  margin="normal"
                                  variant="outlined"
                                  type="email"
                                  placeholder="Enter Email Address"
                                  value={guestEmail.guestEmail}
                                  onChange={e =>
                                    handleguestEmail(e.target.value)
                                  }
                                />
                              </div>
                              <div>
                                {errorGuestEmail && (
                                  <div className="errorCheckout">
                                    {errorGuestEmail}
                                  </div>
                                )}
                              </div>
                            </Grid>
                            <Grid
                              item
                              lg={12}
                              sm={12}
                              xs={12}
                              className={classes.marginTop15}
                            >
                              <div>
                                <Typography>Phone Number :</Typography>
                              </div>
                              <div className="marginTop10">
                                <TextField
                                  id="outlined-name"
                                  label=""
                                  className={classes.InputText}
                                  margin="normal"
                                  variant="outlined"
                                  type="number"
                                  placeholder="Enter Phone Number"
                                  value={phone.phone}
                                  onChange={e => handlePhone(e.target.value)}
                                />
                              </div>
                              <div>
                                {errorPhone && (
                                  <div className="errorCheckout">
                                    {errorPhone}
                                  </div>
                                )}
                              </div>
                            </Grid>

                            <Grid
                              item
                              lg={12}
                              sm={12}
                              xs={12}
                              className={classes.marginTop15}
                            >
                              <div>
                                <Typography>Shipping Address :</Typography>
                              </div>
                              <div className="marginTop10">
                                <TextField
                                  id="outlined-name"
                                  label=""
                                  className={classes.InputText}
                                  margin="normal"
                                  variant="outlined"
                                  placeholder="Enter Shipping Address"
                                  value={shipping.shipping}
                                  onChange={e => handleShipping(e.target.value)}
                                />
                              </div>
                              <div>
                                {errorShipping && (
                                  <div className="errorCheckout">
                                    {errorShipping}
                                  </div>
                                )}
                              </div>
                            </Grid>

                            <Grid
                              item
                              lg={12}
                              sm={12}
                              xs={12}
                              className={classes.marginTop15}
                            >
                              <Grid container>
                                <Grid item lg={4} sm={4} xs={6}>
                                  <div>
                                    <Typography>ZIP Code:</Typography>
                                  </div>
                                  <div className="marginTop10">
                                    <TextField
                                      id="outlined-name"
                                      label=""
                                      className={classes.InputText}
                                      margin="normal"
                                      variant="outlined"
                                      placeholder=""
                                    />
                                  </div>
                                  <div
                                    style={{
                                      marginLeft: "-15px",
                                      whiteSpace: "nowrap"
                                    }}
                                  >
                                    <Checkbox
                                      checked
                                      value="checkedB"
                                      color="primary"
                                    />
                                    Use as Billing Address
                                  </div>
                                </Grid>
                                <Grid
                                  item
                                  lg={8}
                                  sm={8}
                                  xs={6}
                                  style={{ height: "100px" }}
                                >
                                  <div className={classes.zipCode1}>
                                    <Typography
                                      className={classes.marginLeft10}
                                    >
                                      Enter ZIP code to see products
                                      availability
                                    </Typography>
                                  </div>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className={classes.paddingTop30}>
                    <Typography className={classes.paymentHeader}>
                      Payment
                    </Typography>
                    <Divider
                      variant="left"
                      style={{ backgroundColor: "#bfbfbf" }}
                    />
                  </div>
                  <div className={classes.marginTop15}>
                    <FormControl component="fieldset">
                      <RadioGroup aria-label="payment" name="payment">
                        <FormControlLabel
                          onChange={e => selectCardType(e.target.value)}
                          className={classes.radioBtn}
                          value="Credit card"
                          control={<Radio color="default" fontSize="small" />}
                          label="Credit Card"
                        />
                        <FormControlLabel
                          onChange={e => selectCardType(e.target.value)}
                          className={classes.radioBtn}
                          value="Debit card"
                          control={<Radio color="default" />}
                          label="Debit Card"
                        />
                        <FormControlLabel
                          onChange={e => selectCardType(e.target.value)}
                          className={classes.radioBtn}
                          value="PayPal"
                          control={<Radio color="default" />}
                          label="PayPal"
                        />
                        <FormControlLabel
                          onChange={e => selectCardType(e.target.value)}
                          className={classes.radioBtn}
                          value="Pay on delivery"
                          control={<Radio color="default" />}
                          label="Pay On Delivery"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>

                  <Grid
                    item
                    lg={8}
                    sm={8}
                    xs={12}
                    className={classes.marginTop15}
                  >
                    <TextField
                      id="cardNumber"
                      label=""
                      className={classes.InputText}
                      margin="normal"
                      variant="outlined"
                      placeholder="Enter card number"
                      onChange={e => handleCardNum(e.target.value)}
                    />
                  </Grid>
                  <Grid item lg={12} sm={12} xs={12}>
                    <Grid container>
                      <Grid item lg={4} sm={4} xs={4}>
                        <Typography>Expiration</Typography>
                        <FormControl
                          variant="outlined"
                          className={classes.selectDropDown}
                        >
                          <Select
                            value={monthExpir}
                            onChange={handleMonthChange}
                            input={<OutlinedInput name="month" id="month" />}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {Months}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid
                        item
                        lg={4}
                        sm={4}
                        xs={4}
                        className={classes.yearSelect}
                      >
                        <Typography />
                        <FormControl
                          variant="outlined"
                          className={classes.selectDropDown}
                        >
                          <Select
                            value={yearExpir}
                            onChange={handleYearChange}
                            input={<OutlinedInput name="year" id="year" />}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {Years}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid
                        item
                        lg={3}
                        sm={3}
                        xs={3}
                        className={classes.marginLeft10}
                      >
                        <Typography>CVV</Typography>
                        <TextField
                          id="cvv"
                          label=""
                          className={classes.InputText}
                          margin="normal"
                          variant="outlined"
                          placeholder="CVV"
                          onChange={e => handleCVV(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item lg={12} sm={12} xs={12}>
                    <Checkbox
                      defaultChecked
                      color="default"
                      value="checkedG"
                      style={{ paddingLeft: "0px" }}
                    />
                    Yes, I'd like sign up
                  </Grid>
                  <Grid item lg={12} sm={12} xs={12}>
                    <Link className={classes.LinkColor}>
                      Gift Card, Promotional Code or Voucher
                    </Link>
                  </Grid>
                  <Grid item lg={12} sm={12} xs={12}>
                    <Button
                      type="submit"
                      className={
                        enabledBtn ? classes.PlaceOrderBtn : classes.btnDisabled
                      }
                      onClick={enabledBtn ? () => checkoutCart() : null}
                    >
                      Place Order
                    </Button>
                  </Grid>
                </form>
              </Grid>
            </Grid>

            <Grid item lg={4} sm={4} xs={12}>
              <div className={classes.rightNav}>
                <Grid container>
                  <Grid
                    item
                    lg={12}
                    sm={12}
                    xs={12}
                    className={classes.gridCartItem}
                  >
                    <div>
                      <Typography className={classes.gridCartHeat}>
                        <strong>Your Cart Items </strong>
                      </Typography>
                      <Divider
                        variant="left"
                        style={{ backgroundColor: "#bfbfbf" }}
                      />
                    </div>
                    <div className={classes.marginTop15}>
                      <Typography className={classes.gridCartLabel}>
                        Total Items in your cart
                      </Typography>
                      <Typography className={classes.txtAlignRight}>
                        {" "}
                        <strong>{totalQuantity ? totalQuantity : 0}</strong>
                      </Typography>
                    </div>
                    <div className={classes.marginTop15}>
                      <Typography className={classes.gridCartLabel}>
                        Total Cart Value
                      </Typography>
                      <Typography className={classes.txtAlignRight}>
                        {" "}
                        <strong>${totalPrice ? totalPrice : 0}</strong>
                      </Typography>
                    </div>
                    <div className={classes.marginTop15}>
                      <Typography className={classes.gridCartLabel}>
                        Discount{" "}
                      </Typography>
                      <Typography className={classes.txtAlignRight}>
                        {" "}
                        <strong>---</strong>
                      </Typography>
                    </div>
                    <div className={classes.marginTop10}>
                      <Divider
                        variant="left"
                        style={{ backgroundColor: "#bfbfbf" }}
                      />
                    </div>
                    <div className={classes.marginTop15}>
                      <Typography className={classes.gridCartLabel}>
                        <strong>Sub total</strong>{" "}
                      </Typography>
                      <Typography className={classes.txtAlignRight}>
                        {" "}
                        <strong>${totalPrice ? totalPrice : 0}</strong>
                      </Typography>
                    </div>
                    <div className={classes.btnViewCart}>
                      <Button
                        className={classes.btnStyle}
                        onClick={() => history.push("/Cart")}
                      >
                        View Cart
                      </Button>
                    </div>
                  </Grid>

                  <Grid
                    item
                    lg={12}
                    sm={12}
                    xs={12}
                    className={classes.gridShipping}
                  >
                    <div>
                      <Typography className={classes.gridCartHeat}>
                        <strong>Shipping Address </strong>
                      </Typography>
                      <Divider
                        variant="left"
                        style={{ backgroundColor: "#bfbfbf" }}
                      />
                    </div>
                    <div className={classes.marginTop15}>
                      <Typography>Address Line 1 </Typography>
                      <Typography> Address Line 2 </Typography>
                      <Typography> Address Line 3 </Typography>
                    </div>
                    <div className={classes.btnViewCart}>
                      <Button className={classes.btnStyle}>
                        Edit Shipping Address
                      </Button>
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={12}
                    sm={12}
                    xs={12}
                    className={classes.gridShipping}
                  >
                    <div>
                      <Typography className={classes.gridCartHeat}>
                        <strong>Need Help? </strong>
                      </Typography>
                      <Divider
                        variant="left"
                        style={{ backgroundColor: "#bfbfbf" }}
                      />
                    </div>
                    <div className={classes.marginTop15}>
                      <Typography> See ouronline FAQs or phone us:</Typography>
                      <Typography>
                        Online Customer Support:1-800-000-0000
                      </Typography>
                      <Typography>Major Appliances:1-000-000-0000 </Typography>
                      <Typography>Custom Blinds:1-800-000-0000 </Typography>
                      <Typography>
                        Call 7 days a week - 6 a.m. to 2 a.m. EST
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default withRouter(withStyles(styles)(AuthUserCheckout));
