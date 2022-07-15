import styled from "styled-components";

export const UserCard = () => {
  return (
    <div>
      <img
        height={160}
        width={160}
        src="https://source.unsplash.com/NE0XGVKTmcA"
        alt="Profile"
      />

      <p>名前</p>
      <dl>
        <dt>メール</dt>
        <dd>xxx@aaa.com</dd>
        <dt>TEL</dt>
        <dd>03-0000-0000</dd>
        <dt>会社名</dt>
        <dd>●●商事</dd>
        <dt>WEB</dt>
        <dd>fff.com</dd>
      </dl>
    </div>
  );
};

const SDl = styled.dl`
  text-align: left;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
  }
`;
