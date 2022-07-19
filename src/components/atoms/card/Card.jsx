import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};
// shadow(影 color x軸の距離 y軸の距離 ぼかし距離 ぼかし拡げ)
// padding(内側の余白)
const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
