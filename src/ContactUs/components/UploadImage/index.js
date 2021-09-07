import React, { useState, useEffect } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function UploadImage(Props: UploadButtonProps) {
  const [URL, setUrl] = useState("");
  const [success, setSuccess] = useState(false);
  const [uploadInput, setUploadInput] = useState([]);
  const [loading, setLoading] = useState(false);

  const [fileSelected, setFileSelected] = useState(false);

  const handleFileSelected = (files: any) => {
    setUploadInput(files);
    setFileSelected(true);
  };

  const uploadImage = () => {
    var file = uploadInput[0];
    console.log("file:");
    console.log(file);
    var fileParts = uploadInput[0].name.split(".");
    console.log("file parts: " + fileParts);
    var fileName = fileParts[0];
    console.log("filename: " + fileName);
    var fileType = fileParts[1];
    console.log("file type: " + fileType);

    let headersConfig = {
      headers: {
        "Content-Type": file.type,
      },
    };
    console.log("Preparing the upload");
    axios
      .post(
        "https://omv9j6woq7.execute-api.us-east-1.amazonaws.com/dev/wishlist/images",
        {
          fileName: file.name,
          fileType: file.type,
        },
        headersConfig
      )
      .then((response) => {
        var returnedData = response.data;
        var signedRequest = returnedData.signedRequest;
        var url = returnedData.url;
        setUrl(url);
        console.log("Recieved a signed request " + signedRequest);
        var options = {
          headers: {
            "Content-Type": file.type,
          },
        };
        axios
          .put(signedRequest, file, options)
          .then((result) => {
            console.log("Response from s3");
            setSuccess(true);
            alert("upload successful");
          })
          .then(() => {
            Props.setWishlistEnty({
              ...Props.wishlistEntry,
              image_URL: url,
            });
          })
          .catch((error) => {
            throw error;
          });
      })
      .catch((err) => {
        throw err;
      });
  };
  return (
    <div>
      <Container>
        <Form.Row>
          <Col md={4}>
            <Form.Group as={Col} controlId="formMake">
              <Form.File
                id="productFormImageUplaod"
                label="Upload an image of product"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleFileSelected(e.target.files);
                }}
              ></Form.File>
              <Form.Control.Feedback type="valid">
                You did it!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={{ span: 5, offset: 1 }}>
            <Button
              variant="primary"
              type="button"
              disabled={!fileSelected || loading}
              onClick={(e) => {
                e.preventDefault();
                uploadImage();
              }}
            >
              Upload Image
            </Button>
          </Col>
        </Form.Row>
      </Container>{" "}
    </div>
  );
}
