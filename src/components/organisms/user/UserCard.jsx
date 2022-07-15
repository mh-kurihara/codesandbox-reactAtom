import styled from "styled-components";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <div>
      <img
        height={160}
        width={160}
        src="https://source.unsplash.com/NE0XGVKTmcA"
        alt="Profile"
      />

      <p>名前</p>
      <SDl>
        <dt>メール</dt>
        <dd>xxx@aaa.com</dd>
        <dt>TEL</dt>
        <dd>03-0000-0000</dd>
        <dt>会社名</dt>
        <dd>●●商事</dd>
        <dt>WEB</dt>
        <dd>fff.com</dd>
      </SDl>
    </div>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
  }
`;
