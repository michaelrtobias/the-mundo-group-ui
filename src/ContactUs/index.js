import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router";
import UploadImage from "./components/UploadImage/index";

const FormWrapper = styled.div`
  border-width: 1rem 1rem 0;
  border-radius: 8px 8px 0 0;
  padding-left: 15px;
  padding-right: 15px;
  border: 0.2rem solid #ececec;
`;
const BorderWrapper = styled.div`
  padding: 10px;
`;

const ContactUs: React.FC = () => {
  const [wishlistEntry, setWishlistEnty] = useState({});
  const [loading, setLoading] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const history = useHistory();

  const addWishlistEntry = () => {
    setLoading(true);
    axios
      .post(
        "https://omv9j6woq7.execute-api.us-east-1.amazonaws.com/dev/wishlist",
        {
          first_name: wishlistEntry.first_name,
          last_name: wishlistEntry.last_name,
          email: wishlistEntry.email,
          phone: wishlistEntry.phone,
          type: wishlistEntry.type,
          make: wishlistEntry.make,
          model: wishlistEntry.model,
          description: wishlistEntry.description,
          image_URL: wishlistEntry.image_URL,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
        history.push("/");
      })
      .catch((e) => {
        console.log(e);
        //setError(true)
        setLoading(false);
      });
  };

  useEffect(() => {
    const isEmailSet = !!wishlistEntry.email;
    const isPhoneSet = !!wishlistEntry.phone;
    setFormValid(isEmailSet && isPhoneSet);
  }, [wishlistEntry]);

  return (
    <BorderWrapper>
      <FormWrapper>
        <h2>Wishlist</h2>
        <p>Please fill out the form below to help us find your next piece</p>
        <Form onSubmit={() => addWishlistEntry()}>
          <Form.Row>
            <Form.Group as={Col} controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={wishlistEntry.first_name || ""}
                placeholder="Enter First Name"
                onChange={(e) =>
                  setWishlistEnty({
                    ...wishlistEntry,
                    first_name: e.target.value,
                  })
                }
              ></Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                value={wishlistEntry.last_name || ""}
                onChange={(e) =>
                  setWishlistEnty({
                    ...wishlistEntry,
                    last_name: e.target.value,
                  })
                }
              ></Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={wishlistEntry.email || ""}
                onChange={(e) =>
                  setWishlistEnty({
                    ...wishlistEntry,
                    email: e.target.value,
                  })
                }
              ></Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Enter Phone Number"
                value={wishlistEntry.phone || ""}
                onChange={(e) =>
                  setWishlistEnty({
                    ...wishlistEntry,
                    phone: e.target.value,
                  })
                }
              ></Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group>
              <Form.Label>What type of goods are you looking for?</Form.Label>
              <Form.Control
                as="select"
                defaultValue="Type..."
                value={wishlistEntry.type || ""}
                onChange={(e) =>
                  setWishlistEnty({
                    ...wishlistEntry,
                    type: e.target.value,
                  })
                }
              >
                <option>Type...</option>
                <option>Watch</option>
                <option>Parts & Accessories</option>
                <option>Diamonds</option>
                <option>Bracelets</option>
                <option>Gold Link</option>
                <option>Belts & Buckels</option>
                <option>Leather Goods</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formMake">
              <Form.Label>Make or Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Make"
                value={wishlistEntry.make || ""}
                onChange={(e) =>
                  setWishlistEnty({
                    ...wishlistEntry,
                    make: e.target.value,
                  })
                }
              ></Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formModel">
              <Form.Label>Model</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Model"
                value={wishlistEntry.model || ""}
                onChange={(e) =>
                  setWishlistEnty({
                    ...wishlistEntry,
                    model: e.target.value,
                  })
                }
              ></Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formDescription">
              <Form.Label>
                Add any extra details about item. Bracelets, Materials, Dials,
                Bezel, etc...
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                value={wishlistEntry.description || ""}
                onChange={(e) =>
                  setWishlistEnty({
                    ...wishlistEntry,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form.Row>
          <Form.Row></Form.Row>

          <UploadImage
            setWishlistEnty={setWishlistEnty}
            {...wishlistEntry}
            loading={loading}
          />
          <Button
            variant="primary"
            type="submit"
            disabled={!formValid || loading}
            onClick={() => addWishlistEntry()}
          >
            Submit
          </Button>
        </Form>
      </FormWrapper>
    </BorderWrapper>
  );
};

export default ContactUs;
