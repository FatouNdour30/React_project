
import React from "react";
import {
  MDBContainer,
  MDBBtnGroup,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardFooter,
} from "mdb-react-ui-kit";


export default function AppPricing(){
    return(
        <MDBContainer className="py-5 text-center">
        <h4 className="mb-4">
          <strong>Pricing</strong>
        </h4>
  
        <MDBBtnGroup className="mb-4" aria-label="Basic example">
          <MDBBtn href="#" color="warning" active>
            Monthly billing
          </MDBBtn>
          <MDBBtn color="primary">
            Annual billign <small>(2 months FREE)</small>
          </MDBBtn>
        </MDBBtnGroup>
  
        <MDBRow className="gx-lg-5">
          <MDBCol lg="3" md="6" className="mb-4">
            <MDBCard>
              <MDBCardHeader className="bg-white py-3">
                <p className="text-uppercase small mb-2">
                  <strong>Free</strong>
                </p>
                <h5 className="mb-0">Free</h5>
              </MDBCardHeader>
  
              <MDBCardBody>
                <MDBListGroup flush>
                  <MDBListGroupItem>Feature</MDBListGroupItem>
                  <MDBListGroupItem>Feature</MDBListGroupItem>
                  <MDBListGroupItem>Feature</MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
  
              <MDBCardFooter className="bg-white py-3">
                <MDBBtn color="warning" size="sm">
                  Get it
                </MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
  
          <MDBCol lg="3" md="6" className="mb-4">
            <MDBCard border="primary">
              <MDBCardHeader className="bg-white py-3">
                <p className="text-uppercase small mb-2">
                  <strong>ESSENTIAL</strong>
                </p>
                <h5 className="mb-0">$19/month</h5>
              </MDBCardHeader>
  
              <MDBCardBody>
                <MDBListGroup flush>
                  <MDBListGroupItem>Feature</MDBListGroupItem>
                  <MDBListGroupItem>Feature</MDBListGroupItem>
                  <MDBListGroupItem>Feature</MDBListGroupItem>
                  <MDBListGroupItem>Feature</MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
  
              <MDBCardFooter className="bg-white py-3">
                <MDBBtn color="warning" size="sm">
                  Buy now
                </MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
  
          <MDBCol lg="3" md="6" className="mb-4">
            <MDBCard>
              <MDBCardHeader className="bg-white py-3">
                <p className="text-uppercase small mb-2">
                  <strong>ADVANCED</strong>
                </p>
                <h5 className="mb-0">$49/month</h5>
              </MDBCardHeader>
  
              <MDBCardBody>
                <MDBListGroup flush>
                  <MDBListGroupItem>Feature</MDBListGroupItem>
                  <MDBListGroupItem>Feature</MDBListGroupItem>
                  <MDBListGroupItem>Feature</MDBListGroupItem>
                  <MDBListGroupItem>Feature</MDBListGroupItem>
                  <MDBListGroupItem>Feature</MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
  
              <MDBCardFooter className="bg-white py-3">
                <MDBBtn color="warning" size="sm">
                  Buy now
                </MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
  
          <MDBCol lg="3" md="6" className="mb-4">
            <MDBCard>
              <MDBCardHeader className="bg-white py-3">
                <p className="text-uppercase small mb-2">
                  <strong>ENTERPRISE</strong>
                </p>
                <h5 className="mb-0">$189/month</h5>
              </MDBCardHeader>
  
              <MDBCardBody>
                <MDBListGroup flush>
                  <MDBListGroupItem>Feature</MDBListGroupItem>
                  <MDBListGroupItem>Feature</MDBListGroupItem>
                  <MDBListGroupItem>Feature</MDBListGroupItem>
                  <MDBListGroupItem>Feature</MDBListGroupItem>
                  <MDBListGroupItem>Feature</MDBListGroupItem>
                  <MDBListGroupItem>Feature</MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
  
              <MDBCardFooter className="bg-white py-3">
                <MDBBtn color="warning" size="sm">
                  Buy now
                </MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>  
    )
}