import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  margin-top: 50px;
`;

export const Repository = styled.div`
  display: flex;
  flex-direction: column;

  width: 250px;
  background: #fff;
  border-radius: 3px;
  margin: 0 10px;

  header {
    display: flex;
    flex-direction: column;

    padding: 30px;
    align-items: center;

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }

    img {
      width: 64px;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background: #f5f5f5;
      }
    }
  }
`;

// export default Container;
