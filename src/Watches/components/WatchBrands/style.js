import styled from "styled-components";

export const BrandsSection = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  color: #ffffff;
  background-color: #343a40;
  padding: 40px 0px;
`;

export const BrandList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  @media (min-width: 810px) {
    margin: 50px 75px 30px 75px;
  }
  @media (max-width: 810px) {
    margin: 50px 20px 30px 20px;
  }
`;
